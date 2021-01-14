import React, { useState } from 'react'


export default function Images() {

    const [images, setimages] = useState([
        "https://images.unsplash.com/photo-1610381812786-592c70146600?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1610492273249-6406a1154eae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1610473068893-7a63129207d2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1610551001381-d62bbbbd9299?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    ]);

    const [newImageUrl, setnewImageUrl] = useState("");

    function ShowImage(){
        return images.map((image, index) => {
            return (
                <div className="w-1/3 my-4 flex justify-center" key={index}>
                    <img src={ image } width="150" alt="img ld" onClick={ () => handleRemove(index) }/>
                </div>
            )
        })
    }

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

    return (
        <section>
            <div className="flex flex-wrap justify-center my-5">
                <ShowImage />
            </div>
            <div className="flex justify-between my-5">
                <div className="w-full">
                    <input 
                        type="text" 
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


