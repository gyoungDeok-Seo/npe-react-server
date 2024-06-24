import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { InputRefContext } from "../../../context/inputRefContext";

const SearchResultSearchInputBox = styled.div`
    background-color: #fff;
    border-color: #e2e8f0;
    border-style: solid;
    border-width: 0;
    border-bottom-width: 1px;
`;

const SearchResultSearchInputInner = styled.div`
    margin-right: auto;
    margin-left: auto;
    height: 68px;
    max-width: 1024px;
    display: flex;
    align-items: center;
    padding: 1rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
`;

const SearchResultSearchSvg = styled.svg`
    flex: none;
    width: 1.5rem;
    height: 1.5rem;
    fill: #94a3b8;
    stroke: #94a3b8;
`;
const SearchResultSearchInput = styled.input`
    color: #0f172a;
    font-size: 1.5rem;
    padding: 0.875rem;
    border-width: 0;
    width: 100%;
    appearance: none;
    background-color: #fff;
    border-color: #94a3b8;
    border-radius: 0;
    line-height: 1.5rem;
    outline: none;
`;

function SearchBox() {
    const [searchParams] = useSearchParams();
    const searchWord = searchParams.get("query") || "";
    const [query, setQuery] = useState(searchWord);
    const navigate = useNavigate();
    const [shouldNavigate, setShouldNavigate] = useState(false);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.keyCode === 13 && query !== "") {
            setShouldNavigate(true);
            setQuery(query.trim());
        }
    };

    useEffect(() => {
        if (shouldNavigate) {
            navigate(`/search?query=${query}`);
            setShouldNavigate(false);
        }
    }, [query, shouldNavigate, navigate]);

    const searchInputRef = useContext(InputRefContext);

    return (
        <SearchResultSearchInputBox>
            <SearchResultSearchInputInner>
                <SearchResultSearchSvg width={24} height={24} strokeWidth="0.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ stroke: "white" }}>
                    <g>
                        <g id="style=outline">
                            <path id="search" fillRule="evenodd" clipRule="evenodd" d="M15.4551 9.84879C15.4551 12.9451 12.9451 15.4551 9.84879 15.4551C6.75253 15.4551 4.24251 12.9451 4.24251 9.84879C4.24251 6.75253 6.75253 4.24251 9.84879 4.24251C12.9451 4.24251 15.4551 6.75253 15.4551 9.84879ZM16.0841 14.6165C17.0962 13.2948 17.6976 11.642 17.6976 9.84879C17.6976 5.51402 14.1836 2 9.84879 2C5.51402 2 2 5.51402 2 9.84879C2 14.1836 5.51402 17.6976 9.84879 17.6976C11.6421 17.6976 13.295 17.0961 14.6167 16.0839C14.6435 16.119 14.6729 16.1527 14.705 16.1848L20.2269 21.7067C20.6175 22.0972 21.2506 22.0972 21.6412 21.7067L21.7069 21.641C22.0975 21.2504 22.0975 20.6173 21.7069 20.2267L16.185 14.7048C16.1529 14.6727 16.1192 14.6433 16.0841 14.6165Z" />
                        </g>
                    </g>
                </SearchResultSearchSvg>
                <SearchResultSearchInput placeholder="회사, 사람, 키워드로 검색" ref={searchInputRef} defaultValue={searchWord} value={query} onChange={handleInputChange} onKeyDown={handleKeyPress} />
            </SearchResultSearchInputInner>
        </SearchResultSearchInputBox>
    );
}
export default SearchBox;
