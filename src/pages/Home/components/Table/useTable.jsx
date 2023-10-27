import { useEffect, useState } from 'react'
import { getCoreRowModel, getPaginationRowModel, useReactTable, getSortedRowModel, getFilteredRowModel } from '@tanstack/react-table'
import { getUniversitiesInCountry } from '../../../../services/UniversityService';
import handleApiError from '../../../../utils/handleApiError';

/** @type import('@tanstack/react-table').columnDef<any> */
const columns = [
    {
        accessorKey: 'name',
        header: 'University',
    },
    {
        accessorKey: 'country',
        header: 'Country',
    },
    {
        accessorKey: 'web_pages',
        header: 'Website',
        cell: (props) => <a href={props.getValue()} target='_blank' className='text-link'>{props.getValue()}</a>
    },

]

const useTable = () => {
    const [sorting, setSorting] = useState([]);
    const [filter, setFilter] = useState('');
    const [universities, setUniversities] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [updateModal, setUpdateModal] = useState(false);
    const [uniToUpdate, setUniToUpdate] = useState({});
    const [updateIndex, setUpdateIndex] = useState(null);

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

        if (universities.length == 0) fetchData();
    }, []);

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

    function handleCloseModal() {
        setModalVisible(false);
        setUpdateModal(false);
    };

    function handleEditButtonClick(index) {
        setUniToUpdate(universities[index]);
        setUpdateIndex(index);
        setUpdateModal(true);
        setModalVisible(true);
    };

    function addUniversity({ college, country, website }) {
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
        setUniversities([...universities, newUniversity]);
        handleCloseModal();
    };

    function updateUniversity({ index, college, country, website }) {
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
        let newUniversities = [...universities];
        newUniversities[index] = newUniversity;
        setUniversities(newUniversities);
        handleCloseModal();
    };

    function deleteUniversity(index) {
        let newUniversities = [...universities];
        newUniversities.splice(index, 1);
        setUniversities(newUniversities);
    };

    return {
        table,
        filter,
        setFilter,
        modalVisible,
        setModalVisible,
        addUniversity,
        handleEditButtonClick,
        uniToUpdate,
        updateIndex,
        updateModal,
        updateUniversity,
        deleteUniversity,
        handleCloseModal
    }
}

export default useTable