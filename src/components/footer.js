import Link from "next/link"

export default function Footer() {

    return (

        <footer className="relative p-4 bg-white sm:p-6 my-16 mx-auto w-5/6 border-t-2 border-main-green">
            
            <div className="md:flex md:justify-between items-center">
                <div className="mb-6 md:mb-0">
                    <Link href="/" className="flex items-center">
                        <img src="logo.svg" alt="company logo" className="h-14" />
                    </Link>
                    
                </div>
               
                <address className="md:text-right ">
                    <p className='text-md  text-main-green	'>
                    <span className="font-bold">Josh Watts</span> <br/><br/>
                    <a href="mailto:Josh@InnovateSocial.io " className="flex">
                        <img src="email.svg"  alt="email logo" className="h-5 pr-2"/> | Josh@InnovateSocial.io </a><br/>
                    <a href="tel:+44 (0) 7832 965 929 " className="flex">
                        <img src="phone.svg" alt="phone logo" className="h-5 pr-2"/> | +44 (0) 7832 965 929 </a><br/>
                    <a href="https://www.linkedin.com/in/joshuawatts1/" target="_blank" className="flex">
                        <img src="linkedin.svg" alt="linkedin logo" className="h-6 pr-2"/> | linkedin</a>
                    </p>
                </address>
            </div>
            
        </footer>

    )
}