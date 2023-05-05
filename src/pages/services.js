import Layout from "@/components/layout"
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
   


export default function Services() {
    const data = [
        {
          label: "Leadership & Governance",
          value: "leadership & governance",
          desc: <><p className="py-4 font-semibold text-text-p">Stepping into social entrepreneurship often means addressing issues that are close to your heart or community. It's a brave move, and we're here to back you up every step of the way.</p>
          <ul className="list-disc list-inside">
            <li>Looking for a board of advisors or trustees to support decision-making? </li>
            <li>Need mentorship for you or your leadership team? </li>
            <li>Hoping to grow your membership and supporter base? </li>
            </ul>
            </>,
        },
        {
            label: "Technology & Digital Services",
            value: "technology & digital services",
            desc:<>
            <p className="py-4 font-semibold">Choosing the right digital tools can be a game-changer for your enterprise, enhancing your reach, impact, and success. But the options can be overwhelming. We're here to help you make sense of it all.</p>
            <ul className="list-disc list-inside">
                <li>Spending hours on manual processes? </li>
                <li>Juggling too many websites or costly apps? </li>
                <li>Worried about implementing a new system? Focus on your core business, and leave the tech to us. </li>
            </ul>
            </>,

        },
        {
            label: "Business Planning & Operations",
            value: "business planning & operations",
            desc: <>
            <p className="py-4 font-semibold">Turning an idea into a sustainable business requires careful planning. Whether you're just starting out or ready for a new chapter, we're here to help you understand your ideas, potential customers, and your impact. </p>
            <ul className="list-disc list-inside">
                <li>Ready to turn an idea into a business? </li>
                <li>Need help finding the right people and partners? </li>
                <li>Costs running too high? </li>
            </ul>
            </>
        },
        {
            label: "Revenue & Income Generation",
            value: "revenue & income generation",
            desc: <>
            <p className="py-4 font-semibold">For your enterprise to thrive, it needs a reliable income. Whether that means improving sales, offering new products or services, or generating income from supporters, we're here to help you flourish.</p>
            <ul className="list-disc list-inside">
                <li>Products and services not taking off? </li>
                <li>Revenue sporadic and affecting your cash flow? </li>
                <li>Need help understanding your customers and how to reach them? </li>
            </ul>
            </>
        },
        {
            label: "Tender & Grant Management",
            value: "tender & grant management",
            desc: <>
            <p className="py-4 font-semibold">Grants and public tenders can be a lifeline for social enterprises. We have the expertise to help you succeed in securing funding and meeting funder expectations throughout your project.</p>
            <ul className="list-disc list-inside">
                <li>Been unsuccessful with a grant or fund? </li>
                <li>Not sure where to find available funds? </li>
                <li>Need support in delivering a funded project? </li>
            </ul>
            </>,
        },
        {
            label: "Data Governance and Protection",
            value: "data governance and protection",
            desc: <>
            <p className="py-4 font-semibold">GDPR and data protection can seem complicated, but they don't have to be. We're here to help you understand and implement simple processes to protect both you and the data you hold.</p>
            <ul className="list-disc list-inside">
                <li>Do you collect and hold data on customers or beneficiaries? </li>
                <li>Work with government or public sector bodies? </li>
                <li>Not sure if the data you collect is necessary? </li>
            </ul>
            </>,
        },
    ]
    return (
      <Layout>
        <div className="pt-12 md:pt-32 bg-white opacity-30">
        </div> 
        <section className="bg-background  ">
            <div className="services grid grid-cols-2 py-10">
                <h1 className="text-main-green font-bold text-right py-20 text-2xl md:text-4xl">SERVICES</h1>
                <img src="lamp.svg"  className="h-40 pl-10 pt-15"/>
            </div>
            </section>
            <section className="bg-green-b ">
            <div className="w-5/6 mx-auto ">
            <Tabs id="custom-animation" value="html">
  <TabsHeader >
    {data.map(({ label, value }) => (
      <Tab key={value} value={value} className="text-main-green font-bold ">
        {label}
      </Tab>
    ))}
  </TabsHeader>
  <TabsBody
    animate={{
      initial: { y: 250 },
      mount: { y: 0 },
      unmount: { y: 250 },
    }}
  >
    {data.map(({ value, desc }) => (
      <TabPanel key={value} value={value} className="py-6 ">
        {desc}
      </TabPanel>
    ))}
  </TabsBody>
</Tabs>

            </div>
            </section>

        

      </Layout>
    )}
