import styled from "styled-components";
import CategorySelect from "../../components/updateQna/CategoryAndTag/CategorySelect";
import AddTag from "../../components/updateQna/CategoryAndTag/AddTag";
import TagList from "../../components/updateQna/CategoryAndTag/TagList";


const UpdateQnaCategoryAndTagBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const UpdateQnaCategoryAndTagInner = styled.div`
  padding: 1rem;
  background-color: #f8fafc;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const UpdateQnaCategorybox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const UpdateQnaPilsu = styled.span`
  color: #64748b;
  font-weight: 400;
`;
const UpdateQnaTagBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

function CategoryAndTag({ qnaData }) {

  return (
    <UpdateQnaCategoryAndTagBox>
      <UpdateQnaCategoryAndTagInner>
        <UpdateQnaCategorybox>
          <CategorySelect qnaData={qnaData} />
        </UpdateQnaCategorybox>
        <UpdateQnaTagBox>
          <AddTag />
          <TagList qnaData={qnaData} />
        </UpdateQnaTagBox>
      </UpdateQnaCategoryAndTagInner>
    </UpdateQnaCategoryAndTagBox>
  );
}
export default CategoryAndTag;
