import React from "react";
import "./Rescue.scss";
import cageDog from '../../assests/little2.jpg';
import vet from '../../assests/veterinary.png'
import adopt from '../../assests/helpdog.png'
import guide from '../../assests/guide-dog.png'
import aid from '../../assests/first-aid-kit.png'
import animal from '../../assests/animal.png'
import { useNavigate } from "react-router-dom";




function Rescue() {
  const navigate = useNavigate()
  return (
    <div className="Rescue">
    <div className="img-box">
    <h1 className="title">
    "The greatest love you can give to a dog is a forever home."
    </h1>
    <button className="secondary-btn" onClick={()=> navigate('/Adopt')}>Adopt</button>
    <button className="btn-primary" onClick={()=> navigate('/add')}>Add Dog</button>
        <img src={cageDog} alt="sadDog" />
    </div>
      <div className="rescue-container container center">
        <div className="left">
          <h1 className="title">Pet Rescue Process</h1>
          <div className="img-box">
            <img src={vet} alt="" />
          </div>
          <div className="header">Initial Assessment</div>
          <p className="footer">
            The first step in the pet rescue process is to assess the situation
            and determine the needs of the animal. This involves evaluating the
            animal's physical condition, medical needs, and temperament
          </p>
          <div className="img-box">
            <img src={guide} alt="" />
          </div>

          <div className="header">Containment</div>
          <p className="footer">
            If the animal is in danger, it needs to be contained and removed
            from the situation. This can involve using a trap or net to catch
            the animal, or simply coaxing it into a carrier or crate.
          </p>
          <div className="img-box">
            <img src={aid} alt="" />
          </div>
          <div className="header">Veterinary Care</div>
          <p className="footer">
            {" "}
            Once the animal has been contained, it should receive immediate
            veterinary care. This may include a physical exam, vaccinations,
            deworming, and treatment for any injuries or illnesses.
          </p>
          <div className="img-box">
            <img src={animal} alt="" />
          </div>

          <div className="header">Temporary Placement</div>
          <p className="footer">
            After receiving veterinary care, the animal may need to be placed in
            a temporary foster home or shelter until a permanent home can be
            found. During this time, the animal should be given food, water, and
            appropriate care.
          </p>
          <div className="img-box">
            <img src={adopt} alt="" />
          </div>

          <div className="header">Adoption</div>
          <p className="footer">
            The ultimate goal of pet rescue is to find a loving, permanent home
            for the animal. This may involve screening potential adopters,
            conducting home visits, and ensuring that the animal is a good fit
            for the new family.
          </p>
        </div>
        <div className="right">
          <h3 className="title">MORE STORIES</h3>
          <div className="link-box">
          <p className="link">
            <a href="https://www.indiatoday.in/information/story/how-to-help-stray-dogs-in-your-locality-step-by-step-guide-1690385-2020-06-18">
              How to help stray dogs in your locality
            </a>
          </p>
          <p className="link">
            <a href="https://www.dogspot.in/dog-blog/be-a-responsible-dog-owner-and-citizen-today/">
              Be A Responsible Dog Parent And Citizen – Today!
            </a>
          </p>
          <p className="link">
            <a href="https://www.99acres.com/articles/stray-dogs-in-gated-societies-what-do-the-rules-say.html">
              Dogs in housing societies: What do the rules say
            </a>
          </p>
          <p className="link">
            <a href="https://www.99acres.com/articles/stray-dogs-in-gated-societies-what-do-the-rules-say.html#Where_to_file_a_stray_dog_complaint">
              Where to file a stray dog complaint?
            </a>
          </p>
          <p className="link">
            <a href="https://www.dogspot.in/dog-blog/successfully-adopting-rescue-dog/">
              Successfully Adopting a Rescue Dog
            </a>
          </p>
          <p className="link">
            <a href="https://pawsindia.com/blogs/news/how-to-reduce-shedding-in-dogs">
            How To Reduce Shedding In Dogs?
            </a>
          </p>
          <p className="link">
            <a href="https://pawsindia.com/blogs/news/heres-what-you-might-not-know-about-the-best-dog-food-in-india">
            Here's What You Might Not Know About The Best Dog Food in India
            </a>
          </p>
          <p className="link">
            <a href="https://pawsindia.com/blogs/health-wellness/skin-allergies-in-dogs">
            Skin Allergies In Dogs
            </a>
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rescue;
