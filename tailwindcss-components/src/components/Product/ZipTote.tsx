import { Tab } from '@headlessui/react';
import Start from '../assets/Start';
import Abc from '../assets/Abc';

const tabsList = [
  {
    name: 'Work',
    imageSrc: './work.webp',
  },
  {
    name: 'User',
    imageSrc: './user.webp',
  },
  {
    name: 'Code',
    imageSrc: './code.webp',
  },
  {
    name: 'Avatar',
    imageSrc: './avatar.webp',
  },
];

export default function ZipTote() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <div className="flex flex-col-reverse">
            <Tab.Group>
              {/* Tabs list */}
              <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6 px-4 pb-8">
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
                </Tab.List>
              </div>
              {/* Tab panel */}
              <Tab.Panels>
                {tabsList.map((tab, index) => (
                  <Tab.Panel key={index} className="p-4">
                    <img
                      src={tab.imageSrc}
                      alt=""
                      className="h-full w-full rounded-lg object-cover object-center"
                    />
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
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
                <p className="sr-only">
                  "4"
                  " outof 5 stars"
                </p>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div className="text-base text-gray-700">
                <p>
                The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.
                </p>
              </div>
            </div>
            <form className="mt-6">
              <div>
                <h3 className="text-sm text-gray-600">
                  Color
                </h3>
                {/* HedlessUI */}
              </div>
              <div className="mt-10 flex">
                <button type="submit" className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white sm:w-full">
                  Add to bag
                </button>
                <button type="submit" className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400">
                  <Abc />
                  <span className="sr-only">Add to favorite</span>
                </button>
              </div>
            </form>
            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id='details-heading' className="sr-only">Additional detials</h2>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
