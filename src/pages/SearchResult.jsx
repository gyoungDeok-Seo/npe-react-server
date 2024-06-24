import styled from "styled-components";
import MainHeader from "../components/Header/MainHeader";
import SideBar from "../container/SearchResult/SideBar";
import ResultBox from "../container/SearchResult/ResultBox";
import SeachAndCategory from "../container/SearchResult/SeachAndCategory";
import CategoryProfile from "../container/SearchResult/CategoryProfile";
import CategoryPost from "../container/SearchResult/CategoryPost";
import CategoryQna from "../container/SearchResult/CategoryQna";
import { useRef, useState } from "react";
import { InputRefContext } from "../context/inputRefContext";

const SearchResultContainer = styled.div`
    min-height: 100vh;
`;
const SearchResultHeaderBox = styled.div`
    position: sticky;
    top: 0;
    z-index: 5;
`;
const SearchResultContentBox = styled.div`
    z-index: 0;
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
function SearchResult() {
    const [category, setCategory] = useState(1);
    const searchInputRef = useRef(null);

    // const renderContent = () => {
    //     switch (category) {
    //         case 1:
    //             return <ResultBox />;
    //         case 2:
    //             return <CategoryProfile />;
    //         case 3:
    //             return <CategoryPost />;
    //         case 4:
    //             return <CategoryQna />;
    //         default:
    //             return <ResultBox />;
    //     }
    // };

    return (
        <InputRefContext.Provider value={searchInputRef}>
            <div>
                <div
                    style={{
                        position: "fixed",
                        zIndex: 9999,
                        top: 16,
                        left: 16,
                        right: 16,
                        bottom: 16,
                        pointerEvents: "none",
                    }}
                    className="global-toaster"
                />
                <div>
                    <SearchResultContainer>
                        <SearchResultHeaderBox>
                            <MainHeader />
                            <SeachAndCategory category={category} setCategory={setCategory} />
                        </SearchResultHeaderBox>
                        <SearchResultContentBox>
                            <ResultBox />
                            <SideBar />
                        </SearchResultContentBox>
                    </SearchResultContainer>
                </div>
            </div>
        </InputRefContext.Provider>
    );
}
export default SearchResult;
