import React, { useState } from 'react';


export interface MusicProjectsProps {}

const MusicProjects: React.FC<MusicProjectsProps> = (props) => {
    const [currentSong, setCurrentSong] = useState<string>('');

    return (
        <div className="site-page-content">
            <h1>Generative AI</h1>
            <h3>Projects</h3>
            <br />
            <div className="text-block">
                <p>
                    Over the past couple years, I have been involved in developing projects that leverage Generative AI technologies. Below are two of my favorite projects in this domain.
                </p>
            </div>
            <br />
            <h2>CloudyAI</h2>
            <br />
            <p>
                CloudyAI is a chatbot platform I developed using TypeScript, Tailwind CSS, and Vercel. The aim was to create a conversational AI that could provide concise and context-aware responses to users. By integrating the OpenAI API, I enhanced the chatbot's functionality, allowing it to understand and respond to a wide range of queries effectively.
            </p>
            <br />
            <p>
                One of the key features of CloudyAI is its ability to be context-trained. This means that it can maintain context over the course of a conversation, providing more accurate and relevant responses. I designed and deployed the website (<a href="https://cloudyai.fun" target="_blank" rel="noreferrer">cloudyai.fun</a>) to enable users to talk to Cloudy directly for free.
            </p>
            <br />
            <div className="captioned-image">
                <img src={"https://s11.gifyu.com/images/SAgnN.gif"} alt="CloudyAI Screenshot" />
                <p>
                    <sub>
                        <b>Figure 1:</b> Cloudy's chatbot interface.
                    </sub>
                </p>
            </div>
            <br />
            <p>
                Developing CloudyAI was an exciting challenge. Integrating the OpenAI API required careful handling of API requests and responses to ensure that the chatbot operated smoothly. I also focused on creating an intuitive and user-friendly interface using Tailwind CSS, making the chatbot accessible to a broad audience.
            </p>
            <br />
            <h3>Links:</h3>
            <ul>
                <li>
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://cloudyai.fun"
                    >
                        <p>
                            <b>[Website]</b> - cloudyai.fun
                        </p>
                    </a>
                </li>
            </ul>
            <br />
            <h2>SixtyFours</h2>
            <br />
            <p>
                SixtyFours is a unique project where I combined Generative AI with blockchain technology. The project involves generating 64x64 pixel abstract SVG art pieces using a Large Language Model (LLM) API. These art pieces are then encoded into base64 and stored on the Ethereum mainnet.
            </p>
            <br />
            <p>
                The 64s are AI-created SVG pieces that are not just stored on the blockchain but are also a form of digital art collection. Each piece is generated through an API call to an LLM, which produces the abstract SVG/XML art. By encoding the artwork into base64, I ensured that the entire piece could be stored on-chain, preserving its integrity and ownership.
            </p>
            <br />
            {/* Placeholder for media */}
            <div className="captioned-image">
                <img src={"https://s11.gifyu.com/images/SAgIe.gif"} alt="SixtyFours Artwork" />
                <p>
                    <sub>
                        <b>Figure 2:</b> Example of a 64x64 pixel abstract SVG art piece from the SixtyFours collection.
                    </sub>
                </p>
            </div>
            <br />
            <p>
                This project was an exploration into the possibilities of combining AI-generated content with decentralized technologies. It presented several challenges, including efficiently generating and encoding the SVG art and interacting with the Ethereum blockchain to store the data securely. The result is a series of unique, AI-generated art pieces that exist entirely on the blockchain.
            </p>
            <br />
            <h3>Links:</h3>
            <ul>
                <li>
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/OfficialMarvin/64gen"
                    >
                        <p>
                            <b>[GitHub]</b> - SixtyFours Repository
                        </p>
                    </a>
                </li>
            </ul>
            <br />
            <p>
                Through SixtyFours, I aimed to demonstrate how AI and blockchain can intersect to create new forms of digital assets and art. It was a rewarding project that pushed the boundaries of conventional applications of these technologies.
            </p>
            <br />
        </div>
    );
};

// const styles: StyleSheetCSS = {};

export default MusicProjects;
