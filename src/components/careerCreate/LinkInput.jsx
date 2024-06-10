import { useContext } from "react";
import {
  CreateEducationsInput,
  CreateEducationsLabel,
  CreateEducationsPartTitleBox,
  EducationsInputBox,
} from "../../pages/EducationsCreate";
import { CreateCareerContext } from "../../context/CreateCareerContext";

function LinkInput() {
  const { datas, setDatas } = useContext(CreateCareerContext);

  const handleLinkChange = (e) => {
    const value = e.target.value;
    setDatas((prev) => ({
      ...prev,
      link: value,
    }));
  };
  return (
    <EducationsInputBox>
      <CreateEducationsPartTitleBox>
        <CreateEducationsLabel>링크 연결</CreateEducationsLabel>
      </CreateEducationsPartTitleBox>
      <CreateEducationsInput
        type="text"
        placeholder="관련된 웹사이트가 있다면 URL을 추가해주세요."
        value={datas.link}
        onChange={handleLinkChange}
      />
    </EducationsInputBox>
  );
}
export default LinkInput;
