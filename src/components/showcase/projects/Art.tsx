import React from 'react';

export interface ArtProjectsProps {}

const ArtProjects: React.FC<ArtProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>On-Chain Art Collection</h1>
            <h3>Explorations</h3>
            <br />
            <div className="text-block">
                <p>
                    My passion for art extends beyond traditional mediums into the realm of blockchain technology. I am fascinated by the novelty and technicality of effectively storing art data on-chain, utilizing the Ethereum Virtual Machine (EVM) as a dynamic variable in the art itself. This intersection of art and technology opens up new possibilities for how we create, own, and interact with art.
                </p>
                <br />
                <p>
                    Below are some of my favorite on-chain NFT projects that highlight different aspects of this innovative space.
                </p>
            </div>
            <div className="text-block">
                <h2>Crypto Coaster</h2>
                <br />
                <p>
                    Crypto Coaster is a collection of 2,000 randomly generated 3D roller coasters, stored entirely on-chain. It's an experimental, VR-compatible 3D NFT project that showcases the potential of on-chain 3D assets. Each coaster provides a unique experience; some tracks feel fast, some slow, and others are just insane. The ability to generate complex 3D models and store them on the Ethereum blockchain demonstrates advancements in smart contract capabilities and data storage optimization.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={"https://s11.gifyu.com/images/SAgjf.gif"} alt="Crypto Coaster GIF" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> My Crypto Coaster.
                        </sub>
                    </p>
                </div>
                <br />
                <p>
                    The technical achievement of rendering 3D models directly from on-chain data is impressive. It involves complex algorithms to generate the coaster tracks procedurally, ensuring each one is unique and fully stored within the blockchain. This eliminates the need for external servers, enhancing the longevity and decentralization of the artwork.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.cryptocoaster.fun/view/1"
                        >
                            <p>
                                <b>[Website]</b> - View Crypto Coaster
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Wiiides</h2>
                <br />
                <p>
                    Wiiides is an experimental smart contract and conceptual artwork by Sterling Crispin. It's a fully on-chain NFT collection where each piece gets wider every time it's sold or transferred between wallets. Wiiides consume data directly from on-chain CryptoPunks and programmatically edit the data to make each image grow wider based on the growth rate and number of transfers.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={"https://raw.seadn.io/files/c96783c307470a985507fcee516f728b.svg"} alt="Wiiides NFT" />
                    <p>
                        <sub>
                            <b>Figure 2:</b> My Wiiide that has expanded over transfers.
                        </sub>
                    </p>
                </div>
                <br />
                <p>
                    This project is a fascinating exploration of how smart contracts can be used to create dynamic, evolving artworks. By utilizing the EVM to track the number of transfers, the artwork itself changes, embodying the history of its own transactions. It's inspired in part by Alvin Lucier's 1969 work "I am Sitting in a Room," where a recording is played back and re-recorded until it becomes pure distortion.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="http://www.wiiides.com"
                        >
                            <p>
                                <b>[Website]</b> - Wiiides Official Site
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://twitter.com/wiiides"
                        >
                            <p>
                                <b>[Twitter]</b> - @wiiides
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Shapes</h2>
                <br />
                <p>
                    Shapes is a collection of 100% in-chain generative art pieces by makio135 and clemsos. This project allows owners to evolve their tokens between multiple generators, effectively changing the artwork over time. After minting, owners can mutate their tokens by hunting for new seeds or even switching to other generators. This creates a contributive curation process where collectors actively shape the collection.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={"https://openseauserdata.com/files/92f5f7b7f96c88774506d5e8d23ce0fb.svg"} alt="Shapes NFT" />
                    <p>
                        <sub>
                            <b>Figure 3:</b> My mutated Shape.
                        </sub>
                    </p>
                </div>
                <br />
                <p>
                    The custom Solidity contracts used in Shapes produce entirely on-chain art with advanced NFT dynamics. The project exemplifies how smart contracts can be harnessed to create interactive and evolving art experiences. By allowing tokens to be regenerated and mutated, it engages the community in the creative process, pushing the boundaries of what NFTs can represent.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://shapes.makio135.com/"
                        >
                            <p>
                                <b>[Website]</b> - Shapes Official Site
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://opensea.io/collection/shapes-meta"
                        >
                            <p>
                                <b>[OpenSea]</b> - Shapes Collection
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>My Collection</h2>
                <br />
                <p>
                    These projects highlight different facets of on-chain art: 3D on-chain NFTs, NFTs that change as owners change, and entirely in-chain generated NFTs. They exemplify the innovative use of blockchain technology in art, where the medium and the message intertwine. The ability to store art data on-chain not only preserves the artwork but also enables dynamic interactions that were previously impossible.
                </p>
                <br />
                <p>
                    You can view my personal collection and explore more of these fascinating projects on my OpenSea profile.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://opensea.io/Quami"
                        >
                            <p>
                                <b>[OpenSea]</b> - My Opensea
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ArtProjects;
