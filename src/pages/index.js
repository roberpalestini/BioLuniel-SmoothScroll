import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import HeroSectionE from '../components/HeroSectionE'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
             <HeroSection />
             <InfoSection {...homeObjTwo}/>
             <InfoSection {...homeObjOne}/>
             <HeroSectionE />
             <InfoSection {...homeObjThree}/>
             <Footer />
        </>
    )
}

export default Home
