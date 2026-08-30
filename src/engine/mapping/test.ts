import { buildMapping } from './builder';
import { validateDataPath } from './validator';

/**
 * TEST FIXTURE:
 * Sample API response containing nested objects, primitives, and arrays
 * for verifying Mapping V1 behavior across various edge cases.
 */
export const SAMPLE_API_RESPONSE = {
  user: {
    profile: {
      name: "Ahmed",
      avatar: "https://example.com/avatar.png",
      age: 30,
      active: true,
      bio: null
    },
    company: {
      name: "NexusFrame Inc.",
      logo: "https://example.com/logo.png"
    },
    posts: [
      { id: 1, title: "First Post", tags: ["tech", "react"] },
      { id: 2, title: "Second Post", tags: ["nextjs"] }
    ]
  },
  store: {
    items: [
      { name: "Product A", price: 99 }
    ]
  }
};

// TEST ROOT PATH:
// Example: "user"
export const SAMPLE_ROOT_PATH = "user";

// TEST TEMPLATE CONTRACT:
export const SAMPLE_TEMPLATE_KEYS = [
  "title",
  "image",
  "description",
  "author",
  "price"
];

function runTests() {
  console.log("=== Running Mapping V1 Tests ===");

  // 1. Basic & Nested Path & Expected Types Test
  const basicResult = buildMapping(
    SAMPLE_TEMPLATE_KEYS,
    {
      title: "user.company.name",
      image: "user.profile.avatar",
      price: "user.profile.age",
      author: "user.profile.bio"
    },
    {
      title: "string",
      image: "string",
      price: "number",
      author: "null"
    },
    SAMPLE_ROOT_PATH,
    SAMPLE_API_RESPONSE
  );
  console.assert(basicResult.ok === true, "Basic mapping with expected types should succeed");
  if (basicResult.ok) {
    console.assert(basicResult.value.mapping.title === "user.company.name", "Title path preserved");
    console.assert(basicResult.value.expectedTypes.title === "string", "Title expected type is string");
    console.assert(basicResult.value.expectedTypes.price === "number", "Price expected type is number");
    console.assert(basicResult.value.expectedTypes.author === "null", "Author expected type is null");
  }
  console.log("✓ Basic, Nested Path & Expected Types test passed");

  // 2. Array Index Test
  const arrayResult = buildMapping(
    SAMPLE_TEMPLATE_KEYS,
    {
      title: "user.posts.0.title"
    },
    {
      title: "string"
    },
    SAMPLE_ROOT_PATH,
    SAMPLE_API_RESPONSE
  );
  console.assert(arrayResult.ok === true, "Array index mapping should succeed");
  if (arrayResult.ok) {
    console.assert(arrayResult.value.mapping.title === "user.posts.0.title", "Array index path preserved");
    console.assert(arrayResult.value.expectedTypes.title === "string", "Array expected type preserved");
  }
  console.log("✓ Array Index test passed");

  // 3. Root Path Validation Test
  const rootResult = buildMapping(
    SAMPLE_TEMPLATE_KEYS,
    {
      title: "store.items.0.name"
    },
    {
      title: "string"
    },
    SAMPLE_ROOT_PATH,
    SAMPLE_API_RESPONSE
  );
  console.assert(rootResult.ok === false, "Path not starting with root path should fail");
  if (!rootResult.ok) {
    console.assert(rootResult.errors[0].kind === 'InvalidRoot', "Error kind should be InvalidRoot");
  }
  console.log("✓ Root Path Validation test passed");

  // 4. Invalid Path Test (Nonexistent Property)
  const notFoundResult = buildMapping(
    SAMPLE_TEMPLATE_KEYS,
    {
      title: "user.profile.nonexistent"
    },
    {
      title: "string"
    },
    SAMPLE_ROOT_PATH,
    SAMPLE_API_RESPONSE
  );
  console.assert(notFoundResult.ok === false, "Nonexistent path should fail");
  if (!notFoundResult.ok) {
    console.assert(notFoundResult.errors[0].kind === 'PathNotFound', "Error kind should be PathNotFound");
  }
  console.log("✓ Nonexistent Path test passed");

  // 5. Forbidden Expressions / Declarative Only Test
  const exprResult = buildMapping(
    SAMPLE_TEMPLATE_KEYS,
    {
      title: "user.profile.name.toUpperCase()"
    },
    {
      title: "string"
    },
    SAMPLE_ROOT_PATH,
    SAMPLE_API_RESPONSE
  );
  console.assert(exprResult.ok === false, "Executable expression should fail");
  if (!exprResult.ok) {
    console.assert(exprResult.errors[0].kind === 'UnsupportedExpression', "Error kind should be UnsupportedExpression");
  }
  console.log("✓ Declarative Only / Forbidden Expression test passed");

  // 6. Optional Unmapped Fields Test
  const optionalResult = buildMapping(
    SAMPLE_TEMPLATE_KEYS,
    {
      title: "user.company.name",
      description: "" // unmapped optional field
    },
    {
      title: "string",
      description: "string"
    },
    SAMPLE_ROOT_PATH,
    SAMPLE_API_RESPONSE
  );
  console.assert(optionalResult.ok === true, "Unmapped optional fields should be allowed and ignored in mapping");
  if (optionalResult.ok) {
    console.assert(optionalResult.value.mapping.description === undefined, "Description should not appear in mapping output");
    console.assert(optionalResult.value.expectedTypes.description === undefined, "Description expected type should not appear in expectedTypes output");
  }
  console.log("✓ Optional Unmapped Fields test passed");

  console.log("=== All Mapping V1 Tests Passed Successfully ===");
}

// Uncomment to run tests manually or invoke via script
// runTests();
