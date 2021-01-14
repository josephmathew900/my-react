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
        return images.map((image) => {
            return (
                <div>
                    <img src={ image } width="150" alt="img ld"/>
                </div>
            )
        })
    }

    function handleAdd(){
        setimages([...images,newImageUrl]);
        setnewImageUrl("");
    }

    function handleChange(event){
        setnewImageUrl(event.target.value);
    }

    return (
        <section>
            <div className="flex flex-wrap justify-center my-5">
                <ShowImage />
            </div>
            <div className="flex justify-between">
                <input 
                    type="text" 
                    className="p-2 border border-gray-800 shadow rounded" 
                    onChange={handleChange}
                    value={ newImageUrl }/>
                <button className="p-2 bg-green-600 text-white" onClick={ handleAdd }>Add New</button>
            </div>
        </section>
    )
}


