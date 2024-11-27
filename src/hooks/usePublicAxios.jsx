import axios from "axios";

const usePublicAxios = () => {

    const instance = axios.create({
        baseURL: 'https://some-domain.com/api/',
    });

    return (instance);
};

export default usePublicAxios;