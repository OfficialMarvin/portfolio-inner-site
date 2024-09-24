import React from 'react';
// @ts-ignore
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite data science projects I have worked on
                over the last few years.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>Ocean Trash Detection</h2>
                <br />
                <p>
                    Ocean Trash Detection is a machine learning system I developed to detect marine pollution using satellite imagery. I utilized Sentinel-2 and Landsat-8 satellite images and implemented Convolutional Neural Network models like ResNet50 to analyze and detect areas with significant pollution levels. To enhance detection capabilities, I integrated Hugging Face APIs. Additionally, I implemented a web-based visualization platform to present the findings in an accessible and interactive manner.
                </p>
                <br />
                <div className="captioned-image">
                    <src={"https://s1.gifyu.com/images/SAgmE.gif"} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Visualization of the Ocean Trash Detection system in action.
                        </sub>
                    </p>
                </div>
                <p>
                    This project was significant to me as it combined my passion for environmental conservation with data science and machine learning. One of the key challenges was processing and handling the large volume of satellite imagery data. I had to implement efficient data preprocessing techniques to ensure the models could be trained effectively. The project also required fine-tuning the CNN models to improve detection accuracy, which involved experimenting with different architectures and hyperparameters.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/OfficialMarvin/ml-Ocean-Trash-Detection/"
                        >
                            <p>
                                <b>[GitHub]</b> - Ocean Trash Detection Repository
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    Through this project, I gained valuable experience in handling geospatial data and implementing deep learning models for environmental applications. It reinforced my belief in the power of technology to address global challenges.
                </p>
            </div>
            <div className="text-block">
                <h2>Blockchain Battleship</h2>
                <br />
                <p>
                    Blockchain Battleship is a decentralized game I developed on the Ethereum blockchain. The game replicates the classic Battleship game but leverages blockchain technology to ensure transparency and fairness. I wrote smart contracts in Solidity to handle game logic and state management. The game features real-time messaging and gameplay mechanics, providing an interactive experience for players. I focused heavily on smart contract security to prevent cheating and ensure reliable gameplay. For the frontend interaction, I used JavaScript and integrated Web3.js to communicate with the Ethereum network.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={"https://i.ibb.co/wpbk0zT/Fv-Ix9haa-QAIP-g-B.jpg"} alt="Blockchain Battleship Screenshot" style={styles.image} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 2:</b> Screenshot of the Blockchain Battleship game interface.
                        </sub>
                    </p>
                </div>
                <p>
                    Developing Blockchain Battleship was an exciting venture into the world of decentralized applications (dApps). One of the main challenges was ensuring that the game logic executed correctly on-chain while minimizing gas costs for transactions. I also had to address the issue of maintaining game state in a secure and efficient manner. This project deepened my understanding of blockchain technology, smart contracts, and the potential of decentralized gaming.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/OfficialMarvin/BlockchainBattleship"
                        >
                            <p>
                                <b>[GitHub]</b> - Blockchain Battleship Repository
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    The project showcases how traditional games can be transformed using blockchain technology, offering new possibilities for fairness and transparency in gaming.
                </p>
            </div>
            <div className="text-block">
                <h2>Stock Trend Prediction</h2>
                <br />
                <p>
                    The Stock Trend Prediction project involved utilizing sentiment analysis on Twitter data combined with historical stock data to predict stock market trends. I collected tweets related to specific stocks and performed sentiment analysis using the VADER (Valence Aware Dictionary and sEntiment Reasoner) model. By integrating this sentiment data with historical stock prices, I trained machine learning models to predict future stock movements. I implemented data processing and machine learning models in Databricks, achieving a model accuracy of 51%.
                </p>
                <br />
                <p>
                    This project was a deep dive into natural language processing and its application in financial markets. One of the challenges was handling the noisy and unstructured nature of social media data. Cleaning and preprocessing the tweets were crucial steps to ensure the sentiment analysis was accurate. While the model's accuracy surpassed random guessing, it highlighted the complexities and unpredictable nature of the stock market, emphasizing that even with sophisticated models, predicting stock trends remains a challenging task.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/OfficialMarvin/Sentimental-and-Historical-Stock-Analysis"
                        >
                            <p>
                                <b>[GitHub]</b> - Stock Trend Prediction Repository
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    This project enhanced my skills in data science, particularly in sentiment analysis and integrating disparate data sources for predictive modeling.
                </p>
            </div>
            <div className="text-block">
                <h2>Brain Tumor Classification</h2>
                <br />
                <p>
                    In the Brain Tumor Classification project, I developed machine learning models to grade gliomas using imaging and genomic data. The goal was to assist in the early detection and classification of brain tumors to improve treatment outcomes. I used datasets from the UC Irvine Machine Learning Repository and The Cancer Genome Atlas (TCGA). I tested various algorithms, including Support Vector Machines (SVM), Random Forests, and neural networks, to determine which provided the best accuracy. Emphasis was placed on algorithm selection, feature engineering, and model optimization.
                </p>
                <br />
                <p>
                    One of the primary challenges was handling high-dimensional genomic data and ensuring the models were not overfitting. I implemented cross-validation techniques and feature selection methods to improve model generalization. This project provided valuable insights into biomedical data analysis and the application of machine learning in healthcare.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/OfficialMarvin/PredictBrainTumor"
                        >
                            <p>
                                <b>[GitHub]</b> - Brain Tumor Classification Repository
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    This experience solidified my interest in using data science for impactful real-world applications, particularly in the medical field.
                </p>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    image: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
