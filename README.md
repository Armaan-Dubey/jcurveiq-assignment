# JcurveIQ — Frontend Developer Assignment  
Submitted by: Armaan Dubey  
This project was built as part of the JcurveIQ Frontend Developer assignment.  
It recreates a modern AI-powered equity research workspace from a provided Figma design.  
The goal was to implement responsive design, accessibility, reusable components, and clean Redux-based state management.

Tech Stack:
React (v18) + Vite + TypeScript
Tailwind CSS — utility-first styling
Redux Toolkit + RTK Query — state & API management
Framer Motion — UI animations
Axios + OpenAI API — AI assistant integration

Features Implemented:
Responsive layout (Desktop + Mobile)
Accessible, semantic HTML + keyboard navigation
Reusable React components
Redux store for UI and data state
Mock API for projects with loading / error / empty states
Animated sidebar toggle (Framer Motion)
Bonus: AI Chat Sidebar powered by GPT-4o API

Folder Structure:
research-workspace/
├── public/
│   ├── projects.json
│   └── vite.svg
│
├── Screenshot/
│   ├── Desktop-view.png
│   ├── Mobile-collapsed.png
│   ├── Mobile-Sidebar-open.png
│   ├── Loading-state.png
│   ├── Error-state.png
│   └── Empty-state.png
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── SidebarLeft.tsx
│   │   ├── SidebarRight.tsx
│   │   ├── SidebarToggle.tsx
│   │   └── WorkspaceMiddle.tsx
│   │
│   ├── layout/
│   │   └── MainLayout.tsx
│   │
│   ├── store/
│   │   ├── apiSlice.ts
│   │   ├── store.ts
│   │   └── uiSlice.ts
│   │
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md

# How to Run Locally:
## Clone the repo
git clone https://github.com/armaandubey/research-workspace.git

## Navigate into the folder
cd research-workspace

## Install dependencies
npm install

## Start the app
npm run dev
Then visit http://localhost:5173

#How to Toggle Mock States:
## Mock API States
The `/src/store/apiSlice.ts` file includes mock API logic that simulates different data states for testing.
You can manually toggle states by editing `apiSlice.ts`:
- **Loading State:** Simulated automatically when data is being fetched.
- **Error State:** Uncomment or add a line like  
  `throw new Error("Failed to load projects");`
- **Empty State:** Return an empty array instead of project data.
- **Success State:** Default behavior (returns project data from `projects.json`).

 # known gaps & tradeoffs
- Used mock API data instead of live backend for simplicity.
- Minimal testing coverage (only manual validation).
- Limited Storybook components (not required, optional).
- OpenAI integration included as an enhancement, not part of the core brief.

# Screenshots & UI States

## Desktop View
[Desktop View](research-workspace/Screenshot/Desktop-view.png)

## Mobile collapsed
[Mobile View](research-workspace/Screenshot/Mobile-collapsed.png)
> The right assistant sidebar is intentionally hidden on mobile for a cleaner user experience.
> It becomes visible on larger screens (lg breakpoint and above).


## Mobile Sidebar open
[mobile sidebar view](research-workspace/Screenshot/Mobile-Sidebar-open.png)

## Loading State
[Loading State](research-workspace/Screenshot/Loading-state.png)

## Error State
[Error State](research-workspace/Screenshot/Error-state.png)

## Empty State
[Empty State](research-workspace/Screenshot/Empty-state.png)

# JcurveIQ Frontend Assignment

**Live Demo:** [https://jcurveiq-assignment.vercel.app](https://jcurveiq-assignment.vercel.app)




