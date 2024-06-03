import { useState } from "react";
import { InputLengthCountText, ProfileUpdateInput, ProfileUpdateInputBox, ProfileUpdateInputInner, ProfileUpdateLabel, ProfileUpdateLabelSub } from "../../pages/ProfileUpdate";

function NameInput() {
  const [name, setName] = useState("");
  const [nameLength, setNameLength] = useState(0);

  const handleNameChange = (e) => {
    const valueLength = e.target.value.length;
    setNameLength(valueLength);
    if (valueLength <= 20) {
      setName(e.target.value);
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
        onChange={handleNameChange}
      />
    </ProfileUpdateInputBox>
  );
}
export default NameInput;
