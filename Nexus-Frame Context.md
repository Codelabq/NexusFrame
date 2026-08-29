# NexusFrame — Project Context

> This document is the current source of truth for understanding the NexusFrame project.
> Any older architecture, folder structure, or implementation assumptions should be considered obsolete unless explicitly reintroduced.
>
> The project has evolved from a separated Engine Core + UI System architecture into a single integrated Next.js application where the Engine is implemented as internal project modules.

---

# 1. Project Overview

## NexusFrame

NexusFrame is a platform that allows users to connect arbitrary APIs to predefined UI templates.

The user should be able to:

1. Enter or configure an API endpoint.
2. Fetch and inspect the API response.
3. Choose a suitable category.
4. Browse available templates for that category.
5. Select a template.
6. Configure mappings between template fields and API data paths.
7. Validate the mappings.
8. Resolve the mapped API data.
9. Preview the selected template using real API data.

The system is intended to make arbitrary API responses usable inside predefined frontend templates without requiring the user to manually build the UI.

---

# 2. Current Architecture

## Important Architectural Change

The previous architecture treated the project as two major independent systems:

- Engine Core
- UI System

That architecture is NO LONGER the current architecture.

The current project is a single Next.js + TypeScript application.

The Engine is now integrated directly into the project as internal modules.

There is no longer a need to maintain three top-level isolated systems such as:

- Engine Core
- UI System
- Shared

Do NOT recreate this old separation unless explicitly requested.

The current philosophy is:

> One application, with the Engine implemented as internal modules that support the application's pages and components.

This keeps the project simpler and avoids unnecessary architectural overhead.

---

# 3. Technology Stack

Current application:

- Next.js
- React
- TypeScript
- App Router
- CSS / project-specific styling
- ESLint
- Manually implemented templates

The entire application is TypeScript-based.

Do NOT assume that the UI is JavaScript-only.

Do NOT assume that the Engine is a standalone framework-free package.

The Engine is part of the same Next.js project.

---

# 4. Current Application Structure

The current project follows a simple Next.js-oriented structure.

Conceptually:

src/
├── app/
│   ├── page.tsx
│   ├── studio/
│   │   └── page.tsx
│   └── preview/
│       └── page.tsx
│
├── components/
│   ├── landing/
│   ├── studio/
│   └── preview/
│
├── engine/
│   ├── fetching/
│   ├── mapping/
│   ├── validation/
│   ├── resolve/
│   └── index.ts
│
├── templates/
│   └── ...
│
├── types/
│   └── ...
│
└── lib/
    └── ...

Additional standard Next.js project files exist outside src/ such as:

- package.json
- tsconfig.json
- next.config.ts
- eslint.config.mjs
- public/
- etc.

The exact internal files may evolve during implementation, but the architectural responsibilities described below should remain consistent.

---

# 5. Application Routes

The application currently has three main user-facing routes.

## 5.1 Landing Page

Route:

/

Purpose:

The landing page introduces NexusFrame.

It is a normal product landing page explaining the platform and providing the entry point into the application.

It should NOT contain the main Engine logic.

---

## 5.2 Studio Page

Route:

/studio

Purpose:

The Studio is where the user explores and selects templates.

The Studio receives or works with the category selected by the user and displays the templates that belong to that category.

Conceptual flow:

Landing
    ↓
Studio
    ↓
Select category
    ↓
Browse templates
    ↓
Select template
    ↓
Preview

The Studio is primarily responsible for template/category selection and related UI.

It should not become the location for the core fetching/mapping/validation/resolve implementation.

---

## 5.3 Preview Page

Route:

/preview

Purpose:
The Preview page is the main runtime workspace where the selected template is connected to API data.

This is the most important application page from an Engine perspective.

The Preview page is responsible for orchestrating the interaction between:

- API data
- Mapping
- Validation
- Resolve
- Selected template
- Template rendering

The Preview page should act as an orchestration/integration layer rather than becoming a giant file containing every piece of Engine logic.

---

# 6. Engine

The Engine is integrated inside the same Next.js application.

It is located conceptually under:

src/engine/

The Engine is not a separate application.

It is not a separately deployed service.

It is not a separate top-level project.

It contains reusable logic used by the application.

Current major Engine modules:

- Fetching
- Mapping
- Validation
- Resolve

Other internal modules may be introduced when they represent a real responsibility, but avoid creating abstractions or folders without a concrete need.

---

# 7. API Fetching System

The API Fetching System is responsible for handling communication with user-provided APIs.

Its responsibilities include, depending on the implementation:

- Accepting an API URL/configuration.
- Validating the URL when appropriate.
- Performing the HTTP request.
- Handling HTTP responses.
- Detecting failed requests.
- Parsing JSON responses.
- Returning usable API data.
- Providing useful errors when fetching fails.

The fetching system should remain independent from template-specific rendering.

The fetching system should not contain UI rendering logic.

The fetching system is part of the Engine.

---

# 8. API Explorer / API Data Inspection

NexusFrame needs to allow the user to inspect API response data and understand its structure.

The API response may contain:

- Objects
- Nested objects
- Arrays
- Strings
- Numbers
- Booleans
- Null values
- Nested combinations of the above

The user needs to be able to identify paths such as:

user.profile.name

user.profile.avatar

store.items

posts.0.title

The API inspection experience may evolve, but its purpose is to help the user understand available API data and select valid paths.

---

# 9. Data Paths

NexusFrame uses dot notation to identify values inside API responses.

Examples:

user.profile.name

user.profile.avatar

store.items

posts.0.title

A path represents a location inside the API response.

Conceptually:

"user.profile.name"

means:

response
  → user
    → profile
      → name

The Engine is responsible for correctly interpreting and resolving these paths.

---

# 10. Mapping System

The Mapping System connects template fields to API data paths.

Example:

{
  "heroTitle": "user.profile.name",
  "heroImage": "user.profile.avatar",
  "products": "store.items"
}

The left side represents fields expected by the selected template.

The right side represents paths inside the API response.

The Mapping System does not contain visual rendering logic.

It produces a predictable mapping contract that can be used by the Resolve process.

---

# 11. Mapping Object

The Mapping Object is the contract between the mapping logic and runtime/template rendering.

Example:

{
  "heroTitle": "user.profile.name",
  "heroImage": "user.profile.avatar",
  "products": "store.items"
}

The Mapping Object should remain simple and predictable.

Its purpose is to describe WHERE each required piece of template data comes from.

It should not contain the actual API values.

For example:

GOOD:

{
  "heroTitle": "user.profile.name"
}

NOT:

{
  "heroTitle": "John"
}

The actual value is obtained later during resolution.

---

# 12. Validation System

Validation verifies that the mapping provided by the user is valid.

Important validation responsibilities include:

## Path existence

Verify that a requested path actually exists in the API response.

Example:

user.profile.name

should fail if:

user.profile does not exist

or:

name does not exist.

---

## Type compatibility
The system should verify that the resolved data is compatible with what the template field expects.

Examples:

- A field expecting a string should not receive an incompatible object.
- A list component should receive an array.
- A numeric field should receive a number when required.

The exact validation rules may evolve with template requirements.

---

## Invalid values

Invalid paths or incompatible values should generate clear validation errors.

Validation should fail predictably rather than allowing invalid data to silently reach template rendering.

---

# 13. Resolve System

The Resolve system is responsible for taking:

1. API response data
2. Mapping Object

and resolving the mapping paths into actual values.

Conceptually:

API Response
    +
Mapping Object
    ↓
Resolve
    ↓
Resolved Template Data

Example:

API:

{
  "user": {
    "profile": {
      "name": "Ahmed"
    }
  }
}

Mapping:

{
  "heroTitle": "user.profile.name"
}

Resolved result:

{
  "heroTitle": "Ahmed"
}

The Resolve system is therefore the bridge between the abstract mapping contract and the actual data consumed by a template.

---

# 14. Main Data Flow

The current high-level flow is:

User
 ↓
Landing
 ↓
Studio
 ↓
Select category
 ↓
Select template
 ↓
Preview
 ↓
API configuration
 ↓
API Fetching
 ↓
API Response
 ↓
API Inspection
 ↓
Mapping
 ↓
Validation
 ↓
Mapping Object
 ↓
Resolve
 ↓
Template Data
 ↓
Selected Template
 ↓
Rendered Preview

The exact UI interaction may evolve, but this is the conceptual system flow.

---

# 15. Important Distinction: Mapping vs Resolve

These concepts must not be confused.

Mapping answers:

> "Where does this template field get its data from?"

Example:

heroTitle → user.profile.name

Resolve answers:

> "What is the actual value at that path in this API response?"

Example:

user.profile.name → "Ahmed"

Therefore:

Mapping:

{
  "heroTitle": "user.profile.name"
}

Resolve:

{
  "heroTitle": "Ahmed"
}

---

# 16. Templates

Templates are predefined, manually coded UI layouts.

They are NOT dynamically generated by the system.

Templates should remain predictable and developer-controlled.

The project currently uses multiple categories and multiple templates per category.

The exact number may evolve, but the current template collection is divided among the developers for implementation.

Template development is a separate work distribution concern and should not be used to define the overall application architecture.

Templates consume resolved Template Data and render it using ordinary React/TypeScript code.

For arrays, normal React patterns such as map() may be used.

---

# 17. Template Rendering

Template rendering happens after the Engine has produced usable Template Data.

Conceptually:

API Response
    ↓
Mapping
    ↓
Validation
    ↓
Resolve
    ↓
Template Data
    ↓
Template Component
    ↓
UI

Templates should not independently implement their own API fetching, mapping, validation, or resolve logic.

The goal is to keep templates focused on presentation.

---

# 18. Components

Components contain reusable UI pieces for the application.

Conceptual organization:

components/
├── landing/
├── studio/
└── preview/

Components should primarily handle UI concerns.

Avoid putting large amounts of Engine logic directly inside React components.

When a component needs Engine functionality, it should consume the appropriate Engine module/function rather than duplicating the implementation.

---

# 19. Types

The project is TypeScript-based.

Types should be used to define important contracts between modules.

Examples may include:

- API-related types
- Mapping types
- Validation result types
- Resolve result types
- Template data types
- Template-related contracts

Prefer explicit types and interfaces/type aliases over unnecessary use of any.

However, do not rewrite or redesign existing Engine code merely to satisfy a lint rule unless explicitly requested.

The existing implementation may contain deliberate typing decisions.

---

# 20. Architecture Philosophy

NexusFrame intentionally favors:
- Simplicity
- Readability
- Explicit naming
- Maintainability
- Small focused modules
- Clear responsibilities
- Practical architecture

Avoid premature abstraction.

Do NOT introduce:

- unnecessary layers
- unnecessary repositories/services
- excessive design patterns
- artificial separation between Engine and UI
- complex state-management systems without a real requirement
- dynamic template-generation systems without a real requirement

The Engine should be modular, but it should remain part of the application.

---

# 21. What the Architecture Should NOT Become

Do NOT revert to:

Engine Core
+
UI System
+
Shared System

as three independent top-level systems.

Do NOT treat the Engine as a completely standalone package unless explicitly requested.

Do NOT move all Engine logic into the Preview page.

Do NOT put fetching/mapping/validation/resolve directly into every template.

Do NOT make templates responsible for API communication.

Do NOT create a giant "everything" engine file.

The desired architecture is:

One Next.js application
    ↓
Pages / Routes
    ↓
Components
    ↓
Integrated Engine Modules
    ↓
Templates

---

# 22. Preview Page Architecture

The Preview page is the point where the major systems meet.

However, the page itself should remain relatively clean.

Conceptually:

Preview Page
    ↓
Coordinates Engine operations
    ↓
Fetching
    ↓
Mapping
    ↓
Validation
    ↓
Resolve
    ↓
Template
    ↓
Render

The individual operations should live inside their corresponding Engine modules.

The Preview page should orchestrate them rather than reimplement them.

---

# 23. Developer Work Distribution

The application can be divided between two developers primarily by responsibility.

## Developer 1

Responsible for:

- Preview page
- Preview-related components
- Engine integration
- Fetching
- Mapping
- Validation
- Resolve
- Runtime flow between Engine and Template

This developer owns the main API → Engine → Template pipeline.

---

## Developer 2

Responsible for:

- Landing page
- Studio page
- Studio-related components
- Navigation flow
- Category/template selection UI
- General application UI outside the core Preview/Engine workflow

---

## Templates

Templates are divided separately between the two developers.

Template ownership should not change the architectural responsibility above.

Both developers may work on templates independently.

---

# 24. Collaboration Boundary

The most important boundary between the two developers is the contract between:

Studio → Preview

and:

Engine → Template.

The Engine should expose predictable functions/types so that UI code does not need to know the internal implementation details.

Similarly, templates should receive predictable Template Data rather than needing to understand how the API was fetched or mapped.

---

# 25. Current Priority

The project is currently moving from architectural planning into actual implementation.

The current priority is to make the integrated system work reliably.

Important priorities:

1. Stable API fetching.
2. Reliable API response handling.
3. Path handling.
4. Mapping.
5. Validation.
6. Resolve.
7. Preview integration.
8. Template rendering.
9. Studio/template selection flow.
10. Overall user flow.

Do not over-engineer the system before the basic end-to-end flow works.

---

# 26. Expected End-to-End Result

The final basic experience should work conceptually like this:

User opens NexusFrame
    ↓
Landing Page
    ↓
Studio
    ↓
Select Category
    ↓
Select Template
    ↓
Preview
    ↓
Enter API
    ↓
Fetch API
    ↓
Inspect Response
    ↓
Configure Mapping
    ↓
Validate Mapping
    ↓
Generate Mapping Object
    ↓
Resolve API data through Mapping
    ↓
Generate Template Data
    ↓
Render selected template with real data

The user should experience this as one coherent application.

The internal Engine modules should remain mostly invisible to the user.

---

# 27. Development Rules for AI Assistants

When modifying or implementing NexusFrame:
1. Treat this document as the current architectural source of truth.
2. Do not assume the old Engine Core/UI System/Shared architecture still exists.
3. Do not propose separating the Engine into an independent project unless explicitly requested.
4. Use the existing Next.js + TypeScript architecture.
5. Keep Engine logic inside src/engine/.
6. Keep routes inside src/app/.
7. Keep reusable UI inside src/components/.
8. Keep templates inside src/templates/.
9. Keep important shared contracts/types inside src/types/.
10. Keep modules focused and readable.
11. Do not place core Engine logic directly inside page components.
12. Do not put API fetching logic inside individual templates.
13. Do not duplicate mapping, validation, or resolve logic across templates.
14. Prefer existing project patterns over introducing new architectural patterns.
15. Before creating a new abstraction, verify that there is a real need for it.
16. Do not rewrite stable existing Engine code unnecessarily.
17. Preserve existing behavior unless the requested task explicitly changes it.
18. When modifying Engine code, consider its impact on Preview and templates.
19. When modifying Template code, do not change Engine contracts unless explicitly required.
20. Keep TypeScript strict and use explicit types where practical.

---

# 28. Current Architectural Mental Model

The simplest correct mental model for NexusFrame is:

NexusFrame
│
├── App
│   ├── Landing
│   ├── Studio
│   └── Preview
│
├── Components
│   ├── Landing UI
│   ├── Studio UI
│   └── Preview UI
│
├── Engine
│   ├── Fetching
│   ├── Mapping
│   ├── Validation
│   └── Resolve
│
├── Templates
│   └── Predefined React templates
│
└── Types / Lib
    └── Supporting contracts and utilities

The Engine is not a separate product inside NexusFrame.

It is part of NexusFrame.

The Preview page is the main integration point between the Engine and the templates.

The Studio controls template discovery and selection.

The Landing page introduces the product.

---

# 29. Key Principle

NexusFrame should remain architecturally simple:

> One application.
> Clear modules.
> Clear contracts.
> No unnecessary separation.
> No premature abstraction.
> Engine logic stays reusable.
> UI stays focused on user interaction.
> Templates stay focused on presentation.

The goal is not to build the most complicated architecture.

The goal is to build the simplest architecture that correctly supports the NexusFrame data flow and can grow with the project.