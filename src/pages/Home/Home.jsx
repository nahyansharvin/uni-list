import React from 'react'
import useHome from './useHome';
import ContentWrapper from '../../components/common/ContentWrapper';
import Table from './components/Table';

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';



const Home = () => {
    const { bgColor } = useHome();

    return (
        <ContentWrapper>
            <h1 className='text-3xl font-bold mb-2 text-blue-900'>Universities</h1>
            {/* <div className='bg-white w-full p-5 rounded-2xl shadow-md shadow-blue-100 flex justify-between'>
                <div class="relative w-1/3">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-blue-800" placeholder="Search" required />
                </div>

                <button type="button" class="px-8 py-2 text-base font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                    <AddRoundedIcon />
                    Add
                </button>

            </div> */}

            <div className='mt-5 w-full p-3 rounded-2xl shadow-md shadow-blue-100' style={{backgroundColor: bgColor}}>
                <Table />
            </div>
        </ContentWrapper>
    )
}

export default Home