import React from 'react'
import Navbar from './Navbar'
import Plan from './Plan'
import About from './About'
import Workouts from './Workouts'
import Client from './Client'
import Contact from './Contact'

const App = () => {
  return (
    <div>

        <Navbar />
        <Plan />
        <About />
        <Workouts />
        <Client />
        <Contact />

    </div>
  )
}

export default App