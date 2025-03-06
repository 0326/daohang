// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
// import MyComponent from './pages/My'
import Home from './pages/Home'
import Category from './pages/Category'

import './App.less'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  )
}

export default App
