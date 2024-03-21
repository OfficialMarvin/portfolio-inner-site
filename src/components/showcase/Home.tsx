import React from 'react';
import { Link } from '../general';
import { useNavigate } from 'react-router';

export interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
    const navigate = useNavigate();

    const goToContact = () => {
        navigate('/contact');
    };

    return (
        <div style={styles.page}>
            <div style={styles.header}>
                <h1 style={styles.name}>Marvin Jakobs</h1>
                <h2>Data Scientist</h2>
            </div>
            <div style={styles.buttons}>
                <Link containerStyle={styles.link} to="about" text="ABOUT" />
                <Link containerStyle={styles.link} to="experience" text="EXPERIENCE" />
                <Link containerStyle={styles.link} to="projects" text="PROJECTS" />
                <Link containerStyle={styles.link} to="contact" text="CONTACT" />
            </div>
            <div style={styles.contactInfo}>
                <p>LinkedIn: <a href="https://linkedin.com/in/marvinjakobs">linkedin.com/in/marvinjakobs</a></p>
                <p>GitHub: <a href="https://github.com/OfficialMarvin">github.com/OfficialMarvin</a></p>
                <p>Email: <a href="mailto:mkj5388@psu.edu">mkj5388@psu.edu</a></p>
                <p>Mobile: +1-612-298-3926</p>
            </div>
            <div style={styles.forHireContainer} onMouseDown={goToContact}>
                <p>Available for data science internships and full-time opportunities!</p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    page: {
        left: 0,
        right: 0,
        top: 0,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
    },
    header: {
        textAlign: 'center',
        marginBottom: 64,
        marginTop: 64,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        justifyContent: 'space-between',
    },
    link: {
        padding: 16,
    },
    forHireContainer: {
        marginTop: 64,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    },
    name: {
        fontSize: 72,
        marginBottom: 16,
        lineHeight: 0.9,
    },
    contactInfo: {
        marginTop: 32,
        textAlign: 'center',
    },
};

export default Home;
