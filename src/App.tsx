import { Helmet } from 'react-helmet-async'
import './App.css'
import About from './features/about/About'
import Contact from './features/contact/Contact'
import Experience from './features/experience/Experience'
import Proyectos from './features/projects/Proyectos'

import NavContainer from './shared/components/Navbar/NavContainer'

function App() {
    return (
        <div className="w-full relative min-h-dvh  flex items-center justify-center">
            <Helmet>
                <title>Gian Franco Baeza — Frontend Developer & AI-Augmented Development</title>
                <meta name="description" content="Portfolio de Gian Franco Baeza. Frontend Developer especializado en React, Next.js, TypeScript y AI-Augmented Development." />
                <meta property="og:title" content="Gian Franco Baeza — Portfolio" />
                <meta property="og:description" content="Frontend Developer & AI-Augmented Development. React, Next.js, TypeScript, Clean Architecture." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://github.com/gianbaeza" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Gian Franco Baeza — Portfolio" />
                <meta name="twitter:description" content="Frontend Developer & AI-Augmented Development" />
            </Helmet>

            <NavContainer />

            <main id="main-content" className="w-11/12 md:w-10/12  lg:w-8/12 xl:w-5/10  h-full rounded-t-lg  pb-10 md:pb-2  flex flex-col gap-14 justify-start items-center bg-transparent scroll-smooth  z-10">
                <About />
                <Experience />
                <Proyectos />
                <Contact />
            </main>
        </div>
    )
}

export default App
