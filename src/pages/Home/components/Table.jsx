import React from 'react'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

/** @type import('@tanstack/react-table').columnDef<any> */
const columns = [
    {
        accessorKey: 'name',
        header: 'University',
        cell: (props) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'country',
        header: 'Country',
        cell: (props) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'web_pages',
        header: 'Website',
        cell: (props) => <a href={props.getValue()}>{props.getValue()}</a>
    },

]

const Table = ({ data }) => {
    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel()
    })


    return (
        <table className='bg-white w-full'>
            <thead>
                {/* Header */}
                {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id} className='flex'>
                        {headerGroup.headers.map((header) => (
                            <th key={header.id} className='flex-1 text-le'>
                                {header.column.columnDef.header}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>

            {/* Body */}
            {table.getRowModel().rows.map((row) => (
                <div key={row.id} className='flex'>
                    {row.getVisibleCells().map((cell) => (
                        <div key={cell.id} className='flex-1'>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </div>
                    ))}

                </div>
            ))}

        </table>
    )
}

export default Table