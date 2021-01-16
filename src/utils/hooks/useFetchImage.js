import Axios from "axios";
import { useEffect, useState } from "react";

const api = process.env.REACT_APP_UNSPLASH_API;
const secret = process.env.REACT_APP_UNSPLASH_KEY;

export default function useFetchImage(page, searchTerm) {
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function fetch() {
    const url =
      searchTerm === null || searchTerm === ""
        ? "photos?"
        : `search/photos?query=${searchTerm}&`;
    console.log(`${api}/${url}client_id=${secret}&page=${page}`);
    console.log(page);
    Axios.get(`${api}/${url}client_id=${secret}&page=${page}`)
      .then((res) => {
        if (searchTerm === null || searchTerm === "") {
          fetchRandom(res);
        } else {
          fetchSearch(res);
        }
        setIsLoading(false);
      })
      .catch((e) => {
        setErrors(e.response.data.errors);
        setIsLoading(false);
      });
  }

  function fetchSearch(res) {
    page > 1
      ? setImages([...images, ...res.data.results])
      : setImages([...res.data.results]);
  }

  function fetchRandom(res) {
    page > 1 ? setImages([...images, ...res.data]) : setImages([...res.data]);
  }

  useEffect(() => {
    setIsLoading(true);
    fetch();
  }, [page, searchTerm]);

  return [images, setImages, errors, isLoading];
}
