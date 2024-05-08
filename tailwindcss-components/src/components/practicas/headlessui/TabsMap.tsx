import { Tab } from '@headlessui/react';

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
  }
];

export default function TabsMap() {
  return (
    <div className="flex flex-col-reverse">
      <Tab.Group>
        <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
          {/* Tabs list */}
          <Tab.List className="grid grid-cols-4 gap-6 px-4 pb-8">
            {tabsList.map((tab, index) => (
              <Tab key={index} className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900">
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
  );
}
