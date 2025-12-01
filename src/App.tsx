import './App.css'
import About from './features/about/About'
import Contact from './features/contact/Contact'
import Experience from './features/experience/Experience'
import Proyectos from './features/projects/Proyectos'

import NavContainer from './shared/components/Navbar/NavContainer'

function App() {
    return (
        <div className="w-full relative min-h-dvh  flex items-center justify-center">
            <NavContainer />

            <main className="w-11/12 md:w-10/12  lg:w-8/12 xl:w-5/10  h-full rounded-t-lg  pb-10 md:pb-2  flex flex-col gap-14 justify-start items-center bg-transparent scroll-smooth  z-10">
                <About />
                <Experience />
                <Proyectos />
                <Contact />
            </main>
        </div>
    )
}

export default App
