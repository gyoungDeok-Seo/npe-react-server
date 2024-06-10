import { useState } from "react";

import {
  CreateEducationsInput,
  CreateEducationsInputCount,
  CreateEducationsLabel,
  CreateEducationsPartTitleBox,
  EducationsInputBox,
} from "../../pages/EducationsCreate";

function CourseInput() {
  const [course, setCourse] = useState("");
  const [courseLength, setCourseLength] = useState(0);
  const [courseValidation, setCourseValidation] = useState(false);

  const handleCourseChange = (e) => {
    const valueLength = e.target.value.length;
    setCourseLength(valueLength);
    if (valueLength <= 50) {
      setCourse(e.target.value);
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
        onChange={handleCourseChange}
      />
    </EducationsInputBox>
  );
}
export default CourseInput;
