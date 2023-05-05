import Layout from "@/components/layout"
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";



export default function Home() {
  return (
    <Layout>
      <div className="pt-12 md:pt-32 bg-white opacity-30">
</div>
<section className="bg-background py-20">
  <div className=" hero w-5/6 mx-auto py-20 pl-10 ">
    <h2 className="font-bold text-main-green  pt-15 pl-10 text-2xl  md:text-4xl">Lorem ipsum dolor sit<br/> amet, consectetur adipiscing<br /> elit, sed do eiusmod tempor <br />incididunt ut labore et<br /> <span className="text-eggplant"> dolore magna aliqua.</span> </h2>
    
  </div>
  
  <div className="bg-green-b py-20 ">
    <div className=" w-5/6 mx-auto  grid grid-cols-1 md:grid-cols-2 pt-10 ">
    <img src="workspace.svg" className="scale-50" />
    <p className=" object-center pt-20 text-lg  font bold text-main-green md:text-2xl">We are a network of values driven, socially conscious,<br /> entrepreneurs and operational leaders <br />who have a track record of delivering meaningful results<br /> that balance people, profit and purpose together. <br></br>
    Our mission is to work with as many <br />socially conscious entrepreneurs, individuals and organisations as possible.<br /> We want to enable amazing ideas to flourish,<br /> and profits to be generated that can be redistributed <br /> for the benefit of a triple bottom line. (link to sub-page/blog?) </p>
    </div>

  </div>
  <div className="w-5/6 mx-auto py-10">
    <h2 className="text-main-green font-bold text-2xl md:text-4xl text-center py-10">What do we do? </h2>
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10">
    <Card className=" card mt-6 mx-2">
      <CardBody>
        <Typography variant="h5"  className="mb-2 ">
        Leadership & Governance
        </Typography>
        <Typography>
        Helping you to lead for your cause, and demonstrate the value you bring to beneficiaries, supporters, and shareholders.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">      
      </CardFooter>
    </Card>

    <Card className=" card mt-6 mx-2">
      <CardBody>
        <Typography variant="h5"  className="mb-2">
        Technology & Digital Services
        </Typography>
        <Typography>
        We can streamline your operations by integrating time-saving, cost-effective tools and services that are simple to use. 
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">      
      </CardFooter>
    </Card>

    <Card className=" card mt-6 mx-2">
      <CardBody>
        <Typography variant="h5"  className="mb-2">
        Business Planning & Operations
        </Typography>
        <Typography>
        We'll work hand-in-hand to transform your future ideas into reality with careful planning and execution.         </Typography>
      </CardBody>
      <CardFooter className="pt-0">      
      </CardFooter>
    </Card>

    <Card className=" card mt-6 mx-2">
      <CardBody>
        <Typography variant="h5"  className="mb-2">
        Revenue & Income Generation
        </Typography>
        <Typography>
        Let's work together to enhance your revenue, making the most of every commercial activity you undertake.         </Typography>
      </CardBody>
      <CardFooter className="pt-0">      
      </CardFooter>
    </Card>

    <Card className=" card mt-6 mx-2">
      <CardBody>
        <Typography variant="h5"  className="mb-2">
        Tender & Grant Management
        </Typography>
        <Typography>
        We're in this together, securing philanthropic and public sector funding to fuel your meaningful projects.         </Typography>
      </CardBody>
      <CardFooter className="pt-0">      
      </CardFooter>
    </Card>

    <Card className=" card mt-6 mx-2">
      <CardBody>
        <Typography variant="h5"  className="mb-2">
        Data Governance and Protection
        </Typography>
        <Typography>
        Keep your data safe - we'll help you protect it from breaches and ensure you're always on the right side of compliance.         </Typography>
      </CardBody>
      <CardFooter className="pt-0">      
      </CardFooter>
    </Card>



    

    
    </div>

  </div>

</section>
    </Layout>
  )
}
