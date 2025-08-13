
const Contact = () => {
    return (
        <div id="contact">
            <h3>디테일로 신뢰를 쌓고,<br/>협업을 통해 결과물의 완성도를 높이는 <span>개발자</span>가 되겠습니다</h3>
            <div className="contact-info">
                <ul className="title">
                    <li>이름 : </li>
                    <li>연락처 : </li>
                    <li>이메일 : </li>
                    <li>GitHub : </li>
                    <li>포트폴리오 : </li>
                </ul>
                <ul className="my-info">
                    <li>문정우</li>
                    <li>010 7316 1605</li>
                    <li>krihel98@gmail.com</li>
                    <li><a href="https://github.com/hyeswe10" target="_blank">https://github.com/hyeswe10</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Contact;