import Image from "next/image";
import styles from "./Aboutpcos.module.css";

const AboutPage = () => {
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
          class="flex h-full items-center rounded-lg bg-yellow-600 p-6 text-center text-white lg:pl-12 lg:text-left">
          <div class="lg:pl-12">
            <h2 class="mb-8 text-3xl font-bold">Learn More About PCOS</h2>
            <p class="mb-8 pb-2 lg:pb-0">
            PCOS or Polycystic Ovary Syndrome, is a prevalent hormonal condition affecting
             women in their late teens or early twenties. 
              It is characterized by hyperandrogenism 
              (elevated male hormones causing ovarian cysts), anovulation 
              (irregular or absent ovulation), and the presence of multiple 
              fluid-filled sacs on the ovaries.
            </p>

            <div class="mx-auto mb-8 flex flex-col md:flex-row md:justify-around xl:justify-start">
              <p class="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" class="mr-2 h-5 w-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Best team
              </p>

              <p class="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" class="mr-2 h-5 w-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Best quality
              </p>

              <p class="mx-auto mb-2 flex items-center md:mx-0 lg:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" class="mr-2 h-5 w-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Best experience
              </p>
            </div>

            <p>
              Duis sagittis, turpis in ullamcorper venenatis, ligula nibh
              porta dui, sit amet rutrum enim massa in ante. Curabitur in
              justo at lorem laoreet ultricies. Nunc ligula felis, sagittis
              eget nisi vitae, sodales vestibulum purus. Vestibulum nibh
              ipsum, rhoncus vel sagittis nec, placerat vel justo. Duis
              faucibus sapien eget tortor finibus, a eleifend lectus dictum.
              Cras tempor convallis magna id rhoncus. Suspendisse potenti.
              Nam mattis faucibus imperdiet. Proin tempor lorem at neque
              tempus aliquet. Phasellus at ex volutpat, varius arcu id,
              aliquam lectus. Vestibulum mattis felis quis ex pharetra
              luctus. Etiam luctus sagittis massa, sed iaculis est vehicula
              ut.
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