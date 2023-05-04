import Layout from "@/components/layout"



export default function Home() {
  return (
    <Layout>
      <div className="pt-12 md:pt-32 bg-white opacity-30">
</div>
<section className="bg-background py-20">
  <div className="w-5/6 mx-auto py-20 pl-10 grid grid-cols-2">
    <h2 className="font-bold text-main-green  pt-20 pl-10 text-2xl  leading-loose md:text-4xl">Lorem ipsum dolor sit<br/> amet, consectetur adipiscing<br /> elit, sed do eiusmod tempor <br />incididunt ut labore et<span className="text-eggplant"> dolore magna aliqua.</span> </h2>
    
  </div>
  <div className="bg-green-b py-20 ">
    <div className=" w-5/6 mx-auto grid grid-cols-2 pt-10 ">
    <img src="workspace.svg" className="scale-50" />
    <p className=" object-center pt-20 text-lg  font bold text-main-green md:text-2xl">We are a network of values driven, socially conscious,<br /> entrepreneurs and operational leaders <br />who have a track record of delivering meaningful results<br /> that balance people, profit and purpose together. <br></br>
    Our mission is to work with as many <br />socially conscious entrepreneurs, individuals and organisations as possible.<br /> We want to enable amazing ideas to flourish,<br /> and profits to be generated that can be redistributed <br /> for the benefit of a triple bottom line. (link to sub-page/blog?) </p>
    </div>

  </div>
  <div className="w-5/6 mx-auto py-10">
    <h2 className="text-main-green font-bold text-2xl md:text-4xl text-center">What do we do? </h2>

  </div>

</section>
    </Layout>
  )
}
