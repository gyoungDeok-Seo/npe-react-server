import {
  CareerSelectBox,
  CareerCreateLabel,
  CareerCreateInput,
} from "../../pages/CareerCreate";
import { useDispatch, useSelector } from "react-redux";
import { setEducationUrl } from "../../redux/createEducation";

function LinkInput() {
  const createEducation = useSelector((state) => state.createEducation);
  const dispatch = useDispatch();

  const handleLinkChange = (e) => {
    const value = e.target.value;
    dispatch(setEducationUrl(value));
  };
  return (
    <CareerSelectBox>
      <div>
        <CareerCreateLabel>링크 연결</CareerCreateLabel>
      </div>
      <CareerCreateInput
        type="text"
        placeholder="관련된 웹사이트가 있다면 URL을 추가해주세요."
        value={createEducation.educationUrl}
        onChange={handleLinkChange}
      />
    </CareerSelectBox>
  );
}
export default LinkInput;
