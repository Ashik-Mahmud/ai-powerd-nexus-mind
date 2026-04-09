import React from 'react'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './ui/resizable'
import ChatPanel from './ChatPanel'

type Props = {}

const ResizeablePanel = (props: Props) => {
    return (
        <div>
            <ResizablePanelGroup orientation="horizontal">
                <ResizablePanel>One</ResizablePanel>
                <ResizableHandle />
                <ResizablePanel>
                    <ChatPanel />
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    )
}

export default ResizeablePanel