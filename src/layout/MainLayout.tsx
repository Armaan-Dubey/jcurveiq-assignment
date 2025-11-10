import SidebarLeft from "../components/SidebarLeft";
import WorkspaceMiddle from "../components/WorkspaceMiddle";
import SidebarRight from "../components/SidebarRight";

export default function MainLayout() {
  return (
    <div className="relative min-h-screen flex bg-background-2 text-primary-text overflow-hidden">
      <SidebarLeft />
      <div className="flex flex-1">
        <main className="flex-1 overflow-y-auto">
          <WorkspaceMiddle />
        </main>
        <SidebarRight />
      </div>
    </div>
  );
}
