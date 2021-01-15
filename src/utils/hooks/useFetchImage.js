import Axios from 'axios';
import { useEffect, useState } from 'react';


const url = process.env.REACT_APP_UNSPLASH_API;
const secret = process.env.REACT_APP_UNSPLASH_KEY;

export default function useFetchImage(page, searchTerm) {

    const [images, setImages] = useState([]);
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        Axios.get(`${url}/search/photos?client_id=${secret}&page=${page}&query=${searchTerm}`)
            .then(res => {
            setImages([...images,...res.data.results]);
            setIsLoading(false);
        }).catch(e => {
            setErrors(e.response.data.errors);
            setIsLoading(false);
        })
    }, [page, searchTerm])

    return [images, setImages, errors, isLoading];
}