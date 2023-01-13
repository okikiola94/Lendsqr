import React from 'react'
import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// COMPONENTS
import Loading from './components/Loading'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import UserDetails from './pages/UserDetails'

const App = () => {
  return (
    <Suspense fallback={<Loading text='LOADING...' />}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/loading' element={<Loading />} />
          <Route path='/userdetails/:id' element={<UserDetails />} />

        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
