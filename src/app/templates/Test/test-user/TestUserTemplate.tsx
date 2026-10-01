"use client";

type TestUserTemplateProps = {
  resolvedData: Record<string, unknown>;
};

function displayValue(value: unknown): string {
  if (value === undefined || value === null || value === "")
    return "Waiting for resolved data";
  return Array.isArray(value) ? value.join(", ") : String(value);
}

//RECOMMENDED: Use a placeholder data object to provide default values for the template fields.
const placeholderData: Record<string, unknown> = {
  name: "Placeholder User",
  username: "placeholder_user",
  email: "user@example.com",
  phone: "+1 555 0100",
  website: "example.com",
  companyName: "Placeholder Company",
  city: "Example City",
  profileLabel: "Waiting for Hybrid mapping",
  accountNote: "No manual note yet",
  posts: [],
  postTitle: "No post title mapped",
  postBody: "No post body mapped",
};
//RECOMMENDED: Use a function to normalize the data to ensure that the template always has a consistent structure, 
//even if some fields are missing or undefined. 
//This can help prevent runtime errors and make the template more robust.
function normalizeTemplateData(
  data?: Record<string, unknown>,
): Record<string, unknown> {
  return data ?? placeholderData;
}

export default function TestUserTemplate({
  resolvedData,
}: TestUserTemplateProps) {
  const hasResolvedData = Boolean(
    resolvedData && Object.keys(resolvedData).length > 0,
  );
  const data = normalizeTemplateData(resolvedData);
  const initials = displayValue(data.profileLabel)
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const fields = [
    ["Name", data.name],
    ["Username", data.username],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Website", data.website],
    ["Company", data.companyName],
    ["City", data.city],
    ["Profile label", data.profileLabel],
    ["Account note", data.accountNote],
  ] as const;
  const posts = Array.isArray(data.posts) ? data.posts : [];
  const postTitles = Array.isArray(data.postTitle) ? data.postTitle : [];
  const postBodies = Array.isArray(data.postBody) ? data.postBody : [];

  return (
    <section className="bg-white text-slate-900 p-6 sm:p-10">
      <div className="mx-auto max-w-2xl rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          NexusFrame Test Template
        </p>
        <div className="mt-4 flex items-center gap-4 border-b border-slate-200 pb-5">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xl font-bold text-white">
            {initials}
          </div>
          <div>
            <h1 className="text-2xl font-bold">{displayValue(data.name)}</h1>
            <p className="text-sm text-slate-500">
              @{displayValue(data.username)}
            </p>
          </div>
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <span>JSONPlaceholder user data with Hybrid filling support.</span>
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-semibold ${hasResolvedData ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}
          >
            {/* Defining the user's data status in previewed template */}
            {hasResolvedData ? "Resolved data" : "Placeholder data"}
          </span>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {fields.map(([label, value]) => (
            <div
              key={label}
              className="rounded-lg border border-slate-200 bg-white p-3"
            >
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {label}
              </dt>
              <dd className="mt-1 break-words text-sm text-slate-900">
                {displayValue(value)}
              </dd>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-slate-200 pt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">Posts</h2>
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {posts.length} loaded
            </span>
          </div>
          <div className="mt-3 space-y-3">
            {posts.length > 0 ? (
              posts.map((post, index) => {
                return (
                  <article
                    key={`${index}`}
                    className="rounded-lg border border-slate-200 bg-white p-4"
                  >
                    <h3 className="font-semibold text-slate-900">
                      {displayValue(postTitles[index])}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {displayValue(postBodies[index])}
                    </p>
                  </article>
                );
              })
            ) : (
              <article className="rounded-lg border border-slate-200 bg-white p-4">
                <h3 className="font-semibold text-slate-900">
                  {displayValue(data.postTitle)}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {displayValue(data.postBody)}
                </p>
              </article>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
