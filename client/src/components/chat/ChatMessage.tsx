import { Bot, Clock, ThumbsUp, ThumbsDown, Copy, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  isError?: boolean;
}

interface ChatMessageProps {
  message: Message;
  onRetry?: () => void;
}

export function ChatMessage({ message, onRetry }: ChatMessageProps) {
  const isUser = message.sender === "user";
  const [liked, setLiked] = useState<boolean | null>(null);
  const { toast } = useToast();

  const formatText = (text: string) => {
    // Convert newlines to proper line breaks and handle basic formatting
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message.text);
      toast({
        title: "Copied to clipboard",
        description: "Message copied successfully",
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Unable to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  const handleLike = () => {
    setLiked(liked === true ? null : true);
    toast({
      title: liked === true ? "Feedback removed" : "Thanks for your feedback!",
      description: liked === true ? "" : "Your feedback helps improve responses",
    });
  };

  const handleDislike = () => {
    setLiked(liked === false ? null : false);
    toast({
      title: liked === false ? "Feedback removed" : "Thanks for your feedback!",
      description: liked === false ? "" : "Your feedback helps improve responses",
    });
  };
  
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
              <div className="text-sm leading-relaxed">{formatText(message.text)}</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>
                  {message.timestamp.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </span>
              </div>
              {!message.isError && (
                <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={handleLike}
                    className={cn(
                      "h-6 w-6 p-0 hover:bg-accent/20",
                      liked === true && "text-accent bg-accent/10"
                    )}
                  >
                    <ThumbsUp className="w-3 h-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={handleDislike}
                    className={cn(
                      "h-6 w-6 p-0 hover:bg-red-100",
                      liked === false && "text-red-500 bg-red-50"
                    )}
                  >
                    <ThumbsDown className="w-3 h-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={handleCopy}
                    className="h-6 w-6 p-0 hover:bg-accent/20"
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                  {onRetry && (
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={onRetry}
                      className="h-6 w-6 p-0 hover:bg-accent/20"
                    >
                      <RotateCcw className="w-3 h-3" />
                    </Button>
                  )}
                </div>
              )}
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
