import React from 'react'
import {Link} from  'react-router-dom';


const HeroSection = (props) => {
    return (
        <div className="px-4 sm:px-8 md:px-12 lg:px-44 h-auto sm:h-4/5 justify-center py-28 font-[Poppins] ">
            <div className="container grid grid-cols-2 ">
                <div className="col-span-1 flex flex-col justify-center">
                    <p className="text-lg font-medium text-helper text-uppercase opacity-50 text-teal-400">{props.intro}</p>
                    <h1 className="text-6xl text-uppercase">{props.fname} {props.lname}</h1>
                    <p className="text-xl leading-relaxed max-w-lg mt-4 mb-8 opacity-95 text-gray-600">{props.dis}</p>
                    <button className="bg-teal-400 hover:bg-teal-500 duration-300 text-white font-medium  rounded-md py-4 px-3 font-[Poppins]  max-w-fit md:w-auto">
                       <Link to ="/">{props.abt}</Link>  
                    </button>
                    <div className="mt-10">
                        <p className="text-lg">Email - <a href='mailto:ashish23bisht@gmail.com'>ashish23bisht@gmail.com</a></p>
                        <p className="text-lg"> Phone No - <a href='tel:9456772995'>9456772995</a></p>
                        <p className="text-lg"> Github - <a href='https://github.com/ashish23072002' target="_blank"> Click Hear</a></p>
                        <p className="text-lg"> Linkdin - <a href='https://www.linkedin.com/in/ashish-bisht-991471228/' target="_blank">Click Hear</a></p>
                    </div>
                </div>
                <div className="col-span-1  justify-center md:w-auto md:h-auto hidden md:block ">
                    <img src={props.image} alt="hero image" className="w-full h-full object-cover md:w-auto md:h-auto " />
                </div>
            </div>
        </div>
    )
}

export default HeroSection