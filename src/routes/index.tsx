import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/home'
import { History } from '../pages/history'
import { LayoutDefault } from '../layouts/defaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
