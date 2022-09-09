import home1 from '../img/home1.png'
import {motion} from 'framer-motion'
//styles from styles.js using styled
import { About, Description , Image , Hide } from '../styles'


const AboutSection =() => {
    return(
        <About>
            <Description>
                <div className="title">
                    <Hide>
                         <motion.h2 animate={{opacity:1,transition:{ duration:2}}} initial={{opacity:0}}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dream</span> come</h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
                <p>Contact us for any photograpy or videography ideas. We have a professionals to build ur dreams.!</p>
                <button>Contact us</button>
            </Description>
            <Image> 
            <img src={home1} alt="home1.png" />
            </Image>
            </About>
    )
}





export default AboutSection;