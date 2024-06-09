import { styled } from "styled-components";
import Header from "../components/Header/Header";
import QnaDetailMainContainer from "../container/Qna/QnaDetailMainContainer";

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
            <Header />
            <QnaDetailWrapper>
                <QnaDetailMainContainer />
                {/* <QnaDetailSideContainer/> */}
            </QnaDetailWrapper>
        </div>
    );
}
export default QnaDetail;
