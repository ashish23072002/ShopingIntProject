import React from 'react'
import HeroSection from './components/Herosection'

const data={
  intro:"WELCOME",
  name:"",
  fname: "ASH",
  lname: "FASHION",
  image:"https://img.freepik.com/free-vector/women-buying-clothes-clothing-store-isolated-flat-vector-illustration-cartoon-girls-consumers-choosing-modern-apparel-garment-dress-fashion-shop-style_74855-8696.jpg?w=2000",
  abt:"Browse Collection",
  dis:"New Arrivals: Be the first to shop our newest styles. From trendy tops to must-have denim, we've got you covered. Best Sellers: Find out what's popular with our customers. Shop our top-rated clothing and accessories.  c. Trending Styles: Stay on-trend with the latest fashion. Discover what's hot and shop the looks you love.",
  };

const About = () => {
  return (
    <div className=''>


     <HeroSection  {...data}/>
     
    </div>
  )
}

export default About
