JcurveIQ — Frontend Developer Assignment

Submitted by: Armaan Dubey

A responsive, accessible React + Vite + TypeScript application built from the official JcurveIQ Figma design.
This project replicates a modern AI-powered equity research workspace with an interactive UI, state management, and accessibility best practices.

Tech Stack:
React (v18) + Vite + TypeScript
Tailwind CSS — utility-first styling
Redux Toolkit + RTK Query — state & API management
Framer Motion — UI animations
Axios + OpenAI API — AI assistant integration

Vercel — deployment

Features Implemented:
Responsive layout (Desktop + Mobile)
Accessible, semantic HTML + keyboard navigation
Reusable React components
Redux store for UI and data state
Mock API for projects with loading / error / empty states
Animated sidebar toggle (Framer Motion)
Bonus: AI Chat Sidebar powered by GPT-4o API

Folder Structure:
src/
 ├── components/
 │    ├── SidebarLeft.tsx
 │    ├── SidebarRight.tsx
 │    ├── WorkspaceMiddle.tsx
 │    └── MainLayout.tsx
 ├── store/
 │    ├── store.ts
 │    └── apiSlice.ts
 ├── App.tsx
 ├── main.tsx
 └── index.css

How to Run Locally:
# Clone the repo
git clone https://github.com/armaandubey/research-workspace.git

# Navigate into the folder
cd research-workspace

# Install dependencies
npm install

# Start the app
npm run dev
Then visit http://localhost:5173

How to Toggle Mock States:
## 🔄 Mock API States
The `apiSlice.ts` file under `/src/store/` simulates loading, success, and error states for projects.

You can toggle between states by editing the mock data:

```ts
// Example in apiSlice.ts
if (Math.random() < 0.2) throw new Error("Failed to load projects");
  known gaps & tradeoffs
- Used mock API data instead of live backend for simplicity.
- Minimal testing coverage (only manual validation).
- Limited Storybook components (not required, optional).
- OpenAI integration included as an enhancement, not part of the core brief.

Screenshots & UI States

Desktop View
[Desktop View](research-workspace/Screenshot/Desktop-view.png)

Mobile collapsed
[Mobile View](research-workspace/Screenshot/Mobile-collapsed.png)
> The right assistant sidebar is intentionally hidden on mobile for a cleaner user experience.
> It becomes visible on larger screens (lg breakpoint and above).


Mobile Sidebar open
[mobile sidebar view](research-workspace/Screenshot/Mobile-Sidebar-open.png)

Loading State
[Loading State](research-workspace/Screenshot/Loading-state.png)

Error State
[Error State](research-workspace/Screenshot/Error-state.png)

Empty State
[Empty State](research-workspace/Screenshot/Empty-state.png)

# JcurveIQ Frontend Assignment

**Live Demo:** [https://jcurveiq-assignment.vercel.app](https://jcurveiq-assignment.vercel.app)




