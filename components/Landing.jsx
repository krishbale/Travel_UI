import React from 'react'
import Link from 'next/link'
const Landing = () => {
  return (
    <>

 
        <div className=" m-2 relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 lg:flex lg:flex-col  lg:h-[60vh] w-auto text-white  bg ">

     
        <div className="  p-2 m-2  lg:flex-row  lg:mx-4 lg:p-4 ">
            <h1 className='lg:p-4 mt-4 text-3xl lg:text-7xl  font-mono font-bold'>Discover Adventures</h1>
            <p className=' lg:flex lg:justify-end lg:items-center lg:mx-4  lg:pl-8 lg:text-center  font-semi-bold  lg:text-white lg:text-md lg:w-1/2' >We help you find wonderful trips experience and great vacation place  and we will provide famous and popular travel stories from all over the world</p>

        </div>
        
      
        <div className=" flex flex-col  items-end flex-1 justify-end">
            
            <div className="">
                <p>Location</p>
                <input className='inp' type="text" placeholder='Enter your destination' />
            </div>
            <div className="">
            <p>Date</p>
                <input className='inp' type="text" placeholder='When will it start ?' />
            </div>
            <div className="">
            <p>People</p>
                <input className=' inp' type="text" placeholder='How many People?' />
            </div>
            <Link href={'/explore'}>
            <div className=" p-4 m-4 text-xl rounded-full landingbutton">Explore Now</div>
           
            </Link>
            
            
            

        </div>
       
        
          

        </div>
         <div className="  relative overflow-hidden rounded-lg ">
         <h1 className='ml-4 text-3xl'>Popular Places</h1>

                 <div className="flex md:flex-row flex-col items-center justify-between p-4 m-4  rounder-lg relative overflow-hidden ">
            
             <div className="   rounded-lg">
                <p>Paris</p>
                 <img src="https://travel.usnews.com/dims4/USNEWS/c5a8f6d/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fgettyimages-532590277_2ZNe4ra.jpg" alt="popular place1" />
             </div>
             <div className="">
             <p>Bora Bora</p>
             <img src="https://travel.usnews.com/dims4/USNEWS/472cf27/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fborabora_445x280_dtTOVY1.jpg" alt="popular place1" />

             </div>
             <div className="">
             <p>Rome</p>
             <img src="https://travel.usnews.com/dims4/USNEWS/981979e/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fmain_image_cropped_rome_445x280_f0qQD4i.jpg" alt="popular place1" />

             </div>
             <div className="">
             <p>Pukhet</p>
             <img src="https://travel.usnews.com/dims4/USNEWS/4ef5ab1/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fmain_image_2017_getty_resized_445x280_lr3LLEU.jpg" alt="popular place1" />

             </div>
         </div>
     </div>
     </>


   
  )
}

export default Landing