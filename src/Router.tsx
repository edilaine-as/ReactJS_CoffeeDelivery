import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Order } from './pages/Order'
import { DefaultLayout } from './layouts/DefaultLayout'
import { OrderSucess } from './pages/OrderSucess'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/order-sucess" element={<OrderSucess />} />
      </Route>
    </Routes>
  )
}
