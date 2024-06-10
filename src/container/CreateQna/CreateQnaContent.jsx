import styled from "styled-components";
import ContentTitle from "../../components/createQna/CreateQnaContent/ContentTitle";
import ContentQuestion from "../../components/createQna/CreateQnaContent/ContentQuestion";

const CreateQnaContentInsertbox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

function CreateQnaContent() {
  return (
    <CreateQnaContentInsertbox>
      <ContentTitle  />
      <ContentQuestion  />
    </CreateQnaContentInsertbox>
  );
}
export default CreateQnaContent;
