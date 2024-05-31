import Header from "../../components/header/Header";
import "./qna.css";
import QnaSidebar from "../../container/qna/QnaSidebar";
import QnaMainContents from "../../container/qna/QnaMainContents";

function CloseCategoryList(e) {
    const categoryListBox = document.querySelector(".category-list-box");
    const categoryArrowSvg = document.querySelector(".category-arrow-svg");
    if (!e.target.closest(".category-select-box")) {
        categoryListBox.classList.add("hidden");
        categoryArrowSvg.classList.remove("up-down-reversal");
    }
}

function QnA() {
    return (
        // useRef 사용처
        <div className="wrapper" onClick={CloseCategoryList}>
            <div style={{ position: "fixed", zIndex: 9999, top: "16px", left: "16px", right: "16px", bottom: "16px", pointerEvents: "none" }} className="global-toaster"></div>
            <div>
                <Header />
                <div className="qna-container">
                    <QnaSidebar/>
                    <QnaMainContents/>
                </div>
            </div>
        </div>
    );
}
export default QnA;
