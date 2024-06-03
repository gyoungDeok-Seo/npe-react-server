import { useState } from "react";
import styled from "styled-components";
import { CareerCreateInput, CareerCreateInputCount, CareerCreateLabel, CareerCreatePartTitleBox, CareerCreateRelativeBox, CareerInputBox, Pilsu } from "../../pages/CareerCreate";


function CompanyInput() {
  const [company, setCompany] = useState("");
  const [companyLength, setCompanyLength] = useState(0);
  const [companyValidation, setCompanyValidation] = useState(false);

  const handleNameChange = (e) => {
    const valueLength = e.target.value.length;
    setCompanyLength(valueLength);
    if (valueLength <= 50) {
      setCompany(e.target.value);
    }
  };

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
        <CareerCreateInput
          type="text"
          id="company"
          name="company"
          placeholder="회사명을 입력해 주세요."
          autoComplete="off"
          maxLength="50"
          onChange={handleNameChange}
          validation={companyValidation}
        />
      </CareerCreateRelativeBox>
    </CareerInputBox>
  );
}
export default CompanyInput;
