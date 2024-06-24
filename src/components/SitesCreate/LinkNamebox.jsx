import styled from "styled-components";
import {
  SitesCreateaLabel,
  SitesCreateaPartTitleBox,
} from "../../pages/SitesCreate";
import { Pilsu } from "../../pages/CareerCreate";
import { useState } from "react";

const SitesInputBox = styled.div`
  margin-bottom: 1rem;
`;
const SitesCreateaInputCount = styled.p`
  font-size: 0.875rem;
  color: #64748b;
`;

function LinkNamebox() {
  const [nameLength, setNameLength] = useState(0);

  const handleNameChange = (e) => {
    // const value = e.target.value;
    // const valueLength = value.length;
    // setNameLength(valueLength);
    // if (valueLength <= 50) {
    //   setDatas((prev) => ({
    //     ...prev,
    //     name: value,
    //   }));
    // }
  };

  return (
    <SitesInputBox>
      <SitesCreateaPartTitleBox>
        <SitesCreateaLabel>
          이름<Pilsu>(필수)</Pilsu>
        </SitesCreateaLabel>
        <SitesCreateaInputCount>{nameLength}/50</SitesCreateaInputCount>
      </SitesCreateaPartTitleBox>
      {/* <SitesCreateaInput
        type="text"
        placeholder="표시할 이름을 입력해 주세요. (예: 포트폴리오)"
        maxLength="50"
        value={datas.name}
        onChange={handleNameChange}
      /> */}
    </SitesInputBox>
  );
}
export default LinkNamebox;
