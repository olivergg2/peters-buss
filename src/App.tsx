import type { Component } from 'solid-js'
import Navbar from './layout/Navbar/Navbar'
import Main from './components/Main/Main'
import Footer from './layout/Footer/Footer'

import './App.css'

const App: Component = () => {
  return (
    <div class="App">
      <Navbar />
      <div id="main-layout">
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default App
