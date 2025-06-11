import { Bot, Circle, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatHeaderProps {
  onClearChat?: () => void;
  hasMessages?: boolean;
}

export function ChatHeader({ onClearChat, hasMessages }: ChatHeaderProps) {
  return (
    <header className="bg-primary text-primary-foreground px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between max-w-4xl mx-auto">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-semibold">Clarity</h1>
            <p className="text-sm text-blue-100">Employee Assistant</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {hasMessages && onClearChat && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearChat}
              className="text-blue-100 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear Chat
            </Button>
          )}
          <div className="flex items-center space-x-2">
            <Circle className="w-2 h-2 fill-accent text-accent animate-pulse" />
            <span className="text-sm text-blue-100">Online</span>
          </div>
        </div>
      </div>
    </header>
  );
}
