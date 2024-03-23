import styles from './home.module.css';
import Link from 'next/link'; // Import Link from next/link

export default function Home() {
  return (
    
    <div class="container my-24 mx-auto md:px-6">
      
      <section class="mb-32 text-center md:text-left">
        
    
        <div class="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
          <div class="mb-6 md:mb-0">
            <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init data-te-ripple-color="light">
              <img src="/nursepic.jpg" class="w-full" alt="Louvre" />
              <a href="#!">
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                </div>
              </a>
            </div>
          </div>
    
          <div>
            <h3 class="mb-3 text-2xl font-bold">About PCOS</h3>
            <div
              class="mb-3 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 md:justify-start">
              
            
            </div>
            
            <p class="text-neutral-500 dark:text-neutral-300">
              Get to know more abut PCOS 
            </p>
            <div className="mb-4"></div>
            <Link href="/About-PCOS">
              <button className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                Click here
              </button>
            </Link>
          </div>
        </div>
    
        <div class="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
          <div class="mb-6 md:order-2 md:mb-0">
            <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init data-te-ripple-color="light">
              <img src="/aboutpcos.png" class="w-full" alt="Louvre" />
              <a href="#!">
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                </div>
              </a>
            </div>
          </div>
    
          <div class="md:order-1">
            <h3 class="mb-3 text-2xl font-bold">Predict Infertility Risk Level</h3>
            <div
              class="mb-3 flex items-center justify-center text-sm font-medium text-primary dark:text-primary-400 md:justify-start">
              
              
            </div>
            
            <p class="text-neutral-500 dark:text-neutral-300">
              Predict the risk level of being Infertile <div></div><div>(Authorised for medical Personall only)</div>
            </p>
            <div className="mb-4"></div>
            <Link href="/SLMC-doctor-auth">
              <button className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                Click here
              </button>
            </Link>
          </div>
        </div>
    
        <div class="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
          <div class="mb-6 md:mb-0">
            <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init data-te-ripple-color="light">
              <img src="/predictpcos1.jpeg" class="w-full" alt="Louvre" />
              <a href="#!">
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                </div>
              </a>
            </div>
          </div>
    
          <div>
            <h3 class="mb-3 text-2xl font-bold">View Past Results</h3>
            <div class="mb-3 flex items-center justify-center text-sm font-medium text-yellow-600 md:justify-start">  
            </div>
            
            <p class="text-neutral-500 dark:text-neutral-300">
            Here you can view the past result predicted using the patient id given by us.
            </p>
            <div className="mb-4"></div>
            <Link href="/Result-page">
              <button className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                Click here
              </button>
            </Link>
          </div>
        </div>

            <div class="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
              <div class="mb-6 md:order-2 md:mb-0">
                <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init data-te-ripple-color="light">
                  <img src="/Aboutpcos2.jpeg" class="w-full" alt="Louvre" />
                  <a href="#!">
                    <div
                      class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                    </div>
                  </a>
                </div>
              </div>
        
              <div class="md:order-1">
                <h3 class="mb-3 text-2xl font-bold">What is PCOS fertilicare</h3>
                <div
                  class="mb-3 flex items-center justify-center text-sm font-medium text-primary dark:text-primary-400 md:justify-start">
                  
                </div>
                <p class="text-neutral-500 dark:text-neutral-300">
                Learn about us, instructions on how to use the Web-App
                </p>
                <div className="mb-4"></div>
                <Link href="/about-app">
                  <button className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    Click here
                  </button>
            </Link>
              </div>
        </div>
        
    
      </section>
     
    </div>
  );
}