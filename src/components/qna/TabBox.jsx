import { Link, useSearchParams } from "react-router-dom";
import { styled } from "styled-components";

const QnaTapBox = styled.div`
    flex-direction: column;
    display: flex;
`;

const QnaTap = styled(Link)`
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0;
    padding-right: 0;
    align-items: center;
    width: fit-content;
    display: flex;
`;

const QnaTapName = styled.span`
    --tw-text-opacity: 1;
    color: ${({ tab }) => (tab === "newest" ? "rgb(15 23 42 / var(--tw-text-opacity))" : "rgb(148 163 184 / var(--tw-text-opacity))")};
    font-weight: 700;
    font-size: 1.125rem;
`;

const SelectedTap = styled(QnaTapName)`
    --tw-text-opacity: 1;
    color: ${({ tab }) => (tab === "waiting-answer" ? "rgb(15 23 42 / var(--tw-text-opacity))" : "rgb(148 163 184 / var(--tw-text-opacity))")};
`;

function TapBox() {
    const [searchParams] = useSearchParams();
    const tab = searchParams.get("tab") || "newest";
    const category = searchParams.get("category") || "JAVA";

    return (
        <QnaTapBox>
            <QnaTap to={`?category=${category.replace(/\+/g, "%2B")}&tab=newest`}>
                <QnaTapName tab={tab}>최신 질문</QnaTapName>
            </QnaTap>
            <QnaTap to={`?category=${category.replace(/\+/g, "%2B")}&tab=waiting-answer`}>
                <SelectedTap tab={tab}>답변을 기다리는 질문</SelectedTap>
            </QnaTap>
        </QnaTapBox>
    );
}
export default TapBox;
