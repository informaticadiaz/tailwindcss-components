// https://tailwindui.com/components/marketing/sections/blog-sections#component-6aa46ca7c95f0e163e8fc04b59de7670
import React from 'react'

export default function FeaturedPost() {
  return (
    <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl grid-cols-1 px-6 lg:grid-cols-2 lg:px-8">
              <article className='mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg'>
                  <time dateTime="2020-03-16" className="block text-sm leading-6 text-gray-600">
                    Mar 16, 2020
                  </time>
                  <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    We’re incredibly proud to announce we have secured $75m in Series B
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-gray-600">      
                    Libero neque aenean tincidunt nec consequat tempor. Viverra odio id velit adipiscing id. Nisi vestibulum orci eget bibendum dictum. Velit viverra posuere vulputate volutpat nunc. Nunc netus sit faucibus.
                  </p>
                  <div className="mt-4 flex flex-col justify-between gap-10 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col items-center gap-x-4">
                      <div className='flex'>
                          {/*   color: inherit;
                                text-decoration: inherit;  */}
                          <a href="#" className="color-inherit text-inherit text-sm font-semibold leading-6 text-indigo-600">
                              Continue reading
                          </a>
                          <span aria-hidden="true"></span>
                      </div>
                      <div className='flex lg:border-t lg:border-'>
                          
                      </div>
                  </div>
              </article>
              
          </div>
    </div>
  )
}
