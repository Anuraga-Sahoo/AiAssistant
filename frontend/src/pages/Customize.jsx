import React from 'react'
import Card from '../components/Card'
import images from '../assets/images.js'
import { LuImagePlus } from "react-icons/lu";
import { useState } from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import userDataContext from '../context/context.js';
import { useNavigate } from 'react-router-dom';
const Customize = () => {
    const {serverUrl,userData, setUserData, backendImage, setBackendImage, frontendImage,setFrontendImage, selectedImage, setSelectedImage} = useContext(userDataContext)
    const navigate = useNavigate()
    const inputImage = useRef()
    const handleImage = (e) =>{
        const file = e.target.files[0]
        console.log(file)
        console.log(URL.createObjectURL(file))
        setBackendImage(file)
        setFrontendImage(URL.createObjectURL(file))
    }

  return (
    <div className='w-full h-[100vh] bg-gradient-to-t from-[black] to-[#030353] flex justify-center items-center flex-col p-[20px]'>
        <h1 className='text-white text-[30px] text-center mb-[30px]'>Select Your <span className='text-blue-300'>Assistant Image</span></h1>
        <div className='w-full max-w-[900px] flex justify-center items-center flex-wrap gap-[15px]'>
      <Card image={images.image1}/>
      <Card image={images.image2}/>
      <Card image={images.authBg}/>
      <Card image={images.image4}/>
      <Card image={images.image5}/>
      <Card image={images.image6}/>
      <Card image={images.image7}/>
      <div className={`w-[70px] h-[140px] lg:w-[150px] lg:h-[250px] bg-[#030326] border-2 border-[white] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-950 cursor-pointer hover:border-4 flex items-center justify-center ${selectedImage == "input" ?"border-4 border-[black] shadow-2xl shadow-blue-950":null} `} onClick={()=>{ inputImage.current.click()
        setSelectedImage("input")
      }}>
        {!frontendImage && <LuImagePlus className='text-white text-3xl lg:text-[50px] '/>
        }
        {
            frontendImage && <img src={frontendImage} alt="image" className='h-full object-cover' />
        }
    </div>
    <input type="file" accept='image/*' ref={inputImage} hidden onChange={handleImage}/>
        </div>
        {
            selectedImage && <button className='min-w-[150px] mt-[30px] h-[60px] text-black font-semibold text-[19px] bg-white rounded-full cursor-pointer' onClick={()=> navigate("/customize2")} >Next</button>
        }
    </div>
  )
}

export default Customize
