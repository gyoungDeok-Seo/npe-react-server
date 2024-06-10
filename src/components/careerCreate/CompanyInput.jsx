import { useContext, useState } from "react";
import {
  CareerCreateInput,
  CareerCreateInputCount,
  CareerCreateLabel,
  CareerCreatePartTitleBox,
  CareerCreateRelativeBox,
  CareerInputBox,
  Pilsu,
} from "../../pages/CareerCreate";
import { CreateCareerContext } from "../../context/CreateCareerContext";

function CompanyInput() {
  const { datas, setDatas } = useContext(CreateCareerContext);
  const [companyLength, setCompanyLength] = useState(0);

  const handleNameChange = (e) => {
    const value = e.target.value;
    const valueLength = value.length;
    setCompanyLength(valueLength);
    if (valueLength <= 50) {
      setDatas((prev) => ({
        ...prev,
        company: value,
      }));
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
          value={datas.company}
          onChange={handleNameChange}
        />
      </CareerCreateRelativeBox>
    </CareerInputBox>
  );
}
export default CompanyInput;
