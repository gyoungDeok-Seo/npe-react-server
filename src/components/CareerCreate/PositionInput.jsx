import { useEffect, useState } from "react";
import { CareerCreateInput, CareerCreateInputCount, CareerCreateLabel, CareerCreatePartTitleBox, CareerCreateRelativeBox, CareerInputBox, Pilsu } from "../../pages/CareerCreate";
import { useDispatch, useSelector } from "react-redux";
import { setMemberPosition } from "../../redux/createCareer";
import { useLocation } from "react-router-dom";

function PositionInput() {
    const createCareer = useSelector((state) => state.createCareer);
    const dispatch = useDispatch();
    const [positionLength, setPositionLength] = useState(0);
    const [condition, setCondition] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        setPositionLength(createCareer?.memberPosition?.length);
        if (pathname.split("/")[4]) {
            setCondition(true);
        }
    }, [condition]);

    const handlePositionChange = (e) => {
        const value = e.target.value;
        const valueLength = value.length;
        setPositionLength(valueLength);
        if (valueLength <= 50) {
            dispatch(setMemberPosition(value));
        }
    };

    return (
        <CareerInputBox>
            <CareerCreatePartTitleBox>
                <CareerCreateLabel>
                    직함
                    <Pilsu>(필수)</Pilsu>
                </CareerCreateLabel>
                <CareerCreateInputCount>{positionLength} / 50</CareerCreateInputCount>
            </CareerCreatePartTitleBox>
            <CareerCreateRelativeBox>
                <CareerCreateInput type="text" id="title" name="title" placeholder="직함을 입력해 주세요. (예: 프로덕트 매니저)" autoComplete="off" maxLength="50" value={createCareer.memberPosition} onChange={handlePositionChange} />
            </CareerCreateRelativeBox>
        </CareerInputBox>
    );
}
export default PositionInput;
