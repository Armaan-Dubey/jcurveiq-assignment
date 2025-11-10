import { useState, useEffect, useRef } from "react";
import axios from "axios";

interface Chat {
  question: string;
  answer: string;
}

export default function SidebarRight() {
  const [query, setQuery] = useState("");
  const [responses, setResponses] = useState<Chat[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [responses, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userQuestion = query.trim();
    setQuery("");
    setIsLoading(true);

    // Add the question immediately
    setResponses((prev) => [...prev, { question: userQuestion, answer: "Thinking..." }]);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: "You are an expert financial research assistant." },
            { role: "user", content: userQuestion },
          ],
          max_tokens: 250,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          },
        }
      );

      const aiAnswer = response.data.choices[0].message.content.trim();

      setResponses((prev) =>
        prev.map((item, i) =>
          i === prev.length - 1 ? { ...item, answer: aiAnswer } : item
        )
      );
    } catch (err) {
      console.error("OpenAI API error:", err);
      setResponses((prev) =>
        prev.map((item, i) =>
          i === prev.length - 1
            ? { ...item, answer: "⚠️ Failed to get response. Check your API key or internet." }
            : item
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <aside className="hidden lg:flex flex-col w-96 border-l border-border bg-background-1">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <p className="text-sm text-text-secondary">
          <strong>Answered with:</strong> GPT-4o (Live)
        </p>
        <p className="text-xs text-text-helper mt-1">
          {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </p>
      </div>

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-5">
        {responses.length === 0 ? (
          <div className="text-center text-text-secondary mt-10 text-sm">
            💬 Ask any data or performance-related question below.
          </div>
        ) : (
          responses.map((res, i) => (
            <div
              key={i}
              className="p-3 border border-border bg-background-2 rounded-lg shadow-sm transition hover:shadow-md"
            >
              <p className="font-semibold text-primary-text mb-2">🧠 You asked:</p>
              <p className="text-text-secondary mb-3">{res.question}</p>
              <p className="font-semibold text-primary-text mb-1">✨ Response:</p>
              <p className="whitespace-pre-line text-sm text-text-secondary">
                {res.answer}
              </p>
            </div>
          ))
        )}
        <div ref={chatEndRef}></div>
      </div>

      {/* Input bar */}
      <form
        onSubmit={handleSubmit}
        className="p-4 border-t border-border bg-background-1 flex items-center gap-2"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask something..."
          className="flex-1 px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-400"
        />
        <button
          type="submit"
          disabled={isLoading}
          className={`px-4 py-2 rounded-lg text-white transition ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-accent-400 hover:bg-accent-100"
          }`}
        >
          {isLoading ? "..." : "Send"}
        </button>
      </form>
    </aside>
  );
}



