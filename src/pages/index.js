import Layout from "@/components/layout"
import ExpandableCards from "@/components/expandable-cards";
import Link from "next/link";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";


const cards = [
  { id: 1, cardName: 'Strategy', text: 'Deliver the big picture, and plan to lead with confidence, chart a mission driven cause, and transform innovative ideas into reality. ', image: "1-tile.jpg", active: true },
  { id: 2, cardName: 'Efficiency', text:  'Deliver things better, reduce costs and enhance service through Digital and Technology solutions, enhanced processes, and great people management. ', image: "2-tile.jpg", tag: 'Public Space & Placemaking', active: false},
  { id: 3, cardName: 'Income & Revenue', text:  'Generate more sales, win more tenders & draw down from applicable grants to boost cash flow and improve financial health.  ', image: "3-tile.jpg", active: false},
 
];



export default function Home() {
  return (
    <Layout>
      <div className="pt-12 md:pt-32 bg-white opacity-30">
</div>
<section className="  ">
  <div className="  py-10 ">
  <div className="  w-5/6 mx-auto py-20  ">
    <h2 className="font-extrabold text-main-green  pt-15 pl-4 md:pl-10 text-2xl  md:text-4xl">Innovate Social is for people,<br /> businesses and charities who seek to develop<br /> socially positive businesses that deliver<br /> exceptional products and services <br /> that ultimately <span className="text-eggplant"> benefit society.</span></h2>
    
  </div>
  </div>
  
   <div className="bg-dark py-16">

   <div className="w-5/6 mx-auto py-10 pl-2 md:pl-10 grid md:grid-cols-2"> 
            <div>
            <p className="text-lg  font bold text-off-white md:text-2xl  pb-4">Our mission is to work with as many socially conscious entrepreneurs, individuals and organisations as possible. We want to enable amazing ideas to flourish, and profits to be generated that can be redistributed  for the  benefit of a triple bottom line.</p>
            


            </div>
           
              <img src="bar2.jpeg" alt="bar image" className=" image1  justify-self-center   w-5/6" />
            </div>

    <div className="w-5/6 mx-auto py-10 pl-2 md:pl-10 grid md:grid-cols-2"> 
          <div className="block md:hidden">
            <p className="text-lg  font bold text-off-white md:text-2xl  pb-4">We work with large established organisations, as well as individuals who have just started to formulate an idea or solution of their own. </p>
            </div>
            <div> 
              <img src="bar.jpeg" alt="bar image" className=" image1  justify-self-center   w-5/6" />
              </div>
              <div className="hidden md:block" >
              <p className="text-lg  font bold text-off-white md:text-2xl  pb-4">We work with large established organisations, as well as individuals who have just started to formulate an idea or solution of their own. </p>
                
              </div>
            </div>        
    
  </div>

  <div className="bg-main-green py-16">
    <ExpandableCards data={cards}/>

  </div>

            <div className="bg-main-green p-12">
              <Link href="/services" className=" text-white mt-12 w-4/6 lg:w-6/6">A full list of
              the services we
              provide
              <span></span>
              </Link>
            </div>         
       
 

</section>
    </Layout>
  )
}
