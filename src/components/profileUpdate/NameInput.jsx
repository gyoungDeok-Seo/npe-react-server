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

function NameInput() {
  const { datas, setDatas } = useContext(ProfileUpdateContext);
  const [nameLength, setNameLength] = useState(0);

  const handleNameChange = (e) => {
    const value = e.target.value;
    const valueLength = value.length;
    setNameLength(valueLength);
    if (valueLength <= 20) {
      setDatas((prev) => ({
        ...prev,
        name: value,
      }));
    }
  };

  return (
    <ProfileUpdateInputBox>
      <ProfileUpdateInputInner>
        <ProfileUpdateLabel htmlFor="name">
          이름
          <ProfileUpdateLabelSub>(필수)</ProfileUpdateLabelSub>
        </ProfileUpdateLabel>
        <InputLengthCountText>{nameLength}/20</InputLengthCountText>
      </ProfileUpdateInputInner>
      <ProfileUpdateInput
        type="text"
        placeholder="이름을 입력해 주세요."
        name="name"
        maxLength="20"
        value={datas.name}
        onChange={handleNameChange}
      />
    </ProfileUpdateInputBox>
  );
}
export default NameInput;
