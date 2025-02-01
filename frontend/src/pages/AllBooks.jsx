import React, { useEffect, useState } from 'react'
import axios from "axios"
import BookCard from '../components/BookCard/BookCard'
import Loader from '../components/Loader/Loader'


export default function AllBooks() {
    const [Data, setData] = useState()
    useEffect(()=>{
        const fetch = async()=>{
            const response = await axios.get("http://localhost:8000/api/v1/get-all-books")
            .then((response)=> {
                setData(response.data.data)
            })
            .catch((error)=>{
                console.log("Error : ", error)
            })
        }
        fetch()   //ei line ta hocche function call kora. Eta na likhle toh uporer function ta kaaj e korbe na
    },[])

    return (
        <div>
            <p className='py-5 px-20 text-3xl text-rose-600 font-semibold'>All Books</p>
                <div className='my-5 mx-20 grid grid-cols-4 gap-16 '>
                    {
                        (Data)?
                        Data.map((item,i) => (
                            <div key={i}> <BookCard data={item} /> </div>
                        ))
                    :
                    <div className="">
                        <Loader />
                    </div>
                    }
            </div>
        </div>
    )
}
