import { flexRender } from '@tanstack/react-table';

import IconButton from '@mui/material/IconButton';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import FormModal from '../FormModal';

import Pagination from './Pagination';
import useTable from './useTable';
import SearchBox from '../../../../components/common/SearchBox';


const Table = () => {
    const { 
        table,
        filter,
        setFilter,
        modalVisible,
        setModalVisible,
        addUniversity,
        updateModal,
        updateUniversity,
        deleteUniversity,
        handleEditButtonClick,
        uniToUpdate,
        updateIndex,
        handleCloseModal
    } = useTable();

    return (
        <>
            <FormModal
                visible={modalVisible}
                handleClose={handleCloseModal}
                handleAdd={addUniversity}
                handleUpdate={updateUniversity}
                updateIndex={updateIndex}
                prevData={uniToUpdate}
                update={updateModal}
            />

            <div className='flex justify-between p-3'>
                <SearchBox value={filter} setValue={setFilter} />
                <button type="button" className="px-8 py-2 text-base font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800" onClick={() => setModalVisible(true)}>
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
                                    {{ asc: ' ↑', desc: ' ↓' }[header.column.getIsSorted() ?? null]}
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
                                <IconButton aria-label="edit" color='primary' onClick={() => handleEditButtonClick(row.id)}>
                                    <BorderColorRoundedIcon />
                                </IconButton>
                                <IconButton aria-label="delete" color='error' onClick={() => deleteUniversity(row.id)}>
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