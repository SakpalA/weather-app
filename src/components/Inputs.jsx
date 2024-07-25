import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { BiCurrentLocation } from "react-icons/bi";


const Inputs = ({ setQuery, setUnits }) => {
    const [city, setCity] = useState('');

    const handleSearchClick = () => {
        if (city !== '') setQuery({ q: city });
    };

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords
                setQuery({ lat: latitude, lon: longitude })
            })
        }
    }

    return (
        <div className='flex flex-row justify-center my-6 space-x-5'>
            <div className='flex felx-row justify-center items-center space-x-4 w-3/4'>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.currentTarget.value)}
                    placeholder='search by city...'
                    className='text-gray-500 focus:outline-none p-2 text-xl w-full shadow-xl capitalize placeholder:lowercase' />
                <IoIosSearch
                    size={32}
                    className='cursor-pointer transition ease-out hover:scale-125'
                    onClick={handleSearchClick} />
                <BiCurrentLocation
                    size={32}
                    className='cursor-pointer transition ease-out hover:scale-125'
                    onClick={handleLocationClick} />
            </div>
            <div className='flex flex-row w-fit item-center justify-center'>
                <button 
                onClick={() => setUnits("metric")}
                className='text-2xl font-medium transition ease-out hover:scale-125'>°C</button>
                <p className='text-2xl font-medium mx-1 leading-10'>|</p>
                <button 
                onClick={() => setUnits("imperial")}
                className='text-2xl font-medium transition ease-out hover:scale-125'>°F</button>
            </div>
        </div>
    )
}

export default Inputs