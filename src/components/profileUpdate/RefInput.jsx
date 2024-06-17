import { useEffect, useState } from "react";
import { InputLengthCountText, ProfileUpdateInput, ProfileUpdateInputBox, ProfileUpdateInputInner, ProfileUpdateLabel, ProfileUpdateLabelSub } from "../../pages/ProfileUpdate";
import { useDispatch, useSelector } from "react-redux";
import { setRef } from "../../redux/profileUpdate";

function RefInput({ member }) {
    const dispatch = useDispatch();
    const [position, setPositionState] = useState();
    const [positionLength, setPositionLength] = useState();

    useEffect(() => {
        if (member && member.memberPosition === " ") {
            setPositionState("");
            setPositionLength(0);
        } else if (member) {
            setPositionState(member.memberPosition);
            dispatch(setRef(member.memberPosition));
            setPositionLength(member.memberPosition.length);
        }
    }, [member]);

    const handleRepChange = (e) => {
        const value = e.target.value;
        const valueLength = value.length;
        setPositionState(value);
        setPositionLength(valueLength);
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
                <InputLengthCountText>{positionLength}/40</InputLengthCountText>
            </ProfileUpdateInputInner>
            <ProfileUpdateInput type="text" placeholder="본인을 대표하는 직함을 입력해 주세요." name="title" maxLength="40" value={position} onChange={handleRepChange} />
        </ProfileUpdateInputBox>
    );
}
export default RefInput;
