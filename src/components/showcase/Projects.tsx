import React, { useState } from 'react';
import { useNavigate } from 'react-router';

export interface ProjectsProps {}

interface ProjectBoxProps {
    title: string;
    description: string;
    route: string;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({
    title,
    description,
    route,
}) => {
    const [, setIsHovering] = useState(false);
    const navigation = useNavigate();

    const handleClick = () => {
        navigation(`/projects/${route}`);
    };

    const onMouseEnter = () => {
        setIsHovering(true);
    };

    const onMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <div
            onMouseDown={handleClick}
            className="big-button-container"
            style={styles.projectLink}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div style={styles.projectLinkLeft}>
                <div style={styles.projectText}>
                    <h1 style={{ fontSize: 32 }}>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
            <div style={styles.projectLinkRight}></div>
        </div>
    );
};

const Projects: React.FC<ProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Projects</h1>
            <br />
            <div style={styles.projectLinksContainer}>
                <ProjectBox
                    title="Blockchain Battleship"
                    description="Developed a decentralized game on Ethereum with Solidity and JavaScript. Features included real-time messaging and gameplay mechanics, with a focus on smart contract security and frontend interaction via Web3.js."
                    route="blockchain-battleship"
                />
                <ProjectBox
                    title="Stock Trend Prediction"
                    description="Utilized sentiment analysis on tweets and historical stock data to predict stock trends with a model accuracy of 51%. Implemented data processing and machine learning models in Databricks, employing VADER for sentiment analysis."
                    route="stock-trend-prediction"
                />
                <ProjectBox
                    title="Brain Tumor Classification"
                    description="Developed machine learning models for grading gliomas using imaging and genomic data, emphasizing algorithm selection and model accuracy. Used datasets from UC Irvine and TCGA, tested SVM, Random Forest, and neural networks."
                    route="brain-tumor-classification"
                />
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    projectLinksContainer: {
        flexDirection: 'column',
        width: '100%',
        display: 'flex',
        flex: 1,
    },
    projectLink: {
        marginBottom: 24,
        cursor: 'pointer',
        width: '100%',
        boxSizing: 'border-box',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    projectText: {
        justifyContent: 'center',
        flexDirection: 'column',
    },
    projectLinkLeft: {
        marginLeft: 16,
        alignItems: 'center',
    },
};

export default Projects;
