import styled from "styled-components";
import { Pilsu } from "../../pages/CareerCreate";
import {
  SitesCreateaInput,
  SitesCreateaLabel,
  SitesCreateaPartTitleBox,
} from "../../pages/SitesCreate";
import { useContext } from "react";
import { CreateSiteContext } from "../../context/CreateSiteContext";

const SitesInputBoxTop = styled.div`
  margin-bottom: 1.5rem;
`;

const SitesCreateaRelativeBox = styled.div`
  position: relative;
`;

function LinkUrlBox() {
  const { datas, setDatas } = useContext(CreateSiteContext);

  const handleUrlChange = (e) => {
    const value = e.target.value;
    setDatas((prev) => ({
      ...prev,
      url: value,
    }));
  };
  return (
    <SitesInputBoxTop>
      <SitesCreateaPartTitleBox>
        <SitesCreateaLabel>
          링크 연결
          <Pilsu>(필수)</Pilsu>
        </SitesCreateaLabel>
      </SitesCreateaPartTitleBox>
      <SitesCreateaRelativeBox>
        <SitesCreateaInput
          type="text"
          placeholder="URL을 입력해 주세요."
          value={datas.url}
          onChange={handleUrlChange}
        />
      </SitesCreateaRelativeBox>
    </SitesInputBoxTop>
  );
}
export default LinkUrlBox;
