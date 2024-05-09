import { useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { PlusIcon, MinusIcon } from '@heroicons/react/20/solid';

const buyDetails = [
  {
    tittle: 'Features',
    items: (
      <ul className="list-disc pl-6">
        <li>Multiple strap configurations</li>
        <li>Spacious interior with top zip</li>
        <li>Leather handle and tabs</li>
        <li>Interior dividers</li>
        <li>Stainless strap loops</li>
        <li>Double stitched construction</li>
        <li>Water-resistant</li>
      </ul>
    ),
  },
  {
    tittle: 'Care',
    items: (
      <ul className="list-disc pl-6">
        <li>Spot clean as needed</li>
        <li>Hand wash with mild soap</li>
        <li>Machine wash interior dividers</li>
        <li>Treat handle and tabs with leather conditioner</li>
      </ul>
    )
  },
  {
    tittle: 'Shipping',
    items: (
      <ul className="list-disc pl-6">
        <li>Free shipping on orders over $300</li>
        <li>International shipping available</li>
        <li>Expedited shipping options</li>
        <li>Signature required upon delivery</li>
      </ul>
    )
  },
  {
    tittle: 'Returns',
    items: (
      <ul className="list-disc pl-6">
        <li>Easy return requests</li>
        <li>Pre-paid shipping label included</li>
        <li>10% restocking fee for returns</li>
        <li>60 day return window</li>
      </ul>
    )
  }
]  
export default function Disclo() {
  const [openStates, setOpenStates] = useState(Array(buyDetails.length).fill(false));

  const toggleAbierto = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  

  return (
    <>
      <div className="h-screen w-full bg-black px-4 pt-32">
        <div className="mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl bg-white/5">
          {buyDetails.map((item, index) => (
            <Disclosure as="div" key={index} className="p-6">
              <DisclosureButton
                className="group flex w-full items-center justify-between"
                onClick={() => toggleAbierto(index)}
              >
                <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
                  {item.tittle}
                </span>
                <div className={`size-5 fill-white/60 text-white group-data-[open]:rotate-180 group-data-[hover]:fill-white/50 ${openStates[index] ? '' : 'rotate-180 transform'}`}>
                  {openStates[index] ? <MinusIcon /> : <PlusIcon />}
                </div>
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
                {item.items}
              </DisclosurePanel>
            </Disclosure>  
          ))}
        </div>
      </div>
    </>
  );
}
