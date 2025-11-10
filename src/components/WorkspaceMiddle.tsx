import { useGetProjectsQuery } from "../store/apiSlice";

interface Project {
  id: number;
  title: string;
  tag: string;
  summary: string;
  highlights: string[];
}

export default function WorkspaceMiddle() {
  const { data, isLoading, isError } = useGetProjectsQuery(undefined);

  // ⏳ Loading state
  if (isLoading)
    return (
      <main className="flex-1 flex items-center justify-center text-helper-text bg-background-2">
        Loading projects...
      </main>
    );

  // ❌ Error state
  if (isError)
    return (
      <main className="flex-1 flex items-center justify-center text-red-500 bg-background-2">
        Failed to load projects. Please try again.
      </main>
    );

  // 🈳 Empty state
  if (!data || data.length === 0)
    return (
      <main className="flex-1 flex items-center justify-center text-helper-text bg-background-2">
        No projects available.
      </main>
    );

  // ✅ Success state
  return (
    <main className="flex-1 overflow-auto bg-background-2 p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {data.map((project: Project) => (
          <div
            key={project.id}
            className="bg-background-1 border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Title */}
            <h1 className="text-2xl font-semibold text-primary-text mb-2">
              {project.title}{" "}
              <span className="text-xs text-tag-1 bg-tag-1/20 px-2 py-1 rounded-md">
                {project.tag}
              </span>
            </h1>

            {/* Summary */}
            <p className="text-secondary-text mb-4 leading-relaxed">
              {project.summary}
            </p>

            {/* Highlights */}
            <div>
              <h3 className="text-primary-text font-medium mb-2">
                Key Highlights
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-secondary-text">
                {project.highlights.map((point, idx) => (
                  <li key={idx} className="leading-snug">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
