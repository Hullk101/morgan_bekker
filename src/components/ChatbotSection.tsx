import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Bot, User } from 'lucide-react';
import { generateSessionId } from '../data/portfolio-data';

interface ChatMessage {
  id: string;
  message: string;
  response?: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function ChatbotSection() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      message: "Hello! I'm a Python code assistant. Ask me about Python programming, and I'll help you out!",
      sender: 'bot',
      timestamp: new Date(),
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Simple chatbot responses for static version
  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi')) {
      return "Hello! I'm here to help with Python questions. What would you like to know?";
    }
    
    if (message.includes('python')) {
      return "Python is a great language! I can help with syntax, libraries, best practices, or specific coding problems. What specific Python topic interests you?";
    }
    
    if (message.includes('react') || message.includes('javascript')) {
      return "While I specialize in Python, I know that React and JavaScript are powerful tools for frontend development. For Python web development, you might want to check out frameworks like Django or Flask!";
    }
    
    if (message.includes('help')) {
      return "I can help you with:\n• Python syntax and concepts\n• Code examples and explanations\n• Best practices\n• Library recommendations\n• Debugging tips\n\nWhat would you like to explore?";
    }
    
    if (message.includes('code') || message.includes('function')) {
      return "I'd love to help with your code! For this static demo, I can provide general Python guidance. In a full implementation, I could execute and analyze your Python code directly.";
    }
    
    return "That's an interesting question! In this static demo, I can provide general Python guidance. For more specific help, feel free to ask about Python concepts, syntax, or best practices.";
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: generateSessionId(),
      message: newMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsLoading(true);

    // Simulate API delay
    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: generateSessionId(),
        message: getBotResponse(newMessage),
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <section id="chatbot" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Python Assistant</h2>
          <p className="text-xl text-muted-foreground">Ask me anything about Python programming</p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bot className="mr-2 h-5 w-5 text-primary" />
                Python Code Assistant
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96 w-full border rounded-lg p-4 mb-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`flex items-start max-w-[80%] ${
                        message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                      }`}>
                        <div className={`flex-shrink-0 ${
                          message.sender === 'user' ? 'ml-2' : 'mr-2'
                        }`}>
                          {message.sender === 'user' ? (
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                              <User className="w-4 h-4 text-primary-foreground" />
                            </div>
                          ) : (
                            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                              <Bot className="w-4 h-4 text-secondary-foreground" />
                            </div>
                          )}
                        </div>
                        <div className={`rounded-lg p-3 ${
                          message.sender === 'user' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          <p className="whitespace-pre-wrap">{message.message}</p>
                          <p className="text-xs mt-1 opacity-70">
                            {message.timestamp.toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  {isLoading && (
                    <motion.div 
                      className="flex justify-start"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-2">
                          <Bot className="w-4 h-4 text-secondary-foreground" />
                        </div>
                        <div className="bg-muted rounded-lg p-3">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </ScrollArea>

              <div className="flex space-x-2">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about Python..."
                  disabled={isLoading}
                />
                <Button 
                  onClick={handleSendMessage} 
                  disabled={isLoading || !newMessage.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>

              <p className="text-xs text-muted-foreground mt-2 text-center">
                This is a demo version. In the full implementation, I can execute and analyze Python code.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}