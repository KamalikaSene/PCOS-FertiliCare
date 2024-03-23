
import SLMCForm from "@/components/slmcForm/SLMCForm";
import { handleGithubLogin } from "@/lib/action";
import styles from "./auth.module.css";

const Doctorauth = () => {

  return (


    <div class="container my-24 mx-auto md:px-6">
    <section class="mb-32">
      <div class="flex flex-wrap">
        <div class="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
          <div class="flex lg:py-12">
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/people/058.jpg"
              class="z-[10] w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px]" alt="image" />
          </div>
        </div>
  
        <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
          <div
            class="flex h-full items-center rounded-lg bg-green-600 p-6 text-center text-white lg:pl-12 lg:text-left">
            <div class="lg:pl-12">
            
            
              <div class="mx-auto mb-8 flex flex-col md:flex-row md:justify-around xl:justify-start">
                
               
              </div>
              <div className={styles.container}>
                <div className={styles.wrapper}>
                  
                  <SLMCForm/>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>


    
  );
};

export default Doctorauth;