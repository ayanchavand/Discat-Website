import React from "react";
import { useState } from "react";
import axios from 'axios'

export default function ReportBody({sendCat, sendDog}){
    const [url, setUrl] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjvKVPWNACMZqeZEIKjjn4_ihfsK1y9jUjiw&s')
    
    const handleCatClick = async () =>{
        const apiUrl = 'https://api.thecatapi.com/v1/images/search'
        try {
            const res = await axios.get(apiUrl)
            console.log(res.data[0].url)
            setUrl(res.data[0].url)
        } catch(error){
            console.error(error.message)
        }
    }

    const handleDogClick = async () => {
        const apiUrl = 'https://dog.ceo/api/breeds/image/random'
        try{
            const res = await axios.get(apiUrl)
            console.log(res.data.message)
            setUrl(res.data.message)
        } catch(error){
            console.error(error.message)
        }
    }
    
    return(
        <>  
            <div className="flex justify-center  w-full h-[600px] overflow-hidden p-10 ">
                <img 
                src={url}
                className="w-full max-w-[800px] max-h-[500px] object-contain"></img>
            </div>
            <div className="flex space-x-7 p-6 justify-center">
                <button 
                onClick={handleCatClick}
                className="bg-purple-600 text-white font-bold py-4 px-8 rounded-full">
                Cats
                </button>
                <button 
                onClick={handleDogClick}
                className="bg-purple-600 text-white font-bold py-2 px-8 rounded-full">
                Dogs
                </button>
            </div>
        </>
    )
}

