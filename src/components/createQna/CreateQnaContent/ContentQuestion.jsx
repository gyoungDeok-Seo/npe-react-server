import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setQuestion } from "../../../redux/createQna";

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
  const createQna = useSelector((state) => state.createQna);
  const dispatch = useDispatch();
  const handleQuestion = (e) => {
    const value = e.target.value;
    dispatch(setQuestion(value));
  };

  return (
    <CreateQnaContentQuestion>
      <CreateQnaContentQuestionTextarea
        name="description"
        placeholder="궁금한 내용을 적어주세요.
질문 내용이 구체적일수록 정확한 답변을 받을 수 있어요."
        style={{ height: "48px !important" }}
        value={createQna.questionContent}
        onChange={handleQuestion}
      />
    </CreateQnaContentQuestion>
  );
}
export default ContentQuestion;
