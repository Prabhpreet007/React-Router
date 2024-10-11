import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/prabhpreet007').then(response =>response.json()).then(data=>{
            console.log(data);
            setData(data)
        })
    },[])
  return (
    <div className='text-center m-4 bg-gray-800 text-white p-5 text-2xl flex flex-col items-center'>
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="git picture"  width={275} className='mt-4'/>
    </div>
  )
}

export default Github
