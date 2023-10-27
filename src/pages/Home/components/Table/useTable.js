import { useCallback, useEffect, useState } from 'react'
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
    const [addModalVisible, setAddModalVisible] = useState(false);

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

        if(universities.length == 0) fetchData();
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

    function addUniversity({college, country, website}) {
        let newUniversity = {
            "state-province": null,
            "country": country,
            "domains": [
                new URL(website).hostname
            ],
            "web_pages": [
                website
            ],
            "alpha_two_code": "US",
            "name": college
        };
        console.log(newUniversity);
        setUniversities([...universities, newUniversity]);
        setAddModalVisible(false);
    }

    return { table, filter, setFilter, addModalVisible, setAddModalVisible ,addUniversity }
}

export default useTable