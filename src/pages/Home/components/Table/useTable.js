import { useEffect, useState } from 'react'
import { getCoreRowModel, getPaginationRowModel, useReactTable, getSortedRowModel, getFilteredRowModel } from '@tanstack/react-table'
import { getUniversitiesInCountry } from '../../../../services/UniversityService';
import handleApiError from '../../../../utils/handleApiError';


/** @type import('@tanstack/react-table').columnDef<any> */
const columns = [
    {
        accessorKey: 'name',
        header: 'University',
        // cell: (props) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'country',
        header: 'Country',
        // cell: (props) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'web_pages',
        header: 'Website',
        // cell: (props) => <a href={props.getValue()}>{props.getValue()}</a>
    },

]

const useTable = () => {
    const [sorting, setSorting] = useState([]);
    const [filter, setFilter] = useState('');
    const [universities, setUniversities] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const uni = await getUniversitiesInCountry('United States');
                setUniversities(uni);
            } catch (error) {
                handleApiError(error);
                console.error('Error fetching universities:', error);
            }
        };

        fetchData();
    }, [])

    const table = useReactTable({
        columns,
        data: universities,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting: sorting,
            globalFilter: filter,            
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setFilter,
        getPaginationRowModel: getPaginationRowModel(),
    });

  return { table, filter, setFilter }
}

export default useTable