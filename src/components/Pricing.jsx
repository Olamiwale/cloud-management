import React from "react";
import List from '../components/List'

import { CheckIcon } from "@heroicons/react/solid";

export default function Pricing({price}) {
  return (
    <div name="pricing" className="w-full text-white my-24">
      <div className="w-full h-[80vh] bg-slate-900 absolute mix-blend-overlay"></div>

      <div className="w-[90%] mx-auto py-12">
        <div className="text-center py-8 text-slate-300">
          <h2 className="text-3xl uppercase">Pricing</h2>
          <h3 className="text-5xl font-bold text-white py-8 max-sm:text-3xl">
            The right price for your research.
          </h3>
          <p className="text-3xl max-sm:text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
            laudantium odio ullam inventore aliquid ipsum quasi tenetur velit
            voluptatum iste.
          </p>
        </div>

        <div className="grid grid-cols-3 max-sm:flex flex-col">
          <List price='$100' />
          <List price='$200'/>
          <List price='$300'/>

          </div>
        </div>
      </div>
   
  );
}
