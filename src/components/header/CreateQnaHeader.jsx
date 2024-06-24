import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { CreateQnaImgContext } from "../../context/CreateQnaImgContext";
import { useDispatch, useSelector } from "react-redux";
import { a, createQnaApi } from "../../service/qnaApi";
import { setFiles } from "../../redux/createQna";

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
  const createQna = useSelector((state) => state.createQna);
  const { showInput, setShowInput } = useContext(CreateQnaImgContext);
  const dispatch = useDispatch();

  const handleShowInput = () => {
    setShowInput((showInput) => !showInput);
  };
  const handleUpdateProfile = async () => {
    const asd = await a.b(createQna);
    if (asd) {
      const updatedFiles = createQna.files.map((file, i) => ({
        ...file,
        fileName: `${asd[i]}_${file.fileName}`,
      }));
      dispatch(setFiles(updatedFiles));
      navigate("/qnas");
      await createQnaApi(createQna);
    }
  };
  useEffect(() => {

  }, [createQna]);
  const handleAvoidMistakesModal = () => {
    setAvoidMistakesModal(true);
  };

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const { questionTitle, questionContent, categoryId, tags } = createQna;

    setDisabled(
      questionTitle === "" ||
        questionContent === "" ||
        categoryId === "" ||
        tags?.length === 0
    );
  }, [createQna]);
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
                    d="M6 3C5.20435 3 4.44129 3.31607 3.87868 3.87868C3.31607 4.44129 3 5.20435 3 6V18C3 18.7956 3.31596 19.5587 3.87862 20.1213C4.37092 20.6136 5.0167 20.9171 5.70349 20.9853C5.80157 20.9951 5.90051 21 5.99994 21H17.9999C18.1989 21 18.3958 20.9802 18.588 20.9418C19.1647 20.8266 19.6994 20.5433 20.1213 20.1213C20.5433 19.6994 20.8266 19.1647 20.9418 18.588C20.9802 18.3958 21 18.1989 21 18V6C21 5.20435 20.6839 4.44129 20.1213 3.87868C19.5587 3.31607 18.7956 3 18 3H6ZM13 8C13 7.44772 13.4477 7 14 7H14.01C14.5623 7 15.01 7.44772 15.01 8C15.01 8.55228 14.5623 9 14.01 9H14C13.4477 9 13 8.55228 13 8ZM5 16.5L9.293 12.207C9.48052 12.0196 9.73489 11.9142 10 11.9142C10.2651 11.9142 10.5195 12.0196 10.707 12.207L15.2929 16.7929C15.6834 17.1834 16.3166 17.1834 16.7071 16.7929C17.0976 16.4024 17.0976 15.7692 16.7071 15.3787L15.4142 14.0858L16.2931 13.2069C16.4806 13.0195 16.7349 12.9142 17 12.9142C17.2651 12.9142 17.5195 13.0196 17.707 13.207L19 14.5V18C19 18.2651 18.8946 18.5195 18.707 18.7071C18.5195 18.8946 18.2652 19 17.9999 19H5.99994C5.73472 19 5.48037 18.8946 5.29283 18.7071C5.10535 18.5196 5 18.2653 5 18V16.5Z"
                  ></path>
                ) : (
                  <path
                    id="Vector (Stroke)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H18C18.7956 3 19.5587 3.31607 20.1213 3.87868C20.6839 4.44129 21 5.20435 21 6V13.999V14.001V18C21 18.7957 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7957 21 18 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V16.0002V6C3 5.20435 3.31607 4.44129 3.87868 3.87868ZM5 16.5V18C5 18.2652 5.10536 18.5196 5.29289 18.7071C5.48043 18.8946 5.73478 19 6 19H18C18.2652 19 18.5196 18.8946 18.7071 18.7071C18.8946 18.5196 19 18.2652 19 18V14.5L17.707 13.207C17.5195 13.0196 17.2651 12.9142 17 12.9142C16.7349 12.9142 16.4806 13.0195 16.2931 13.2069L15.4142 14.0858L16.7071 15.3787C17.0976 15.7692 17.0976 16.4024 16.7071 16.7929C16.3166 17.1834 15.6834 17.1834 15.2929 16.7929L10.707 12.207C10.5195 12.0196 10.2651 11.9142 10 11.9142C9.73489 11.9142 9.48062 12.0195 9.29311 12.2069L5 16.5ZM14 12.6716L12.1211 10.7927C11.5585 10.2303 10.7955 9.91421 10 9.91421C9.20451 9.91421 8.44158 10.2302 7.879 10.7926L5 13.6716V6C5 5.73478 5.10536 5.48043 5.29289 5.29289C5.48043 5.10536 5.73478 5 6 5H18C18.2652 5 18.5196 5.10536 18.7071 5.29289C18.8946 5.48043 19 5.73478 19 6V11.6781C18.4515 11.1875 17.7398 10.9142 17 10.9142C16.2045 10.9142 15.4416 11.2302 14.879 11.7926L14 12.6716ZM13 8C13 7.44772 13.4477 7 14 7H14.01C14.5623 7 15.01 7.44772 15.01 8C15.01 8.55228 14.5623 9 14.01 9H14C13.4477 9 13 8.55228 13 8Z"
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
