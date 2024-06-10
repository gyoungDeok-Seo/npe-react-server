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

function JobInput() {
  const { datas, setDatas } = useContext(CreateCareerContext);
  const [jobLength, setJobLength] = useState(0);

  const handleTitleChange = (e) => {
    const value = e.target.value;
    const valueLength = value.length;
    setJobLength(valueLength);
    if (valueLength <= 50) {
      setDatas((prev) => ({
        ...prev,
        job: value,
      }));
    }
  };
  return (
    <CareerInputBox>
      <CareerCreatePartTitleBox>
        <CareerCreateLabel>
          직함
          <Pilsu>(필수)</Pilsu>
        </CareerCreateLabel>
        <CareerCreateInputCount>{jobLength} / 50</CareerCreateInputCount>
      </CareerCreatePartTitleBox>
      <CareerCreateRelativeBox>
        <CareerCreateInput
          type="text"
          id="title"
          name="title"
          placeholder="직함을 입력해 주세요. (예: 프로덕트 매니저)"
          autoComplete="off"
          maxLength="50"
          value={datas.job}
          onChange={handleTitleChange}
        />
      </CareerCreateRelativeBox>
    </CareerInputBox>
  );
}
export default JobInput;
