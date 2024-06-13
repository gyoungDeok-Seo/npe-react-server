import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { CreateQnaImgContext } from "../../context/CreateQnaImgContext";
import { useSelector } from "react-redux";

const CreateQnaHeaderBox = styled.nav`
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #fff;
  border-color: #cbd5e1;
  border-style: solid;
  border-width: 1px;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  align-items: center;
  width: 100%;
  height: 3.5rem;
  display: flex;
  z-index: 20;
  position: fixed;
`;

const ExiCreateQnaHeaderBtn = styled.button`
  padding: 0;
`;
const ExitProfileSvg = styled.svg`
  fill: #0f172a;
`;

const SubmitCreateQnaHeaderBtn = styled.button`
  color: #fff;
  font-weight: 700;
  font-size: 0.875rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  background-color: #334155;
  border-color: #334155;
  border-style: solid;
  border-width: 1px;
  border-radius: 0.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  &:disabled {
    opacity: 0.7;
  }
`;
const SubmitCreateQnaHeaderBtnText = styled.span`
  -webkit-line-clamp: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const CreateQnaHeaderCenterDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
`;
const CreateQnaHeaderCreaterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.375rem;
`;
const CreateQnaHeaderCreaterImg = styled.img`
  border-radius: 9999px;
  width: 1.5rem;
  height: 1.5rem;
  aspect-ratio: 1 / 1;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(226 232 240 / 1);
  background-color: rgb(255 255 255 / 1);
  flex: none;
  overflow: hidden;
  -o-object-fit: cover;
`;
const CreateQnaHeaderCreaterName = styled.p`
  font-weight: 700;
  font-size: 0.875rem;
`;
const CreateQnaHeaderAddImgBtn = styled.button`
  padding: 0.25rem;
  border-radius: 0.25rem;
  display: block;
  background-color: ${(props) => props.showInput && "#e2e8f0"};
`;
const CreateQnaHeaderAddImgBtnSvg = styled.svg`
  fill: #334155;
  width: 1.5rem;
  height: 1.5rem;
  display: block;
`;

function CreateQnaHeader({ navigate, setAvoidMistakesModal }) {
  const { title, question, category, tags } = useSelector(
    (state) => state.createQna
  );
  const { showInput, setShowInput } = useContext(CreateQnaImgContext);
  const handleShowInput = () => {
    setShowInput((showInput) => !showInput);
  };
  const handleUpdateProfile = () => {
    navigate("/");
  };

  const handleAvoidMistakesModal = () => {
    setAvoidMistakesModal(true);
  };

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(
      title === "" || question === "" || category === "" || tags.length === 0
    );
  }, [title, question, category, tags]);
  return (
    <CreateQnaHeaderBox>
      <ExiCreateQnaHeaderBtn type="button" onClick={handleAvoidMistakesModal}>
        <ExitProfileSvg
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
                d="M10.7071 4.2929C11.0976 4.68342 11.0976 5.31659 10.7071 5.70711L5.41423 10.9999H21C21.5523 10.9999 22 11.4477 22 11.9999C22 12.5522 21.5523 12.9999 21 12.9999H5.4142L10.7071 18.2929C11.0976 18.6834 11.0976 19.3166 10.7071 19.7071C10.3166 20.0976 9.68341 20.0976 9.29289 19.7071L2.29289 12.7071C2.10535 12.5195 2 12.2652 2 11.9999C2 11.7347 2.10536 11.4804 2.2929 11.2928L9.2929 4.29289C9.68342 3.90237 10.3166 3.90237 10.7071 4.2929Z"
              />
            </g>
          </g>
        </ExitProfileSvg>
      </ExiCreateQnaHeaderBtn>
      <CreateQnaHeaderCenterDiv>
        <CreateQnaHeaderCreaterBox>
          <CreateQnaHeaderCreaterImg
            src="https://publy.imgix.net/static/images/img_profile-dummy.png?w=200&h=200&auto=format&fm=png"
            alt="profile picture"
            title="profile picture"
          />
          <CreateQnaHeaderCreaterName>백시현</CreateQnaHeaderCreaterName>
        </CreateQnaHeaderCreaterBox>
        <CreateQnaHeaderAddImgBtn
          type="button"
          onClick={handleShowInput}
          showInput={showInput}
        >
          <CreateQnaHeaderAddImgBtnSvg
            width={24}
            height={24}
            strokeWidth={0}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <g id="style=outline">
                {showInput ? (
                  <path
                    id="Union"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="1111"
                  ></path>
                ) : (
                  <path
                    id="Vector (Stroke)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="1111"
                  />
                )}
              </g>
            </g>
          </CreateQnaHeaderAddImgBtnSvg>
        </CreateQnaHeaderAddImgBtn>
      </CreateQnaHeaderCenterDiv>
      <SubmitCreateQnaHeaderBtn
        type="button"
        onClick={handleUpdateProfile}
        disabled={disabled}
      >
        <SubmitCreateQnaHeaderBtnText>
          <span>완료</span>
        </SubmitCreateQnaHeaderBtnText>
      </SubmitCreateQnaHeaderBtn>
    </CreateQnaHeaderBox>
  );
}
export default CreateQnaHeader;
