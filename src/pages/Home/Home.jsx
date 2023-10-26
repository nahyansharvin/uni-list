import React from 'react'
import useHome from './useHome';
import ContentWrapper from '../../components/common/ContentWrapper';
import Table from './components/Table';


const Home = () => {
    const { universities } = useHome();

    return (
        <ContentWrapper>
            <h1 className=''>Universities Home</h1>
            <div id='search-box' className='bg-white w-full p-5 rounded-lg shadow-md shadow-blue-100'>
                <input type='text' placeholder='Search universities' />
            </div>

            <div id='search-box' className='mt-5 bg-white w-full p-5 rounded-lg shadow-md shadow-blue-100'>
                <Table data={universities} />
            </div>
        </ContentWrapper>
    )
}

export default Home