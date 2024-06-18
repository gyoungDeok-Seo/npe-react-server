import { useDispatch, useSelector } from "react-redux";
import {
  CreateEducationsInput,
  CreateEducationsLabel,
  CreateEducationsPartTitleBox,
  EducationsInputBox,
} from "../../pages/CreateEducations";
import { setCareerUrl } from "../../redux/createCareer";

function LinkInput() {
  const createCareer = useSelector((state) => state.createCareer);
  const dispatch = useDispatch();

  const handleLinkChange = (e) => {
    const value = e.target.value;
    dispatch(setCareerUrl(value));
  };
  return (
    <EducationsInputBox>
      <CreateEducationsPartTitleBox>
        <CreateEducationsLabel>링크 연결</CreateEducationsLabel>
      </CreateEducationsPartTitleBox>
      <CreateEducationsInput
        type="text"
        placeholder="관련된 웹사이트가 있다면 URL을 추가해주세요."
        value={createCareer.careerUrl}
        onChange={handleLinkChange}
      />
    </EducationsInputBox>
  );
}
export default LinkInput;
