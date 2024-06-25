import styled from "styled-components";
import PopularPosts from "../../components/SearchResult/SideBar/PopularPosts";

const SearchResultSideBarContainer = styled.div`
    scrollbar-width: none;
    position: sticky;
    top: 0;
    grid-column: span 4 / span 4;
    grid-column-start: 9;
    display: block;
    height: 100vh;
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
    return (
        <SearchResultSideBarContainer>
            <SearchResultSideBarBox>
                <SearchResultSideBarInner>
                    <SearchResultSideBarTitle>주간 인기 TOP 10</SearchResultSideBarTitle>
                    <div>
                        {[1, 2, 3, 4, 4, 5, 6, 7].map((item) => (
                            <PopularPosts num={item} />
                        ))}
                    </div>
                </SearchResultSideBarInner>
            </SearchResultSideBarBox>
        </SearchResultSideBarContainer>
    );
}
export default SideBar;
