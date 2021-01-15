import React, { useState } from 'react';
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
        return images.map((img, index) => <Image index={index} image={img.urls.regular} handleRemove={handleRemove} key={index}/>);
    }

    return isLoading ? ( 
        <Loading />
    ) : (
        <section>
            { errors.length > 0 ?
                <div className="flex h-screen">
                    <p className="m-auto">{errors[0]}</p>
                </div> : null
            }
            <div className="gap-0" style={{columnCount:5}}>
                <ShowImage />
            </div>
            {
                errors.length > 0 ? null : 
                    <button onClick={() => setPage(page+1)}>Load More</button>
            }
            
        </section>
    )
}


