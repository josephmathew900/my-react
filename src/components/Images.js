import Axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Image from './Image';


export default function Images() {

    const [images, setimages] = useState([]);

    const [newImageUrl, setnewImageUrl] = useState("");

    const inputRef = useRef(null);

    useEffect(() => {
        // const inputBox = document.getElementById('inputBox');
        // inputBox.focus();
        inputRef.current.focus();
        Axios.get(
            'https://api.unsplash.com/photos/?client_id=PDZGis7ls5tVcgB64pT5hDuUTNkJWg6GJhHT7tiuatk'
            ).then(res => {
                setimages(res.data);
            });

    }, []);

    function handleAdd(){
        if(newImageUrl !== ""){
            setimages([...images,newImageUrl]);
            setnewImageUrl("");
        }  
    }

    function handleRemove(index){
        //setimages(images.filter((image,i) => i !== index));
        setimages([
            ...images.slice(0,index), 
            ...images.slice(index+1,images.length)
        ]);
    }

    function handleChange(event){
        setnewImageUrl(event.target.value);
    }

    function ShowImage(){
        return images.map((img, index) => <Image index={index} image={img.urls.regular} handleRemove={handleRemove} key={index}/>);
    }

    return (
        <section>
            <div className="flex flex-wrap justify-center my-5">
                <ShowImage />
            </div>
            <div className="flex justify-between my-5">
                <div className="w-full">
                    <input 
                        type="text"
                        id="inputBox"
                        ref={ inputRef }
                        className="p-2 border border-gray-800 shadow rounded w-full" 
                        onChange={handleChange}
                        value={ newImageUrl }/>
                </div>
                <div>
                    <button
                        disabled={ newImageUrl === "" } 
                        className={`p-2 text-white ml-2 ${newImageUrl !== ""?"bg-green-600":"bg-green-300"}`} 
                        onClick={ handleAdd }>
                        Add
                    </button>
                </div>
            </div>
        </section>
    )
}


