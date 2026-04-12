
"use client"
import React from 'react'
import ChatPanel from './ChatPanel'
import RotatingText from '../ui/RotatingText'
import ResizeablePanel from '../ResizeablePanel'

type Props = {}

const ChatAreaWrapper = (props: Props) => {
    return (
        <div>

            {/* <div className="title flex items-center gap-2 text-3xl font-bold bg-gradient-to-r text-purple-400 bg-clip-text text-transparent">
                Welcome to
                <RotatingText
                    texts={['Chat', 'AI Assistant', 'Dashboard', 'Files Summarizer', 'Text Summarizer']}
                    mainClassName="px-2 sm:px-2 md:px-3 bg-purple-600 text-black overflow-hidden py-0.5 sm:py-1 md:py-1 justify-center rounded-lg"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                />
            </div> */}
            {/* Put the title here */}
            <div className="title-area mb-5">
                <h1 className="text-4xl font-bold bg-gradient-to-r font-mono from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Welcome to Your AI Assistant Dashboard
                </h1>
                <p className="text-slate-400 text-base font-mono mt-2">
                    Personalized AI With Your Documents
                </p>

            </div>

            <ResizeablePanel />
        </div>
    )
}

export default ChatAreaWrapper