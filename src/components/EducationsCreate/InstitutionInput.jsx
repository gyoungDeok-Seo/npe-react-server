import { useEffect, useState } from "react";
import { CreateEducationsInput, CreateEducationsInputCount, CreateEducationsLabel, CreateEducationsPartTitleBox, CreateEducationsRelativeBox, EducationsInputBoxTop } from "../../pages/CreateEducations";
import { Pilsu } from "../../pages/CareerCreate";
import { useDispatch, useSelector } from "react-redux";
import { setEducationInstitution } from "../../redux/createEducation";
import { useLocation } from "react-router-dom";

function InstitutionInput() {
    const createEducation = useSelector((state) => state.createEducation);
    const dispatch = useDispatch();
    const [institutionLength, setInstitutionLength] = useState(0);
    const [condition, setCondition] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        setInstitutionLength(createEducation?.educationInstitution?.length);
      if (pathname.split("/")[4]) {
          setCondition(true);
      }
  }, [condition]);

    const handleInstitutionChange = (e) => {
        const value = e.target.value;
        const valueLength = value.length;
        setInstitutionLength(valueLength);
        if (valueLength <= 50) {
            dispatch(setEducationInstitution(value));
        }
    };

    return (
        <EducationsInputBoxTop>
            <CreateEducationsPartTitleBox>
                <CreateEducationsLabel>
                    교육기관
                    <Pilsu>(필수)</Pilsu>
                </CreateEducationsLabel>
                <CreateEducationsInputCount>{institutionLength}/50</CreateEducationsInputCount>
            </CreateEducationsPartTitleBox>
            <CreateEducationsRelativeBox>
                <CreateEducationsInput type="text" id="institute" name="institute" placeholder="교육기관을 입력해 주세요." autocomplete="off" maxlength="50" value={createEducation?.educationInstitution} onChange={handleInstitutionChange} />
            </CreateEducationsRelativeBox>
        </EducationsInputBoxTop>
    );
}
export default InstitutionInput;
