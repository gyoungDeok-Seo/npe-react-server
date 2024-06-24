import styled from "styled-components";
import PopularPosts from "../../components/SearchResult/SideBar/PopularPosts";
import { useEffect, useState } from "react";

const SearchResultSideBarContainer = styled.div`
    scrollbar-width: none;
    position: sticky;
    top: 190px;
    grid-column: span 4 / span 4;
    grid-column-start: 9;
    display: block;
    height: calc(100vh - 190px);
    overflow-y: auto;
    overscroll-behavior-y: contain;
    border-width: 1px;
    border-right-width: 0;
    border-top-width: 0;
    border-bottom-width: 0;
    border-style: solid;
    border-color: #e2e8f0;
    padding-left: 3rem;
`;
const SearchResultSideBarBox = styled.div`
    padding-top: 2rem;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;
const SearchResultSideBarInner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
const SearchResultSideBarTitle = styled.h3`
    color: #0f172a;
    font-size: 1.125rem;
    margin-bottom: 0;
`;
function SideBar() {
    const [topTenQuestions, setTopTenQuestion] = useState([]);

    const weekTopTenQuestionFetch = async () => {
        const response = await fetch(`http://localhost:10000/searches/api/question-top-ten`);
        const topTenQuestion = await response.json();
        return topTenQuestion;
    };

    const getQuestionTopTen = async () => {
        const data = await weekTopTenQuestionFetch();
        setTopTenQuestion(data);
    };

    useEffect(() => {
        getQuestionTopTen();
    }, []);

    return (
        <SearchResultSideBarContainer>
            <SearchResultSideBarBox>
                <SearchResultSideBarInner>
                    <SearchResultSideBarTitle>주간 인기 TOP 10</SearchResultSideBarTitle>
                    <div>{topTenQuestions.length > 0 ? topTenQuestions?.map((item, index) => <PopularPosts item={item} index={index} />) : <></>}</div>
                </SearchResultSideBarInner>
            </SearchResultSideBarBox>
        </SearchResultSideBarContainer>
    );
}
export default SideBar;
