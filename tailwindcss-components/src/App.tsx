
import { useState } from 'react'
import './App.css'

import SlideOver from './components/Ecommerce/ShoppingCarts/SlideOver'
import StoreNavigation from './components/Ecommerce/StoreNavigation'
import Footer from './components/Footer/Footer'
import ProductList from './components/Ecommerce/ProductList'
import ProducOverviews from './components/Ecommerce/ProductOverviews'
import PromoSection from './components/Ecommerce/PromoSection'
import Search from './components/Utils/Search/Search'

function App() {
  // return (
  //   ProductList()
  // )

  const [cartOpen, setCartOpen] = useState(false)



  return (
    <>
      
      <StoreNavigation {...{ cartOpen, setCartOpen }} />
      <SlideOver  {...{ cartOpen, setCartOpen }} />
      <PromoSection />
      <ProductList />
      <ProducOverviews />
      <Search />
      <Footer />
    </>
  )
}

export default App
