import { useState } from "react";
import styled from "styled-components";
import {
  CareerCreateInput,
  CareerCreateInputCount,
  CareerCreateLabel,
  CareerCreatePartTitleBox,
  CareerCreateRelativeBox,
  CareerInputBox,
  Pilsu,
} from "../../pages/CareerCreate";

function TitleInput() {
  const [title, setTitle] = useState("");
  const [titleLength, setTitleLength] = useState(0);
  const [titleValidation, setTitleValidation] = useState(false);

  const handleTitleChange = (e) => {
    const valueLength = e.target.value.length;
    setTitleLength(valueLength);
    if (valueLength <= 50) {
      setTitle(e.target.value);
    }
  };
  return (
    <CareerInputBox>
      <CareerCreatePartTitleBox>
        <CareerCreateLabel>
          직함
          <Pilsu>(필수)</Pilsu>
        </CareerCreateLabel>
        <CareerCreateInputCount>{titleLength} / 50</CareerCreateInputCount>
      </CareerCreatePartTitleBox>
      <CareerCreateRelativeBox>
        <CareerCreateInput
          type="text"
          id="title"
          name="title"
          placeholder="직함을 입력해 주세요. (예: 프로덕트 매니저)"
          autoComplete="off"
          maxLength="50"
          onChange={handleTitleChange}
          validation={titleValidation}
        />
      </CareerCreateRelativeBox>
    </CareerInputBox>
  );
}
export default TitleInput;
