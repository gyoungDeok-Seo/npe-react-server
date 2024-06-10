import { styled } from "styled-components";
import QnaDetailMainContainer from "../container/Qna/QnaDetailMainContainer";
import MainHeader from "../components/Header/MainHeader";
import QnaDetailSideBar from "../container/Qna/QnaDetailSideBar";

const QnaDetailWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: grid;
    width: 1024px;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    -moz-column-gap: 3rem;
    column-gap: 3rem;
    row-gap: 2rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
`;

function QnaDetail() {
    return (
        <div>
            <MainHeader />
            <QnaDetailWrapper>
                <QnaDetailMainContainer />
                <QnaDetailSideBar />
            </QnaDetailWrapper>
        </div>
    );
}
export default QnaDetail;
