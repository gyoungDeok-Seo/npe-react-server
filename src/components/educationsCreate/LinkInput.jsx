import {
  CareerSelectBox,
  CareerCreateLabel,
  CareerCreateInput,
} from "../../pages/CareerCreate";

function LinkInput() {
  return (
    <CareerSelectBox>
      <div>
        <CareerCreateLabel>링크 연결</CareerCreateLabel>
      </div>
      <CareerCreateInput
        type="text"
        placeholder="관련된 웹사이트가 있다면 URL을 추가해주세요."
      />
    </CareerSelectBox>
  );
}
export default LinkInput;
