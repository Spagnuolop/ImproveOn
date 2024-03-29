import Home from './Screens/Home'
import Services from './Screens/Services'
import Benefits from './Screens/Benefits'
import HowWeWork from './Screens/HowWeWork'
import Contact from './Screens/Contact'
import NavBar from './Components/NavBar'

function App() {
    return (
        <div className="App">
            <NavBar />
            <Home />
            <Services />
            <HowWeWork />
            <Benefits />
            <Contact />
        </div>
    )
}

export default App
