import React from 'react'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'

const App = () => {
    return (
        <div className="container">
            <Info />
            <div className="card-body">
                <About />
                <Interests />
                <Footer />
            </div>
        </div>
    )
}

export default App