import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import ResultProfile from "../../components/SearchResult/ResultBox/ResultProfile";
import { useEffect, useState } from "react";
import NoneResult from "../../components/SearchResult/ResultBox/NoneResult";
import ResultQna from "../../components/SearchResult/ResultBox/ResultQna";

export const SearchResultMainContent = styled.div`
    grid-column: span 8 / span 8;
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    padding-top: 2rem;
    padding-bottom: 5rem;
`;
const SearchResultQnaLinkBtn = styled(Link)`
    text-align: left;
    padding: 1.5rem;
    background-color: #fff;
    border-color: #e2e8f0;
    border-style: solid;
    border-width: 1px;
    border-radius: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    width: 100%;
`;
const SearchResultQnaLinkTitle = styled.span`
    color: #0f172a;
    font-weight: 700;
    font-size: 1.125rem;
    display: block;
`;
const SearchResultQnaLinkSubTitle = styled.span`
    color: #334155;
    font-size: 0.875rem;
    display: block;
`;
const SearchResultQnaLinkSvg = styled.svg`
    fill: #0f172a;
    width: 1rem;
    height: 1rem;
`;

export const SearchResultProfilesBox = styled.div`
    z-index: 0;
`;
export const SearchResultProfilesInner = styled.div`
    grid-column: span 8 / span 8;
`;
export const SearchResultProfilesFlexBox = styled.div`
    display: flex;
    flex-direction: column;
`;
export const SearchResultProfilesTitleBar = styled.div`
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const SearchResultProfilesTitle = styled.p`
    color: #0f172a;
    font-weight: 700;
    font-size: 1.125rem;
`;
export const SearchResultProfilesAllViewBtn = styled.div`
    color: rgb(51 65 85 /1);
    font-weight: 700;
    font-size: 0.875rem;
    padding: 0.25rem;
    border-radius: 0.25rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
`;
export const SearchResultProfilesAllViewBtnText = styled.span`
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    margin-left: 0.125rem;
`;
export const SearchResultProfilesAllViewBtnSvg = styled.svg`
    fill: #334155;
    width: 1rem;
    height: 1rem;
`;
export const SearchResultProfilesContentBox = styled.div`
    background-color: #fff;
    border-left-width: 0;
    border-right-width: 0;
    position: relative;
`;
export const SearchResultAllListBox = styled.div`
    z-index: 0;
`;
export const SearchResultAllListInner = styled.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
`;
function ResultBox() {
    const { search } = useLocation();
    const query = new URLSearchParams(search).get("query") || "";
    const [searchWord, setSearchWord] = useState(query);
    const [searchMemberProfileList, setSearchMemberProfileList] = useState([]);
    const [searchQuestionList, setSearchQuestionList] = useState([]);
    const [profilePage, setProfilePage] = useState(1);
    const [questionPage, setQuestionPage] = useState(1);

    const searchMemberProfileFetch = async (keyword, page) => {
        const response = await fetch(`http://localhost:10000/searches/api/member-profile-list?keyword=${keyword}&page=${page}`);
        const memberProfileList = response.json();
        return memberProfileList;
    };

    const searchQuestionFetch = async (keyword, page) => {
        const response = await fetch(`http://localhost:10000/searches/api/question-list?keyword=${keyword}&page=${page}`);
        const questionList = response.json();
        return questionList;
    };

    const getMemberProfile = async (keyword) => {
        const data = await searchMemberProfileFetch(keyword, profilePage);
        setSearchMemberProfileList(data);
    };
    const getQuestion = async (keyword) => {
        const data = await searchQuestionFetch(keyword, questionPage);
        setSearchQuestionList((item) => [...item, ...data]);
    };

    useEffect(() => {
        if (query) {
            setSearchWord(query);
            getMemberProfile(query);
            getQuestion(query);
        }
    }, [query, profilePage, questionPage]);

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, offsetHeight } = document.documentElement;
            if (window.innerHeight + scrollTop >= offsetHeight) {
                setQuestionPage((prev) => prev + 1);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <SearchResultMainContent>
            <SearchResultProfilesBox>
                <SearchResultProfilesInner>
                    <SearchResultProfilesFlexBox>
                        <SearchResultProfilesTitleBar>
                            <SearchResultProfilesTitle>프로필 {searchMemberProfileList?.length}</SearchResultProfilesTitle>
                            {/* <SearchResultProfilesAllViewBtn type="button">
                                <SearchResultProfilesAllViewBtnText>모두 보기</SearchResultProfilesAllViewBtnText>
                                <SearchResultProfilesAllViewBtnSvg width={16} height={16} strokeWidth={0} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <g id="style=outline">
                                            <path id="arrowRight" fillRule="evenodd" clipRule="evenodd" d="M15.5858 12L7.29289 20.2929C6.90237 20.6834 6.90237 21.3166 7.29289 21.7071C7.68342 22.0976 8.31658 22.0976 8.70711 21.7071L17.7071 12.7071C18.0976 12.3166 18.0976 11.6834 17.7071 11.2929L8.70711 2.29289C8.31658 1.90237 7.68342 1.90237 7.29289 2.29289C6.90237 2.68342 6.90237 3.31658 7.29289 3.70711L15.5858 12Z" />
                                        </g>
                                    </g>
                                </SearchResultProfilesAllViewBtnSvg>
                            </SearchResultProfilesAllViewBtn> */}
                        </SearchResultProfilesTitleBar>
                        <div>
                            <SearchResultProfilesContentBox>{searchMemberProfileList && searchMemberProfileList?.length > 0 ? searchMemberProfileList?.map((profile, index) => <ResultProfile profile={profile} index={index} />) : <NoneResult />}</SearchResultProfilesContentBox>
                        </div>
                    </SearchResultProfilesFlexBox>
                </SearchResultProfilesInner>
            </SearchResultProfilesBox>
            <SearchResultQnaLinkBtn type="button">
                <span>
                    <SearchResultQnaLinkTitle>현직자 Q&amp;A에 질문하기</SearchResultQnaLinkTitle>
                    <SearchResultQnaLinkSubTitle>질문을 남기고 현직자들의 답변을 받아 보세요.</SearchResultQnaLinkSubTitle>
                </span>
                <SearchResultQnaLinkSvg width={24} height={24} strokeWidth={0} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <g id="style=outline">
                            <path id="arrowRight" fillRule="evenodd" clipRule="evenodd" d="M15.5858 12L7.29289 20.2929C6.90237 20.6834 6.90237 21.3166 7.29289 21.7071C7.68342 22.0976 8.31658 22.0976 8.70711 21.7071L17.7071 12.7071C18.0976 12.3166 18.0976 11.6834 17.7071 11.2929L8.70711 2.29289C8.31658 1.90237 7.68342 1.90237 7.29289 2.29289C6.90237 2.68342 6.90237 3.31658 7.29289 3.70711L15.5858 12Z" />
                        </g>
                    </g>
                </SearchResultQnaLinkSvg>
            </SearchResultQnaLinkBtn>
            <SearchResultAllListBox>
                <div>
                    <SearchResultProfilesTitle>현직자 Q&amp;A {searchMemberProfileList?.length}</SearchResultProfilesTitle>
                    <SearchResultAllListInner style={{ height: "auto", overflow: "auto" }}>{searchQuestionList.length > 0 ? searchQuestionList?.map((question, index) => <ResultQna question={question} index={index} />) : <NoneResult />}</SearchResultAllListInner>
                </div>
            </SearchResultAllListBox>
        </SearchResultMainContent>
    );
}
export default ResultBox;
