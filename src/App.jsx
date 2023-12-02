import { library } from '@fortawesome/fontawesome-svg-core'
import { faB, faMoon, faSun, faCode, faLink, faBars, faX } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faJs, faReact, faHtml5, faCss3Alt, faPhp, faBootstrap, faFigma, faGitAlt } from '@fortawesome/free-brands-svg-icons'
import Header from './header/Header'
import { useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fade } from "react-awesome-reveal";
import Home from './components/home/Home'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Skills from './components/skills/skills'
import Contact from './components/contact/Contact'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import Footer from './footer/Footer'
library.add(faB, faCode, faLinkedin, faGithub, faJs, faReact, faHtml5, faCss3Alt, faMoon, faSun, faLink, faPhp, faBootstrap, faFigma, faGitAlt, faEnvelope, faBars, faX)
function App() {



  const toggleDarkMode = () => {
    document.getElementById("main-content").classList.toggle("dark");
  };

  useEffect(() => {
    const isDarkMode = document.getElementById("main-content").classList.contains("dark");
    const darkModeToggle = document.getElementById("darkModeToggle");
    if (isDarkMode && darkModeToggle) {
      darkModeToggle.checked = true;
    }
  }, []);

  //handle darkmode component
  const ThemeToggle = () => {
    return (
      <label className=" flex 2xl:flex-col gap-2 items-center">
      <span className="text-xl font-medium text-white dark:text-teal-500">
        <span className="hidden dark:inline">
          <FontAwesomeIcon icon="fa-moon" />
        </span>
        <span className="dark:hidden">
          <FontAwesomeIcon icon="fa-sun" />
        </span>
      </span>
      <div className="relative inline-flex items-center cursor-pointer">
        <input
          id="darkModeToggle"
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={toggleDarkMode}
        />
        <div className="w-11 h-6 bg-teal-700 rounded-full peer   dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-500"></div>
      </div>
    </label>
    )
  }

  //main app
  return (
    <div id='main-content' className='dark max-2xl:flex max-2xl:flex-col'>
      <Header toggleDarkMode={toggleDarkMode} ThemeToggle={ThemeToggle}/>
      <main className=' bg-zinc-100 dark:bg-zinc-900 h-full transition-colors 2xl:pl-64 p-4 pb-0 md:pb-0 xl:pb-0 md:p-8 xl:px-14 grid gap-20 grid-cols-1'>

      <Fade>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </Fade>
      <Footer/>
      </main>
    
    </div>
  )
}

export default App
