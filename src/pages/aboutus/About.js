import React from "react";
import "./About.scss";
import thanks from '../../assests/people-and-technology.png';
import strech from '../../assests/vim.png';
import comp from '../../assests/undraw.png';
import dev from '../../assests/saumya.jpeg'

function About() {

  return (
    <div className="About container">
      <h1>About Us</h1>
      <div className="about-box ">
        <div className="box center">
        <div className="img-box">
        <img src={thanks} alt="" />
      </div>
        <div className="content">
          Welcome to Helping Paws, where we're dedicated to helping stray
          animals in our community. Our community was founded by an animal lover
          tech-student who saw a need for more support for strays in our area.We
          are passionate pet lovers who believe that pets deserve the best
          possible care and attention." Since then, we've grown into a community
          that provides a range of services to animals in need.
        </div>
        </div>
        <div className="box center">
        <div className="img-box2">
        <img src={strech} alt="" />
      </div>
        <div className="content">
          Our mission is to provide compassionate care and support to stray
          animals, and to find them loving homes.We also work on providing pet
          owners with the information, resources, and products they need to
          ensure their pets live happy, healthy lives. We offer a range of
          services, including adoption,rescue, foster care, crowdfunding. We
          also work to educate the community about the importance of animal
          welfare, common pet disease, legal responsiblities and responsible pet
          ownership.
        </div>
        </div>
      <div className="box center">
      <div className="img-box3">
        <img src={comp} alt="" />
      </div>
        <div className="content">
          At Helping paws, our values are kindness, generosity, and
          perseverance. We believe in never giving up on an animal, and we're
          committed to doing whatever it takes to help them find a
          happy, healthy life.Please don't hesitate to contact us with any
          questions, concerns, or feedback. We are always happy to hear from
          fellow pet lovers
        </div>
      </div>
      {/* <div className="box center">
      <div className="img-box4">
        <img src={dev} alt="" />
      </div>
        <div className="content">
        <p>Meet the Developer</p>
        <p className="name">Saumya Singh</p>
        </div>
      </div> */}
      
      </div>
    </div>
  );
}

export default About;
