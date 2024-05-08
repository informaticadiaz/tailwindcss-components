import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
export default function Radio() {
  const [color, setColor] = useState('startup')
  return (
    <RadioGroup value={color} onChange={setColor} className='p-8'>
      <div className='flex gap-4 '>
        <RadioGroup.Option
          value="startup"
          className="rounded-full ui-active:border ui-active:border-blue-700">
          {({ checked }) => (
            <span
              className={`mt-1 mx-1 inline-block w-8 h-8 border rounded-full 
              ${checked ? 'bg-blue-200' : 'bg-gray-200'}`}>
            </span>
          )}
        </RadioGroup.Option>
        <RadioGroup.Option
          value="startup"
          className="rounded-full ui-active:border ui-active:border-blue-700">
          {({ checked }) => (
            <span
              className={`inline-block w-8 h-8 border rounded-full 
              ${checked ? 'bg-blue-200' : 'bg-gray-200'}`}>
            </span>
          )}
        </RadioGroup.Option>
        <RadioGroup.Option
          value="startup"
          className="rounded-full ui-active:border ui-active:border-blue-700">
          {({ checked }) => (
            <span
              className={`inline-block w-8 h-8 border rounded-full 
              ${checked ? 'bg-blue-200' : 'bg-gray-200'}`}>
            </span>
          )}
      </RadioGroup.Option>
        </div>
    </RadioGroup>
  )
}
