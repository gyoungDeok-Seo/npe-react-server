import { Link } from "react-router-dom";

function TapBox() {
    return (
        <div className="qna-tap-box">
            <Link className="qna-tap" href="">
                <span className="qna-tap-name selected-tap">최신 질문</span>
            </Link>
            <Link className="qna-tap" href="">
                <span className="qna-tap-name">답변을 기다리는 질문</span>
            </Link>
        </div>
    );
}
export default TapBox;
