import React from 'react';

const Index = () => {
    return (
        <div id="index">
            <h2>INDEX</h2>
            <div className="main-index">
                <div className="top">
                    <div className="about-me">
                        <h3>ABOUT ME</h3>
                        <ul>
                            <li>SKILLS & TOOLS</li>
                        </ul>
                    </div>
                    <div className="practical-publishing">
                        <h3>PRACTICAL PUBLISHING</h3>
                        <ul>
                            <li>VOGUE GRID</li>
                            <li>BOOKSTORE</li>
                            <li>LOGGER</li>
                            <li>PINTEREST</li>
                        </ul>
                    </div>
                </div>
                <div className="bottom">
                    <div className="main-projects">
                        <h3>MAIN PROJECTS</h3>
                        <ul>
                            <li>SHOPPING MALL</li>
                            <li>PARKING SYSTEM</li>
                            <li>BLOG WEBPAGE</li>
                            <li>WORD GAME</li>
                            <li>QUIZ GAME</li>
                        </ul>
                    </div>
                    <div className="clone-coding">
                        <h3>CLONE CODING</h3>
                        <ul>
                            <li>NETFLIX</li>
                            <li>MOMENTUM</li>
                            <li>AIRBNB</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;