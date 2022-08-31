import home1 from '../img/home1.png'

//styles from styles.js using styled
import { About, Description , Image , Hide } from '../styles'


const AboutSection =() => {
    return(
        <About>
            <Description>
                <div className="title">
                    <Hide>
                         <h2>We work to make</h2>
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