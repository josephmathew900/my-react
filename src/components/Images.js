import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useFetchImage from '../utils/hooks/useFetchImage';
import Image from './Image';
import Loading from './Loading';


export default function Images() {

    const [page, setPage] = useState(1);

    const [images, setImages, errors, isLoading] = useFetchImage(page);


    function handleRemove(index){
        //setimages(images.filter((image,i) => i !== index));
        setImages([
            ...images.slice(0,index), 
            ...images.slice(index+1,images.length)
        ]);
    }

    function ShowImage(){
        return (
        <InfiniteScroll 
            dataLength={images.length} 
            next={() => setPage(page+1)}
            hasMore={true}
            className="flex flex-wrap">
           { images.map((img, index) => <Image index={index} image={img.urls.regular} handleRemove={handleRemove} key={index}/>) }
        </InfiniteScroll> 
        );
    }

    return (
        <section>
            { errors.length > 0 ?
                <div className="flex h-screen">
                    <p className="m-auto">{errors[0]}</p>
                </div> : null
            }
            <ShowImage />
            { isLoading && <Loading /> } 
        </section>
    )
}


