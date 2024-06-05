import { Link } from "react-router-dom";
import styled from "styled-components";

const NonExistentContent = styled.div`
  margin-top: 0.5rem;
`;
const NonExistentText = styled.p`
  margin-bottom: 1.25rem;
  white-space: pre-line;
  color: rgb(71 85 105 / 1);
`;
const NonExistentAddBtn = styled(Link)`
  display: inline-flex;
  width: 140px;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border-width: 1px;
  border-style: solid;
  border-color: #64748b;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  color: #334155;
  &:hover {
    background-color: #f8fafc;
  }
`;
const NonExistentAddSvg = styled.svg`
  fill: #334155;
`;
const NonExistentAddText = styled.span`
  margin-left: 0.25rem;
  -webkit-line-clamp: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

function NonExistent({ partText, part, url = "" }) {
  return (
    <NonExistentContent>
      <NonExistentText>{partText}</NonExistentText>
      <NonExistentAddBtn to={url}>
        <NonExistentAddSvg
          width="16"
          height="16"
          strokeWidth="0"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <g id="style=outline">
              <path
                id="Vector (Stroke)"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z"
              ></path>
            </g>
          </g>
        </NonExistentAddSvg>
        <NonExistentAddText>{part} 추가</NonExistentAddText>
      </NonExistentAddBtn>
    </NonExistentContent>
  );
}
export default NonExistent;
