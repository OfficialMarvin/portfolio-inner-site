import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Marvin Jakobs</h3>
            <br />
            <div className="text-block">
                <p>
                    In May of 2024 I graduated from The Pennsylvania State University
                    with my BS in Applied Data Sciences.
                </p>
                <br />
                <p>
                    Thanks for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to shoot me an email at{' '}
                    <a href="mailto:marv416@gmail.com">
                        marv416@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    From a young age, I was captivated by computers, stemming from my love for video games like Minecraft. This early interest fueled my passion for technology and its possibilities. I attended high school in New Orleans, where my fascination with computers deepened, and later moved just outside of Philadelphia to continue my journey in technology.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={"https://s11.gifyu.com/images/SAg9S.gif"} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> Reading my first Data Structures book in 2008 :)
                        </sub>
                    </p>
                </div>

                <p>
                In high school, I began to take programming seriously, diving into the world of iOS app development and learning how to scrape tweets using Python. I worked on a variety of passion projects during this time, which allowed me to refine my skills in both mobile app development and data scraping. These experiences played a crucial role in shaping my journey in technology.
                </p>
                <br />
                <p>
                In 2020, I was excited to be accepted into Penn State to study Data Sciences. After my freshman year, I participated in summer research focused on illegal wildlife trade data analysis and co-published "An Analysis of Wildlife Seizure Data Distributions using Spatial Clustering" which was presented at Tanzania Wildlife Research Institution Conference in December 2021. After my sophomore year, I joined Cencora (formerly AmerisourceBergen) as a CRM Intern, where I gained experience with Salesforce and refined my SQL. I also had the opportunity to study abroad in Dubrovnik, Croatia. As I entered my senior year, I decided to concentrate on my machine learning capstone projects and other academic pursuits that aligned with my career goals.
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies</h3>
                        <br />
                        <p>
                            Beyond Data Science, I have a lot of hobbies that I
                            enjoy doing in my free time. The more technical
                            hobbies I have are{' '}
                            <Link to="/projects/music">generative AI</Link>{' '}
                            and {' '}
                            <Link to="/projects/art">On-chain Art</Link>. You can
                            read more about each of these on their respective
                            pages under my projects tab. Some other hobbies I
                            enjoy are skateboarding, cooking, and (unsurprisingly)
                            playing video games.
                        </p>
                        <br />
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={"https://i.ibb.co/tCvhCWJ/Screenshot-2024-09-24-at-3-18-12-PM.png"} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Studying Abroad in Croatia, 2023
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer. If you find any easter eggs make sure to let me know
                    on twitter{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://twitter.com/jakobsmarvin"
                    >
                        @JakobsMarvin
                    </a>{' '}
                    Good luck and have fun!
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:marv416@gmail.com">
                        marv416@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
