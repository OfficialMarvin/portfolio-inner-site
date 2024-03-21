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
                    I'm a data scientist who recently graduated from The Pennsylvania State University
                    with my B.S. in Data Sciences in May 2024. I'm currently seeking full-time opportunities 
                    in the field of data science.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:marvinjakobs@gmail.com">
                        marvinjakobs@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    From a young age, I have been fascinated by the power of data and its ability to drive
                    informed decision-making. This fascination led me to pursue a degree in Data Sciences at
                    The Pennsylvania State University. Throughout my academic journey, I have gained a strong
                    foundation in statistical analysis, machine learning, and data visualization.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> A real photo of me developing this
                            website :)
                        </sub>
                    </p>
                </div>

                <p>
                    During my time at Penn State, I worked on various projects that allowed me to apply my
                    data science skills to real-world problems. I collaborated with a team of fellow students
                    to develop predictive models for customer churn analysis, which helped businesses make
                    data-driven decisions to retain their customers. I also had the opportunity to intern at
                    a leading technology company, where I worked on optimizing their recommendation algorithms
                    to enhance user experience.
                </p>
                <br />
                <p>
                    Now, as a recent graduate, I am excited to embark on my professional journey as a data
                    scientist. I am eager to contribute my skills and knowledge to an organization that values
                    data-driven insights and innovation. I am particularly interested in opportunities that
                    allow me to work on complex data problems, develop scalable solutions, and make a meaningful
                    impact through data-driven decision-making.
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
                            Beyond data science, I have a passion for continuous learning and exploring new
                            technologies. In my free time, I enjoy participating in online data science
                            competitions and hackathons, which allow me to sharpen my skills and stay
                            up-to-date with the latest trends in the field. I also love to read research
                            papers and attend industry conferences to expand my knowledge and network with
                            like-minded professionals.
                        </p>
                        <br />
                        <p>
                            When I'm not immersed in data, I enjoy hiking, photography, and playing the
                            guitar. These hobbies help me maintain a healthy work-life balance and bring
                            a creative perspective to my analytical mindset.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Me, April 2024
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thank you for taking the time to learn a bit about me! I hope you enjoy exploring my
                    portfolio website and getting a glimpse of my skills and experiences. If you have any
                    questions or would like to discuss potential opportunities, please feel free to reach
                    out to me through the <Link to="/contact">contact page</Link> or send me an email at{' '}
                    <a href="mailto:marvinjakobs@gmail.com">marvinjakobs@gmail.com</a>. I look forward to
                    connecting with you!
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
