import { useEffect, useState } from "react";
import styled from "styled-components";
import { CreateEducationsLabel } from "../../pages/CreateEducations";
import { useDispatch, useSelector } from "react-redux";
import { setDescription } from "../../redux/createEducation";
import { useLocation } from "react-router-dom";

const CreateEducationsTextareaBox = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;
const CreateEducationsTextareaTextBox = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;
const CreateEducationsTextarea = styled.textarea`
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
const CreateEducationsTextareaCount = styled.p`
  text-align: right;
  font-size: 0.875rem;
  font-weight: 400;
  color: #64748b;
`;
function DescriptionTextarea() {
  const createEducation = useSelector((state) => state.createEducation);
  const dispatch = useDispatch();
  const [descriptionLength, setDescriptionLength] = useState(0);
  const [condition, setCondition] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setDescriptionLength(createEducation?.description?.length);
    if (pathname.split("/")[4]) {
        setCondition(true);
    }
}, [condition]);

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    const valueLength = value.length;
    setDescriptionLength(valueLength);
    if (valueLength <= 1000) {
      dispatch(setDescription(value));
    }
  };
  return (
    <CreateEducationsTextareaBox>
      <CreateEducationsTextareaTextBox>
        <CreateEducationsLabel>어떤 활동을 했나요?</CreateEducationsLabel>
        <CreateEducationsTextareaCount>
          {descriptionLength}/1000
        </CreateEducationsTextareaCount>
      </CreateEducationsTextareaTextBox>
      <CreateEducationsTextarea
        placeholder="직무와 연관된 교육 내용 및 활동을 입력해 주세요."
        value={createEducation?.description}
        onChange={handleDescriptionChange}
        maxLength={1000}
      ></CreateEducationsTextarea>
    </CreateEducationsTextareaBox>
  );
}
export default DescriptionTextarea;
