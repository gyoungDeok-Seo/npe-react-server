import { useContext, useState } from "react";
import {
  InputLengthCountText,
  ProfileUpdateInput,
  ProfileUpdateInputBox,
  ProfileUpdateInputInner,
  ProfileUpdateLabel,
  ProfileUpdateLabelSub,
} from "../../pages/ProfileUpdate";
import { ProfileUpdateContext } from "../../context/ProfileUpdateContext";

function RefInput() {
  const { datas, setDatas } = useContext(ProfileUpdateContext);
  const [repLength, setRepLength] = useState(0);

  const handleRepChange = (e) => {
    const value = e.target.value;
    const valueLength = value.length;
    setRepLength(valueLength);
    if (valueLength <= 40) {
      setDatas((prev) => ({
        ...prev,
        ref: value,
      }));
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
        value={datas.ref}
        onChange={handleRepChange}
      />
    </ProfileUpdateInputBox>
  );
}
export default RefInput;
