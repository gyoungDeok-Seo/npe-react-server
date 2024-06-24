import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { qnaDetailApi } from "../service/qnaApi";
import { CreateQnaImgContext } from "../context/CreateQnaImgContext";
import MainHeader from "../components/Header/MainHeader";
import {
  CreateQnaContentBox,
  CreateQnaContentInner,
  TopSpaceDiv,
} from "./CreateQna";
import UpdateQnaContent from "../container/UpdateQna/UpdateQnaContent";
import QnaImg from "../container/UpdateQna/QnaImg";
import CategoryAndTag from "../container/UpdateQna/CategoryAndTag";
import AvoidMistakesModal from "../components/profiles/Modal/AvoidMistakesModal";

function UpdateQna() {
  const navigate = useNavigate(null);
  const [showInput, setShowInput] = useState(false);
  const [avoidMistakesModal, setAvoidMistakesModal] = useState(false);
  const [isExit, setIsExit] = useState(false);
  const [qnaData, setQnaData] = useState({});
  const { pathname } = useLocation();
  const match = pathname.match(/\/(\d+)$/);
  const qnaId = match ? match[1] : null;

  useEffect(() => {
    if (isExit) {
      navigate("/qnas");
    }
  }, [isExit]);

  useEffect(() => {
    setShowInput(true);
    window.scrollTo({
      top: 0,
    });
    const fetchQnas = async () => {
      const qnas = await qnaDetailApi(qnaId);
      setQnaData(qnas);
    };

    fetchQnas();
  }, []);

  return (
    <CreateQnaImgContext.Provider value={{ showInput, setShowInput }}>
      <div>
        <div
          style={{
            position: "fixed",
            zIndex: 9999,
            top: 16,
            left: 16,
            right: 16,
            bottom: 16,
            pointerEvents: "none",
          }}
          className="global-toaster"
        />
        <div>
          <MainHeader
            setAvoidMistakesModal={setAvoidMistakesModal}
            qnaId={qnaId}
          />
          <TopSpaceDiv />
          <CreateQnaContentBox>
            <CreateQnaContentInner>
              <UpdateQnaContent qnaData={qnaData} />
              {showInput && <QnaImg qnaData={qnaData} />}
              <CategoryAndTag qnaData={qnaData}/>
            </CreateQnaContentInner>
          </CreateQnaContentBox>
        </div>
      </div>
      {avoidMistakesModal && (
        <AvoidMistakesModal
          setAvoidMistakesModal={setAvoidMistakesModal}
          setIsExit={setIsExit}
        />
      )}
    </CreateQnaImgContext.Provider>
  );
}
export default UpdateQna;
