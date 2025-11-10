import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

// ✅ Mock project data
const mockProjects = [
  {
    id: 1,
    title: "Project 1",
    tag: "Tag 1",
    summary:
      "Analyze performance and summarize operational insights based on data.",
    highlights: [
      "Output per employee increased steadily over two quarters.",
      "Conversion cycle improved from 25 to 18 days.",
      "Customer retention rose by 12%.",
    ],
  },
  {
    id: 2,
    title: "Project 2",
    tag: "Tag 2",
    summary: "Evaluate operational efficiency and quarterly revenue trends.",
    highlights: [
      "Quarterly revenue increased by 20%.",
      "Team productivity rose by 15%.",
      "Delivery times improved by 10%.",
    ],
  },
];

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getProjects: builder.query({
      async queryFn() {
        try {
          // ✅ Always return mock data instantly (no delay)
          return { data: mockProjects };
        } catch (error) {
          return {
            error: { status: 500, message: "Failed to load projects" },
          };
        }
      },
    }),
  }),
});

export const { useGetProjectsQuery } = apiSlice;


