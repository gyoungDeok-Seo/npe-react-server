import styled from "styled-components";
import ContentTitle from "../../components/updateQna/CreateQnaContent/ContentTitle";
import ContentQuestion from "../../components/updateQna/CreateQnaContent/ContentQuestion";

const UpdateQnaContentInsertbox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

function UpdateQnaContent({qnaData}) {
  return (
    <UpdateQnaContentInsertbox>
      <ContentTitle  qnaData={qnaData}/>
      <ContentQuestion   qnaData={qnaData}/>
    </UpdateQnaContentInsertbox>
  );
}
export default UpdateQnaContent;
