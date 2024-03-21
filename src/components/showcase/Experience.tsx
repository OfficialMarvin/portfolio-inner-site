import React from 'react';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>AmerisourceBergen</h1>
                        <h3>Customer Relationship Management Intern</h3>
                    </div>
                    <div style={styles.headerRow}>
                        <p>Hybrid</p>
                        <b>
                            <p>Jun 2022 - Aug 2022</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <ul>
                    <li>
                        <p>
                            Worked with the IT team to export and document metadata and UI/UX for multiple
                            permission sets in production. Gave suggestions for field and flow updates. 
                            Became proficient in Salesforce and used SQL and Excel.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Save the Martians NFT</h1>
                        <h3>Community Tech Manager</h3>
                    </div>
                    <div style={styles.headerRow}>
                        <p>Remote</p>
                        <b>
                            <p>September 2021 - May 2022</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <ul>
                    <li>
                        <p>
                            Was responsible for tasks such as automating and maintaining bots, providing cross-chain
                            support, web development, creating multi-media, etc. Worked with people globally to create a
                            NFT with fun utility.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>College of IST, Penn State</h1>
                        <h3>Summer Research Assistance</h3>
                    </div>
                    <div style={styles.headerRow}>
                        <p>Remote</p>
                        <b>
                            <p>May 2021 - September 2021</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <ul>
                    <li>
                        <p>
                            Researched anomalies in global wildlife trade and illegal seizure data using Python tools.
                            Cleaned and spatially clustered data to recognize patterns and modus operandi of
                            poachers/illegal wildlife traders.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Freelance</h1>
                        <h3>App Developer</h3>
                    </div>
                    <div style={styles.headerRow}>
                        <p>Remote</p>
                        <b>
                            <p>2018 - 2020</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <ul>
                    <li>
                        <p>
                            Developed and sold both iOS and Android apps. Used Unity with C sharp for Amazon, and
                            XCode with C++ for iOS. Auctioned the rights to several apps on Flippa, used Google
                            AdSense, and ran Instagram ads to market.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
};

export default Experience;
