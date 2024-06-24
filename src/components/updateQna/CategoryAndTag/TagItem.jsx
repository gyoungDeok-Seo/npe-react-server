import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setTags } from "../../../redux/createQna";

const TagListContent = styled.div`
  padding-right: 1.75rem;
  padding-left: 0.625rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  background-color: #fff;
  border-color: #e2e8f0;
  border-style: solid;
  border-width: 1px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  width: -moz-fit-content;
  width: fit-content;
  position: relative;
`;
const TagIcon = styled.svg`
  fill: #94a3b8;
  flex-shrink: 0;
  width: 0.75rem;
  height: 0.75rem;
`;
const TagText = styled.p`
  color: #0f172a;
  line-height: 1;
  font-size: 0.75rem;
  word-break: break-all;
`;
const TagCancelBtn = styled.button`
  padding: 0.375rem;
  border-radius: 0.25rem;
  position: absolute;
  right: 0.25rem;
`;
const TagCancelSvg = styled.svg`
  fill: #64748b;
  width: 0.75rem;
  height: 0.75rem;
  display: block;
`;

function TagItem({ tag }) {
  const dispatch = useDispatch();
  const createQna = useSelector((state) => state.createQna);
  const handleCancel = () => {
    const updatedTags = createQna?.tags?.filter(
      (item) => item?.tagName !== tag?.tagName
    );
    dispatch(setTags(updatedTags));
  };

  return (
    <TagListContent>
      <TagIcon
        width={24}
        height={24}
        strokeWidth={0}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <g id="style=outline">
            <path
              id="Vector (Stroke)"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.2425 3.02985C11.7783 3.1638 12.1041 3.70673 11.9701 4.24253L11.0308 7.99999H14.9692L16.0299 3.75746C16.1638 3.22166 16.7067 2.8959 17.2425 3.02985C17.7783 3.1638 18.1041 3.70673 17.9701 4.24253L17.0308 7.99999H20C20.5523 7.99999 21 8.44771 21 8.99999C21 9.55228 20.5523 9.99999 20 9.99999H16.5308L15.5308 14H18C18.5523 14 19 14.4477 19 15C19 15.5523 18.5523 16 18 16H15.0308L13.9701 20.2425C13.8362 20.7783 13.2933 21.1041 12.7575 20.9701C12.2217 20.8362 11.8959 20.2933 12.0299 19.7575L12.9692 16H9.03078L7.97014 20.2425C7.83619 20.7783 7.29326 21.1041 6.75746 20.9701C6.22167 20.8362 5.89591 20.2933 6.02986 19.7575L6.96922 16H4C3.44772 16 3 15.5523 3 15C3 14.4477 3.44772 14 4 14H7.46922L8.46922 9.99999H6C5.44772 9.99999 5 9.55228 5 8.99999C5 8.44771 5.44772 7.99999 6 7.99999H8.96922L10.0299 3.75746C10.1638 3.22166 10.7067 2.8959 11.2425 3.02985ZM10.5308 9.99999L9.53078 14H13.4692L14.4692 9.99999H10.5308Z"
            />
          </g>
        </g>
      </TagIcon>
      <TagText>{tag?.tagName}</TagText>
      <TagCancelBtn type="button" onClick={handleCancel}>
        <TagCancelSvg
          width={24}
          height={24}
          strokeWidth={0}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <g id="style=outline">
              <path
                id="Vector (Stroke)"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
              />
            </g>
          </g>
        </TagCancelSvg>
      </TagCancelBtn>
    </TagListContent>
  );
}
export default TagItem;
