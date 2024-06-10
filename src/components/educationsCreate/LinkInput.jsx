import { useContext } from "react";
import {
  CareerSelectBox,
  CareerCreateLabel,
  CareerCreateInput,
} from "../../pages/CareerCreate";
import { CreateEductaionContext } from "../../context/CreateEductaionContext";

function LinkInput() {
  const { datas, setDatas } = useContext(CreateEductaionContext);

  const handleLinkChange = (e) => {
    const value = e.target.value;
    setDatas((prev) => ({
      ...prev,
      link: value,
    }));
  };
  return (
    <CareerSelectBox>
      <div>
        <CareerCreateLabel>링크 연결</CareerCreateLabel>
      </div>
      <CareerCreateInput
        type="text"
        placeholder="관련된 웹사이트가 있다면 URL을 추가해주세요."
        value={datas.link}
        onChange={handleLinkChange}
      />
    </CareerSelectBox>
  );
}
export default LinkInput;
