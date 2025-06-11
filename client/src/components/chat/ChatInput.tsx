import { useState, KeyboardEvent } from "react";
import { Send, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
  error?: string | null;
}

export function ChatInput({ onSendMessage, disabled = false, error }: ChatInputProps) {
  const [message, setMessage] = useState("");
  const maxLength = 500;

  const handleSend = () => {
    const trimmedMessage = message.trim();
    if (!trimmedMessage || disabled) return;
    
    onSendMessage(trimmedMessage);
    setMessage("");
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const characterCount = message.length;
  const isNearLimit = characterCount > 450;

  return (
    <footer className="bg-background border-t border-border p-6">
      <div className="max-w-4xl mx-auto space-y-3">
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        <div className="flex items-end space-x-3">
          <div className="flex-1">
            <div className="relative">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about HR, finance, IT, products, or contacts..."
                className="pr-12 py-3 rounded-xl focus:ring-2 focus:ring-primary"
                maxLength={maxLength}
                disabled={disabled}
              />
              <Button
                size="sm"
                onClick={handleSend}
                disabled={!message.trim() || disabled}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 p-0 rounded-full"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Press Enter to send</span>
          <div className="flex items-center space-x-4">
            <span className={cn(
              "transition-colors",
              isNearLimit && "text-destructive font-medium"
            )}>
              {characterCount}/{maxLength}
            </span>
            <div className="flex items-center space-x-1">
              <Shield className="w-3 h-3 text-accent" />
              <span>Secure Connection</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
