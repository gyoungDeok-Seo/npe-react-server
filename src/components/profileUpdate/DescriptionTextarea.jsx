import { useContext, useState } from "react";
import {
  InputLengthCountText,
  ProfileUpdateInputInner,
  ProfileUpdateLabel,
} from "../../pages/ProfileUpdate";
import styled from "styled-components";
import { ProfileUpdateContext } from "../../context/ProfileUpdateContext";
import { useDispatch, useSelector } from "react-redux";
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

function DescriptionTextarea() {
  const profileUpdate = useSelector((state) => state.profileUpdate);
  const dispatch = useDispatch();
  const [descriptionLength, setDescriptionLength] = useState(0);

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    const valueLength = value.length;
    setDescriptionLength(valueLength);
    if (valueLength <= 150) {
      dispatch(setDescription(value));
    }
  };
  return (
    <>
      <ProfileUpdateInputInner>
        <ProfileUpdateLabel htmlFor="name">자기소개</ProfileUpdateLabel>
        <InputLengthCountText>{descriptionLength}/150</InputLengthCountText>
      </ProfileUpdateInputInner>
      <ProfileUpdateTextarea
        placeholder="나를 소개해주세요."
        name="shortDescription"
        maxLength="150"
        value={profileUpdate.description}
        onChange={handleDescriptionChange}
      ></ProfileUpdateTextarea>
    </>
  );
}
export default DescriptionTextarea;
