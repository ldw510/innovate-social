import Layout from "@/components/layout"

export default function About() {
    return (
      <Layout>
        <div className="pt-12 md:pt-32 bg-white opacity-30">
        </div>
        <div className="   py-28">
          <div className="w-5/6 mx-auto">
                <h1 className=" text-dark font-extrabold text-4xl text-left pl-4 md:pl-10">About Us</h1>
        </div>        

        </div>
        <section className="">
          <div className="bg-dark py-12">
            <div className="w-5/6 mx-auto py-10 pl-2 md:pl-10 grid md:grid-cols-2"> 
            <div>
            <h2 className="text-gray font-extrabold text-xl md:text-3xl pb-4">Why Innovate Social?</h2>
             <p className="text-lg  font bold text-off-white md:text-2xl  pb-4">We are all facing greater challenges than ever before. We’re fighting against societal and environmental issues. There are generational, economic, geographic, and cultural gaps in society that governments are not built to solve.</p>
             <p className="text-lg  font bold text-off-white md:text-2xl  pb-10">Socially conscious enterprises are the only way to bridge these societal gaps and facilitate truly innovative solutions to our challenges​.</p>


            </div>
           
             <img src="idea.svg" alt="idea icon" className=" image1  justify-self-center   w-5/6" />
            </div>
            
            <div className="w-5/6 mx-auto py-10 pl-2 md:pl-10 grid md:grid-cols-2"> 
            <div className=" block md:hidden">
             <h2 className="text-gray font-extrabold text-xl md:text-3xl pb-4 pt-10">What is a Social Enterprise?</h2>
             <p className="text-lg  font bold text-off-white md:text-2xl  pb-4">A business or service which has social objectives above all else, whose surpluses are principally reinvested for the benefit people or places, rather than being driven by the need to maximise profit for shareholders and owners.</p>
             </div>
            <div>
            <img src="img2.svg" alt="social icon" className=" image1  justify-self-center   w-5/6" />
             </div>
             <div className="hidden md:block">
             <h2 className="text-gray font-extrabold text-xl md:text-3xl pb-4 pt-10">What is a Social Enterprise?</h2>
             <p className="text-lg  font bold text-off-white md:text-2xl  pb-4">A business or service which has social objectives above all else, whose surpluses are principally reinvested for the benefit people or places, rather than being driven by the need to maximise profit for shareholders and owners.</p>
             </div>
            </div>

            <div className="w-5/6 mx-auto py-10 pl-2 md:pl-10 grid md:grid-cols-2"> 
            <div>
            <h2 className="text-gray font-extrabold text-xl md:text-3xl pb-4 pt-10">Who are we?</h2>
             <p className="text-lg  font bold text-off-white md:text-2xl  pb-4">Innovate Social is for people, businesses and charities who seek to develop socially positive businesses that deliver exceptional products and services that ultimately benefit society.</p>
             </div>
           
             <img src="something.svg" alt="ilustration icon" className=" image1  justify-self-center  pb-4 w-5/6" />
            </div>

            <div className="w-5/6 mx-auto py-10 pl-2 md:pl-10 grid md:grid-cols-2"> 
            <div className="block md:hidden">
             <h2 className="text-gray font-extrabold text-xl md:text-3xl pb-4 pt-10">What do we do?</h2>
             <p className="text-lg  font bold text-off-white md:text-2xl  pb-4">We work with as many socially conscious entrepreneurs, individuals and organisations as possible to enable amazing ideas to flourish, and profits to be generated that can benefit people and planet​</p>
             
             </div>
            <div>
            <img src="corporation.svg" alt="ilustration icon" className=" image1  justify-self-center  pb-4 w-5/6" />
             </div>
             <div className="hidden md:block">
             <h2 className="text-gray font-extrabold text-xl md:text-3xl pb-4 pt-10">What do we do?</h2>
             <p className="text-lg  font bold text-off-white md:text-2xl  pb-4">We work with as many socially conscious entrepreneurs, individuals and organisations as possible to enable amazing ideas to flourish, and profits to be generated that can benefit people and planet​</p>
             
             </div>
            </div>

            <div className="w-5/6 mx-auto py-10 pl-2 md:pl-10 grid md:grid-cols-2"> 
            <div>
            <h2 className="text-gray font-extrabold text-xl md:text-3xl pb-4 pt-10">Where we operate?</h2>
             <p className="text-lg  font bold text-off-white md:text-2xl  pb-4">We are Belfast based, with global reach, working across the world on innovative social challenges, mixing the global and local to address our ever complex world</p>
             </div>
           
             <img src="red-img.svg" alt="ilustration icon" className=" image1  justify-self-center  pb-4 w-5/6" />
            </div>
            
            </div>

        </section>
      </Layout>
    )
}