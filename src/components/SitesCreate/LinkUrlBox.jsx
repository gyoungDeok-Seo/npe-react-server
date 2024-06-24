import styled from "styled-components";
import { Pilsu } from "../../pages/CareerCreate";
import {
  SitesCreateaLabel,
  SitesCreateaPartTitleBox,
} from "../../pages/SitesCreate";

const SitesInputBoxTop = styled.div`
  margin-bottom: 1.5rem;
`;

const SitesCreateaRelativeBox = styled.div`
  position: relative;
`;

function LinkUrlBox() {

  // const handleUrlChange = (e) => {
  //   const value = e.target.value;
  //   setDatas((prev) => ({
  //     ...prev,
  //     url: value,
  //   }));
  // };
  return (
    <SitesInputBoxTop>
      <SitesCreateaPartTitleBox>
        <SitesCreateaLabel>
          링크 연결
          <Pilsu>(필수)</Pilsu>
        </SitesCreateaLabel>
      </SitesCreateaPartTitleBox>
      <SitesCreateaRelativeBox>
        {/* <SitesCreateaInput
          type="text"
          placeholder="URL을 입력해 주세요."
          value={datas.url}
          onChange={handleUrlChange}
        /> */}
      </SitesCreateaRelativeBox>
    </SitesInputBoxTop>
  );
}
export default LinkUrlBox;
