
"use client";

import { useCopilotChat, useCopilotChatHeadless_c } from "@copilotkit/react-core";
import { CopilotKitCoreRunAgentParams, randomUUID, useAgent, useAgentContext, useConfigureSuggestions, useCopilotKit, useFrontendTool, useSuggestions } from "@copilotkit/react-core/v2";
import "@copilotkit/react-ui/styles.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { z } from "zod";
import { TextMessage, MessageRole } from "@copilotkit/runtime-client-gql";
import { useTheme } from "../context/ThemeContext";
interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

export default function ChatPanel() {

    const { isDarkMode, toggleTheme } = useTheme();
    const [background, setBackground] = useState<string>("--copilot-kit-background-color");
    const [messagesData, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: 'Hello! How can I help you today?',
            sender: 'bot',
            timestamp: new Date(),
        },
    ]);
    const [inputText, setInputText] = useState('');
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    // agentId "default" links to your runtime config
    // 1. Get the agent instance (messages, state, isRunning)
    const { agent } = useAgent({
        agentId: "default", // or your specific LangGraph agent ID
    });

    // 2. Get the core controller to actually "execute" the agent
    const { copilotkit } = useCopilotKit();

    const handleSend = useCallback(async () => {
        if (!inputText.trim()) return;


        // 3. Manually add the user's message to the local UI state
        agent.addMessage({
            id: randomUUID(),
            role: "user",
            content: inputText,
        });

        const currentInput = inputText;
        setInputText("");

        // 4. Trigger the agent to think and respond
        await copilotkit.runAgent({
            agent,
            // Optional: pass data directly to the agent without a message
            forwardedProps: { lastAction: "user_sent_message" }
        });
    }, [inputText, agent, copilotkit]);


    useAgentContext({
        description: 'Name of the user',
        value: `Nexus User`,
    });
   


    useConfigureSuggestions({
        suggestions: [
            {
                title: "Change Theme",
                message: "Change the theme color vise versa.",
            },

        ],
        available: "always",
    });

    useFrontendTool({
        name: "change_theme",
        description: "Change the app theme between light and dark mode.",
        parameters: z.object({
            themePreference: z.enum(["light", "dark"]).describe("The theme to switch to"),
        }),
        handler: async ({ themePreference }) => {
            // Logic: Only toggle if the requested theme is different from current
            console.log(themePreference, 'themePreference')
            if (
                (themePreference === "dark" && !isDarkMode) ||
                (themePreference === "light" && isDarkMode)
            ) {
                toggleTheme();
            }

           
        },
    });
    // 2. Access the actual generated suggestion values
    const { suggestions, isLoading } = useSuggestions();
    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                handleSend();
            }
        },
        [handleSend]
    );

    useEffect(() => {
        if (!messagesEndRef.current) return;
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, []);


    return (

        <div className="h-full w-full grid grid-rows-[1fr_auto] min-h-0 bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800" style={{ background }}>
            {/* Header */}
            {/* <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                        N
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Nexus Chat</h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400">AI Assistant</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                    <span>{agent ? 'Custom agent ready' : 'Custom agent'}</span>
                    <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                        <svg className="w-5 h-5 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </button>
                </div>
            </div> */}


            {
                agent.messages?.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full">
                        {/* Greeting and instructions */}
                        <div className="text-center">
                            <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-4">Nexus Chat</h1>
                            <p className="text-lg text-slate-600 dark:text-slate-400">AI Assistant</p>
                            <p>Welcome to Nexus Chat! How can I help you today?</p>
                        </div>
                        <div className="flex gap-3 mt-4">
                            {
                                suggestions.map((suggestion) => (
                                    <div key={suggestion.title} onClick={() => {
                                        if (suggestion.message) {
                                            setInputText(suggestion.message);
                                            handleSend();
                                        }
                                    }}
                                        className=" bg-slate-100 dark:bg-slate-800 p-1 text-xs rounded-lg px-2 cursor-pointer">
                                        {suggestion.title}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ) : <>
                    {/* Messages Area */}
                    <div className="overflow-y-auto p-4 space-y-4 min-h-0 " style={{
                        // design scrollbar
                        scrollbarWidth: 'thin',
                        scrollbarColor: 'rgb(255, 255, 255) rgb(156, 163, 175)',
                        msOverflowStyle: 'scrollbar'

                    }}>

                        {agent.messages.map((message) => (
                            <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`flex max-w-xs lg:max-w-md xl:max-w-lg ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                    <div className={`w-8 h-8 rounded-full grid place-items-center dark:text-white  font-semibold text-sm shrink-0 ${message.role === 'user' ? 'ml-3 bg-linear-to-br from-green-500 to-emerald-600' : 'mr-3 bg-linear-to-br from-blue-500 to-purple-600'}`}>
                                        {message.role === 'user' ? 'U' : 'N'}
                                    </div>
                                    <div className={`px-4 py-2 rounded-2xl shadow-sm ${message.role === 'user'
                                        ? 'bg-linear-to-br from-green-500 to-emerald-600 text-white'
                                        : 'bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-600'}
                            `}>
                                        {agent.isRunning && message.role !== 'user' && message.id === agent.messages[agent.messages.length - 1].id && <span>Thinking...</span>}
                                        <p className="text-sm leading-relaxed whitespace-pre-wrap text-gray-600 dark:text-gray-100"> {message.content instanceof Object && 'text' in message.content ? message.content.text : message.content}</p>
                                        <p className={`text-xs mt-1 ${message.role === 'user' ? 'dark:text-green-100' : 'text-slate-500 dark:text-slate-400'}`}>
                                            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                </>
            }



            {/* Input Area */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <div className="flex items-end gap-3">
                    <div className="w-10 h-10 bg-linear-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-semibold shrink-0">
                        U
                    </div>
                    <div className="relative flex-1">
                        <input
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}

                            placeholder="Type your message..."
                            className="w-full resize-none rounded-2xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-4 py-3 pr-14 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent max-h-32 min-h-11"

                        />
                        <button
                            type="button"
                            onClick={handleSend}
                            disabled={!inputText.trim() || agent.isRunning}
                            className="absolute right-2 bottom-2 p-2 rounded-xl bg-linear-to-br from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-2 text-xs text-slate-500 dark:text-slate-400">


                </div>
            </div>
        </div >
    );
}

