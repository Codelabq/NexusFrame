"use client";

import { useEffect, useRef } from "react";

/**
 * WebGL shader background.
 *
 * Ported verbatim from the vanilla <script> at the bottom of code.html.
 * Renders a subtle pulsing grid effect using a fragment shader on a
 * fullscreen <canvas>. Lives behind all hero content via -z-10.
 */
export default function WebGLBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      (canvas.getContext("webgl") as WebGLRenderingContext | null) ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);
    if (!gl) return;

    // ── Resize handling ────────────────────────────────────────
    const resizeCanvas = () => {
      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;
      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // ── Shader sources (copied from code.html) ─────────────────
    const vsSource = `
      attribute vec4 aVertexPosition;
      attribute vec2 aTextureCoord;
      varying vec2 v_texCoord;
      void main() {
        gl_Position = aVertexPosition;
        v_texCoord = aTextureCoord;
      }
    `;

    const fsSource = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      varying vec2 v_texCoord;

      void main() {
        vec2 uv = v_texCoord;

        // Create a subtle grid pulse effect
        float grid_size = 50.0;
        vec2 grid = fract(uv * u_resolution / grid_size);
        float line = step(0.98, grid.x) + step(0.98, grid.y);

        // Distance from center for radial pulse
        float dist = distance(uv, vec2(0.5));
        float pulse = sin(u_time * 0.5 - dist * 5.0) * 0.5 + 0.5;

        // Combine grid with pulse and base color
     // Pure Black background
vec3 base_color = vec3(0.0, 0.0, 0.0); 

// Pure White grid and pulse
vec3 accent_color = vec3(1.0, 1.0, 1.0); 

// Removed the * 0.2 dampening on the accent color and increased the pulse multiplier to 0.8
vec3 final_color = mix(base_color, accent_color, line * pulse * 0.8);

gl_FragColor = vec4(final_color, 1.0);
      }
    `;

    // ── Compile helpers ────────────────────────────────────────
    const loadShader = (
      glCtx: WebGLRenderingContext,
      type: number,
      source: string
    ): WebGLShader | null => {
      const shader = glCtx.createShader(type);
      if (!shader) return null;
      glCtx.shaderSource(shader, source);
      glCtx.compileShader(shader);
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        console.error(
          "An error occurred compiling the shaders: " +
            glCtx.getShaderInfoLog(shader)
        );
        glCtx.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vertexShader || !fragmentShader) return;

    // ── Program ────────────────────────────────────────────────
    const shaderProgram = gl.createProgram();
    if (!shaderProgram) return;
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
      console.error(
        "Unable to initialize the shader program: " +
          gl.getProgramInfoLog(shaderProgram)
      );
      return;
    }

    gl.useProgram(shaderProgram);

    // ── Buffers (a quad covering the canvas) ───────────────────
    const positions = [
      -1.0, 1.0, 1.0, 1.0, -1.0, -1.0, 1.0, -1.0,
    ];
    const textureCoords = [
      0.0, 1.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0,
    ];

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array(positions),
      gl.STATIC_DRAW
    );

    const texCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array(textureCoords),
      gl.STATIC_DRAW
    );

    const vertexPosition = gl.getAttribLocation(
      shaderProgram,
      "aVertexPosition"
    );
    gl.enableVertexAttribArray(vertexPosition);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.vertexAttribPointer(vertexPosition, 2, gl.FLOAT, false, 0, 0);

    const textureCoord = gl.getAttribLocation(shaderProgram, "aTextureCoord");
    gl.enableVertexAttribArray(textureCoord);
    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
    gl.vertexAttribPointer(textureCoord, 2, gl.FLOAT, false, 0, 0);

    // ── Uniforms ───────────────────────────────────────────────
    const uTimeLoc = gl.getUniformLocation(shaderProgram, "u_time");
    const uResolutionLoc = gl.getUniformLocation(
      shaderProgram,
      "u_resolution"
    );

    // ── Render loop ────────────────────────────────────────────
    let rafId = 0;
    const render = (now: number) => {
      const t = now * 0.001; // convert ms → seconds
      resizeCanvas();

      gl.clearColor(0.0, 0.0, 0.0, 0.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.uniform1f(uTimeLoc, t);
      gl.uniform2f(uResolutionLoc, canvas.width, canvas.height);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      rafId = requestAnimationFrame(render);
    };
    rafId = requestAnimationFrame(render);

    // ── Cleanup ────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden opacity-80">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
        aria-hidden="true"
      />
    </div>
  );
}
