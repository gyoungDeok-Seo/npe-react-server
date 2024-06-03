import { useState } from "react";
import styled from "styled-components";
import { CareerCreateLabel } from "../../pages/CareerCreate";

const CareerCreateTextareaBox = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;
const CareerCreateTextareaTextBox = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;
const CareerCreateTextarea = styled.textarea`
  appearance: none;
  display: block;
  min-height: 9rem;
  width: 100%;
  resize: none;
  border-radius: 0.25rem;
  border-width: 1px;
  border-style: solid;
  border-color: #e2e8f0;
  background-color: #fff;
  padding: 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #0f172a;
  &:focus {
    border-color: #64748b;
    outline: 1px solid #64748b;
  }
  &::placeholder {
    font-weight: 500;
    color: #9da7b1;
  }
`;
const CareerCreateTextareaCount = styled.p`
  text-align: right;
  font-size: 0.875rem;
  font-weight: 400;
  color: #64748b;
`;
function DescriptionTextarea() {
  const [shortDescription, setShortDescription] = useState("");
  const [shortDescriptionLength, setShortDescriptionLength] = useState(0);

  const handleDescriptionChange = (e) => {
    const valueLength = e.target.value.length;
    setShortDescriptionLength(valueLength);
    if (valueLength <= 1000) {
      setShortDescription(e.target.value);
    }
  };
  return (
    <CareerCreateTextareaBox>
      <CareerCreateTextareaTextBox>
        <CareerCreateLabel>어떤 일을 했나요?</CareerCreateLabel>
      </CareerCreateTextareaTextBox>
      <CareerCreateTextarea
        placeholder="담당한 업무, 프로젝트 및 활동을 입력해 주세요.
                              예:
                              • 쇼핑라이브 프론트 지면 개발
                              • 프론트 매시업 api 개발"
        onChange={handleDescriptionChange}
      ></CareerCreateTextarea>
      <CareerCreateTextareaCount>
        {shortDescriptionLength}/1000
      </CareerCreateTextareaCount>
    </CareerCreateTextareaBox>
  );
}
export default DescriptionTextarea;
