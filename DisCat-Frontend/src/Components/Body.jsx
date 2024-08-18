import React from "react";

export default function ReportBody(){
    return(
        <>  
            <div className="flex justify-center p-10 ">
                <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjvKVPWNACMZqeZEIKjjn4_ihfsK1y9jUjiw&s"
            c   lassName="max-w-full h-auto"></img>
            </div>
            <div class="flex space-x-7 p-6 justify-center">
                <button class="bg-purple-600 text-white font-bold py-4 px-8 rounded-full">
                Cats
                </button>
                <button class="bg-purple-600 text-white font-bold py-2 px-8 rounded-full">
                Dogs
                </button>
            </div>
        </>
    )
}

