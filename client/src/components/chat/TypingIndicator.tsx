import { Bot } from "lucide-react";

export function TypingIndicator() {
  return (
    <div className="flex items-start space-x-3 chat-message-animation">
      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
        <Bot className="w-4 h-4 text-gray-600" />
      </div>
      <div className="bg-[var(--chat-bot-bg)] rounded-2xl px-4 py-3 shadow-sm">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-gray-400 rounded-full typing-dots"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full typing-dots"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full typing-dots"></div>
        </div>
      </div>
    </div>
  );
}
