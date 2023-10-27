import { flexRender } from '@tanstack/react-table'

import IconButton from '@mui/material/IconButton';

import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import FormModal from '../FormModal';

import Pagination from './Pagination';
import useTable from './useTable';


const Table = () => {
    const { table, filter, setFilter } = useTable();

    return (
        <>
            {/* <FormModal /> */}
            <div className='flex justify-between p-3'>
            <div className="relative w-1/3">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="filter" value={filter} onChange={ e => setFilter(e.target.value)} className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-blue-800" placeholder="Search" required />
                </div>

                <button type="button" className="px-8 py-2 text-base font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                    <AddRoundedIcon />
                    Add
                </button>
            </div>
            <table className='rounded-t-md overflow-hidden w-full'>
                <thead className='border-b-[1px] bg-neutral-300'>
                    {/* Header */}
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id} className='flex text-left text-lg text-blue-900 tracking-wide'>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id} className='flex-1 p-2 cursor-pointer' onClick={header.column.getToggleSortingHandler()}>
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                    {{asc: ' ↑', desc: ' ↓'}[header.column.getIsSorted() ?? null]}
                                </th>
                            ))}
                            <th className='p-2'>Actions</th>
                        </tr>
                    ))}
                </thead>

                {/* Body */}
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id} className='flex even:bg-neutral-100'>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id} className='flex-1 p-2'>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                            <td className='p-1'>
                                <IconButton aria-label="edit" color='primary'>
                                    <BorderColorRoundedIcon />
                                </IconButton>
                                <IconButton aria-label="delete" color='error'>
                                    <DeleteRoundedIcon />
                                </IconButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination table={table} />
        </>
    )
}

export default Table