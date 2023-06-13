import React from 'react'
import { HandThumbUpIcon } from '@heroicons/react/24/solid'
import { HandThumbDownIcon } from '@heroicons/react/24/solid'

const TravelCard = ({item,index}) => {
  let {id,title,description,image} = item
  return (
    <div className=' md:flex md:gap-10  ' key={index}>
        {/* <p className='text-blue-400'>{index}</p> */}
        {/* same height and width for both div */}
        {/* div for image min sizee 276* 276 */}
        <div  className=" flex flex-col items-center">

            <img className='min-h-[276px] min-w-[276px]' src={image} alt="travel image" />
            <p className='py-4 flex text-teal-500'>Belong to List? </p>
            <div className="flex w-full text-blue-400 justify-between ">
              <div className="flex">
              <p>Yes</p>
            <HandThumbUpIcon className='px-2 h-5 cursor-pointer'/>
              </div>
              <div className="flex">
              <p>NO</p> <HandThumbDownIcon className='px-2 h-5 cursor-pointer' />
              </div>
              
                   </div>
            </div>
           
        {/* div for cart content max width 700 */}
        <div className="px-4 font-mono ">
            
            {/* title subtitle paragraph */}
            <div className="lg:py-4 md:py-3 py-2 f">
            <h1 className='lg:text-3xl  md:text-2xl text-xl ont-bold textgradient'>{title}</h1>
            <p className='lg:text-rounded pb-2  '>#{id} Travel Destination  </p>
            <p className='lg:text-2xl  '>{description.substring(0,289)}</p>
            <p  className='lg:pt-2 cursor-pointer font-bold text-gray-800'>Read More....</p>
            </div>

            {/* Best Hotels Flight Things to do icon  */}
            <div className=" cursor-pointer pb-2 text-teal-400 flex gap-10 lg:text-2xl md:text-2xl text-xl  ">
                <p>Best Hotels</p>
                <p>Flight</p>
                <p>Things to DO</p>
            </div>
        </div>
    </div>
  )
}

export default TravelCard