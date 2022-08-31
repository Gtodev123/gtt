import home1 from '../img/home1.png'

const AboutSection =() => {
    return(
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        We work to make
                    </div>
                    <div className="hide">
                        <h2>your <span>dream</span> come</h2>
                    </div>
                    <div className="hide">
                        true
                    </div>
                </div>
                <p>Contact us for any photograpy or videography ideas. We have a professionals to build ur dreams.!</p>
                <button>Contact us</button>
            </div>
            <div className="image"> 
            <img src={home1} alt="home1.png" />
            </div>
        </div>
    )
}

export default AboutSection;