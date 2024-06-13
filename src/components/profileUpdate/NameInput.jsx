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
import { setName } from "../../redux/profileUpdate";

function NameInput() {
  const profileUpdate = useSelector((state) => state.profileUpdate);
  const dispatch = useDispatch();
  const [nameLength, setNameLength] = useState(0);

  const handleNameChange = (e) => {
    const value = e.target.value;
    const valueLength = value.length;
    setNameLength(valueLength);
    if (valueLength <= 20) {
      dispatch(setName(value));
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
        value={profileUpdate.name}
        onChange={handleNameChange}
      />
    </ProfileUpdateInputBox>
  );
}
export default NameInput;
