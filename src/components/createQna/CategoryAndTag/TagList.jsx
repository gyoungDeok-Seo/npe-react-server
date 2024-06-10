import styled from "styled-components";
import TagItem from "./TagItem";
import { useContext } from "react";
import { CreateQnaDataContext } from "../../../context/CreateQnaDataContext";

const TagListBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const TagListInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
const Instructions = styled.p`
  color: #334155;
  font-size: 0.875rem;
`;

function TagList() {
  const { datas, setDatas } = useContext(CreateQnaDataContext);
  return (
    <TagListBox>
      <TagListInner>
        {datas.tags.map((tag) => (
          <TagItem tag={tag} setDatas={setDatas} />
        ))}
      </TagListInner>
      <Instructions>태그는 최대 5개까지 입력할 수 있어요.</Instructions>
    </TagListBox>
  );
}
export default TagList;
