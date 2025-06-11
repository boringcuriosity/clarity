# Clarity - AI-Powered Employee Assistant

![Clarity Logo](https://img.shields.io/badge/Clarity-AI%20Assistant-blue?style=for-the-badge&logo=robot)

Clarity is an intelligent AI-powered chatbot designed to help employees with their day-to-day workplace queries. Built with modern web technologies and powered by Amazon Bedrock, Clarity provides instant, accurate responses to questions about HR policies, finance, IT support, products, and company contacts.

## 🚀 What is Clarity?

Clarity is your virtual employee assistant that streamlines workplace communication and information access. It's designed to reduce the burden on HR, IT, and other departments by providing employees with instant access to company information and policies through a conversational AI interface.

## ✨ Key Features

### 🤖 **Intelligent Conversational AI**
- Powered by Amazon Bedrock with advanced natural language processing
- Context-aware responses that understand employee intent
- Maintains conversation history for better context understanding
- Real-time typing indicators for enhanced user experience

### 🎯 **Multi-Domain Support**
- **HR Policies**: Get instant answers about leave policies, benefits, and procedures
- **Finance**: Assistance with expense claims, budgets, and financial processes
- **IT Support**: Quick help with technical issues and IT policies
- **Products**: Information about company products and services
- **Contacts**: Find the right people and departments

### 💬 **Modern Chat Experience**
- Clean, intuitive chat interface with message bubbles
- Responsive design that works on desktop and mobile
- Dark/light theme support with custom chat colors
- Message actions: copy, like/dislike, retry failed messages
- Real-time error handling and retry mechanisms

### 🔧 **Advanced UI Components**
- Built with React and TypeScript for type safety
- Shadcn/ui components for consistent, accessible design
- Tailwind CSS for responsive styling
- Smooth animations and transitions
- Interactive welcome screen with quick action buttons

## 🏗️ Architecture

### **Frontend Stack**
- **React 18** with TypeScript for the user interface
- **Vite** for fast development and building
- **Tailwind CSS** for styling and responsive design
- **Radix UI** primitives for accessible components
- **Lucide React** for beautiful icons
- **React Query** for state management
- **Wouter** for lightweight routing

### **Backend Infrastructure**
- **AWS Lambda** for serverless compute
- **Amazon Bedrock** for AI/ML capabilities
- **Express.js** server for development
- **AWS API Gateway** for API management
- **Vercel** for deployment and hosting

### **Key Components**

#### Chat System
- `ChatHeader`: Displays bot status and provides chat controls
- `ChatMessage`: Renders user and bot messages with interactive features
- `ChatInput`: Input field with character limits and validation
- `TypingIndicator`: Shows when the bot is processing
- `WelcomeMessage`: Onboarding with quick action buttons

#### Hooks & Utilities
- `useChat`: Manages chat state, API calls, and message handling
- `useToast`: Provides user feedback and notifications
- Custom utility functions for text formatting and API integration

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- AWS account with Bedrock access (for backend)

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ClarityConnect
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Access the application**
   Open http://localhost:5000 in your browser

### Production Build

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🔧 Configuration

### Environment Variables
```env
NODE_ENV=production
PORT=5000
```

### AWS Configuration
The backend uses AWS Lambda with the following configuration:
- **Region**: ap-south-1 (Asia Pacific - Mumbai)
- **Bedrock Agent ID**: ESOZJJ8BHZ
- **Agent Alias ID**: OTMWKBTUCA

## 📱 Usage

### Getting Started
1. Visit the Clarity chat interface
2. Use the welcome screen quick actions or type your question
3. Ask about HR policies, finance, IT support, or products
4. Get instant, AI-powered responses

### Example Queries
- "What is the leave policy for sick days?"
- "How do I submit an expense report?"
- "I'm having trouble with my laptop, who should I contact?"
- "Tell me about our product lineup"
- "What are the office hours?"

### Chat Features
- **Message Actions**: Copy responses, provide feedback, retry failed messages
- **History**: Conversation context is maintained throughout the session
- **Error Handling**: Automatic retry for failed messages
- **Security**: All communications are encrypted and secure

## 🎨 Customization

### Themes
Clarity supports both light and dark themes with custom chat colors:
- User messages: Blue background
- Bot messages: Gray background
- Custom accent colors for branding

### Quick Actions
Modify the welcome screen quick actions in `WelcomeMessage.tsx`:
```tsx
const quickActions = [
  { icon: Users, label: "HR Policies", message: "Tell me about HR policies" },
  { icon: Calculator, label: "Finance", message: "I need help with finance questions" },
  // Add more actions...
];
```

## 🔒 Security

- **CORS Protection**: Configured for secure cross-origin requests
- **Input Validation**: All user inputs are validated and sanitized
- **SSL/TLS**: All communications encrypted in transit
- **AWS Security**: Leverages AWS security best practices
- **Session Management**: Unique session IDs for each conversation

## 📊 Performance

- **Fast Response Times**: Optimized API calls and caching
- **Lightweight Bundle**: Efficient code splitting and tree shaking
- **Responsive Design**: Works seamlessly across all device sizes
- **Offline Handling**: Graceful degradation when connectivity is poor

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation for common solutions

## 🚀 Deployment

### Vercel Deployment
The application is configured for Vercel deployment with:
- Automatic builds on push
- Environment variable management
- CDN distribution for optimal performance

### AWS Lambda Backend
The AI backend runs on AWS Lambda with:
- Automatic scaling
- Pay-per-use pricing
- Global availability

---

**Clarity** - Making workplace information accessible, one conversation at a time. 🤖✨