import React from 'react'

const card = ({data}) => {
  return (
        <div className="bg-[#fdfdfd] w-[300px] h-[250px] rounded-[8px] shadow-md  flex flex-col gap-3">
          <div className="img">
          <img src={data.download_url}  className='rounded-t-[8px] h-[200px] w-[300px]' />
          </div>
          <h2 className='ml-5 text-gray-600 font-semibold'>{data.author}</h2>
        </div>
  )
}

export default card
