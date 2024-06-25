import {  useEffect, useState } from "react";
import { InputLengthCountText, ProfileUpdateInputInner, ProfileUpdateLabel } from "../../pages/ProfileUpdate";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setDescription } from "../../redux/profileUpdate";

const ProfileUpdateTextarea = styled.textarea`
    --tw-shadow: 0 0 #0000;
    -moz-appearance: none;
    appearance: none;
    display: block;
    min-height: 9rem;
    width: 100%;
    resize: none;
    border-radius: 0.25rem;
    border-width: 1px;
    border-style: solid;
    border-color: #e2e8f0;
    background-color: #fff;
    padding: 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #0f172a;
`;

function DescriptionTextarea({ member }) {
    const dispatch = useDispatch();
    const [intro, setIntroState] = useState();
    const [introLength, setIntroLength] = useState();

    useEffect(() => {
        if (member) {
            setIntroState(member.memberIntro);
            dispatch(setDescription(member.memberIntro));
            setIntroLength(member.memberIntro === null ? 0 : member.memberIntro.length);
        }
    }, [member]);

    const handleDescriptionChange = (e) => {
        const value = e.target.value;
        const valueLength = value.length;
        setIntroState(value);
        setIntroLength(valueLength);
        if (valueLength <= 150) {
            dispatch(setDescription(value));
        }
    };
    return (
        <>
            <ProfileUpdateInputInner>
                <ProfileUpdateLabel htmlFor="name">자기소개</ProfileUpdateLabel>
                <InputLengthCountText>{introLength}/150</InputLengthCountText>
            </ProfileUpdateInputInner>
            <ProfileUpdateTextarea placeholder="나를 소개해주세요." name="shortDescription" maxLength="150" value={intro} onChange={handleDescriptionChange}></ProfileUpdateTextarea>
        </>
    );
}
export default DescriptionTextarea;
