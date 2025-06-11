import { useState, useCallback } from "react";
import { Message } from "@/components/chat/ChatMessage";
import { useToast } from "@/hooks/use-toast";

interface ChatHistory {
  user: string;
  assistant: string;
}

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [history, setHistory] = useState<ChatHistory[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const hideWelcome = useCallback(() => {
    setShowWelcome(false);
  }, []);

  const addMessage = useCallback((text: string, sender: "user" | "bot", isError = false) => {
    const newMessage: Message = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      text,
      sender,
      timestamp: new Date(),
      isError
    };
    
    setMessages(prev => [...prev, newMessage]);
    return newMessage;
  }, []);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || isTyping) return;

    // Clear any previous errors
    setError(null);
    
    // Hide welcome message after first interaction
    if (showWelcome) {
      setShowWelcome(false);
    }

    // Add user message
    addMessage(text, "user");
    
    // Show typing indicator
    setIsTyping(true);

    try {
      const response = await fetch('https://k6lmmog7p3.execute-api.ap-south-1.amazonaws.com/dev/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ 
          message: text, 
          history 
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const botReply = data.response || 'I apologize, but I encountered an issue processing your request.';

      // Add bot response
      addMessage(botReply, "bot");

      // Update history
      setHistory(prev => [...prev, { user: text, assistant: botReply }]);

    } catch (err) {
      console.error('Chat error:', err);
      
      const errorMessage = 'I apologize, but I\'m having trouble connecting right now. Please try again in a moment.';
      addMessage(errorMessage, "bot", true);
      
      setError('Connection error. Please check your internet connection and try again.');
      
      toast({
        title: "Connection Error",
        description: "Unable to reach the chat service. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsTyping(false);
    }
  }, [isTyping, showWelcome, history, addMessage, toast]);

  return {
    messages,
    isTyping,
    sendMessage,
    showWelcome,
    hideWelcome,
    error
  };
}
