import { useContext, useState } from "react";

import {
  CreateEducationsInput,
  CreateEducationsInputCount,
  CreateEducationsLabel,
  CreateEducationsPartTitleBox,
  EducationsInputBox,
} from "../../pages/EducationsCreate";
import { CreateEductaionContext } from "../../context/CreateEductaionContext";

function CourseInput() {
  const { datas, setDatas } = useContext(CreateEductaionContext);
  const [courseLength, setCourseLength] = useState(0);

  const handleCourseChange = (e) => {
    const value = e.target.value;
    const valueLength = value.length;
    setCourseLength(valueLength);
    if (valueLength <= 50) {
      setDatas((prev) => ({
        ...prev,
        course: value,
      }));
    }
  };

  return (
    <EducationsInputBox>
      <CreateEducationsPartTitleBox>
        <CreateEducationsLabel>전공/과정</CreateEducationsLabel>
        <CreateEducationsInputCount>
          {courseLength}/50
        </CreateEducationsInputCount>
      </CreateEducationsPartTitleBox>
      <CreateEducationsInput
        type="text"
        placeholder="전공/과정을 입력해 주세요. (예: 웹 개발 과정)"
        maxLength="50"
        value={datas.course}
        onChange={handleCourseChange}
      />
    </EducationsInputBox>
  );
}
export default CourseInput;
