import { BsStars } from "react-icons/bs";
import { useNavigate } from "react-router";

const MyProjects = () => {
    const navigate = useNavigate();
    return (
        <div id="my-projects">
            <h2>MY PROJECTS</h2>
            <p className="main-desc">단순한 HTML/CSS 기반의 정적 웹페이지에서 시작해 JS, React를 활용한<br/>사용자 중심의 인터렉션 기능까지 점차 확장시켜 프로젝트를 발전시켰습니다.<br/>실무 역량 강화를 목표로, 기획부터 UI설계, 퍼블리싱,<br/>프론트엔드 개발까지 전 과정에 직접 참여하여 제작한 웹 프로젝트입니다.</p>
            <div className="graph">
                <div className="top">
                    <div className="blog-webpage">
                        <p className="skills">HTML5 / CSS3 / SCSS</p>
                        <h3>BLOG WEBPAGE</h3>
                        <p className="project-desc">기업 소개용 블로그 웹사이트를 HTML/CSS 기획부터<br/>퍼블리싱까지 정적으로 구현한 프로젝트</p>
                    </div>
                    <div className="quiz-game">
                        <p className="skills">React / Mobile-First UI</p>
                        <h3>QUIZ GAME</h3>
                        <p className="project-desc">상태 관리를 통해 정답 체크 및 점수합산이 가능한<br/>React 기반의 모바일 게입 웹앱</p>
                    </div>
                    <div className="parking-system">
                        <div className="complete">
                            <p className="second"><BsStars />2nd COMPLETE</p>
                            <p className="skills">React / React Router / Supabase / JSON / SCSS / Figma</p>
                        </div>
                        <h3>PARKING SYSTEM</h3>
                        <p className="project-desc">차량 주차를 사전에 예약할 수 있는 웹 시스템으로<br/>Supabase + React를 사용하여 구현한 웹앱</p>
                        <button>이동하기</button>
                    </div>
                </div>
                <div className="line-graph">
                    <span className="small-1"></span>
                    <span className="small-2"></span>
                    <div className="top-line">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="main-line">
                        <span className="main-big"></span>
                    </div>
                    <div className="bottom-line">
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="bottom">
                    <div className="word-game">
                        <p className="skills">React / Open API / Mobile-First UI</p>
                        <h3>WORD GAME</h3>
                        <p className="project-desc">우리말 사전 API를 활용하여 React로 만든<br/>모바일형 AI 끝말잇기 게임</p>
                    </div>
                    <div className="shopping-mall">
                        <div className="complete">
                            <p className="first"><BsStars />1st COMPLETE</p>
                            <p className="skills">React / React Router / JSON / SCSS / Figma</p>
                        </div>
                        <h3>SHOPPING MALL</h3>
                        <p className="project-desc">JSON 데이터를 활용해 상품 리스트를 구성하고,<br/>사용자가 상품을 클릭하면<br/>상세 정보를 확인하고 장바구니에 담을 수 있는 React 쇼핑몰</p>
                        <button onClick={()=>{navigate("/shoppingmall")}}>이동하기</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;