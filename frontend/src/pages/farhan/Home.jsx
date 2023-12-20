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

//import components



function Home() {

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
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
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
          slidesToScroll: 2,
          initialSlide: 2
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



  return (
    <div className="flex flex-col">
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
    
  
    </div>
   
  )
}

export default Home