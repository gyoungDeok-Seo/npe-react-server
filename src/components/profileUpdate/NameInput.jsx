import { useEffect, useState } from "react";
import { InputLengthCountText, ProfileUpdateInput, ProfileUpdateInputBox, ProfileUpdateInputInner, ProfileUpdateLabel, ProfileUpdateLabelSub } from "../../pages/ProfileUpdate";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../../redux/profileUpdate";

function NameInput({ member }) {
    const dispatch = useDispatch();
    const [name, setNameState] = useState();
    const [nameLength, setNameLength] = useState();

    useEffect(() => {
        if (member) {
            setNameState(member.memberName);
            dispatch(setName(member.memberName));
            setNameLength(member.memberName.length);
        }
    }, [member]);

    const handleNameChange = (e) => {
        const value = e.target.value;
        const valueLength = value.length;
        setNameState(value);
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
            <ProfileUpdateInput type="text" placeholder="이름을 입력해 주세요." name="name" maxLength="20" value={name} onChange={handleNameChange} />
        </ProfileUpdateInputBox>
    );
}
export default NameInput;
