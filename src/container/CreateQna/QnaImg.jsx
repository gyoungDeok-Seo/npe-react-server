import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setFiles } from "../../redux/createQna";

const QnaImgBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const QnaImgList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;
const QnaImgPrevBox = styled.div`
  position: relative;
`;
const QnaImgItem = styled.img`
  -o-object-fit: cover;
  object-fit: cover;
  background-color: rgb(226 232 240 /1);
  border-color: rgb(226 232 240 / 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 0.25rem;
  flex: none;
  width: 5rem;
  height: 5rem;
`;
const QnaImgCancelBtn = styled.button`
  padding: 0;
  background-color: rgb(255 255 255 /1);
  border-radius: 9999px;
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
`;
const QnaImgCancelBtnSvg = styled.svg`
  fill: #475569;
  stroke: #475569;
`;
const QnaImgAddBtn = styled.button`
  border-color: #cbd5e1;
  border-style: dashed;
  border-width: 1px;
  border-radius: 0.25rem;
  width: 5rem;
  height: 5rem;
  bottom: -10rem;
`;
const QnaImgAddBtnSvg = styled.svg`
  fill: #94a3b8;
  width: 1.25rem;
  height: 1.25rem;
`;
const QnaImgAddBtnText = styled.span`
  color: #94a3b8;
  font-size: 0.75rem;
`;
const QnaImg = () => {
  const fileInputRef = useRef(null);
  const createQna = useSelector((state) => state.createQna);
  const dispatch = useDispatch();
  const [maxLengthImages, setMaxLengthImages] = useState(false);

  const handleAddBtn = () => {
    fileInputRef.current.click();
  };

  const handleInput = (e) => {
    const file = e.target.files[0];
    const filePreviews = {
      file: file,
      fileName: file.name,
      filePath: URL.createObjectURL(file),
    };
    dispatch(setFiles([...createQna.files, filePreviews]));
    fileInputRef.current.value = "";
  };

  const handleRemoveImage = (index) => {
    const updatedImages = createQna.files.filter((_, i) => i !== index);
    dispatch(setFiles(updatedImages));
  };

  useEffect(() => {
    setMaxLengthImages(createQna.files.length >= 7);
  }, [createQna.files]);

  return (
    <QnaImgBox>
      <QnaImgList>
        {createQna.files.map((file, index) => (
          <QnaImgPrevBox key={index}>
            <QnaImgItem src={file.filePath} alt={file.fileName} />
            <QnaImgCancelBtn
              type="button"
              onClick={() => handleRemoveImage(index)}
            >
              <QnaImgCancelBtnSvg
                width={24}
                height={24}
                strokeWidth={0}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <g id="style=solid">
                    <path
                      id="Vector"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22 12C22 13.3132 21.7413 14.6136 21.2388 15.8268C20.7362 17.0401 19.9997 18.1425 19.0711 19.0711C18.1425 19.9997 17.0401 20.7362 15.8268 21.2388C14.6136 21.7413 13.3132 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C4.00035 18.1425 3.26375 17.0401 2.7612 15.8268C2.25866 14.6136 2 13.3132 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2C14.6522 2 17.1957 3.05357 19.0711 4.92893C20.9464 6.8043 22 9.34784 22 12ZM9.70711 8.29289C9.31658 7.90237 8.68342 7.90237 8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711L10.5858 12L8.29289 14.2929C7.90237 14.6834 7.90237 15.3166 8.29289 15.7071C8.68342 16.0976 9.31658 16.0976 9.70711 15.7071L12 13.4142L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L13.4142 12L15.7071 9.70711C16.0976 9.31658 16.0976 8.68342 15.7071 8.29289C15.3166 7.90237 14.6834 7.90237 14.2929 8.29289L12 10.5858L9.70711 8.29289Z"
                    />
                  </g>
                </g>
              </QnaImgCancelBtnSvg>
            </QnaImgCancelBtn>
          </QnaImgPrevBox>
        ))}
        {!maxLengthImages && (
          <>
            <input
              type="file"
              style={{ display: "none" }}
              ref={fileInputRef}
              onChange={handleInput}
              multiple="false"
            />
            <QnaImgAddBtn type="button" onClick={handleAddBtn}>
              <QnaImgAddBtnSvg
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
                      d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z"
                    />
                  </g>
                </g>
              </QnaImgAddBtnSvg>
              <QnaImgAddBtnText>사진 추가</QnaImgAddBtnText>
            </QnaImgAddBtn>
          </>
        )}
      </QnaImgList>
    </QnaImgBox>
  );
};

export default QnaImg;
