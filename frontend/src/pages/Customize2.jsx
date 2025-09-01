import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import userDataContext from '../context/context'

const Customize2 = () => {
    const {userData, backendImage, selectedImage} = useContext(userDataContext)
    const [assistantName, setAssistantName] = useState(userData?. assistantName || "")


  return (
    <div className='w-full h-[100vh] bg-gradient-to-t from-[black] to-[#030353] flex justify-center items-center flex-col p-[20px]'>
      <h1 className='text-white text-[30px] text-center mb-[30px]'>Enter Your <span className='text-blue-300'>Assistant Name</span></h1>
{/* Input box */}
       <input type='text' placeholder='eg: jarves' className='w-full max-w-[600px] h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 px-[20px] py-[10px] rounded-full text-[18px]' required onChange={(e)=>setAssistantName(e.target.value)} value={assistantName}/>

       {assistantName && <button className='min-w-[300px] mt-[30px] h-[60px] text-black font-semibold text-[19px] bg-white rounded-full cursor-pointer' onClick={()=> navigate("/")} >Create your Assistant</button>}
    </div>
  )
}

export default Customize2
