import { Link } from "react-router-dom";
import { styled } from "styled-components";

const InterestTopicItemLi = styled.li`
    flex: none;
`;

const InterestTopicItemLink = styled(Link)`
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
    padding-left: 0.625rem;
    padding-right: 0.625rem;
    border-color: var(--color-slate-200, #e2e8f0);
    border-style: solid;
    border-width: 1px;
    border-radius: 9999px;
    gap: 0.375rem;
    align-items: center;
    display: flex;
    &:hover {
        background-color: var(--color-background-hover, #f8fafc);
    }
`;

const InterestTopicItemName = styled.span`
    color: var(--color-text-bold, #0f172a);
    font-weight: 700;
    font-size: 0.75rem;
`;

function InterestTopicItem({ topic }) {
    return (
        <InterestTopicItemLi>
            <InterestTopicItemLink to="">
                <InterestTopicItemName>{topic}</InterestTopicItemName>
            </InterestTopicItemLink>
        </InterestTopicItemLi>
    );
}
export default InterestTopicItem;
