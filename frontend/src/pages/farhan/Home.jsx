// import search bar images
import search from "../../assets/homepage/search.svg";
import filter from "../../assets/homepage/filter.svg";

// import more misc images
import building from "../../assets/homepage/building.svg";

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
import Results from "./Results";
import StepCard from "./accordion/StepCard";
import Filter from "./filter/Filter";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

function Home() {
  const [isOpen, setIsOpen] = useState({
    a1: false,
    a2: false,
    a3: false,
    a4: false,
    a5: false,
  });

  const slideData = [
    {
      img: slide1,
      title: "Many opportunities",
      description:
        "We have many properties available to rent at any one time, so it’s likely that we’ll have one for you.",
    },
    {
      img: slide2,
      title: "Finding The Right Properties",
      description:
        "We place importance to finding a property for you and that you will want to stay in for a long time.",
    },
    {
      img: slide3,
      title: "Tenant Support",
      description:
        "Call on us whenever you need support with any issues that arise during your tenancy.",
    },
  ];

  const cardDesc = [
    "Begin your journey by exploring our wide range of rental properties. Use the search initiation feature to filter and discover homes that match your preferences",
    "Dive into the search results and find properties that catch your eye. Our property listings provide all the details you need to make an informed decision",
    "Save the properties you love. Review your saved listings at your own pace and select the ones you're most interested in.",
    "Choose the properties you want to apply for and insert your details seamlessly.  We’ll match the most suitable tenant to the property for you. ",
    "Reach out to us for a viewing or let us help assess your needs. Our dedicated team is here to guide you through the process and answer any questions you may have.",
  ];

  // Settings for the slideshow carousel
  const settings = {
    accessibility: true,
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  //Function to handle the accordion
  const handleClick = (id) => {
    const updatedIsOpen = {
      a1: false,
      a2: false,
      a3: false,
      a4: false,
      a5: false,
    };

    updatedIsOpen[id] = !isOpen[id];

    setIsOpen(updatedIsOpen);
  };

  //Handle filter open/close
  const [filterOpen, setFilterOpen] = useState(false);

  //use loader data
  const properties = useLoaderData();

  //Search bar functionality
 








  return (
    <>
      {
        filterOpen && <Filter filterOpen = {filterOpen} setFilterOpen={setFilterOpen} properties ={properties} />
      }
    <div className="flex flex-col gap-5 flex-grow" >
      <div className="flex border border-black rounded flex-none w-[375px] lg:w-[1024px] justify-between items-center py-1 mt-2 self-center"
      onClick={() => setFilterOpen(!filterOpen)}>
        <img src={search} alt="search" className="pl-2" />
        <div className="text-center flex-grow">
          Search ...
        </div>
        <img src={filter} alt="filter" className="pr-2"/>
      </div>

      <p className="self-center font-bold md:text-2xl lg:text-[40px]">
        Why Metro NZ Property management?
      </p>
      <p className="self-center hidden lg:block ">
        {" "}
        With a commitment to excellence and personalized service, we stand out
        as your reliable partner in the journey to find the perfect home for
        you.
      </p>
      <Slider {...settings}>
        {slideData.map((slide, index) => (
          <Card
            key={index}
            img={slide.img}
            title={slide.title}
            description={slide.description}
          />
        ))}
      </Slider>

      <div className="bg-[#cbd5e1] flex flex-col p-3 md:items-center m-2 rounded-md self-center">
        <p className="text-wrap font self-center font-bold pt-3 pb-3">
          Steps to a Successful Tenancy
        </p>
        <div className="flex flex-col gap-4 md:hidden">
          <Accordion
            id={"a1"}
            number={1}
            title={"Start Exploring"}
            onClick={handleClick}
            isOpen={isOpen.a1}
            cardDesc={cardDesc[0]}
          />
          <Accordion
            id={"a2"}
            number={2}
            title={"Discover Your Ideal Home"}
            onClick={handleClick}
            isOpen={isOpen.a2}
            cardDesc={cardDesc[1]}
          />
          <Accordion
            id={"a3"}
            number={3}
            title={"Your Choices, Your Way"}
            onClick={handleClick}
            isOpen={isOpen.a3}
            cardDesc={cardDesc[2]}
          />
          <Accordion
            id={"a4"}
            number={4}
            title={"We'll do the Homework"}
            onClick={handleClick}
            isOpen={isOpen.a4}
            cardDesc={cardDesc[3]}
          />
          <Accordion
            id={"a5"}
            number={5}
            title={"Personalised Assistance"}
            onClick={handleClick}
            isOpen={isOpen.a5}
            cardDesc={cardDesc[4]}
          />
        </div>
        <div className="md:flex md:gap-4 hidden">
          <StepCard
            title={"Start Exploring"}
            description={cardDesc[0]}
            number={1}
          />
          <StepCard
            title={"Discover Your Ideal Home"}
            description={cardDesc[1]}
            number={2}
          />
          <StepCard
            title={"Your Choices, Your Way"}
            description={cardDesc[2]}
            number={3}
          />
          <StepCard
            title={"We'll do the homework"}
            description={cardDesc[3]}
            number={4}
          />
          <StepCard
            title={"Personalised Assistance"}
            description={cardDesc[4]}
            number={5}
          />
        </div>
      </div>

      <Results />

      <div className="relative w-[343px] bg-[#1b7fc8] rounded-md flex flex-col self-center md:w-[740px] md:h-[350px] md:text-center md:pt-1 lg:w-[1024px]">
        <div className="relative z-10 p-4 flex flex-col gap-1 md:text-center md:gap-4 md:mt-2">
          <p className="text-white text-md md:text-[40px]">Get your dream house with us</p>
          <p className="text-white text-sm md:w-[300px] md:self-center">
            We’re keen to work with you. Calling our team in Auckland by phone
            is the best way to get in touch with us.
          </p>
          <button className="bg-white rounded-md p-2 text-blue-600 w-[120px] self-center">
            Get in Touch
          </button>
        </div>

        <img
          src={building}
          alt="buildings"
          className="absolute bottom-0 right-0 z-0 w-[225px] md:w-[481px] lg:"
        />
      </div>
   
    </div>
    </>
  );
}

export default Home;

//loader function to fetch all properties
export const propertiesLoader = async () => {
  const response = await axios.get("http://localhost:8080/properties");
  const data = await response.data;
  return data;
}