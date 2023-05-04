import Link from "next/link"

export default function Footer() {

    return (

        <footer className="relative p-4 bg-white sm:p-6 my-16 mx-auto w-5/6 border-t-2 border-black">
            
            <div className="md:flex md:justify-between items-center">
                <div className="mb-6 md:mb-0">
                    <Link href="/" className="flex items-center">
                        <img src="logo.svg" className="h-14" />
                    </Link>
                    
                </div>
               
                <address className="md:text-right">
                    <p className='text-sm not-italic	'>
                    Josh Watts <br/><br/>
                    <a href="mailto:Josh@InnovateSocial.io ">Email| Josh@InnovateSocial.io </a><br/><br/>
                    <a href="tel:+44 (0) 7832 965 929 ">Mobile | +44 (0) 7832 965 929 </a>
                    <a href="https://www.linkedin.com/in/joshuawatts1/">Social | linkedin</a>
                    </p>
                </address>
            </div>
            
        </footer>

    )
}