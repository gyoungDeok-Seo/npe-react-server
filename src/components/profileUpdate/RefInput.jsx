import { useState } from "react";
import {
  InputLengthCountText,
  ProfileUpdateInput,
  ProfileUpdateInputBox,
  ProfileUpdateInputInner,
  ProfileUpdateLabel,
  ProfileUpdateLabelSub,
} from "../../pages/ProfileUpdate";
import { useDispatch, useSelector } from "react-redux";
import { setRef } from "../../redux/profileUpdate";

function RefInput() {
  const profileUpdate = useSelector((state) => state.profileUpdate);
  const dispatch = useDispatch();
  const [repLength, setRepLength] = useState(0);

  const handleRepChange = (e) => {
    const value = e.target.value;
    const valueLength = value.length;
    setRepLength(valueLength);
    if (valueLength <= 40) {
      dispatch(setRef(value));
    }
  };

  return (
    <ProfileUpdateInputBox>
      <ProfileUpdateInputInner>
        <ProfileUpdateLabel htmlFor="name">
          대표 직함
          <ProfileUpdateLabelSub>(필수)</ProfileUpdateLabelSub>
        </ProfileUpdateLabel>
        <InputLengthCountText>{repLength}/40</InputLengthCountText>
      </ProfileUpdateInputInner>
      <ProfileUpdateInput
        type="text"
        placeholder="본인을 대표하는 직함을 입력해 주세요."
        name="title"
        maxLength="40"
        value={profileUpdate.ref}
        onChange={handleRepChange}
      />
    </ProfileUpdateInputBox>
  );
}
export default RefInput;
