import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const people = [
  {
    name: 'Leslie Alexander',
  
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About US</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Established in 2024, PCOSFertiliCare is a pioneering initiative 
         designed to enhance guidance for medical practitioners dealing with 
         Polycystic Ovary Syndrome (PCOS) and fertility challenges. This platform focuses on 
         predicting infertility likelihood for individuals with PCOS, empowering
         doctors to provide more informed and personalized care.
         
         PCOSFertiliCare is a proactive step towards revolutionizing 
         the approach to PCOS-related fertility challenges, fostering 
         a collaborative and informed healthcare ecosystem.

          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          <h2>Our Values</h2>
          <ul class="list-disc">
            <li>Understanding and empathizing with PCOS challenges</li>
            <li>Promoting accessibility and inclusivity for diverse users</li>
            <li>Fostering collaboration between patients and healthcare professionals</li>
          </ul>
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            <h2>Our Mission</h2>
            At PCOSFertiliCare, our mission is to guide medical 
            professionals and individuals with PCOS through fertility challenges. 
            We're committed to empathy, collaboration, and continuous improvement, aiming to enhance 
            understanding and improve reproductive well-being. Grounded in innovation, privacy, and accessibility, our goal is to\ empower individuals in navigating their unique fertility
             journeys with confidence and support

          </p>
         
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}