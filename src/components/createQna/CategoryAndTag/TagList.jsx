import styled from "styled-components";
import TagItem from "./TagItem";
import { useSelector } from "react-redux";

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
  const createQna = useSelector((state) => state.createQna);
  return (
    <TagListBox>
      <TagListInner>
        {createQna.tags.map((tag) => (
          <> {tag.tagName && <TagItem tag={tag} />}</>
        ))}
      </TagListInner>
      <Instructions>태그는 최대 5개까지 입력할 수 있어요.</Instructions>
    </TagListBox>
  );
}
export default TagList;
