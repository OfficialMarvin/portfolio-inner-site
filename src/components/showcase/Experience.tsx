import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Cencora (formerly AmerisourceBergen)</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://www.cencora.com/'}
                        >
                            <h4>www.cencora.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>CRM Intern</h3>
                        <b>
                            <p>Summer 2022</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    During my internship at Cencora, I collaborated with the IT team to export and document metadata and UI/UX for various permission sets in production. I also provided suggestions for field and flow updates, enhancing the overall efficiency of the CRM system.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Gained proficiency in Salesforce, using SQL and Excel for data management tasks.
                        </p>
                    </li>
                    <li>
                        <p>
                            Documented and streamlined processes for multiple permission sets, ensuring better system maintenance and user experience.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Save the Martians NFT</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://savemartians.com/'}
                        >
                            <h4>www.savemartians.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Blockchain Intern</h3>
                        <b>
                            <p>Fall 2021 - Spring 2022</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    As a Blockchain Intern, I was involved in developing and maintaining bots, providing cross-chain support, and contributing to web development efforts. My role required close collaboration with a global team to create an NFT project with unique utility.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Automated and maintained bots to support NFT operations, improving efficiency and reliability.
                        </p>
                    </li>
                    <li>
                        <p>
                            Played a key role in web development, enhancing the platform’s user experience.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>College of IST, Penn State</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Summer Research Assistant</h3>
                        <b>
                            <p>Summer 2021</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    I conducted research on anomalies in global wildlife trade using Python tools. The project involved data cleaning, spatial clustering, and pattern recognition to understand the activities of poachers and illegal traders.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Analyzed wildlife trade data to identify trends and patterns, contributing to global wildlife conservation efforts.
                        </p>
                    </li>
                    <li>
                        <p>
                            Developed spatial clustering models to detect illegal activities, aiding in the creation of preventive measures.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Freelance App Developer</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Remote Freelance</h3>
                        <b>
                            <p>2018 - 2020</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    As a freelance app developer, I designed and developed both iOS and Android apps. I utilized Unity with C# for Amazon apps and XCode with C++ for iOS. Several of my apps were successfully auctioned on Flippa, and I leveraged Google AdSense and Instagram ads for marketing.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Developed and sold multiple mobile apps, gaining experience in mobile development and digital marketing.
                        </p>
                    </li>
                    <li>
                        <p>
                            Achieved success in app auctions, demonstrating strong entrepreneurial skills and understanding of the mobile market.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
