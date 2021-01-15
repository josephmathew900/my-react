import Axios from 'axios';
import { useEffect, useState } from 'react';


const url = process.env.REACT_APP_UNSPLASH_URL;
const secret = process.env.REACT_APP_UNSPLASH_KEY;

export default function useFetchImage(page) {

    const [images, setImages] = useState([]);
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        Axios.get(`${url}?client_id=${secret}&page=${page}`)
            .then(res => {
            setImages([...images,...res.data]);
            setIsLoading(false);
        }).catch(e => {
            setErrors(e.response.data.errors);
            setIsLoading(false);
        })
    }, [page])

    return [images, setImages, errors, isLoading];
}