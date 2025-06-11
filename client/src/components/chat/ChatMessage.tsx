import { Bot, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  isError?: boolean;
}

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.sender === "user";
  
  return (
    <div className={cn(
      "flex chat-message-animation",
      isUser ? "justify-end" : "justify-start"
    )}>
      {!isUser && (
        <div className="flex items-start space-x-3">
          <div className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
            message.isError 
              ? "bg-red-100 text-red-500" 
              : "bg-gray-100 text-gray-600"
          )}>
            <Bot className="w-4 h-4" />
          </div>
          <div className="flex flex-col space-y-1">
            <div className={cn(
              "max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-sm",
              "bg-[var(--chat-bot-bg)] text-[var(--text-main)]",
              message.isError && "border-l-4 border-red-400"
            )}>
              <p className="text-sm leading-relaxed">{message.text}</p>
            </div>
            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              <span>
                {message.timestamp.toLocaleTimeString([], { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </span>
            </div>
          </div>
        </div>
      )}
      
      {isUser && (
        <div className="flex flex-col items-end space-y-1">
          <div className="max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-sm bg-[var(--chat-user-bg)] text-[var(--text-main)]">
            <p className="text-sm leading-relaxed">{message.text}</p>
          </div>
          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            <span>
              {message.timestamp.toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
