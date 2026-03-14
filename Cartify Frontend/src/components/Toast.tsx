import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Info, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  text: string;
  type: 'success' | 'info';
}

interface ToastContainerProps {
  messages: ToastMessage[];
  onRemove: (id: string) => void;
}

export const ToastContainer: React.FC = ({ messages, onRemove }) => {
  return (
    
      
        {messages.map((msg) => (
          
            {msg.type === 'success' ? (
              
            ) : (
              
            )}
            {msg.text}
             onRemove(msg.id)}
              className="p-1 hover:bg-brand-50 dark:hover:bg-brand-800 rounded-lg transition-colors"
            >
              
            
          
        ))}
      
    
  );
};

