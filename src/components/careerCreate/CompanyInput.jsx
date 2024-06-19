import { useEffect, useState } from "react";
import { CareerCreateInput, CareerCreateInputCount, CareerCreateLabel, CareerCreatePartTitleBox, CareerCreateRelativeBox, CareerInputBox, Pilsu } from "../../pages/CareerCreate";
import { useDispatch, useSelector } from "react-redux";
import { setCompanyName } from "../../redux/createCareer";
import { useLocation } from "react-router-dom";

function CompanyInput() {
    const createCareer = useSelector((state) => state.createCareer);
    const dispatch = useDispatch();
    const [companyLength, setCompanyLength] = useState(0);
    const [condition, setCondition] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        setCompanyLength(createCareer?.companyName?.length);
        if (pathname.split("/")[4]) {
            setCondition(true);
        }
    }, [condition]);

    const handleCompanyChange = (e) => {
        const value = e.target.value;
        const valueLength = value.length;
        setCompanyLength(valueLength);
        if (valueLength <= 50) {
            dispatch(setCompanyName(value));
        }
    };

    useEffect(()=>{},[])

    return (
        <CareerInputBox>
            <CareerCreatePartTitleBox>
                <CareerCreateLabel>
                    회사
                    <Pilsu>(필수)</Pilsu>
                </CareerCreateLabel>
                <CareerCreateInputCount>{companyLength} / 50</CareerCreateInputCount>
            </CareerCreatePartTitleBox>
            <CareerCreateRelativeBox>
                <CareerCreateInput type="text" id="company" name="company" placeholder="회사명을 입력해 주세요." autoComplete="off" maxLength="50" value={createCareer?.companyName} onChange={handleCompanyChange} />
            </CareerCreateRelativeBox>
        </CareerInputBox>
    );
}
export default CompanyInput;
