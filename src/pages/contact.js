import { useState } from 'react'
import Layout from "@/components/layout";



export default function Contact() {
  
      

    return (
      <Layout>
        <div className="pt-12 md:pt-32 bg-white opacity-30">
        </div>
        <section className="hero ">
          <div className="bg-background bg-opacity-70">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-main-green ">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-700  sm:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      
  
  <div  className="w-5/6 mx-auto">
  
  <form  action="https://formspree.io/f/xyyavgvk"
  method="POST" className="space-y-8">
  

  < div  >
    < label htmlFor='name' className="block mb-2 text-sm font-medium text-main-green ">Name</label>
    < input type='text' name='name' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main-green focus:border-main-green block w-full p-2.5" />  
  </div>
  < div className="" >
    < label htmlFor='email' className="block mb-2 text-sm font-medium text-main-green ">Email</label>
    < input type='email'  name='email' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main-green focus:border-main-green block w-full p-2.5" />
  </div>
  < div className="sm:col-span-2" >
    < label htmlFor='message' className="block mb-2 text-sm font-medium text-main-green dark:text-gray-400">Message</label>
    < input type='text'  name='message' className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
  </div>
  < input type='submit' className="mx-auto rounded-xl bg-main-green py-2 px-2 text-white font-bold hover:bg-green-b hover:text-main-green hover:border border-main-green " />
  </form>
</div>
</div>
</div>
</section>
      </Layout>
    )
}