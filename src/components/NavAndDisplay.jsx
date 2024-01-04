import React from 'react'
import TabBar from './TabBar'
import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Resume from '../pages/Resume'
import Work from '../pages/Work'
import Contact from '../pages/Contact'

const NavAndDisplay = () => {
  return (
    <div className="navAndDisplay w-[100%] lg:w-[70%] flex flex-col items-center justify-center relative">
        <TabBar />
        <div className="display bg-white w-[100%] h-[500px] mb-12 lg:mb-0 md:h-[100%] overflow-y-auto rounded-xl p-6 md:p-9 lg:p-12">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/resume' element={<Resume />} />
                <Route path='/work' element={<Work />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
    </div>
  )
}

export default NavAndDisplay