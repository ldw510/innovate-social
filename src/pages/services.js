import Layout from "@/components/layout"
import Script from 'next/script'

  
  
   


export default function Services() {
    
    return (
      <Layout>
        <div className="pt-12 md:pt-32 bg-white opacity-30">
        </div>  
        <div className=" py-28 ">
          <div className="w-5/6 mx-auto  ">
                <h1 className=" text-dark font-extrabold  text-4xl text-left pl-4 md:pl-10">Services</h1>
          </div> 
        </div>     

        <section className="bg-dark ">
          
          <Script type="text/javascript" src="../../public/static/script.js"></Script>
            <div className="w-5/6 mx-auto py-20 pl-2 md:pl-10  hidden lg:block">
             <ul className="stack-cards js-stack-cards  ">
               <li className="stack-cards__item bg-white rounded-xl inner-glow shadow-lg js-stack-cards__item">
                 <div className="p-2  md:pl-10  md:px-2  bg-gray grid grid-cols-2">
                  <div className="py-6">
                  <h3 className="text-left font-bold text-xl md:text-2xl text-main-green  py-4">Leadership & Governance</h3>
                  <p className="py-4 text-left  font-semibold text-gray-700 text-md md:text-lg">Stepping into social entrepreneurship often means addressing issues that are close to your heart or community.<br /> It is a brave move, and we are here to back you  every step of the way.</p>
                  <ul className="list-disc list-inside text-gray-700 py-4 ">
                    <li>Looking for a board of advisors or trustees to support decision-making? </li>
                    <li>Need mentorship for you or your leadership team? </li>
                    <li>Hoping to grow your membership and supporter base? </li>
                  </ul>
                  </div>
                  
                  <div className="relative ">
                    <img src="leadership.png" alt="services icon" className=" h-64 pl-12 absolute  inset-x-0 bottom-0"/>

                  </div>
                  </div>

               </li>

               <li className="stack-cards__item bg-white rounded-lg shadow-lg js-stack-cards__item">
                 <div className="p-2 md:pl-10  md:px-2  bg-gray grid grid-cols-2">
                 <div className="py-6">
                 <h3 className="text-left font-bold text-xl md:text-2xl text-main-green py-4">Technology & Digital Services</h3>
                  <p className="py-4 text-left font-semibold text-gray-700 text-md md:text-lg"> Choosing the right digital tools can be a game-changer for your enterprise, enhancing your reach, impact, and success.<br /> But the options can be overwhelming. We are here to help you make sense of it all.</p>
                  <ul className="list-disc list-inside text-gray-700 py-4 ">
                   <li>Spending hours on manual processes? </li>
                   <li>Juggling too many websites or costly apps? </li>
                   <li>Worried about implementing a new system? Focus on your core business and leave the tech to us. </li>
                  </ul>
                  </div>

                  <div className="relative ">
                    <img src="services.png" alt="digital services icon" className=" pl-12 absolute  inset-x-0 bottom-0 h-64 "/>

                  </div>

                 </div>
               </li>

               <li className="stack-cards__item bg-white rounded-lg shadow-lg js-stack-cards__item">
                 <div className="p-2 md:pl-10  md:px-2  bg-gray grid grid-cols-2">
                 <div className="py-6">
                    <h3 className="text-left font-bold text-xl md:text-2xl text-main-green py-4">Business Planning & Operations</h3>
                    <p className="py-4  text-left font-semibold text-gray-700 text-md md:text-lg">Turning an idea into a sustainable business requires careful planning. Whether you are just starting out or ready for a new chapter, we are here to help you understand your ideas, potential customers, and your impact.</p>
                    <ul className="list-disc list-inside text-gray-700 py-4 ">
                      <li>Ready to turn an idea into a business? </li>
                      <li>Need help finding the right people and partners? </li>
                      <li>Costs running too high? </li>
                   </ul>
                   </div>
                   <div className="relative ">
                    <img src="planing.png" alt="planning icon" className="pl-12 absolute  inset-x-0 bottom-0 h-64 "/>

                  </div>
                 </div>
               </li>

               <li className="stack-cards__item bg-off-white rounded-lg shadow-lg js-stack-cards__item">
                 <div className="p-2  md:pl-10  md:px-2 bg-gray grid grid-cols-2">
                 <div className="py-6">
                    <h3 className="text-left font-bold text-xl md:text-2xl text-main-green py-4">Revenue & Income Generation</h3>
                    <p className="py-4 text-left font-semibold text-gray-700 text-md md:text-lg">For your enterprise to thrive, it needs a reliable income. Whether that means improving sales, offering new products or services, or generating income from supporters, we are here to help you flourish.</p>
                    <ul className="list-disc list-inside text-gray-700 py-4 ">
                      <li>Products and services not taking off? </li>
                      <li>Revenue sporadic and affecting your cash flow? </li>
                      <li>Need help understanding your customers and how to reach them? </li>
                   </ul>
                   </div>
                   <div className="relative">
                    <img src="income.png" alt="income icon" className=" pl-12 absolute  inset-x-0 bottom-0 h-64 "/>

                  </div>
                 </div>
               </li>

               <li className="stack-cards__item bg-off-white rounded-lg shadow-lg js-stack-cards__item">
                 <div className="p-2 md:pl-10  md:px-2 bg-gray grid grid-cols-2">
                 <div className="py-6">
                    <h3 className="text-left font-bold text-xl md:text-2xl text-main-green py-4">Tender & Grant Management</h3>
                    <p className="py-4 text-left font-semibold text-gray-700 text-md md:text-lg">Grants and public tenders can be a lifeline for social enterprises. We have the expertise to help you succeed <br /> in securing funding and meeting funder expectations throughout your project.</p>
                    <ul className="list-disc list-inside text-gray-700 py-4">
                      <li>Been unsuccessful with a grant or fund? </li>
                      <li>Not sure where to find available funds? </li>
                      <li>Need support in delivering a funded project? </li>
                   </ul>
                   </div>

                   <div className="relative">
                    <img src="funding.png" alt="funding icon" className=" pl-12 absolute inset-x-0 bottom-0 h-64 "/>

                  </div>
                 </div>
               </li>

               <li className="stack-cards__item bg-off-white rounded-lg shadow-lg js-stack-cards__item">
                 <div className="p-2  md:pl-10  md:px-2 bg-gray grid grid-cols-2">
                 <div className="py-6">
                    <h3 className="text-left font-bold text-xl md:text-2xl text-main-green py-4">Data Governance and Protection</h3>
                    <p className="py-4  text-left font-semibold text-gray-700 text-md md:text-lg">GDPR and data protection can seem complicated, but they do not have to be. We are here to help you understand <br /> and implement simple processes to protect both you and the data you hold.</p>
                    <ul className="list-disc list-inside text-gray-700 py-4 ">
                      <li>Do you collect and hold data on customers or beneficiaries? </li>
                      <li>Work with government or public sector bodies? </li>
                      <li>Not sure if the data you collect is necessary? </li>
                   </ul>
                   </div>

                   <div className="relative">
                    <img src="data.png" alt="data icon" className="pl-12 absolute inset-x-0 bottom-0  h-64  "/>

                  </div>
                 </div>
               </li>
            </ul>
          </div>

          <div className="w-5/6 mx-auto grid gap-4 grid-rows-6  py-20 block lg:hidden">
            <div className="p-4  rounded-xl  bg-gray ">
              <h3 className="text-center font-bold text-xl md:text-2xl text-main-green  py-4 md:py-10">Leadership & Governance</h3>
              <p className="py-4 text-left  font-semibold text-gray-700 text-md md:text-lg">Stepping into social entrepreneurship often means addressing issues that are close to your heart or community. It is a brave move, and we are here to back you up every step of the way.</p>
              <ul className="list-disc list-inside text-gray-700 py-4   ">
                <li>Looking for a board of advisors or trustees to support decision-making? </li>
                <li>Need mentorship for you or your leadership team? </li>
                <li>Hoping to grow your membership and supporter base? </li>
              </ul>
            </div>

            <div className="p-4  rounded-xl  bg-gray ">
              <h3 className="text-center font-bold text-xl md:text-2xl text-main-green  py-4 md:py-10">Technology & Digital Services</h3>
              <p className="py-4 text-left  font-semibold text-gray-700 text-md md:text-lg"> Choosing the right digital tools can be a game-changer for your enterprise, enhancing your reach, impact, and success. But the options can be overwhelming. We are here to help you make sense of it all.</p>
              <ul className="list-disc list-inside text-gray-700 py-4   ">
                   <li>Spending hours on manual processes? </li>
                   <li>Juggling too many websites or costly apps? </li>
                   <li>Worried about implementing a new system? Focus on your core business, and leave the tech to us. </li>
              </ul>
            </div>

            <div className="p-4  rounded-xl  bg-gray ">
              <h3 className="text-center font-bold text-xl md:text-2xl text-main-green  py-4 md:py-10">Business Planning & Operations</h3>
              <p className="py-4 text-left  font-semibold text-gray-700 text-md md:text-lg">Turning an idea into a sustainable business requires careful planning. Whether you are just starting out or ready for a new chapter, we are here to help you understand your ideas, potential customers, and your impact.</p>
              <ul className="list-disc list-inside text-gray-700 py-4   ">
                      <li>Ready to turn an idea into a business? </li>
                      <li>Need help finding the right people and partners? </li>
                      <li>Costs running too high? </li>
              </ul>
            </div>

            <div className="p-4  rounded-xl  bg-gray ">
              <h3 className="text-center font-bold text-xl md:text-2xl text-main-green  py-4 md:py-10">Revenue & Income Generation</h3>
              <p className="py-4 text-left  font-semibold text-gray-700 text-md md:text-lg">For your enterprise to thrive, it needs a reliable income. Whether that means improving sales, offering new products or services, or generating income from supporters, we are here to help you flourish.</p>
              <ul className="list-disc list-inside text-gray-700 py-4   ">
                      <li>Products and services not taking off? </li>
                      <li>Revenue sporadic and affecting your cash flow? </li>
                      <li>Need help understanding your customers and how to reach them? </li>
              </ul>
            </div>

            <div className="p-4  rounded-xl  bg-gray ">
              <h3 className="text-center font-bold text-xl md:text-2xl text-main-green  py-4 md:py-10">Tender & Grant Management</h3>
              <p className="py-4 text-left  font-semibold text-gray-700 text-md md:text-lg">Grants and public tenders can be a lifeline for social enterprises. We have the expertise to help you succeed in securing funding and meeting funder expectations throughout your project.</p>
              <ul className="list-disc list-inside text-gray-700 py-4   ">
                      <li>Been unsuccessful with a grant or fund? </li>
                      <li>Not sure where to find available funds? </li>
                      <li>Need support in delivering a funded project? </li>
              </ul>
            </div>

            <div className="p-4  rounded-xl  bg-gray ">
              <h3 className="text-center font-bold text-xl md:text-2xl text-main-green  py-4 md:py-10">Data Governance and Protection</h3>
              <p className="py-4 text-left  font-semibold text-gray-700 text-md md:text-lg">GDPR and data protection can seem complicated, but they do not have to be. We are here to help you understand  and implement simple processes to protect both you and the data you hold.</p>
              <ul className="list-disc list-inside text-gray-700 py-4   ">
                      <li>Do you collect and hold data on customers or beneficiaries? </li>
                      <li>Work with government or public sector bodies? </li>
                      <li>Not sure if the data you collect is necessary? </li>
              </ul>
            </div>

          </div>
          
        </section>

        

      </Layout>
    )}
