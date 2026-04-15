"use client"

import React from 'react'
import SpotlightCard from '../ui/SpotlightCard'
import { LucideFileImage, LucideFileSpreadsheet, LucideFileText, Search } from 'lucide-react'
import { Switch } from '../ui/switch'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "../ui/pagination"
import { InputGroup, InputGroupAddon, InputGroupInput } from '../ui/input-group'
type Props = {}
const data = [
   
    {
        name: "Resume",
        id: "resume",
        size: "2 MB",
        type: "PDF",
        modified: "2023-10-01",
        usedInChat: true
    },
    {
        name: "Resume",
        id: "resume",
        size: "2 MB",
        type: "PDF",
        modified: "2023-10-01",
        usedInChat: true
    },
    {
        name: "Resume",
        id: "resume",
        size: "2 MB",
        type: "PDF",
        modified: "2023-10-01",
        usedInChat: true
    },
    {
        name: "Resume",
        id: "resume",
        size: "2 MB",
        type: "PDF",
        modified: "2023-10-01",
        usedInChat: false
    },
    {
        name: "Resume",
        id: "resume",
        size: "2 MB",
        type: "PDF",
        modified: "2023-10-01",
        usedInChat: true
    },
    {
        name: "Resume",
        id: "resume",
        size: "2 MB",
        type: "PDF",
        modified: "2023-10-01",
        usedInChat: true
    },
    {
        name: "Resume",
        id: "resume",
        size: "2 MB",
        type: "PDF",
        modified: "2023-10-01",
        usedInChat: true
    },
    {
        name: "Resume",
        id: "resume",
        size: "2 MB",
        type: "PDF",
        modified: "2023-10-01",
        usedInChat: true
    },
    {
        name: "Resume",
        id: "resume",
        size: "2 MB",
        type: "PDF",
        modified: "2023-10-01",
        usedInChat: true
    },
    {
        name: "Resume",
        id: "resume",
        size: "2 MB",
        type: "PDF",
        modified: "2023-10-01",
        usedInChat: false
    },
    {
        name: "Resume",
        id: "resume",
        size: "2 MB",
        type: "PDF",
        modified: "2023-10-01",
        usedInChat: true
    },
    {
        name: "Resume",
        id: "resume",
        size: "2 MB",
        type: "PDF",
        modified: "2023-10-01",
        usedInChat: true
    },
    {
        name: "Resume",
        id: "resume",
        size: "2 MB",
        type: "PDF",
        modified: "2023-10-01",
        usedInChat: true
    },
    {
        name: "Resume",
        id: "resume",
        size: "2 MB",
        type: "PDF",
        modified: "2023-10-01",
        usedInChat: false
    },
    {
        name: "Resume",
        id: "resume",
        size: "2 MB",
        type: "PDF",
        modified: "2023-10-01",
        usedInChat: true
    },
    {
        name: "Resume",
        id: "resume",
        size: "2 MB",
        type: "PDF",
        modified: "2023-10-01",
        usedInChat: true
    },
    {
        name: "Resume",
        id: "resume",
        size: "2 MB",
        type: "PDF",
        modified: "2023-10-01",
        usedInChat: true
    },
    {
        name: "Resume",
        id: "resume",
        size: "2 MB",
        type: "PDF",
        modified: "2023-10-01",
        usedInChat: true
    },
    {
        name: "Resume",
        id: "resume",
        size: "2 MB",
        type: "PDF",
        modified: "2023-10-01",
        usedInChat: true
    },
    {
        name: "Resume",
        id: "resume",
        size: "2 MB",
        type: "PDF",
        modified: "2023-10-01",
        usedInChat: false
    },
    {
        name: "Resume",
        id: "resume",
        size: "2 MB",
        type: "PDF",
        modified: "2023-10-01",
        usedInChat: true
    },
    {
        name: "Resume",
        id: "resume",
        size: "2 MB",
        type: "PDF",
        modified: "2023-10-01",
        usedInChat: true
    },
    {
        name: "Resume",
        id: "resume",
        size: "2 MB",
        type: "PDF",
        modified: "2023-10-01",
        usedInChat: true
    },
    {
        name: "Resume",
        id: "resume",
        size: "2 MB",
        type: "PDF",
        modified: "2023-10-01",
        usedInChat: false
    },
    {
        name: "Resume",
        id: "resume",
        size: "2 MB",
        type: "PDF",
        modified: "2023-10-01",
        usedInChat: true
    },
    {
        name: "Resume",
        id: "resume",
        size: "2 MB",
        type: "PDF",
        modified: "2023-10-01",
        usedInChat: true
    },
    {
        name: "Resume",
        id: "resume",
        size: "2 MB",
        type: "PDF",
        modified: "2023-10-01",
        usedInChat: true
    },
    {
        name: "Resume",
        id: "resume",
        size: "2 MB",
        type: "PDF",
        modified: "2023-10-01",
        usedInChat: true
    },
    {
        name: "Resume",
        id: "resume",
        size: "2 MB",
        type: "PDF",
        modified: "2023-10-01",
        usedInChat: true
    },
    {
        name: "Resume",
        id: "resume",
        size: "2 MB",
        type: "PDF",
        modified: "2023-10-01",
        usedInChat: false
    },
    {
        name: "Resume",
        id: "resume",
        size: "2 MB",
        type: "PDF",
        modified: "2023-10-01",
        usedInChat: true
    },
    {
        name: "Resume",
        id: "resume",
        size: "2 MB",
        type: "PDF",
        modified: "2023-10-01",
        usedInChat: true
    },
    {
        name: "Resume",
        id: "resume",
        size: "2 MB",
        type: "PDF",
        modified: "2023-10-01",
        usedInChat: true
    },
    {
        name: "Resume",
        id: "resume",
        size: "2 MB",
        type: "PDF",
        modified: "2023-10-01",
        usedInChat: false
    },
    {
        name: "Resume",
        id: "resume",
        size: "2 MB",
        type: "PDF",
        modified: "2023-10-01",
        usedInChat: true
    },
    {
        name: "Resume",
        id: "resume",
        size: "2 MB",
        type: "PDF",
        modified: "2023-10-01",
        usedInChat: true
    },
]



const UploadWrapper = (props: Props) => {
    const [uploadedDocs, setUploadedDocs] = React.useState(data)

    // handle switch
    const handleSwitch = (index: number) => {
        setUploadedDocs(
            uploadedDocs.map((item, i) => {
                if (i === index) {
                    return {
                        ...item,
                        usedInChat: !item.usedInChat
                    }
                }
                return item
            }))
    }

    return (
        <div>
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div className='font-mono'>
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Upload Documents
                        </h1>
                        <p className="text-slate-400 mt-2">
                            Upload your files to get personalized AI-powered answers
                        </p>
                    </div>
                    <div>
                        <button className="bg-gradient-to-r from-blue-400 to-purple-400 hover:bg-blue-600 text-white py-2 px-4 rounded font-mono">
                            Add Resource
                        </button>
                    </div>
                </div>
                {/* Upload component will go here */}
                {/* <div className="border-2 border-dashed border-slate-600 rounded-lg p-8 text-center">
                    <p className="text-slate-400">Upload component coming soon...</p>
                </div> */}

                <InputGroup className="max-w-xs">
                    <InputGroupInput placeholder="Search..." />
                    <InputGroupAddon>
                        <Search />
                    </InputGroupAddon>
                    <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
                </InputGroup>

                <div className='h-[calc(100vh-320px)] overflow-auto scrollbar-hide'>
                    <div className="upload-wrapper-inner grid grid-cols-6 gap-4 ">

                        {
                            uploadedDocs.map((item, index) => (
                                <SpotlightCard key={item?.id + index} className="custom-spotlight-card font-mono bg-slate-100 border-slate-200 dark:bg-slate-900 dark:border-slate-700 !p-3 rounded-md" spotlightColor="rgba(0, 229, 255, 0.2)" >
                                    <div className="flex items-start gap-4">
                                        <div className="icon pt-3">
                                            {item.type === 'PDF' && <LucideFileText className="h-8 w-8" />}
                                            {item.type === 'XLSX' && <LucideFileSpreadsheet className="h-8 w-8" />}
                                            {item.type === 'DOCX' && <LucideFileText className="h-8 w-8" />}
                                            {item.type === 'PPTX' && <LucideFileImage className="h-8 w-8" />}
                                            {item.type === 'TXT' && <LucideFileText className="h-8 w-8" />}
                                        </div>
                                        <div className="flex items-center justify-between flex-1">
                                            <div className="info">
                                                <h3 className='text-xl'>
                                                    {item?.name}
                                                </h3>
                                                <p className='text-xs'>
                                                    {item?.type}
                                                </p>
                                                <p className='text-slate-700 dark:text-slate-400 text-xs'> {item?.size} </p>
                                            </div>
                                            <div className="flex-shrink-0 ml-4">
                                                <Switch
                                                    id={`switch-${index}`}
                                                    name={`switch-${index}`}
                                                    className="data-[state=checked]:bg-cyan-500 data-[state=unchecked]:bg-slate-300 dark:data-[state=unchecked]:bg-slate-700"
                                                    // defaultChecked
                                                    checked={item.usedInChat}
                                                    onCheckedChange={(val) => handleSwitch(index)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </SpotlightCard>
                            ))
                        }
                    </div>
                </div>

                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive>
                                2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>


            </div>
        </div>
    )
}

export default UploadWrapper