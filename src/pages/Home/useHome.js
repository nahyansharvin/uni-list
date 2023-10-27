import { useEffect, useState } from 'react';

const useHome = () => {
    const [bgColor, setBgColor] = useState('');

    function getRandomMutedColor() {
        // Generate random values for RGB components
        const r = Math.floor(Math.random() * 128 + 128);
        const g = Math.floor(Math.random() * 128 + 128);
        const b = Math.floor(Math.random() * 128 + 128);
        
        return `rgb(${r}, ${g}, ${b})`;
    };
    
    useEffect(() => {
        setBgColor(getRandomMutedColor());
    }, []);
    
    return { bgColor }
}

export default useHome