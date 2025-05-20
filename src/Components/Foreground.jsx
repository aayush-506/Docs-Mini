import React,{ useRef } from 'react'
import Card from './Card'

const Foreground = () => {

  const ref = useRef(null);


  const data = [
    {
      description: "This is my card 1",
      size: ".9Mb",
      available: true,
      status: {
        available: true,
        color: "blue"
      }
    },
    {
      description: "This is my card 2",
      size: ".9Mb",
      available: true,
      status: {
        available: true,
        color: "green"
      }
    },
    {
      description: "This is my card 3",
      size: ".9Mb",
      available: true,
      status: {
        available: true,
        color: "blue"
      }
    },
    {
      description: "This is my card 4",
      size: ".9Mb",
      available: true,
      status: {
        available: true,
        color: "green"
      }
    },
    {
      description: "This is my card 5",
      size: ".9Mb",
      available: true,
      status: {
        available: true,
        color: "green"
      }
    },
    {
      description: "This is my card 6",
      size: ".9Mb",
      available: true,
      status: {
        available: true,
        color: "blue"
      }
    }
  ];


return (
  
    <div ref={ref} className='fixed z-[3] h-screen w-full  flex gap-5 flex-wrap'>
      {data.map((items,index)=>(
        <Card data={items} reference={ref}/>
      ))}
    </div>
  
)
}

export default Foreground