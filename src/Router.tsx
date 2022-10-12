import { Route, Routes } from 'react-router-dom'

import { Success } from './pages/Success'
import { DefaultLayout } from './layouts/DefaultLayout'
import { HomePage } from './pages/Home'
import { Checkout } from './pages/Checkout'

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />} >
                <Route path="/" element={<HomePage />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/success" element={<Success />} />
            </Route>
        </Routes>
    )
}