import React from 'react'


const Navbar = () => {
    return <div className='columns-1'>
        <div>
            <div class="bg-white shadow-md mx-10 my-10">
                <div class="container mx-auto px-4 ">
                    <div class="flex justify-between items-center py-3">
                        <div class="flex space-x-4">

                            <a href="fake.com" class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Stories</a>
                            <a href="fake.com" class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">New In</a>
                            <a href="fake.com" class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">All Products</a>
                        </div>

                        <div>
                            <a href="fake.com" class="text-2xl font-bold font-bebas">SPUR</a>
                        </div>

                        <div class="flex space-x-4">
                            <a href="fake.com" class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Search</a>
                            <a href="fake.com" class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Wishlist</a>
                            <a href="fake.com" class="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                                <span>Cart</span>
                                <span class="ml-1 bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full">0</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
}

export default Navbar