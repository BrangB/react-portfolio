import React from 'react'
import avatar from '../asset/Brang.jpg'
const Info = () => {
  return (
    <div className="info hidden w-[80%] lg:w-[30%] lg:flex items-center  justify-center">
        <div className="real-info  flex flex-col items-center justify-start p-0 w-[80%] bg-white h-[100%] relative rounded-xl">
          <div className="transparentOne h-[80px]"></div>
          <img className="w-[120px] h-[120px] rounded-lg object-cover absolute -top-[50px]" src={avatar} alt="" />
          <h2 className="text-[#0B0909] text-xl font-bold">Brang Tsawm Aung</h2>
          <p className="text-[#0b0909a4] text-sm mt-1">Front-end Developer</p>
          <div className="socialIcon flex w-full items-center justify-center mt-5">
            <div className='w-12 h-12 bg-[#F2F7FC] m-1 hover:scale-110 transition-all duration-200 flex items-center justify-center p-3'><i class="fa-brands fa-facebook-f text-blue-600 text-xl"></i></div>
            <div className='w-12 h-12 bg-[#F2F7FC] m-1 hover:scale-110 transition-all duration-200 flex items-center justify-center p-3'><i class="fa-brands fa-instagram text-orange-700 text-xl"></i></div>
            <div className='w-12 h-12 bg-[#F2F7FC] m-1 hover:scale-110 transition-all duration-200 flex items-center justify-center p-3'><i class="fa-brands fa-github text-xl"></i></div>
          </div>
          <div className="details w-[80%] bg-[#F2F5F9] rounded-lg mt-4 h-64 flex flex-col p-2 items-center justify-stretch overflow-x-scroll ">
            <div className='w-full h-[50px] flex items-center justify-start px-4 py-[35px] '>
              <i class="fa-solid fa-mobile-screen-button mr-4 text-lg"></i>
              <div>
                <p className='text-[#1a10039d] font-semibold'>Phone</p>
                <p className='font-semibold text-sm'>09-662020616</p>
              </div>
            </div>
            <hr className='w-[70%]'/>
            <div className='w-full h-[50px] flex items-center justify-start px-4 py-[35px]'>
              <i class="fa-regular fa-envelope-open mr-4 text-lg"></i>
              <div className='flex flex-col flex-wrap'>
                <p className='text-[#1a10039d] font-semibold'>E-mail</p>
                <p className='font-semibold text-sm'>brangtsawmaung89@gmail.com</p>
              </div>
            </div>
            <hr className='w-[70%]'/>
            <div className='w-full h-[50px] flex items-center justify-start px-4 py-[35px] '>
              <i class="fa-solid fa-location-dot mr-4 text-lg"></i>
              <div>
                <p className='text-[#1a10039d] font-semibold'>Location</p>
                <p className='font-semibold text-sm'>No 990, Insein, Yangon</p>
              </div>
            </div>
          </div>
          <div className="download absolute bottom-2 flex transition-all duration-200 w-[50px] h-[50px] bg-[#ffaf36f6] rounded-full p-2 items-center justify-around mt-4">
            <i class="fa-solid fa-download text-white"></i>
            <p className='absolute text-center'>Download Resume</p>
          </div>
        </div>
    </div>
  )
}

export default Info