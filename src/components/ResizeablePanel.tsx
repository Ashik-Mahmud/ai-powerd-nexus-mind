"use client";
import React, { useState } from 'react'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './ui/resizable'
import ChatPanel from './ChatPanel'
import { LucideMenu, LucideX } from 'lucide-react';

type Props = {}

const ResizeablePanel = (props: Props) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div className='relative h-[calc(100vh-200px)] rounded-md border dark:border-slate-900'>
            <ResizablePanelGroup orientation="horizontal" >
                <ResizablePanel  className='relative w-full '>
                    <div className=" p-4 h-full rounded-md border dark:border-gray-800">
                        <h3 className="text-lg font-semibold">File Panel</h3>
                        <p>This is where the file panel content will go.</p>
                        <button
                            className="flex items-center gap-2 p-2 rounded-md text-gray-500 hover:text-gray-700"
                            onClick={toggleExpansion}
                        >
                            <LucideMenu className="h-4 w-4" />
                            <span>Toggle Explanation</span>
                        </button>
                    </div>
                    {isExpanded && (
                        <div className="absolute top-0 right-0 bg-white p-4">
                            <h3 className="text-lg font-semibold">Explanation</h3>
                            <p>This is where the explanation content will go.</p>
                            <button
                                className="flex items-center gap-2 p-2 rounded-md text-gray-500 hover:text-gray-700"
                                onClick={toggleExpansion}
                            >
                                <LucideX className="h-4 w-4" />
                                <span>Hide Explanation</span>
                            </button>
                        </div>
                    )}
                </ResizablePanel>
                <ResizableHandle withHandle className="bg-gray-200 dark:bg-gray-800"  />
                <ResizablePanel>
                    <ChatPanel />
                </ResizablePanel>
            </ResizablePanelGroup>

        </div>
    )
}

export default ResizeablePanel