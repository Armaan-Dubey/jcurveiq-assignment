import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SidebarLeft() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Toggle Button (☰) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-6 left-6 z-[10002] bg-accent-400 text-white p-2 rounded-md shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-64" : "translate-x-0"
        }`}
      >
        ☰
      </button>

      {/* Overlay (visible only when sidebar is open) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)} // closes when clicking outside
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[10000]"
          ></motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar (slides in/out smoothly) */}
      <motion.aside
        initial={{ x: -260 }}
        animate={{ x: isOpen ? 0 : -260 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 h-screen w-64 bg-background-1 border-r border-border shadow-xl z-[10001] flex flex-col lg:translate-x-0 lg:static"
      >
        {/* Header */}
        <div className="p-4 flex items-center justify-between border-b border-border">
          <span className="font-bold text-accent-400 text-lg">LOGO</span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-accent-400 lg:hidden"
          >
            ✖
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 text-sm overflow-y-auto p-3">
          <button
            onClick={() => setIsOpen(false)}
            className="block w-full text-left p-3 rounded-md hover:bg-background-4 transition"
          >
            + New Project
          </button>

          <button
            onClick={() => setIsOpen(false)}
            className="block w-full text-left p-3 rounded-md hover:bg-background-4 transition"
          >
            📦 Archived
          </button>

          <div className="mt-6">
            <h3 className="text-xs text-helper-text px-3 uppercase tracking-wide mb-2">
              Your Projects
            </h3>

            <div className="space-y-1">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-background-4"
              >
                <span>Project 1</span>
                <span className="text-tag-1 text-xs px-2 py-1 rounded-md bg-tag-1/20">
                  Tag 1
                </span>
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-background-4"
              >
                <span>Project 2</span>
                <span className="text-tag-2 text-xs px-2 py-1 rounded-md bg-tag-2/20">
                  Tag 2
                </span>
              </button>
            </div>
          </div>
        </nav>
      </motion.aside>
    </>
  );
}
