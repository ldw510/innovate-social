import Layout from "@/components/layout"

export default function About() {
    return (
      <Layout>
        <div className="pt-12 md:pt-32 bg-white opacity-30">
        </div>
        <div className=" hero bg-background py-28">
                <h1 className="text-main-green font-bold text-2xl md:text-4xl text-center">ABOUT US</h1>

        </div>
        <section className="hero">
          <div className="bg-main-green bg-opacity-70">
            <div className="w-5/6 mx-auto py-10"> 
             <p className="text-lg  font bold text-off-white md:text-2xl pt-10 pb-4">Innovate Social was founded after a decade of work <br /> across management consulting, operations, and start-ups <br />across the private, public, and third sectors.<br/> During this time, we witnessed the potential that social entrepreneurs, <br />local communities and charities all have as a force <br /> for positive change in society. </p>
            </div>
            <div className="w-5/6 mx-auto grid grid-rows-1  ">
                <img src="bubble.svg" className=" image1  justify-self-center md:justify-self-end md:mr-6 md:pr-10" />
            </div>
            <div className="w-5/6 mx-auto">
             <p className="text-lg  font bold text-off-white md:text-2xl py-10">Today, Innovate Social is dedicated <br /> to guiding social enterprises and charities <br />at every stage of their journey.<br /> Whether you are a social entrepreneur with who is grasping with an idea,<br /> or an established organization looking to expand your impact,<br /> we are interested in having interesting conversations. </p>

            </div>
            <div className="w-5/6 mx-auto grid grid-rows-1 py-6 ">
            <img src="icon.svg" className=" image1 justify-self-center md:justify-self-end md:pr-10 md:mr-6 pb-6" />

            </div>
            </div>

        </section>
      </Layout>
    )
}