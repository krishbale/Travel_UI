"use client"
import React from 'react'
import TravelCard from '@/components/TravelCard'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import { getdata } from '@/utils/getdata'
import { ShareIcon } from '@heroicons/react/24/solid'

const page = () => {
const getquery = useQuery({
  queryKey:[''],
  queryFn:getdata,

})
if(getquery.status === "loading") return <h1>Loading....</h1>
if(getquery.status ==="error") return <h1>Error...</h1>
// let arr = [1,2]

 
  console.log(getquery.data.topdestination);
  let arr = getquery.data.topdestination;
  
  return (
    <div className='m-2 relative overflow-hidden rounded-lg min-h-full    '>
       <div className="">
        {/* div for Paragraph and Text Content */}
        <h1 className='lg:p-4 md:p-3 p-2 lg:text-6xl md:text-3xl  font-mono textgradient '>Best Place to Visit for 2023 -2024</h1>
        <p className='lg:p-3 md:p-2 p-1 lg:text-2xl md:text-xl '>By Balkrishna Pokharel </p>
        <p className='text-sm p-3'>Last Updated on May 31 2023</p>
        <p className='lg:text-xl lg:p-4 md:p-4 p-4 font-mono'>With a world full of fascinating <span className='spanclass'> travel destinations</span>, choosing the perfect vacation spot can present a challenge. That's why Me(<span className='spanclass'>Balkrishna Pokharel</span>) used <span className='spanclass'>expert opinions, reader votes and current trends</span> – and  <span className='spanclass'>evaluated sights, cultures, scenic beauty, food options</span> and more – to compile this list of the world's best places to visit. Use these recommendations to craft your travel bucket list, and cast your vote below to help us determine next year's ranking.</p>
        <Link href={'/explore'}>
        <p className='text-sm p-2 text-blue-500'>Read More...</p>
        </Link>
        
       </div>
       {/* divison for sharing article */}
       <div className=" flex justify-evenly lg:m-4 md:m-3 m-2 p-4  ">
        <ShareIcon className=' lg:h-10 md:h-7 h-5  lg:text-3xl md:text-2xl' /> 
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
       </div>
       <div className="lg:m-6 md:m-4 m-2 p-4 md:grid  xl:grid-cols-2 md:grid-cols-1">

        {/* Travel Cards  */}
        {arr.map((item,index)=>
            <TravelCard key={index} item={item} index={index} />
        )
        }
        {/* <TravelCard /> */}
       </div>

    </div>
  )
}

export default page