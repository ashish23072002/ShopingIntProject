import React from 'react'
import HeroSection from './components/Herosection';

const Profile = () => {
  const data={
    intro:"THIS IS ME",
    name: "ASH TECHNICAL",
    fname: "ASHISH BISHT",
    lname: "",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    abt:"Hire me",
    dis:" I'm Ashish Bisht A Front End Developer, Student and freelancer.",
    };
  return (
    <div>
     <HeroSection {...data}/>
    </div>
  )
}

export default Profile
