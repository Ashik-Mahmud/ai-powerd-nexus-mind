"use client";
import React, { useState } from 'react'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './ui/resizable'
import ChatPanel from './chatPannel/ChatPanel'
import { LucideMenu, LucideX } from 'lucide-react';
import FilesAnimatedList from './ui/FilesAnimatedList';
import ChatPanelFilesArea from './chatPannel/ChatPanelFilesArea';

type Props = {}

const ResizeablePanel = (props: Props) => {


    return (
        <div className='relative h-[calc(100vh-200px)] rounded-md border dark:border-slate-900'>
            <ResizablePanelGroup orientation="horizontal" >
                <ResizablePanel className='relative scrollbar-hide' minSize={370} maxSize={600} defaultSize={400}
                   
                >
                    <ChatPanelFilesArea />
                </ResizablePanel>
                <ResizableHandle withHandle className="bg-gray-200 dark:bg-gray-800" />
                <ResizablePanel>
                    <ChatPanel />
                </ResizablePanel>
            </ResizablePanelGroup>

        </div>
    )
}

export default ResizeablePanel