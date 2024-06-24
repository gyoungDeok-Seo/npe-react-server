import styled from "styled-components";
import TagItem from "./TagItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setTags } from "../../../redux/createQna";

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

function TagList({ qnaData }) {
  const createQna = useSelector((state) => state.createQna);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTags(qnaData?.tags));
  }, [qnaData]);
  return (
    <TagListBox>
      <TagListInner>
        {createQna?.tags?.map((tag) => (
          <> {tag?.tagName && <TagItem tag={tag} />}</>
        ))}
      </TagListInner>
      <Instructions>태그는 최대 5개까지 입력할 수 있어요.</Instructions>
    </TagListBox>
  );
}
export default TagList;
