import { styled } from "styled-components";
import { deleteAnswerApi } from "../../../service/answerApi";
import { deleteQnaApi } from "../../../service/qnaApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteReplyApi } from "../../../service/answerReplyApi";

const ModalWrap = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  -webkit-tap-highlight-color: transparent;
  display: flex;
  position: fixed;
  z-index: 1060;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.625em;
  overflow-x: hidden;
  transition: background-color 0.1s;
  -webkit-overflow-scrolling: touch;
`;

const ModalContainer = styled.div`
  margin: auto;
  animation: swal2-show 0.3s;
  -webkit-tap-highlight-color: transparent;
  display: none;
  position: relative;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  width: 32em;
  max-width: 100%;
  padding: 1.25em;
  border: none;
  border-radius: 5px;
  background: #fff;
  font-family: inherit;
  font-size: 1rem;
`;

const ModalHeaderBox = styled.div`
  -webkit-tap-highlight-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalHeader = styled.h2`
  -webkit-tap-highlight-color: transparent;
  position: relative;
  max-width: 100%;
  margin: 0 0 0.4em;
  padding: 0;
  line-height: 1.5;
  font-size: 1.25rem;
  color: #0f172a;
  text-align: center;
  text-transform: none;
  word-wrap: break-word;
  font-weight: 700;
`;

const ModalBtnBox = styled.div`
  -webkit-tap-highlight-color: transparent;
  display: flex;
  z-index: 1;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const DeleteBtn = styled.button`
  -webkit-tap-highlight-color: transparent;
  margin-bottom: 0.5rem;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  padding: 0.6875rem 1.4375rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.3rem;
  color: #fff;
  background-color: #ed6653;
  border-color: #ed6653;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

const CancelBtn = styled(DeleteBtn)`
  color: #64748b;
  background-color: #e2e8f0;
  border-color: #e2e8f0;
  margin: 0;
`;

function ReplyDeleteModal({ setModal, data, setAnswerList, qnaId }) {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const handlerClickDeleteBtn = async () => {
    if (data.questionContent) {
      await deleteQnaApi(data.id);
      navigator("/qnas");
    } else if (data.answerContent) {
      const request = { id: data.id, questionId: data.questionId };
      const response = await deleteAnswerApi(request);
      setAnswerList(response);
    } else if (data.replayContent) {
      const request = { id: data.id, questionId: qnaId };
      const response = await deleteReplyApi(request);
      setAnswerList(response);
      setModal(false);
    }
  };
  const handlerClickCancelBtn = () => {
    setModal(false);
  };

  return (
    <ModalWrap style={{ overflowY: "auto" }}>
      <ModalContainer style={{ width: "20.5rem", display: "flex" }}>
        <ModalHeaderBox>
          <ModalHeader>정말 삭제하시겠어요?</ModalHeader>
        </ModalHeaderBox>
        <ModalBtnBox>
          <DeleteBtn onClick={handlerClickDeleteBtn}>삭제</DeleteBtn>
          <CancelBtn onClick={handlerClickCancelBtn}>취소</CancelBtn>
        </ModalBtnBox>
      </ModalContainer>
    </ModalWrap>
  );
}
export default ReplyDeleteModal;
