import React from 'react'
import { useContext } from 'react'
import userDataContext from '../context/context'

const Card = ({image}) => {
    const {serverUrl,userData, setUserData, backendImage, setBackendImage, frontendImage,setFrontendImage, selectedImage, setSelectedImage} = useContext(userDataContext)
  return (
    <div className={`w-[70px] h-[140px] lg:w-[150px] lg:h-[250px] bg-[#030326] border-2 border-[white] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-950 cursor-pointer hover:border-4 ${selectedImage == image ?"border-4 border-[black] shadow-2xl shadow-blue-950":null}`} onClick={()=> setSelectedImage(image)}>
      <img src={image} className='h-full object-cover'/>
    </div>
  )
}

export default Card
