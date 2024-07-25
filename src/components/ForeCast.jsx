import React from 'react'

const ForeCast = ({title, data}) => {
    
  return (
    <div>
        <div className='mt-6'>
            <p className='font-medium uppercase'>{title}</p>
        </div>
        <hr className='my-1'/>

        <div className='flex items-center justify-between mt-1'>
            {data.map((d, index) => (
                <div 
                key={index}
                className='flex flex-col items-center justify-between'>
                    <p className='font-light text-sm'>{d.title}</p>
                    <img src={d.icon} alt="weather icon" className='w-12 my-1' />
                    <p className='font-medium'>{`${d.temp.toFixed()}°`}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ForeCast