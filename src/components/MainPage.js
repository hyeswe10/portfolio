import Title from './mainpage/Title';
import Index from './mainpage/Index';
import AboutMe from './mainpage/AboutMe';
import SkillsTools from './mainpage/SkillsTools';
import MyProjects from './mainpage/MyProjects';
import CloneCoding from './mainpage/CloneCoding';
import PracticalPublishing from './mainpage/PracticalPublishing';
import Contact from './mainpage/Contact';

const MainPage = () => {
    return (
        <div id="main-page">
            <Title/>
            <Index/>
            <AboutMe/>
            <SkillsTools/>
            <MyProjects/>
            <CloneCoding/>
            <PracticalPublishing/>
            <Contact/>
        </div>
    );
};

export default MainPage;