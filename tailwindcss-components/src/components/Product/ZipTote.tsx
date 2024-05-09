import Start from '../assets/Start';
import Abc from '../assets/Abc';
import { useState } from 'react';
import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { PlusIcon, MinusIcon } from '@heroicons/react/20/solid';

const tabsList = [
  {
    name: "Work",
    imageSrc: "./work.webp",
  },
  {
    name: "User",
    imageSrc: "./user.webp",
  },
  {
    name: "Code",
    imageSrc: "./code.webp",
  },
  {
    name: "Avatar",
    imageSrc: "./avatar.webp",
  },
];

const buyDetails = [
  {
    tittle: "Features",
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
    tittle: "Care",
    items: (
      <ul className="list-disc pl-6">
        <li>Spot clean as needed</li>
        <li>Hand wash with mild soap</li>
        <li>Machine wash interior dividers</li>
        <li>Treat handle and tabs with leather conditioner</li>
      </ul>
    ),
  },
  {
    tittle: "Shipping",
    items: (
      <ul className="list-disc pl-6">
        <li>Free shipping on orders over $300</li>
        <li>International shipping available</li>
        <li>Expedited shipping options</li>
        <li>Signature required upon delivery</li>
      </ul>
    ),
  },
  {
    tittle: "Returns",
    items: (
      <ul className="list-disc pl-6">
        <li>Easy return requests</li>
        <li>Pre-paid shipping label included</li>
        <li>10% restocking fee for returns</li>
        <li>60 day return window</li>
      </ul>
    ),
  },
];

export default function ZipTote() {
  const [open, setOpen] = useState(false);

  const toggleAbierto = () => setOpen(!open);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <div className="flex flex-col-reverse">
            <TabGroup>
              
              {/* Tab panel */}
              <TabPanels>
                {tabsList.map((tab, index) => (
                  <TabPanel key={index} className="p-4">
                    <img
                      src={tab.imageSrc}
                      alt=""
                      className="h-full w-full rounded-lg object-cover object-center"
                    />
                  </TabPanel>
                ))}
              </TabPanels>
              {/* Tabs list */}
              <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <TabList className="grid grid-cols-4 gap-6 px-4 pb-8">
                  {tabsList.map((tab, index) => (
                    <Tab
                      key={index}
                      className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900"
                    >
                      <span className="sr-only">{tab.name}</span>
                      <span className="absolute inset-0 overflow-hidden rounded-md">
                        <img
                          src={tab.imageSrc}
                          alt=""
                          className="h-full w-full rounded-lg object-cover object-center p-1"
                        />
                      </span>
                      <span className="pointer-events-none absolute inset-0 rounded-md text-indigo-500 ring-1 ring-transparent ring-offset-2"></span>
                    </Tab>
                  ))}
                </TabList>
              </div>
            </TabGroup>
          </div>
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1>Zip Tote Basket</h1>
            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">$140</p>
            </div>
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  <Start className={'h-5 w-5 flex-shrink-0 text-indigo-500'} />
                  <Start className={'h-5 w-5 flex-shrink-0 text-indigo-500'} />
                  <Start className={'h-5 w-5 flex-shrink-0 text-indigo-500'} />
                  <Start className={'h-5 w-5 flex-shrink-0 text-indigo-500'} />
                  <Start className={'h-5 w-5 flex-shrink-0 text-gray-300'} />
                </div>
                <p className="sr-only">"4" " outof 5 stars"</p>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div className="text-base text-gray-700">
                <p>
                  The Zip Tote Basket is the perfect midpoint between shopping
                  tote and comfy backpack. With convertible straps, you can hand
                  carry, should sling, or backpack this convenient and spacious
                  bag. The zip top and durable canvas construction keeps your
                  goods protected for all-day use.
                </p>
              </div>
            </div>
            <form className="mt-6">
              <div>
                <h3 className="text-sm text-gray-600">Color</h3>
                {/* HedlessUI */}
              </div>
              <div className="mt-10 flex">
                <button
                  type="submit"
                  className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white sm:w-full"
                >
                  Add to bag
                </button>
                <button
                  type="submit"
                  className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400"
                >
                  <Abc />
                  <span className="sr-only">Add to favorite</span>
                </button>
              </div>
            </form>
            
        <div className="mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl bg-white/5 text-gray-700">
          {buyDetails.map((item, index) => (
            <Disclosure as="div" key={index} className="p-6">
              <DisclosureButton
              className="group flex w-full items-center justify-between"
              onClick={toggleAbierto}
            >
                <span className="text-sm/6 font-medium text-gray-700">
                  {item.tittle}
                </span>
                <div className={`size-5 fill-white/60 text-gray-700 group-data-[open]:rotate-180 group-data-[hover]:fill-white/50 ${open ? '' : 'rotate-180 transform'}`}>
                {open ? <MinusIcon /> : <PlusIcon />}
              </div>
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-sm/5 text-gray-700">
                {item.items}
            </DisclosurePanel>
            </Disclosure>  
          ))}
        </div>
      </div>
          </div>
        </div>
      </div>
  );
}
