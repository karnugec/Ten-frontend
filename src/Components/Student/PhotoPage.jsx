import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export const PhotoPage = () => {
    const [img,setImg] = useState(null)
    const {id} = useParams()
    console.log(id);
    useEffect(()=>{
        axios.get(`https://ten-0wfv.onrender.com/api/users/userbyId/${id}`)
        .then((res)=>setImg(res.data.data.profilepicture))
        .catch((error)=>console.log(error))
    },[])
  return (
    <div className=''>
        <img  className=' p-4 h-24 photo-page' 
        src= {img}  />
    </div>
  )
}
