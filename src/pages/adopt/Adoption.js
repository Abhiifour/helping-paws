import React, { useState, useEffect } from "react";
import "./Adoption.scss";
import Card from "../../components/Card/Card";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import img1 from "../../assests/dog-house.png";
import img2 from "../../assests/dogtwo.png";
import img3 from "../../assests/free.png";
import img4 from "../../assests/dog-walking.png";
import img5 from "../../assests/animal.png";
import { supabase } from "../../auth/supabase";

function Adoption() {
  const [fullText, setFullText] = useState("Ready To Adopt A Dog?");
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [dogData, setDogData] = useState([]);
  const [corouselIndex, setCorouselIndex] = useState(0);
  const length = 3;

  function handleNext() {
    if (corouselIndex == length) {
      setCorouselIndex(0);
    } else {
      setCorouselIndex(corouselIndex + 1);
    }
  }

  function handlePrev() {
    if (corouselIndex == 0) {
      setCorouselIndex(length);
    } else {
      setCorouselIndex(corouselIndex - 1);
    }
  }

  const getDogsData = async () => {
    try {
      const { data, error } = await supabase.from("dogs").select();
      setDogData(data.reverse());
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 40);
    }
  }, [index]);

  useEffect(() => {
    getDogsData();
  }, []);

  return (
    <div className="Adoption">
      <div className="content-box">
        <div className="box-overlay">
          <h1 className="title">{text}</h1>
          <h3 className="sub-title">Lets Get Started.</h3>
        </div>
      </div>
      <div className="feature-section container">
        <h1 className="title">Meet featured pets</h1>
        <h3 className="subtitle">
          We're spotlighting a few pets looking for homes.
        </h3>
        <div className="corousel">
          <div className="outer">
            <div
              className="inner"
              style={{ transform: `translateX(-${corouselIndex * 100}%)` }}
            >
              {dogData?.map((pet) => (
                <Card
                  name={pet.name}
                  breed={pet.breed}
                  age={pet.age}
                  gender={pet.gender}
                  image={pet.imageid}
                  type={pet.type}
                  location={pet.location}
                  injured={pet.injured}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="phone-corousel ">
          <div className="inner-card">
            {dogData?.map((pet) => (
              <Card
                name={pet.name}
                breed={pet.breed}
                age={pet.age}
                gender={pet.gender}
                image={pet.imageid}
                type={pet.type}
                location={pet.location}
                injured={pet.injured}
              />
            ))}
          </div>
        </div>
        <div className="lefticon" onClick={handlePrev}>
          <BsChevronLeft />
        </div>
        <div className="righticon" onClick={handleNext}>
          <BsChevronRight />
        </div>
      </div>
      <div className="doc container">
        <h1 className="title">Check Out Adoption Advices.</h1>
        <h3 className="subtitle">
          Get the inside scoop on pet adoption and bring home a furry friend.
        </h3>
        <div className="top-message">
          Adopting a dog in India can be a wonderful experience that brings joy,
          companionship, and unconditional love into your life. Not only are you
          providing a loving home to a deserving animal, but you are also
          contributing to the welfare of animals and promoting responsible pet
          ownership
        </div>
        <div className="set center">
          <div className="flex center">
            <div className="img-box">
              <img src={img1} alt="img" />
            </div>
          </div>
          <div className="article">
            <div className="header">You Need A Dog, They Need A Home</div>
            <div className="footer">
              here are reportedly 35 million street dogs in the country, and
              after the Covid-19 lockdown, many pedigree dogs were abandoned by
              their owners. There are so many furry babies out there in a
              desperate need of a forever home. It then just feels wrong to buy
              a dog.
            </div>
          </div>
        </div>
        <div className="set center reverse">
          <div className="flex center">
            <div className="img-box">
              <img src={img2} alt="img" />
            </div>
          </div>
          <div className="article">
            <div className="header">Love > Money</div>
            <div className="footer">
              When you go to a breeder, you have to pay anywhere between
              Rs.10,000 to upwards of Rs.3 lakh, depending on the breed and the
              pedigree of the dog. Whereas, dogs up for adoption, mostly the
              adorable, loving and smart Indies can fill your heart with joy for
              free. The amount you spend on buying a dog can be utilised in
              raising an Indie and giving it the best life possible, instead.
            </div>
          </div>
        </div>
        <div className="set center">
          <div className="flex center">
            <div className="img-box">
              <img src={img3} alt="img" />
            </div>
          </div>
          <div className="article">
            <div className="header">Hassle-Free Diet</div>
            <div className="footer">
              Most Indies are adaptive dogs. While most pedigree dogs need a
              specific diet, preferably non-vegetarian, Indies are known to do
              just fine on a complete vegetarian diet as well. It’s a huge money
              saver.
            </div>
          </div>
        </div>
        <div className="set center reverse">
          <div className="flex center">
            <div className="img-box">
              <img src={img4} alt="img" />
            </div>
          </div>
          <div className="article">
            <div className="header">A Companion For Life</div>
            <div className="footer">
              As Indies are sturdier dogs who do not fall ill as frequently as
              pedigree dogs, they also tend to live longer, healthier lives.
              While most pedigree dogs’ average life span is 10 to 15 years,
              especially of the bigger breeds, Indies have known to live for 20+
              years as well.
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Adoption;
