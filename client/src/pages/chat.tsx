import { useEffect, useRef } from "react";
import { useChat } from "@/hooks/useChat";
import { ChatHeader } from "@/components/chat/ChatHeader";
import { WelcomeMessage } from "@/components/chat/WelcomeMessage";
import { ChatMessage } from "@/components/chat/ChatMessage";
import { TypingIndicator } from "@/components/chat/TypingIndicator";
import { ChatInput } from "@/components/chat/ChatInput";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Chat() {
  const {
    messages,
    isTyping,
    sendMessage,
    showWelcome,
    hideWelcome,
    error
  } = useChat();
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleQuickAction = (message: string) => {
    hideWelcome();
    sendMessage(message);
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      <ChatHeader />
      
      <main className="flex-1 overflow-hidden">
        <div className="max-w-4xl mx-auto h-full flex flex-col">
          {showWelcome && (
            <WelcomeMessage onQuickAction={handleQuickAction} />
          )}
          
          <ScrollArea className="flex-1 px-6">
            <div className="space-y-4 py-6">
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message}
                />
              ))}
              
              {isTyping && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>
        </div>
      </main>
      
      <ChatInput
        onSendMessage={sendMessage}
        disabled={isTyping}
        error={error}
      />
    </div>
  );
}
