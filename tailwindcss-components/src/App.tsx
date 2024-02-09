
import { useState } from 'react'
import './App.css'

import SlideOver from './components/Ecommerce/ShoppingCarts/SlideOver'
import StoreNavigation from './components/Ecommerce/StoreNavigation'




function App() {
  // return (
  //   ProductList()
  // )

  const [cartOpen, setCartOpen] = useState(false)



  return (
    <>
      <StoreNavigation {...{ cartOpen, setCartOpen }} />
      <SlideOver  {...{ cartOpen, setCartOpen }} />
    </>
  )
}

export default App
