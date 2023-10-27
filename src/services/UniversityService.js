import BackendService from "./BackendService";

export const getUniversitiesInCountry = async (country) => {
    const universities = await BackendService.get(`/search?country=${encodeURIComponent(country)}`);

    return universities;
};