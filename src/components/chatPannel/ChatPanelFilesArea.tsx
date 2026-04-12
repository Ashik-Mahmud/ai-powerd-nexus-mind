import React from 'react'
import FilesAnimatedList from '../ui/FilesAnimatedList'

type Props = {}

const ChatPanelFilesArea = (props: Props) => {
    const items = [
        {
            name: 'File 1',
            id: 'file1',
            size: '2 MB',
            type: 'PDF',
            modified: '2023-10-01',
        },
        {
            name: 'File 2',
            id: 'file2',
            size: '3 MB',
            type: 'DOCX',
            modified: '2023-10-02',
        },
        {
            name: 'File 3',
            id: 'file3',
            size: '1 MB',
            type: 'TXT',
            modified: '2023-10-03',
        },
        {
            name: 'File 4',
            id: 'file4',
            size: '5 MB',
            type: 'XLSX',
            modified: '2023-10-04',
        },
        {
            name: 'File 5',
            id: 'file5',
            size: '4 MB',
            type: 'PPTX',
            modified: '2023-10-05',
        },
        {
            name: 'File 6',
            id: 'file6',
            size: '6 MB',
            type: 'PDF',
            modified: '2023-10-06',
        }


    ];
    return (
        <div className=" h-full rounded-md scrollbar-hide  dark:border-gray-800 ">
            <div className="flex gap-4 justify-between items-center sticky top-0 z-10 bg-white dark:bg-gray-900 p-4  dark:border-gray-800">
                <h3 className="text-lg font-semibold">Files Panel</h3>
                {/* Search Input */}
                <div className="ml-auto flex items-center  gap-4 w-[60%] ">
                    <input
                        type="text"
                        placeholder="Search files..."
                        className="px-4 py-2 rounded-md border w-full  dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                </div>
            </div>


            <FilesAnimatedList
                items={items}
                onItemSelect={(item, index) => console.log(item, index)}
                showGradients={false}
                enableArrowNavigation
                displayScrollbar={false}
                className='font-mono '
            />
        </div>
    )
}

export default ChatPanelFilesArea