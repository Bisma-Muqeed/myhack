import React from "react";

import Products from "./products/page";
import Top_sell from "./products/sell";
import Fonts from "./components/fonts";
import Hero from "./components/Hero";
import CustomerCarousel from "./components/couresel";
import Dress from "./components/dress";



export default function Home() {
  return (
    <div >
       
       <Hero/>
       <Fonts/>
       <Products/>
       <Top_sell/>
       <Dress/>
      
       <CustomerCarousel/>
    </div>  
  );
}
 