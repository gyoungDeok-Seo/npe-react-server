import { useState } from "react";
import {
  InputLengthCountText,
  ProfileUpdateInputInner,
  ProfileUpdateLabel,
} from "../../pages/ProfileUpdate";
import styled from "styled-components";

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

function DescriptionTextarea() {
  const [shortDescription, setShortDescription] = useState("");
  const [shortDescriptionLength, setShortDescriptionLength] = useState(0);

  const handleDescriptionChange = (e) => {
    const valueLength = e.target.value.length;
    setShortDescriptionLength(valueLength);
    if (valueLength <= 150) {
      setShortDescription(e.target.value);
    }
  };
  return (
    <>
      <ProfileUpdateInputInner>
        <ProfileUpdateLabel htmlFor="name">자기소개</ProfileUpdateLabel>
        <InputLengthCountText>
          {shortDescriptionLength}/150
        </InputLengthCountText>
      </ProfileUpdateInputInner>
      <ProfileUpdateTextarea
        placeholder="나를 소개해주세요."
        name="shortDescription"
        maxLength="150"
        onChange={handleDescriptionChange}
      ></ProfileUpdateTextarea>
    </>
  );
}
export default DescriptionTextarea;
