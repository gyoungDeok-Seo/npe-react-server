import { styled } from "styled-components";

const ContentsPageBtnBox = styled.div`
    gap: 0.25rem;
    display: flex;
    margin-left: -0.5rem;
    margin-right: -0.5rem;
`;

const PrevBtn = styled.button`
    padding: 0.5rem;
    &:not(:disabled):hover svg {
        fill: var(--color-slate-900, #0f172a);
    }
`;

const NextBtn = styled(PrevBtn)``;

const NextSvg = styled.svg`
    ${({ isTrue }) => (isTrue ? "opacity: 0.4" : "fill: var(--color-slate-500, #64748b)")}
`;

const PrevSvg = styled(NextSvg)``;

function SlideButtonBox({ setTransform, isDisabled, setIsDisabled }) {
    const handleClickPrevBtn = () => {
        setTransform("translate3d(0px, 0px, 0px)");
        setIsDisabled({ prev: true, next: false });
    };

    const handleClickNextBtn = () => {
        setTransform("translate3d(-744px, 0px, 0px)");
        setIsDisabled({ prev: false, next: true });
    };

    return (
        <ContentsPageBtnBox>
            <PrevBtn type="button" onClick={handleClickPrevBtn} disabled={isDisabled.prev}>
                <PrevSvg isTrue={isDisabled.prev} width="24" height="24" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <g id="style=outline">
                            <path id="Vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M10.7071 4.2929C11.0976 4.68342 11.0976 5.31659 10.7071 5.70711L5.41423 10.9999H21C21.5523 10.9999 22 11.4477 22 11.9999C22 12.5522 21.5523 12.9999 21 12.9999H5.4142L10.7071 18.2929C11.0976 18.6834 11.0976 19.3166 10.7071 19.7071C10.3166 20.0976 9.68341 20.0976 9.29289 19.7071L2.29289 12.7071C2.10535 12.5195 2 12.2652 2 11.9999C2 11.7347 2.10536 11.4804 2.2929 11.2928L9.2929 4.29289C9.68342 3.90237 10.3166 3.90237 10.7071 4.2929Z"></path>
                        </g>
                    </g>
                </PrevSvg>
            </PrevBtn>
            <NextBtn type="button" onClick={handleClickNextBtn} disabled={isDisabled.next}>
                <NextSvg isTrue={isDisabled.next} width="24" height="24" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <g id="style=outline">
                            <path id="Vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M13.2929 19.7071C12.9024 19.3166 12.9024 18.6834 13.2929 18.2929L18.5858 13L3 13C2.44772 13 2 12.5523 2 12C2 11.4478 2.44772 11 3 11L18.5858 11.0001L13.2929 5.7071C12.9024 5.31658 12.9024 4.68341 13.2929 4.29289C13.6834 3.90237 14.3166 3.90237 14.7071 4.29289L21.7071 11.2929C21.8946 11.4805 22 11.7348 22 12.0001C22 12.2653 21.8946 12.5196 21.7071 12.7072L14.7071 19.7071C14.3166 20.0976 13.6834 20.0976 13.2929 19.7071Z"></path>
                        </g>
                    </g>
                </NextSvg>
            </NextBtn>
        </ContentsPageBtnBox>
    );
}
export default SlideButtonBox;
