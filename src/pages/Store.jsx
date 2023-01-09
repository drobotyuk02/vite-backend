import Footer from "../components/UI/Footer";
import {links} from '../assets/links.js'

const Store = () => {
    const ref = useRef();

    const handleScroll = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <>
            <Hero scrollFunc={handleScroll}/>
            <Content ref={ref}/>
        </>
    )
}

export default Store;