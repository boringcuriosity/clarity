import { Users, Calculator, Laptop, Package, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WelcomeMessageProps {
  onQuickAction: (message: string) => void;
}

export function WelcomeMessage({ onQuickAction }: WelcomeMessageProps) {
  const quickActions = [
    {
      icon: Users,
      label: "HR Policies",
      message: "Tell me about HR policies"
    },
    {
      icon: Calculator,
      label: "Finance",
      message: "I need help with finance questions"
    },
    {
      icon: Laptop,
      label: "IT Support",
      message: "I need IT support"
    },
    {
      icon: Package,
      label: "Products",
      message: "Tell me about our products"
    }
  ];

  return (
    <div className="p-6 bg-gradient-to-b from-secondary to-background border-b border-border">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold text-[var(--text-main)] mb-2">
          Welcome to Clarity!
        </h2>
        <p className="text-muted-foreground mb-6">
          I'm here to help you with questions about HR policies, finance, IT support, 
          products, and finding the right contacts.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {quickActions.map((action) => (
            <Button
              key={action.label}
              variant="outline"
              onClick={() => onQuickAction(action.message)}
              className="h-auto p-4 flex flex-col items-center space-y-2 hover:bg-accent/10 hover:border-accent transition-colors duration-200"
            >
              <action.icon className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium text-[var(--text-main)]">
                {action.label}
              </span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
