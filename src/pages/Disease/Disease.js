import React from "react";
import sadDog from '../../assests/saddog.jpg';
import './Disease.scss';
import donateDog from '../../assests/donatetodog.jpg'
import { useNavigate } from "react-router-dom";

function Disease() {
  const navigate = useNavigate();
  return (
    <div className="Disease">
     <div className="flex-section container center">
     <div className="main-section">
        <h1 className="title">Common Dog Diseases</h1>
        <div className="img-box">
          <img src={sadDog} alt='hehe' />
        </div>
        <p className="text">
          As a dog parent, it is important to recognize the signs and symptoms
          of common illnesses so you can seek veterinary help for your canine
          friend as soon as possible. Read on for information about diseases and
          other medical inflictions that frequently impact dogs.
        </p>
        <div className="disease-title">Heartworm</div>
        <p className="disease-detail">
          Heartworm is a parasitic worm that lives in the heart and pulmonary
          arteries of an infected animal. The worms travel through the
          bloodstream—harming arteries and vital organs as they go—ultimately
          completing their journey to the vessels of the lung and the heart
          chamber about six months after the initial infection. Several hundred
          worms can live in one dog for five to seven years.
        </p>
        <div className="disease-title">Kennel Cough</div>
        <div className="disease-detail">
        Kennel cough is a term loosely used to describe a complex of respiratory infections—both viral and bacterial—that causes inflammation of a dog’s voice box and windpipe. It’s a form of bronchitis and is similar to a chest cold in humans.
        </div>
        <div className="disease-title">Parvovirus</div>
        <div className="disease-detail">
        Canine parvovirus is a highly contagious viral disease that can produce life-threatening illness.
        </div>
        <div className="disease-title">Rabies</div>
        <div className="disease-detail">
        Rabies is a viral disease that may affect the brain and spinal cord of all mammals, including cats, dogs and humans. This preventable disease has been reported in every state except Hawaii. There’s good reason that the very word “rabies” evokes fear in people—once symptoms appear, rabies is close to 100% fatal.
        </div>
        <div className="disease-title">Ringworm</div>
        <div className="disease-detail">
        Although the name suggests otherwise, ringworm isn’t caused by a worm at all—but a fungus that can infect the skin, hair and nails. This highly contagious disease can lead to patchy areas of hair loss on a dog and can spread to other animals—and to humans, too.
        </div>
        <div className="disease-title">Cancer</div>
        <div className="disease-detail">
        Finding out that a loved one has cancer can be very scary and confusing. When that loved one is your dog, it’s important to keep in mind that different veterinarians might have different views on the best way to treat the disease. It’s always a good idea to seek out a second opinion, perhaps from a veterinary oncologist, and carefully review your options.
        </div>
        <div className="disease-title">Diabetes</div>
        <div className="disease-detail">
        Diabetes in dogs is a complex disease caused by either a lack of the hormone insulin or an inadequate response to insulin. After a dog eats, his digestive system breaks food into various components, including glucose—which is carried into his cells by insulin, a hormone secreted by the pancreas. When a dog does not produce insulin or cannot utilize it normally, his blood sugar levels elevate. The result is hyperglycemia, which, if left untreated, can cause many complicated health problems for a dog.
        </div>
      </div>
      <div className="img-section ">
       <div className="absolute-section">
       <div className="img-box">
            <img src={donateDog} alt="helpthem" />
            <div className="help-text">
          They Need You Now
        </div>
        <div className="help-message">Help Dogs Heal And Recover</div>
        <button className="btn-primary" onClick={()=> navigate('/Donate')}>Donate</button>
        </div>   
       </div>
      </div>
     </div>
    </div>
  );
}

export default Disease;
