import { useState } from "react";
import { styled } from "styled-components";

const QnaSearchBox = styled.div`
    position: relative;
`;

const QnaSearchSvg = styled.svg`
    fill: var(--color-slate-600, #475569);
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    --tw-translate-y: -50%;
    width: 1.25rem;
    height: 1.25rem;
    top: 50%;
    left: 0.625rem;
    position: absolute;
`;

const QnaSearchInput = styled.input`
    font-size: 1rem;
    padding-top: 7.5px;
    padding-bottom: 7.5px;
    padding-left: 2.25rem;
    padding-right: 2.25rem;
    background-color: var(--color-slate-100, #f1f5f9);
    border-color: var(--color-slate-100, #f1f5f9);
    border-radius: 9999px;
    display: block;
    width: 100%;
    border-width: 1px;
    border-style: solid;
    line-height: 1.5;
    color: var(--color-text-bold, #0f172a);
    appearance: none;
    --tw-shadow: 0 0 #0000;
    &:focus {
        background-color: var(--color-white, #fff);
        border-color: var(--color-slate-500, #64748b);
        --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
        --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
        box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
        --tw-ring-inset: inset;
        --tw-ring-color: var(--color-slate-500, #64748b);
        outline: 2px solid transparent;
        outline-offset: 2px;
        --tw-ring-offset-width: 0px;
        --tw-ring-offset-color: #fff;
    }
    &::placeholder {
        color: var(--color-text-placeholder, #94a3b8);
        opacity: 1;
    }
`;

const QnaSearchCancelBtn = styled.button`
    padding: 0;
    border-radius: 9999px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    --tw-translate-y: -50%;
    top: 50%;
    right: 0.625rem;
    position: absolute;
`;

const QnaSearchCancelSvg = styled.svg`
    fill: var(--color-slate-600, #475569);
    width: 1.25rem;
    height: 1.25rem;
    display: block;
`;

function SearchBox() {
    const [searchValue, setSearchValue] = useState("");

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    const cleanInput = () => {
        setSearchValue("");
    };

    return (
        <QnaSearchBox>
            <QnaSearchSvg width="24" height="24" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <g id="style=outline">
                        <path id="search" fillRule="evenodd" clipRule="evenodd" d="M15.4551 9.84879C15.4551 12.9451 12.9451 15.4551 9.84879 15.4551C6.75253 15.4551 4.24251 12.9451 4.24251 9.84879C4.24251 6.75253 6.75253 4.24251 9.84879 4.24251C12.9451 4.24251 15.4551 6.75253 15.4551 9.84879ZM16.0841 14.6165C17.0962 13.2948 17.6976 11.642 17.6976 9.84879C17.6976 5.51402 14.1836 2 9.84879 2C5.51402 2 2 5.51402 2 9.84879C2 14.1836 5.51402 17.6976 9.84879 17.6976C11.6421 17.6976 13.295 17.0961 14.6167 16.0839C14.6435 16.119 14.6729 16.1527 14.705 16.1848L20.2269 21.7067C20.6175 22.0972 21.2506 22.0972 21.6412 21.7067L21.7069 21.641C22.0975 21.2504 22.0975 20.6173 21.7069 20.2267L16.185 14.7048C16.1529 14.6727 16.1192 14.6433 16.0841 14.6165Z"></path>
                    </g>
                </g>
            </QnaSearchSvg>
            <QnaSearchInput type="search" placeholder="질문 검색" name="" onChange={handleInputChange} value={searchValue} />
            {searchValue && (
                <QnaSearchCancelBtn type="button" onClick={cleanInput}>
                    <QnaSearchCancelSvg width="24" height="24" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <g id="style=solid">
                                <path
                                    id="Vector"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M22 12C22 13.3132 21.7413 14.6136 21.2388 15.8268C20.7362 17.0401 19.9997 18.1425 19.0711 19.0711C18.1425 19.9997 17.0401 20.7362 15.8268 21.2388C14.6136 21.7413 13.3132 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C4.00035 18.1425 3.26375 17.0401 2.7612 15.8268C2.25866 14.6136 2 13.3132 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2C14.6522 2 17.1957 3.05357 19.0711 4.92893C20.9464 6.8043 22 9.34784 22 12ZM9.70711 8.29289C9.31658 7.90237 8.68342 7.90237 8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711L10.5858 12L8.29289 14.2929C7.90237 14.6834 7.90237 15.3166 8.29289 15.7071C8.68342 16.0976 9.31658 16.0976 9.70711 15.7071L12 13.4142L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L13.4142 12L15.7071 9.70711C16.0976 9.31658 16.0976 8.68342 15.7071 8.29289C15.3166 7.90237 14.6834 7.90237 14.2929 8.29289L12 10.5858L9.70711 8.29289Z"
                                ></path>
                            </g>
                        </g>
                    </QnaSearchCancelSvg>
                </QnaSearchCancelBtn>
            )}
        </QnaSearchBox>
    );
}
export default SearchBox;
