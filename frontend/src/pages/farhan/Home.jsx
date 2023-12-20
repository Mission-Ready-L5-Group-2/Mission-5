// import search bar images
import search from "../../assets/homepage/search.svg";
import filter from "../../assets/homepage/filter.svg";

//import slideshow images
import slide1 from "../../assets/homepage/slide1.svg";  
import slide2 from "../../assets/homepage/slide2.svg";
import slide3 from "../../assets/homepage/slide3.svg";
import Card from "../farhan/slideshow/Card";

//import caraousel dependencies
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
//import components
import Accordion from "./accordion/Accordion";


import { useState } from "react";



function Home() {


  const [isOpen, setIsOpen] = useState({
    a1: false,
    a2: false,
    a3: false,
    a4: false,
    a5: false,
  
  });

  const  slideData = [
    {
      img: slide1,
      title: "Many opportunities",
      description: "We have many properties available to rent at any one time, so it’s likely that we’ll have one for you."
    },
    {
      img: slide2,
      title: "Finding The Right Properties",
      description: "We place importance to finding a property for you and that you will want to stay in for a long time."

    },
    {
      img: slide3,
      title: "Tenant Support",
      description: "Call on us whenever you need support with any issues that arise during your tenancy."

    }
  ]

  // Settings for the slideshow carousel
  const settings = {
    accessibility:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  //Function to handle the accordion
  const handleClick = (id) => {

    const updatedIsOpen = {
     a1: false,
     a2: false,
     a3: false,
     a4: false,
     a5: false
    };

    updatedIsOpen[id] = !isOpen[id]

    setIsOpen(updatedIsOpen);

  }



  return (
    <div className="flex flex-col gap-5 flex-grow">

    <div className="flex border border-black rounded flex-none w-[375px] justify-between items-center py-1 mt-2 self-center">
    <img src={search} alt="search" className="pl-2"/>
    <input type="text" placeholder="Search..."
    className="text-center"/>
    <img src={filter} alt="filter" className="pr-2" />
    </div>

    <p className="self-center">Why Metro NZ Property management?</p>

    <Slider {...settings}>
      {slideData.map((slide, index) => (
        <Card key={index} img = {slide.img} title ={slide.title} description={slide.description} />
      ))}
    </Slider>

    <div className="bg-[#cbd5e1] flex flex-col gap-4 p-3 mt-2"> 
    <p className="text-wrap font self-center font-bold pt-3">Steps to a Successful Tenancy</p>
    <Accordion id={"a1"} number={1} title={"Start Exploring"} onClick={handleClick} isOpen={isOpen.a1}/>
    <Accordion id={"a2"} number={2} title={"Discover Your Ideal Home"} onClick={handleClick} isOpen={isOpen.a2}/>
    <Accordion id={"a3"} number={3} title={"Your Choices, Your Way"} onClick={handleClick} isOpen={isOpen.a3}/>
    <Accordion id={"a4"} number={4} title={"We'll do the Homework"} onClick={handleClick} isOpen={isOpen.a4}/>
    <Accordion id={"a5"} number={5} title={"Personalised Assistance"} onClick={handleClick} isOpen={isOpen.a5}/>
    </div>



    
  
    </div>
   
  )
}

export default Home