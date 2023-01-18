import React from 'react'
import {
    Link
  } from "react-router-dom";

const Product = () => {
    return (
        <div>
            <div className='w-full bg-white py-16 px-4'>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                    <img className='w-[500px] mx-auto my-4 rounded-3xl' src="http://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F4b%2Fd0%2F4bd054365924e5e3535918a6e81332dd8c8e4d70.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]" alt='/' />


                    <div className='flex flex-col justify-center'>

                        <h1 class="text-5xl  text-teal-400 font-bold mb-8">Denim Jumpsuit</h1>
                        <div class="text-lg leading-loose text-gray-500 font-light">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                            venenatis, daolor in finibus malesuada, lectus ipsum porta nunc, at
                            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                            tristique tortor pretium ut. Curabitur elit justo, consequat id
                            condimentum ac, volutpat ornare.
                        </div>
                        <span class="text-4xl font-light  py-16">Rs 1,999</span>
                        <div class="flex flex-col sm:flex-row justify-between mb-4 sm:mb-2">
                            <div class="flex align-center mr-4 py-9">
                                <span class="text-xl font-light mr-3 ">Color:</span>
                                <div class="w-4 h-4 rounded-full bg-black mr-3"></div>
                                <div class="w-4 h-4 rounded-full bg-red-100 mr-3"></div>
                                <div class="w-4 h-4 rounded-full bg-blue-900 mr-3 "></div>

                            </div>
                            <div class="flex justify-between">
                                <div class="flex items-center">
                                    <button class="bg-gray-300 rounded px-2">-</button>
                                    <span class="text-xl font-light px-2">1</span>
                                    <button class="bg-gray-300 rounded px-2">+</button>
                                </div>
                            </div>
                        </div>
                        <Link to="/">
                        <button className='bg-teal-400 text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Add To Cart</button>
                        </Link>
                       
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Product
