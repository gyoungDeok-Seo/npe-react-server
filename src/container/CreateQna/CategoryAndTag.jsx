import styled from "styled-components";
import CategorySelect from "../../components/createQna/CategoryAndTag/CategorySelect";
import AddTag from "../../components/createQna/CategoryAndTag/AddTag";
import TagList from "../../components/createQna/CategoryAndTag/TagList";
import { useContext, useState } from "react";
import { CreateQnaDataContext } from "../../context/CreateQnaDataContext";

const CreateQnaCategoryAndTagBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const CreateQnaCategoryAndTagInner = styled.div`
  padding: 1rem;
  background-color: #f8fafc;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const CreateQnaCategorybox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CreateQnaPilsu = styled.span`
  color: #64748b;
  font-weight: 400;
`;
const CreateQnaTagBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

function CategoryAndTag() {
  const { datas } = useContext(CreateQnaDataContext);

  return (
    <CreateQnaCategoryAndTagBox>
      <CreateQnaCategoryAndTagInner>
        <CreateQnaCategorybox>
          <CategorySelect />
        </CreateQnaCategorybox>
        <CreateQnaTagBox>
          <AddTag />
          {datas.tags.length !== 0 && <TagList />}
        </CreateQnaTagBox>
      </CreateQnaCategoryAndTagInner>
    </CreateQnaCategoryAndTagBox>
  );
}
export default CategoryAndTag;
