import { useEffect, useState } from "react";
import styled from "styled-components";
import AvoidMistakesModal from "../components/profiles/Modal/AvoidMistakesModal";
import { useNavigate } from "react-router-dom";
import MainHeader from "../components/Header/MainHeader";
import LinkUrlBox from "../components/SitesCreate/LinkUrlBox";
import LinkNamebox from "../components/SitesCreate/LinkNamebox";

const SitesCreateaBox = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 3rem;
    @media (min-width: 1024px) {
        & {
            padding-top: 2rem;
        }
    }
    @media (min-width: 1024px) {
        & {
            width: 33rem;
        }
    }
    @media (min-width: 1024px) {
        & {
            margin-left: auto;
            margin-right: auto;
        }
    }
`;

export const SitesCreateaPartTitleBox = styled.div`
    margin-bottom: 0.5rem;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
`;
export const SitesCreateaLabel = styled.label`
    margin-bottom: 0;
    font-size: 0.875rem;
    font-weight: 700;
    color: #334155;
`;

export const SitesCreateaInput = styled.input`
    -moz-appearance: none;
    appearance: none;
    --tw-shadow: 0 0 #0000;
    display: block;
    width: 100%;
    border-radius: 0.25rem;
    border-width: 1px;
    border-style: solid;
    border-color: #e2e8f0;
    background-color: #fff;
    padding: 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #0f172a;
    &:focus {
        border-color: #64748b;
        outline: 1px solid #64748b;
    }
    &::placeholder {
        font-weight: 500;
        color: #9da7b1;
    }
`;

function SitesCreate() {
    const navigate = useNavigate(null);
    const [avoidMistakesModal, setAvoidMistakesModal] = useState(false);
    const [isExit, setIsExit] = useState(false);

    useEffect(() => {
        if (isExit) {
            navigate("/profiles");
        }
    }, [isExit]);

    return (
        <>
            <div>
                <div>
                    <div
                        style={{
                            position: "fixed",
                            zIndex: 9999,
                            top: "16px",
                            left: "16px",
                            right: "16px",
                            bottom: "16px",
                            pointerEvents: "none",
                        }}
                        className="global-toaster"
                    ></div>
                    <div>
                        <MainHeader setAvoidMistakesModal={setAvoidMistakesModal} />
                        <div style={{ height: "3.5rem" }}></div>
                        <SitesCreateaBox>
                            <LinkUrlBox />
                            <LinkNamebox />
                        </SitesCreateaBox>
                    </div>
                </div>
            </div>
            {avoidMistakesModal && <AvoidMistakesModal setAvoidMistakesModal={setAvoidMistakesModal} setIsExit={setIsExit} />}
        </>
    );
}
export default SitesCreate;
