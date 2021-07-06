import React from 'react'
import Image from 'next/image'

function Header() {
    return (
        <nav className="flex px-5 py-4 bg-gray-100 justify-between">
            <div className="">
                <Image 
                    src="https://image.flaticon.com/icons/png/128/1946/1946538.png"
                    alt="Icon Tiktok"
                    width={45}
                    height={45}
                    className="pr-5"
                />
            </div>
            <div className="flex items-center space-x-3">
                <a href="#" className="block p-3">Home</a>
                <a href="#" className="block p-3">About Us</a>
                <a href="#" className="block p-3">Contact</a>
            </div>
        </nav>
    )
}

export default Header
