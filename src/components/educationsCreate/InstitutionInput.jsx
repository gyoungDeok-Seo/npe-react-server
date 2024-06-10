import { useState } from "react";
import {
  CreateEducationsInput,
  CreateEducationsInputCount,
  CreateEducationsLabel,
  CreateEducationsPartTitleBox,
  CreateEducationsRelativeBox,
  EducationsInputBoxTop,
} from "../../pages/EducationsCreate";
import { Pilsu } from "../../pages/CareerCreate";

function InstitutionInput() {
  const [institution, setInstitution] = useState("");
  const [institutionLength, setInstitutionLength] = useState(0);
  const [itutionValidation, setInstItutionValidation] = useState(false);

  const handleInstitutionChange = (e) => {
    const valueLength = e.target.value.length;
    setInstitutionLength(valueLength);
    if (valueLength <= 50) {
      setInstitution(e.target.value);
    }
  };

  return (
    <EducationsInputBoxTop>
      <CreateEducationsPartTitleBox>
        <CreateEducationsLabel>
          교육기관
          <Pilsu>(필수)</Pilsu>
        </CreateEducationsLabel>
        <CreateEducationsInputCount>
          {institutionLength}/50
        </CreateEducationsInputCount>
      </CreateEducationsPartTitleBox>
      <CreateEducationsRelativeBox>
        <CreateEducationsInput
          type="text"
          id="institute"
          name="institute"
          placeholder="교육기관을 입력해 주세요."
          autocomplete="off"
          maxlength="50"
          onChange={handleInstitutionChange}
        />
      </CreateEducationsRelativeBox>
    </EducationsInputBoxTop>
  );
}
export default InstitutionInput;
