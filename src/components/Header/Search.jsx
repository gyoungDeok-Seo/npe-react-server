import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ButtonDiv = styled.button`
    background-color: rgba(0, 0, 0, 0.4);
    min-width: 1024px;
    width: 100%;
    height: 100vh;
    z-index: 1040;
    position: fixed;
`;
const SearchBarBox = styled.div`
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    background-color: rgb(255 255 255 /1);
    min-width: 1024px;
    width: 100%;
    z-index: 1050;
    position: fixed;
`;
const SearchBarInner = styled.div`
    padding: 1rem;
    align-items: center;
    max-width: 1280px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 768px) {
        & {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
        }
    }
`;
const SearchBarSvg = styled.svg`
    stroke-width: 0.5;
    stroke: #fff;
    fill: #94a3b8;
    flex: none;
    @media (min-width: 768px) {
        & {
            width: 2rem;
        }
    }
    @media (min-width: 768px) {
        & {
            height: 2rem;
        }
    }
`;
const SearchInput = styled.input`
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #fff;
    border-color: #94a3b8;
    border-width: 1px;
    border-radius: 0;
    padding: 0.5rem 0.75rem;
    padding: 0.875rem;
    font-size: 1rem;
    line-height: 1.5rem;
    --tw-shadow: 0 0 #0000;
    color: #0f172a;
    font-size: 1.25rem;
    padding-right: 0;
    border-width: 0;
    &:focus {
        outline: 2px solid transparent;
        outline-offset: 2px;
    }
    &::placeholder {
        color: #94a3b8;
    }
    @media (min-width: 768px) {
        & {
            font-size: 1.5rem;
        }
    }
`;

function Search({ setSearch }) {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const [shouldNavigate, setShouldNavigate] = useState(false);

    const searchOpenHandler = () => {
        setSearch((isOpen) => (isOpen = false));
    };

    const handleInputChange = async (e) => {
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

    return (
        <>
            <ButtonDiv role="button" aria-hidden="true" onClick={searchOpenHandler}></ButtonDiv>
            <SearchBarBox>
                <SearchBarInner>
                    <SearchBarSvg width="24" height="24" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <g id="style=outline">
                                <path id="search" fillRule="evenodd" clipRule="evenodd" d="M15.4551 9.84879C15.4551 12.9451 12.9451 15.4551 9.84879 15.4551C6.75253 15.4551 4.24251 12.9451 4.24251 9.84879C4.24251 6.75253 6.75253 4.24251 9.84879 4.24251C12.9451 4.24251 15.4551 6.75253 15.4551 9.84879ZM16.0841 14.6165C17.0962 13.2948 17.6976 11.642 17.6976 9.84879C17.6976 5.51402 14.1836 2 9.84879 2C5.51402 2 2 5.51402 2 9.84879C2 14.1836 5.51402 17.6976 9.84879 17.6976C11.6421 17.6976 13.295 17.0961 14.6167 16.0839C14.6435 16.119 14.6729 16.1527 14.705 16.1848L20.2269 21.7067C20.6175 22.0972 21.2506 22.0972 21.6412 21.7067L21.7069 21.641C22.0975 21.2504 22.0975 20.6173 21.7069 20.2267L16.185 14.7048C16.1529 14.6727 16.1192 14.6433 16.0841 14.6165Z"></path>
                            </g>
                        </g>
                    </SearchBarSvg>
                    <SearchInput placeholder="회사, 사람, 키워드로 검색" enterKeyHint="search" value={query} onChange={handleInputChange} onKeyDown={handleKeyPress} />
                </SearchBarInner>
            </SearchBarBox>
        </>
    );
}
export default Search;
