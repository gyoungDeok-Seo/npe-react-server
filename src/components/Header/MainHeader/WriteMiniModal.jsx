import { Link } from "react-router-dom";
import styled from "styled-components";

const WriteMiniModalBox = styled.div`
  display: block;
  position: absolute;
  top: 3.25rem;
  left: auto;
  right: 0;
  z-index: 6;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);
  color: rgb(71 85 105 / 1);
  font-size: 0.875rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: #fff;
  border-color: #cbd5e1;
  border-style: solid;
  border-width: 1px;
  border-radius: 0.25rem;
  width: 12.5rem;
`;
const WriteMiniModalBtn = styled(Link)`
  color: #0f172a;
  font-size: 0.875rem;
  text-align: left;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  display: block;
  &:hover {
    background-color: #f8fafc;
  }
`;

function WriteMiniModal({ modalRef }) {
  return (
    <WriteMiniModalBox ref={modalRef}>
      <WriteMiniModalBtn to="#">
        <span>게시물 작성</span>
      </WriteMiniModalBtn>
      <WriteMiniModalBtn to="/qna/create">
        <span>Q&amp;A 질문 작성</span>
      </WriteMiniModalBtn>
    </WriteMiniModalBox>
  );
}
export default WriteMiniModal;
