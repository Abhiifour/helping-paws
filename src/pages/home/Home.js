import React from 'react'
import './Home.scss'
import Corousel from '../../components/Corousel/Corousel';
import Faq from '../../components/Faq/Faq'
import Adopt from '../../components/AdoptSection/Adopt';
import Questions from '../../components/Ques/Questions';
function Home() {
  const faqs = [
    {
      q:'Why should I adopt a dog instead of buying one from a breeder?',
      a:'Adopting a dog helps save a life and supports animal welfare organizations. Shelter dogs are often just as loving and loyal as purebred dogs, and there are many different breeds and mixed breeds available at shelters.'
    },
    {
      q:'What kind of dog should I adopt?',
      a:`The breed and size of the dog you adopt should depend on your lifestyle, living situation, and activity level. It's important to research different breeds and consult with shelter staff to find a dog that will be a good fit for you and your family.`
    },
    {
      q:'How do I find a dog to adopt?',
      a:`You can start by visiting your local animal shelter or rescue organization. You can also search online for adoptable dogs in your area.`
    },
    {
      q:'What is the adoption process like?',
      a:`The process can vary depending on the organization, but typically you will need to fill out an application and go through an interview process. You may also need to provide references and have a home visit to ensure that your home is a safe and suitable environment for a dog.`
    },
    {
      q:'How can I help prevent dogs from becoming strays?',
      a:`You can help prevent dogs from becoming strays by ensuring that your own pets are properly secured and supervised, supporting spay and neuter programs, and reporting animal neglect or abuse to authorities.`
    },
    {
      q:'Can I adopt a stray dog?',
      a:`If you find a stray dog and are unable to locate their owner, you may be able to adopt the dog after a holding period to give the owner a chance to reclaim them. You can contact your local animal shelter or rescue organization for more information on the adoption process.`
    },
    {
      q:'Is it safe to approach a stray dog?',
      a:`Approaching a stray dog can be risky, as they may be frightened, disoriented, or aggressive. It's best to contact animal control or a professional animal rescue organization for help.`
      
    },
    {
      q:'Which animals are most likely to have rabies?',
      a:`Rabies can be found in many different animals, but in the United States, the most common carriers of the virus are raccoons, bats, skunks, and foxes.`
    }
  ]
  return (
    <div>
    <Corousel/>
    <Faq/>
    <Adopt/>
    <div className="faqs" >
    {
      faqs.map(faq => <Questions ques={faq.q} ans={faq.a}/>)
    }
    </div>

    </div>
  )
}

export default Home;