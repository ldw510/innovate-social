import { useState } from 'react'
import Layout from "@/components/layout";


export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const handleSubmit = (e) => { 
        e.preventDefault()
        console.log('Sending')
      let data = {
          name,
          email,
          message
        }
      fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
    .then((res) => {
        console.log('Response received')
        if (res.status === 200) {
          console.log('Response succeeded!')
          setSubmitted(true)
          setName('')
          setEmail('')
          setBody('')
        }
      })
    }
      

    return (
      <Layout>
        <div className="pt-12 md:pt-32 bg-white opacity-30">
        </div>
        <section class="bg-mint-green ">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-main-green ">Contact Us</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      
  
  <div  className="w-5/6 mx-auto">
  < form className="space-y-8" >
  < formGroup  >
    < label htmlFor='name' className="block mb-2 text-sm font-medium text-main-green ">Name</label>
    < input type='text' onChange={(e)=>{setName(e.target.value)}}  name='name' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main-green focus:border-main-green block w-full p-2.5" />  
  </formGroup>
  < formGroup className="" >
    < label htmlFor='email' className="block mb-2 text-sm font-medium text-main-green ">Email</label>
    < input type='email' onChange={(e)=>{setEmail(e.target.value)}}  name='email' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main-green focus:border-main-green block w-full p-2.5" />
  </formGroup>
  < formGroup className="sm:col-span-2" >
    < label htmlFor='message' className="block mb-2 text-sm font-medium text-main-green dark:text-gray-400">Message</label>
    < input type='text' onChange={(e)=>{setMessage(e.target.value)}}  name='message' className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
  </formGroup>
  < input type='submit' onClick={(e)=>{handleSubmit(e)}}/>
  </form >
</div>
</div>
</section>
      </Layout>
    )
}