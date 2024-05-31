import { Link } from "react-router-dom";

function ClickCategory() {
    const categoryListBox = document.querySelector(".category-list-box");
    const categoryArrowSvg = document.querySelector(".category-arrow-svg");
    categoryListBox.classList.toggle("hidden");
    categoryArrowSvg.classList.toggle("up-down-reversal");
}

function CategorySelectBox() {
    return (
        <div className="category-select-box">
            {/* useRef 사용처 */}
            <button type="button" className="category-btn" onClick={ClickCategory}>
                <span className="selected-category-name">JAVA</span>
                <svg width="24" height="24" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="category-arrow-svg">
                    <g>
                        <g id="style=outline">
                            <path id="arrowDown" fillRule="evenodd" clipRule="evenodd" d="M12 15.5858L20.2929 7.29289C20.6834 6.90237 21.3166 6.90237 21.7071 7.29289C22.0976 7.68342 22.0976 8.31658 21.7071 8.70711L12.7071 17.7071C12.3166 18.0976 11.6834 18.0976 11.2929 17.7071L2.29289 8.70711C1.90237 8.31658 1.90237 7.68342 2.29289 7.29289C2.68342 6.90237 3.31658 6.90237 3.70711 7.29289L12 15.5858Z"></path>
                        </g>
                    </g>
                </svg>
            </button>
            <div className="category-list-box hidden">
                <Link className="category-item-link" to="">
                    <svg width="24" height="24" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="selected-svg">
                        <g>
                            <g id="style=outline">
                                <path id="Vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M19.669 6.25671C20.0795 6.62617 20.1128 7.25846 19.7433 7.66897L10.7433 17.669C10.5598 17.8729 10.3005 17.9925 10.0263 17.9997C9.75204 18.0069 9.48688 17.9011 9.29289 17.7071L4.29289 12.707C3.90237 12.3165 3.90237 11.6833 4.2929 11.2928C4.68343 10.9023 5.31659 10.9023 5.70711 11.2928L9.96181 15.5476L18.2567 6.33104C18.6262 5.92053 19.2585 5.88726 19.669 6.25671Z"></path>
                            </g>
                        </g>
                    </svg>
                    <span className="category-name selected-category">JAVA</span>
                </Link>
                <Link className="category-item-link" to="">
                    <span className="category-name">Python</span>
                </Link>
                <Link className="category-item-link" to="">
                    <span className="category-name">C언어</span>
                </Link>
                <Link className="category-item-link" to="">
                    <span className="category-name">C++</span>
                </Link>
            </div>
        </div>
    );
}
export default CategorySelectBox;
