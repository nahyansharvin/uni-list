import IconButton from '@mui/material/IconButton';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

const Pagination = ({ table }) => {
    return (
        <div className='flex justify-between mt-4'>
            <div className='flex items-center'>
                <p className='text-sm text-gray-700'>Rows per page:</p>
                <select onChange={e => table.setPageSize(e.target.value)} className='border border-gray-300 rounded-md ml-2'>
                    {[10, 20, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            {pageSize}
                        </option>
                    ))}
                </select>
            </div>
            <div className='flex items-center'>

                <IconButton aria-label="first" disabled={!table.getCanPreviousPage()} onClick={() => table.setPageIndex(0)}>
                    <SkipPreviousRoundedIcon />
                </IconButton>
                <IconButton aria-label="prev" disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>
                    <NavigateBeforeRoundedIcon />
                </IconButton>
                <p className='text-sm text-gray-700'>Page {table.options.state.pagination.pageIndex + 1} of {table.getPageCount()}</p>
                <IconButton aria-label="next" disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>
                    <NavigateNextRoundedIcon />
                </IconButton>
                <IconButton aria-label="last" disabled={!table.getCanNextPage()} onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
                    <SkipNextRoundedIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Pagination