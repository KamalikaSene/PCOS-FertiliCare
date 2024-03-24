
import { handleGithubLogin } from "@/lib/action";

import ResultPage from "@/components/resultspage/ResultForm";

const LoginPage = () => {

  return (
     
    <div class="container my-24 mx-auto md:px-6 bg-green-200" style={{backgroundImage: "url('/BG4.jpg')"}}>
      
      <section class="mb-32">
        
        <div class="container mx-auto text-center lg:text-left xl:px-32">
          <div class="flex grid items-center lg:grid-cols-2">
            <div class="mb-12 lg:mb-0">
              <div
                class="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] light:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                <h2 class="mb-8 text-3xl font-bold text-center">Past Prediction Results</h2>
                
                <ResultPage />

                <div class="mx-auto mb-8 flex flex-col md:flex-row md:justify-around lg:justify-between">
              
                </div>
                
              </div>
            </div>
    
            <div>
              <img src="/infertile2.jpg"
                class="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="image" />
            </div>
          </div>
        </div>
       
      </section>
      
    </div>
    
      
    
  );
};

export default LoginPage;
