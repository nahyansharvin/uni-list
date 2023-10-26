import React from 'react'
import useHome from './useHome';

const Home = () => {
    const { universities } = useHome();

    return (
        <div>
            <h1>Universities Home</h1>
        </div>
    )
}

export default Home