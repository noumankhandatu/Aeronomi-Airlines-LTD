import React from 'react'
import {Link} from 'react-router-dom';
//Import SectionHeading
import SectionHeading from './SectionHeading'

// Pricing data
  
const pricingData =[
   {
      title:"Basic Plan",
      amount:"8.9",
      items:[
         {icons:"fa fa-check", text:"Standard Feature" },
         {icons:"fa fa-check", text:"Lifetime free support" },
         {icons:"fa fa-times", text:"Extra features" },
         {icons:"fa fa-check", text:"Upgrate options" },
         {icons:"fa fa-check", text:"Full access" }
      ]
   },
   {
      title:"Popular Plan",
      amount:"29.9",
      items:[
         {icons:"fa fa-check", text:"Standard Feature" },
         {icons:"fa fa-check", text:"Lifetime free support" },
         {icons:"fa fa-times", text:"Extra features" },
         {icons:"fa fa-check", text:"Upgrate options" },
         {icons:"fa fa-check", text:"Full access" }
      ]
   },
   {
      title:"Premium Plan",
      amount:"88.9",
      items:[
         {icons:"fa fa-check", text:"Standard Feature" },
         {icons:"fa fa-check", text:"Lifetime free support" },
         {icons:"fa fa-times", text:"Extra features" },
         {icons:"fa fa-check", text:"Upgrate options" },
         {icons:"fa fa-check", text:"Full access" }
      ]
   }
]

const PricingTable = () => { 
 return (
  <>
  <section id="home_pricing_area">
   <div className="container">
   <SectionHeading heading="Our Pricing Plan" para="Solving your supply chain needs from end to end, taking the
        complexity out of container shipping. We are at the forefront of developing innovation."/>
    <div class="row">

         {pricingData.map((data, index)=>(
             <div class="col-lg-4 col-md-6 col-sm-12" key={index}>
             <div class="price-table mrb-30 text-center">
              <div class="table-header">
               <h4 class="pricing-plan-name">{data.title}</h4>
               <h3 class="price"><span class="price-currency">$</span>{data.amount}<span class="price-duration text-primary-color">/ Per Month</span></h3>
              </div>
              <div class="table-content">
              <ul class="list-items">
                  {data.items.map((datas, index)=>(
                     <li key={index}><i class={datas.icons}></i>{datas.text}</li>
                  ))}
               </ul>
              </div>
              <div class="table-footer">
               <Link to="/pricing" class="btn btn-theme">Choose Plan</Link>
              </div>
             </div>
            </div>
         ))}

      </div>
   </div>
  </section>
  </>
 )
}

export default PricingTable

