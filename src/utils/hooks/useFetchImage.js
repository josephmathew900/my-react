import Axios from 'axios';
import { useEffect, useState } from 'react';


const url = process.env.REACT_APP_UNSPLASH_URL;
const secret = process.env.REACT_APP_UNSPLASH_KEY;

export default function useFetchImage() {

    const [images, setimages] = useState([]);

    useEffect(() => {
        Axios.get(`${url}?client_id=${secret}`).then(res => {
            setimages(res.data);
        });
    }, [])

    return [images, setimages];
}
