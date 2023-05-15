import Layout from "@/components/layout"

export default function About() {
    return (
      <Layout>
        <div className="pt-12 md:pt-32 bg-white opacity-30">
        </div>
        <div className="   py-28">
          <div className="w-5/6 mx-auto pl-2 md:pl-10 ">
                <h1 className=" text-dark font-extrabold text-4xl text-left pl-4 md:pl-10">About Us</h1>
        </div>        

        </div>
        <section className="">
          <div className="bg-dark ">
            <div className="w-5/6 mx-auto py-10 pl-2 md:pl-10"> 
             <p className="text-lg  font bold text-off-white md:text-2xl pt-10 md:pt-16 md:pl-10 pb-4">Innovate Social was founded after a decade of work <br /> across management consulting, operations, and start-ups <br />across the private, public, and third sectors.<br/> During this time, we witnessed the potential that social entrepreneurs, <br />local communities and charities all have as a force <br /> for positive change in society. </p>
            </div>
            <div className="w-5/6 mx-auto grid grid-rows-1  ">
                <img src="bubble.svg" alt="bubble icon" className=" image1  justify-self-center md:justify-self-end md:mr-6 md:pr-10" />
            </div>
            <div className="w-5/6 mx-auto py-10 pl-2 md:pl-10 pb-20">
             <p className="text-lg  font bold text-off-white md:text-2xl pt-10 md:pt-16 md:pl-10 pb-4">Today, Innovate Social is dedicated <br /> to guiding social enterprises and charities <br />at every stage of their journey.<br /> Whether you are a social entrepreneur with who is grasping with an idea,<br /> or an established organization looking to expand your impact,<br /> we are interested in having  interesting conversations. </p>

            </div>
            
            </div>

        </section>
      </Layout>
    )
}