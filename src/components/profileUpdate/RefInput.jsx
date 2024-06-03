import { useState } from "react";
import {
  InputLengthCountText,
  ProfileUpdateInput,
  ProfileUpdateInputBox,
  ProfileUpdateInputInner,
  ProfileUpdateLabel,
  ProfileUpdateLabelSub,
} from "../../pages/ProfileUpdate";

function RefInput() {
  const [rep, setRep] = useState("");
  const [repLength, setRepLength] = useState(0);

  const handleRepChange = (e) => {
    const valueLength = e.target.value.length;
    setRepLength(valueLength);
    if (valueLength <= 40) {
      setRep(e.target.value);
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
        onChange={handleRepChange}
      />
    </ProfileUpdateInputBox>
  );
}
export default RefInput;
