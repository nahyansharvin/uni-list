import React, { useEffect, useMemo, useState } from 'react'
import { getUniversitiesInCountry } from '../../services/UniversityService';
import handleApiError from '../../utils/handleApiError';

const useHome = () => {
    const [universities, setUniversities] = useState([]);
    const memoisedUniversities = useMemo(() => universities, [universities]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const uni = await getUniversitiesInCountry('United States');
                setUniversities(uni);
            } catch (error) {
                handleApiError(error)
                console.error('Error fetching universities:', error);
            }
        };

        fetchData();
    }, [])

    return { universities: memoisedUniversities }
}

export default useHome