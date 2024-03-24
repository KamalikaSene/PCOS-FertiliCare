import Image from "next/image";
import styles from "./Aboutpcos.module.css";

const AboutPage = () => {





  
  return (
    
    <div className={`${styles.container} container my-24 mx-auto md:px-6`}>

  <section class="mb-32" style={{backgroundImage: "url('/women.jpg')"}}>
    <div class="flex flex-wrap">
      <div class="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
        <div class="flex lg:py-12">
          <img src="/aboutpcos.png"
            class="z-[10] w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px]" alt="image" />
        </div>
      </div>

      <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
        <div
          class="flex h-full items-center rounded-lg bg-green-300 p-6 text-center text-black lg:pl-12 lg:text-left">
          <div class="lg:pl-12">
            <h2 class="mb-8 text-3xl font-bold">Learn More About PCOS</h2>
            <p class="mb-8 pb-2 lg:pb-0 leading-10">
            PCOS or Polycystic Ovary Syndrome, is a prevalent hormonal condition affecting
             women in their late teens or early twenties. 
              It is characterized by hyperandrogenism 
              (elevated male hormones causing ovarian cysts), anovulation 
              (irregular or absent ovulation), and the presence of multiple 
              fluid-filled sacs on the ovaries.
            </p>

            <div class="mx-auto mb-8 flex flex-col md:flex-row md:justify-around xl:justify-start">
              <p>
              <h2>Types of PCOS</h2>
              <div className="mb-4"></div>
                <ul>
                    <li>Insulin-resistant PCOS - Elevated insulin levels.</li>
                    <div className="mb-5"></div>
                    <li>Inflammatory PCOS - Chronic inflammation exacerbating symptoms.</li>
                    <div className="mb-5"></div>
                    <li>Hidden-cause PCOS - Triggered by stress, environment, or genetics.</li>
                    <div className="mb-5"></div>
                    <li>Pill-induced PCOS - Resulting from progestin in birth control pills, disrupting hormone balance.</li>
                </ul>
              </p>
            </div>
            <p>
            <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div class="grid grid-cols-2 gap-8 md:grid-cols-3">
              <div class="text-center md:border-r mb-8">
                  <h6 class="text-4xl font-bold lg:text-5xl xl:text-4xl">1-12</h6>
                  <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                      Individuals
                  </p>
              </div>
              <div class="text-center md:border-r mb-8">
                  <h6 class="text-4xl font-bold lg:text-5xl xl:text-4xl"> 4-8% </h6>
                  <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                      individuals of childbearing age globally,
                  </p>
              </div>
              <div class="text-center md:border-r mb-8">
                  <h6 class="text-4xl font-bold lg:text-5xl xl:text-4xl"> 31.3%</h6>
                  <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                      Asian individuals
                  </p>
              </div>
          </div>
        </div>
            </p>
            <p>
            <h2>Challenges Faced by Individuals with PCOS</h2>
            <div className="mb-4"></div>
            <ul>
                <li>Infertility</li>
                <div className="mb-4"></div>
                <li>Obesity</li>
                <div className="mb-4"></div>
                <li>Type 2 diabetes</li>
                <div className="mb-4"></div>
                <li>Cardiovascular diseases</li>
                <div className="mb-4"></div>
                <li>Miscarriages</li>
                <div className="mb-4"></div>
                <li>Breast cancer</li>
                <div className="mb-4"></div>
                <li>Anxiety</li>
                <div className="mb-4"></div>
                <li>Eating disorders</li>
            </ul>
            </p>
            <div className="mb-6"></div>
            <p>
            
            <h2>Impact of PCOS on Fertility</h2>
            <div className="mb-4 "></div>
            <p className="leading-10">PCOS significantly contributes to infertility, 
              affecting 70-80% of women with anovulatory infertility. 
              Hormonal imbalances in PCOS disrupt regular ovulation, 
              causing irregular menstruation, anovulation, and lower-quality eggs,
              hindering conception.</p>
             
            </p>
            <p>
            <div className="mb-10"></div>
            <h2>Statistical Information on Fertility Rates for Individuals with PCOS</h2>
            <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div class="grid grid-cols-2 gap-8 md:grid-cols-3">
              <div class="text-center md:border-r mb-8">
                  <h6 class="text-4xl font-bold lg:text-5xl xl:text-4xl">7 out of 10 </h6>
                  <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                  individuals with PCOS are affected by anovulatory infertility
                  </p>
              </div>
              <div class="text-center md:border-r mb-8">
                  <h6 class="text-4xl font-bold lg:text-5xl xl:text-4xl"> 4.5 </h6>
                  <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                  times higher likelihood of infertility in women with PCOS
                  </p>
              </div>
              <div class="text-center md:border-r mb-8">
                  <h6 class="text-4xl font-bold lg:text-5xl xl:text-4xl"> 70%</h6>
                  <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                  of cases among 25% of couples experiencing fertility challenges are due to PCOS
                  </p>
              </div>
          </div>
        </div>
            </p>
            <p>
            <h2>Importance of Early Diagnosis</h2>
            <div className="mb-6"></div>
            <p className="leading-10" >Pre-treatment risk assessment is vital to prevent negative 
              outcomes, and recognizing the higher risk allows for implementing
               preventive measures to mitigate potential severe outcomes such as 
               spontaneous abortion, risk of miscarriage, etc.</p>
           
            </p>

          </div>
        </div>
      </div>
    </div>
  </section>

</div>

  );
};

export default AboutPage;