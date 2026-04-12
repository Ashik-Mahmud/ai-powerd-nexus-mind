
import { 
  User, Bot, Settings, Wrench, 
  Brain, Terminal, Activity, Info 
} from 'lucide-react';

const ROLE_CONFIG = {
  user: {
    icon: <User size={16} />,
    color: "bg-purple-500",
    label: "You",
    align: "justify-end",
    bubble: "bg-purple-600 from-blue-600 to-purple-500 bg-gradient-to-br  text-white rounded-br-none"
  },
  assistant: {
    icon: <Bot size={16} />,
    color: "bg-blue-600",
    label: "Nexus",
    align: "justify-start",
    bubble: "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-bl-none"
  },
  reasoning: {
    icon: <Brain size={16} />,
    color: "bg-amber-500",
    label: "Thinking",
    align: "justify-start",
    bubble: "bg-amber-50/50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800 italic text-slate-600 dark:text-amber-200/70"
  },
  tool: {
    icon: <Wrench size={16} />,
    color: "bg-purple-500",
    label: "Tool Call",
    align: "justify-start",
    bubble: "bg-slate-100 dark:bg-slate-900 font-mono text-xs border-dashed border-slate-300 dark:border-slate-700"
  },
  developer: {
    icon: <Terminal size={16} />,
    color: "bg-slate-700",
    label: "Dev Log",
    align: "justify-start",
    bubble: "bg-slate-900 text-green-400 font-mono text-xs border-none"
  },
  activity: {
    icon: <Activity size={16} />,
    color: "bg-rose-500",
    label: "Action",
    align: "justify-start",
    bubble: "bg-transparent border-none shadow-none text-slate-400 italic py-0"
  },
  system: {
    icon: <Settings size={16} />,
    color: "bg-slate-400",
    label: "System",
    align: "justify-center", // System messages are usually centered
    bubble: "bg-slate-200 dark:bg-slate-800 text-[10px] uppercase tracking-widest py-1"
  }
};


type Props ={
    message: {
        id: string;
        role: 'user' | 'assistant' | 'reasoning' | 'tool' | 'developer' | 'activity' | 'system';
        content: string | object;
    };
    isLast: boolean;
    isRunning: boolean;
}
const ChatMessage = ({ message, isLast, isRunning }: Props) => {
  const config = ROLE_CONFIG[message.role] || ROLE_CONFIG.assistant;
  const isUser = message.role === 'user';

  return (
    <div className={`flex w-full mb-6 ${config.align} animate-in fade-in slide-in-from-bottom-2`}>
      <div className={`flex max-w-[85%] lg:max-w-2xl ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        
        {/* Avatar Area */}
        <div className={`flex flex-col items-center shrink-0 ${isUser ? 'ml-3' : 'mr-3'}`}>
          <div className={`w-8 h-8 rounded-lg grid place-items-center text-white shadow-md ${config.color}`}>
            {config.icon}
          </div>
        </div>

        {/* Message Content Area */}
        <div className="flex flex-col">
          <span className={`text-[10px] font-bold uppercase tracking-tight mb-1 opacity-50 ${isUser ? 'text-right' : 'text-left'}`}>
             {config.label}
          </span>
          
          <div className={`px-4 py-3 rounded-2xl shadow-sm border transition-colors ${config.bubble}`}>
            {/* Thinking State */}
            {isRunning && isLast && !isUser && (
               <div className="flex items-center gap-2 mb-2 text-blue-500 animate-pulse">
                 <div className="w-1.5 h-1.5 bg-current rounded-full animate-bounce" />
                 <span className="text-xs font-medium">Processing...</span>
               </div>
            )}

            {/* Content Rendering */}
            <div className="text-sm leading-relaxed whitespace-pre-wrap">
              {typeof message.content === 'object' ? JSON.stringify(message.content, null, 2) : message.content}
            </div>

            {/* Timestamp */}
            <div className={`text-[10px] mt-2 opacity-40 ${isUser ? 'text-right' : 'text-left'}`}>
              {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;