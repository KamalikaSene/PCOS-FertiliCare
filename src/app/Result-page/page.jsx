// pages/ResultPage.js

const ResultPage = () => {
    return (
   
      
      <div class="container my-24 mx-auto md:px-6">
       
        <section class="mb-32">
      
          <div class="container mx-auto text-center lg:text-left xl:px-32">
            <div class="flex grid items-center lg:grid-cols-2">
              <div class="mb-12 lg:mb-0">
                <div
                  class="relative z-[1] block rounded-lg bg-green-200 px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                  <h2 class="mb-8 text-3xl font-bold">Prediction Result</h2>
                  <h3 class="mb-8 text-2xl font-bold">Prediction Number: </h3>
                  <p class="mb-8 pb-2 text-neutral-500 dark:text-neutral-300 lg:pb-0">
                    PREDICTION LEVEL RESULT 
                  </p>
      
                  <div class="mx-auto mb-8 flex flex-col md:flex-row md:justify-around lg:justify-between">
                    {/* <p class="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="mr-2 h-5 w-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Best team
                    </p> */}
      
                    {/* <p class="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="mr-2 h-5 w-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Best quality
                    </p> */}
      
                    {/* <p class="mx-auto mb-2 flex items-center md:mx-0 lg:mb-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="mr-2 h-5 w-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Best experience
                    </p> */}
                  </div>
      
            
                </div>
              </div>
      
              <div>
                <img src="/PCOSResult.jpg"
                  class="w-64 rounded-lg shadow-lg dark:shadow-black/20" alt="image" />
              </div>
   
            </div>
          </div>
          
        </section>
    
      </div>
    
    );
  };
  
  export default ResultPage;