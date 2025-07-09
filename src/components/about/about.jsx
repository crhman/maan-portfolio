import React from 'react';
import './about.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/profile_img.svg' 
import man from '../../assets/man.jpg'

const About = () => {
    return (
        <div id='about' className="about">
            <div className="about-title">
                <h1>About me</h1>
                {/* <img src={theme_pattern} alt="" /> */}
                <hr style={{width:"100%", height:"5px", backgroundColor:"#27C529", marginTop:"10px", marginBottom:"30px"}} />

            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={man} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>
                            I am a full-stack developer with a passion for creating dynamic and responsive web applications.
                            My expertise lies in both front-end and back-end development, allowing me to build complete solutions 
                            that deliver exceptional user experiences. 
                        </p>
                        <p>
                            With a strong foundation in HTML, CSS, JavaScript, and various frameworks, I am adept at transforming ideas into functional and visually appealing websites. 
                        
                        </p>
                    </div>
                    <div className="about-skillss">
                        <div className="about-skill">
                               <p>
                                html
                            </p> <hr style={{width:"50%"} }/>
                            </div>
                        <div className="about-skill">
                              <p>
                                css
                            </p> <hr style={{width:"70%"} }/>
                            </div>
                        <div className="about-skill">
                            <p>
                                JavaScript
                            </p> <hr style={{width:"80%"} }/>
                            </div>
                        <div className="about-skill">
                             <p>
                                react
                            </p> <hr style={{width:"70%"} }/>
                            </div>
                        <div className="about-skill">
                            <p>
                                nodejs
                            </p> <hr style={{width:"60%"} }/>
                            </div>
                        <div className="about-skill">
                             <p>
                                express js
                            </p> <hr style={{width:"80%"} }/>
                            </div>
                        <div className="about-skill">
                             <p>
                                mango db
                            </p> <hr style={{width:"60%"} }/>
                            </div>
                        

                    </div>
                </div>
            </div>
                  <div className="about-acheivments">
                    
                    <div className="about-acheivment">
                        <h1>10+</h1>
                        <p>years of experiences</p>
                    </div>
                    <hr />
                    <div className="about-acheivment">
                        <h1>100+</h1>
                        <p> projects complete</p>
                    </div>
                    <hr />
                    <div className="about-acheivment">
                        <h1>100+</h1>
                        <p> happy clients</p>
                    </div>
                </div>
        </div>
    );
}

export default About;
