import {
  CreateEducationsInput,
  CreateEducationsLabel,
  CreateEducationsPartTitleBox,
  EducationsInputBox,
} from "../../pages/EducationsCreate";

function LinkInput() {
  return (
    <EducationsInputBox>
      <CreateEducationsPartTitleBox>
        <CreateEducationsLabel>링크 연결</CreateEducationsLabel>
      </CreateEducationsPartTitleBox>
      <CreateEducationsInput
        type="text"
        placeholder="관련된 웹사이트가 있다면 URL을 추가해주세요."
      />
    </EducationsInputBox>
  );
}
export default LinkInput;
