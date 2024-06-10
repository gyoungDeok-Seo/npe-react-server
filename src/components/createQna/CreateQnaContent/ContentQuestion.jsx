import { useContext } from "react";
import styled from "styled-components";
import { CreateQnaDataContext } from "../../../context/CreateQnaDataContext";

const CreateQnaContentQuestion = styled.div`
  position: relative;
  display: flex;
  gap: 0.375rem;
  flex-direction: column;
`;
const CreateQnaContentQuestionTextarea = styled.textarea`
  -moz-appearance: none;
  appearance: none;
  background-color: #fff;
  border-color: #94a3b8;
  border-radius: 0;
  color: #0f172a;
  line-height: 1.5;
  font-size: 1rem;
  padding: 0;
  border-width: 0;
  resize: none;
  width: 100%;
  min-height: 10rem;
  outline: none;
`;

function ContentQuestion() {
  const { setDatas } = useContext(CreateQnaDataContext);
  const handleQuestion = (e) => {
    const value = e.target.value;
    setDatas((prev) => ({
      ...prev,
      question: value,
    }));
  };
  return (
    <CreateQnaContentQuestion>
      <CreateQnaContentQuestionTextarea
        name="description"
        placeholder="궁금한 내용을 적어주세요.
질문 내용이 구체적일수록 정확한 답변을 받을 수 있어요."
        style={{ height: "48px !important" }}
        defaultValue={""}
        onChange={handleQuestion}
      />
    </CreateQnaContentQuestion>
  );
}
export default ContentQuestion;
