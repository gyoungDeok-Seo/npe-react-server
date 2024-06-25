import { styled } from "styled-components";
import {
  answerDeleteApi,
  answerListApi,
  answerReportApi,
} from "../../../service/answerApi";
import {
  replyDeleteApi,
  replyReportApi,
} from "../../../service/answerReplyApi";

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

const ModalGuidPhraseBox = styled.div`
  -webkit-tap-highlight-color: transparent;
  z-index: 1;
  justify-content: center;
  margin: 0;
  padding: 0 1.6em;
  color: #64748b;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  word-wrap: break-word;
  margin-bottom: 1.5rem;
`;

const ModalGuidPhrase = styled.div`
  -webkit-tap-highlight-color: transparent;
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

const ReportBtn = styled.button`
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

const CancelBtn = styled(ReportBtn)`
  color: #64748b;
  background-color: #e2e8f0;
  border-color: #e2e8f0;
  margin: 0;
`;

function ReplyReportModal({ setModal, type, data, setAnswerList, qnaId }) {
  console.log(data);
  const handlerClickReportBtn = async () => {
    if (data.questionContent) {
      //   await deleteQnaApi(data.id);
      //   navigator("/qnas");
    } else if (data.answerContent) {
      await answerReportApi(data.answerContent);
      await answerDeleteApi(data);
      const response = await answerListApi(data.questionId);
      setAnswerList(response);
    } else if (data.replayContent) {
      await replyReportApi(data.replayContent);
      await replyDeleteApi({ ...data, questionId: qnaId });
      const response = await answerListApi(qnaId);
      setAnswerList(response);
    }
    setModal(false);
  };

  const handlerClickCancelBtn = () => {
    setModal(false);
  };

  return (
    <ModalWrap style={{ overflowY: "auto" }}>
      <ModalContainer style={{ width: "20.5rem", display: "flex" }}>
        <ModalHeaderBox>
          <ModalHeader>{type}을 신고하시겠어요?</ModalHeader>
        </ModalHeaderBox>
        <ModalGuidPhraseBox>
          <ModalGuidPhrase>
            커뮤니티 가이드에 따라 신고 사유에
            <br /> 해당하는지 검토 후 처리됩니다.
          </ModalGuidPhrase>
        </ModalGuidPhraseBox>
        <ModalBtnBox>
          <ReportBtn onClick={handlerClickReportBtn}>신고</ReportBtn>
          <CancelBtn onClick={handlerClickCancelBtn}>취소</CancelBtn>
        </ModalBtnBox>
      </ModalContainer>
    </ModalWrap>
  );
}
export default ReplyReportModal;
