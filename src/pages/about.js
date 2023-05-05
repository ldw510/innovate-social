import Layout from "@/components/layout"

export default function About() {
    return (
      <Layout>
        <div className="pt-12 md:pt-32 bg-white opacity-30">
        </div>
        <div className="bg-background py-20">
                <h1 className="text-main-green font-bold text-2xl md:text-4xl text-center">ABOUT US</h1>

        </div>
        <section className="bg-green-b">
            <div className="w-5/6 mx-auto py-10"> 
             <p className="text-lg  font bold text-main-green md:text-2xl pt-10 pb-4"><span className="text-eggplant">Innovate Social</span> was founded after a decade of work <br /> across management consulting, operations, and start-ups <br />across the private, public, and third sectors.<br/> During this time, we witnessed the potential that social entrepreneurs, <br />local communities and charities all have as a force <br /> for positive change in society. </p>
            </div>
            <div className="w-5/6 mx-auto grid grid-rows-1  ">
                <img src="sign.svg" className=" image1  justify-self-center md:justify-self-end md:mr-6 md:pr-10" />
            </div>
            <div className="w-5/6 mx-auto">
             <p className="text-lg  font bold text-main-green md:text-2xl py-10">Today, <span className="text-eggplant">Innovate Social</span> is dedicated <br /> to guiding social enterprises and charities <br />at every stage of their journey.<br /> Whether you're a social entrepreneur with who is grasping with an idea,<br /> or an established organization looking to expand your impact,<br /> we are interested in having interesting conversations. </p>

            </div>
            <div className="w-5/6 mx-auto grid grid-rows-1 py-6 ">
            <img src="icon.svg" className=" image1 justify-self-center md:justify-self-end pr-10 mr-6" />

            </div>

        </section>
      </Layout>
    )
}