import { useState } from "react";
import Header from "../components/header/Header";
import styled from "styled-components";

const CareerCreateBox = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 3rem;
  @media (min-width: 1024px) {
    & {
      padding-top: 2rem;
    }
  }
  @media (min-width: 1024px) {
    & {
      width: 33rem;
    }
  }
  @media (min-width: 1024px) {
    & {
      margin-left: auto;
      margin-right: auto;
    }
  }
`;
const CareerInputBox = styled.div`
  margin-bottom: 1.5rem;
`;
const CareerSelectBox = styled.div`
  margin-bottom: 1rem;
`;
const CareerCreatePartTitleBox = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;
const CareerCreateLabel = styled.label`
  margin-bottom: 0;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-text-subtle, #334155);
`;
const Pilsu = styled.span`
  margin-left: 0.25rem;
  font-weight: 400;
  color: var(--color-text-subtler, #64748b);
`;
const CareerCreateInputCount = styled.p`
  font-size: 0.875rem;
  color: var(--color-text-subtler, #64748b);
`;
const CareerCreateRelativeBox = styled.div`
  position: relative;
`;
const CareerCreateInput = styled.input`
  -moz-appearance: none;
  appearance: none;
  --tw-shadow: 0 0 #0000;
  display: block;
  width: 100%;
  border-radius: 0.25rem;
  border-width: 1px;
  border-style: solid;
  border-color: var(--color-slate-200, #e2e8f0);
  background-color: var(--color-white, #fff);
  padding: 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: var(--color-text-bold, #0f172a);
`;
const CareerPeriodSelectBox = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
const CareerPeriodSelectInner = styled.div`
  display: flex;
  flex: 1 1 0%;
  gap: 0.5rem;
`;
const CareerPeriodSelect = styled.select`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%239aa8bc' d='m12 15.375l-6-6l1.4-1.4L12 12.55l4.6-4.575l1.4 1.4z'/%3E%3C/svg%3E");
  --tw-shadow: 0 0 #0000;
  appearance: none;
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
  display: block;
  width: 100%;
  border-radius: 0.25rem;
  border-width: 1px;
  border-style: solid;
  border-color: var(--color-slate-200, #e2e8f0);
  background-color: var(--color-white, #fff);
  padding: 0.75rem 1.5rem 0.75rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: var(--color-text-bold, #0f172a);
  width: auto;
  word-wrap: normal;
  text-transform: none;
  flex-grow: 1;
  @media (min-width: 1024px) {
    & {
      width: 100%;
    }
  }
`;
const CareerCreateCheckboxBox = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;
const CareerCreateCheckbox = styled.input`
  --tw-shadow: 0 0 #0000;
  color: #2563eb;
  user-select: none;
  flex-shrink: 0;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  appearance: none;
  -webkit-print-color-adjust: exact;
  height: 1.25rem;
  width: 1.25rem;
  cursor: pointer;
  border-radius: 0.25rem;
  border-width: 2px;
  border-style: solid;
  border-color: var(--color-slate-300, #cbd5e1);
  background-color: var(--color-white, #fff);
`;
const CareerCreateCheckboxText = styled.label`
  margin-bottom: 0;
  cursor: pointer;
  padding-left: 0.5rem;
  font-size: 0.875rem;
  font-weight: 400;
  --tw-text-opacity: 1;
  color: rgb(15 23 42 / var(--tw-text-opacity));
`;
const CareerCreateButtonBox = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  column-gap: 0.5rem;
  border-radius: 0.25rem;
  border-width: 1px;
  border-style: solid;
  border-color: var(--color-slate-200, #e2e8f0);
  padding: 0.75rem;
`;
const CareerCreateButtonText = styled.span`
  color: var(--color-text-placeholder, #94a3b8);
`;
const CareerCreateButtonSvg = styled.svg`
  height: 1rem;
  width: 1rem;
  fill: var(--color-slate-500, #64748b);
`;
const CareerCreateTextareaBox = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;
const CareerCreateTextareaTextBox = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;
const CareerCreateTextarea = styled.textarea`
  appearance: none;
  display: block;
  min-height: 9rem;
  width: 100%;
  resize: none;
  border-radius: 0.25rem;
  border-width: 1px;
  border-style: solid;
  border-color: var(--color-slate-200, #e2e8f0);
  background-color: var(--color-white, #fff);
  padding: 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: var(--color-text-bold, #0f172a);
`;
const CareerCreateTextareaCount = styled.p`
  text-align: right;
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--color-text-subtler, #64748b);
`;
const CareerPeriodSelectBox2 = styled.div`
  flex: 1 1 0%;
`;
const CareerPeriodSelectInner2 = styled.div`
  display: flex;
  gap: 0.5rem;
`;

function CareerCreate() {
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [companyLength, setCompanyLength] = useState(0);
  const [titleLength, setTitleLength] = useState(0);
  const [shortDescriptionLength, setShortDescriptionLength] = useState(0);

  const handleNameChange = (e) => {
    const valueLength = e.target.value.length;
    setCompanyLength(valueLength);
    if (valueLength <= 50) {
      setCompany(e.target.value);
    }
  };

  const handleTitleChange = (e) => {
    const valueLength = e.target.value.length;
    setTitleLength(valueLength);
    if (valueLength <= 50) {
      setTitle(e.target.value);
    }
  };

  const handleDescriptionChange = (e) => {
    const valueLength = e.target.value.length;
    setShortDescriptionLength(valueLength);
    if (valueLength <= 1000) {
      setShortDescription(e.target.value);
    }
  };
  return (
    <div>
      <div
        style={{
          position: "fixed",
          zIndex: 9999,
          top: "16px",
          left: "16px",
          right: "16px",
          bottom: "16px",
          pointerEvents: "none",
        }}
        className="global-toaster"
      ></div>
      <div>
        <Header />
        <div className="height-box"></div>
        <CareerCreateBox>
          <CareerInputBox>
            <CareerCreatePartTitleBox>
              <CareerCreateLabel>
                회사
                <Pilsu>(필수)</Pilsu>
              </CareerCreateLabel>
              <CareerCreateInputCount>
                {companyLength} / 50
              </CareerCreateInputCount>
            </CareerCreatePartTitleBox>
            <CareerCreateRelativeBox>
              <CareerCreateInput
                type="text"
                id="company"
                name="company"
                placeholder="회사명을 입력해 주세요."
                autoComplete="off"
                maxLength="50"
                onChange={handleNameChange}
              />
            </CareerCreateRelativeBox>
          </CareerInputBox>
          <CareerInputBox>
            <CareerCreatePartTitleBox>
              <CareerCreateLabel>
                직함
                <Pilsu>(필수)</Pilsu>
              </CareerCreateLabel>
              <CareerCreateInputCount>
                {titleLength} / 50
              </CareerCreateInputCount>
            </CareerCreatePartTitleBox>
            <CareerCreateRelativeBox>
              <CareerCreateInput
                type="text"
                id="title"
                name="title"
                placeholder="직함을 입력해 주세요. (예: 프로덕트 매니저)"
                autoComplete="off"
                maxLength="50"
                onChange={handleTitleChange}
              />
            </CareerCreateRelativeBox>
          </CareerInputBox>
          <CareerSelectBox>
            <CareerCreateLabel>
              재직 기간
              <Pilsu>(필수)</Pilsu>
            </CareerCreateLabel>
            <CareerPeriodSelectBox>
              <CareerPeriodSelectInner>
                <CareerPeriodSelect>
                  <option disabled="" value="-1">
                    시작연도
                  </option>
                  <option value="2024">2024년</option>
                  <option value="2023">2023년</option>
                  <option value="2022">2022년</option>
                  <option value="2021">2021년</option>
                  <option value="2020">2020년</option>
                  <option value="2019">2019년</option>
                  <option value="2018">2018년</option>
                  <option value="2017">2017년</option>
                  <option value="2016">2016년</option>
                  <option value="2015">2015년</option>
                  <option value="2014">2014년</option>
                  <option value="2013">2013년</option>
                  <option value="2012">2012년</option>
                  <option value="2011">2011년</option>
                  <option value="2010">2010년</option>
                  <option value="2009">2009년</option>
                  <option value="2008">2008년</option>
                  <option value="2007">2007년</option>
                  <option value="2006">2006년</option>
                  <option value="2005">2005년</option>
                  <option value="2004">2004년</option>
                  <option value="2003">2003년</option>
                  <option value="2002">2002년</option>
                  <option value="2001">2001년</option>
                  <option value="2000">2000년</option>
                  <option value="1999">1999년</option>
                  <option value="1998">1998년</option>
                  <option value="1997">1997년</option>
                  <option value="1996">1996년</option>
                  <option value="1995">1995년</option>
                  <option value="1994">1994년</option>
                  <option value="1993">1993년</option>
                  <option value="1992">1992년</option>
                  <option value="1991">1991년</option>
                  <option value="1990">1990년</option>
                  <option value="1989">1989년</option>
                  <option value="1988">1988년</option>
                  <option value="1987">1987년</option>
                  <option value="1986">1986년</option>
                  <option value="1985">1985년</option>
                  <option value="1984">1984년</option>
                  <option value="1983">1983년</option>
                  <option value="1982">1982년</option>
                  <option value="1981">1981년</option>
                  <option value="1980">1980년</option>
                  <option value="1979">1979년</option>
                  <option value="1978">1978년</option>
                  <option value="1977">1977년</option>
                  <option value="1976">1976년</option>
                  <option value="1975">1975년</option>
                  <option value="1974">1974년</option>
                  <option value="1973">1973년</option>
                  <option value="1972">1972년</option>
                  <option value="1971">1971년</option>
                  <option value="1970">1970년</option>
                </CareerPeriodSelect>
                <CareerPeriodSelect>
                  <option disabled="" value="-1">
                    월
                  </option>
                  <option value="0">1월</option>
                  <option value="1">2월</option>
                  <option value="2">3월</option>
                  <option value="3">4월</option>
                  <option value="4">5월</option>
                  <option value="5">6월</option>
                  <option value="6">7월</option>
                  <option value="7">8월</option>
                  <option value="8">9월</option>
                  <option value="9">10월</option>
                  <option value="10">11월</option>
                  <option value="11">12월</option>
                </CareerPeriodSelect>
              </CareerPeriodSelectInner>
              <CareerPeriodSelectBox2>
                <CareerPeriodSelectInner2>
                  <CareerPeriodSelect disabled="">
                    <option disabled="" value="-1">
                      종료연도
                    </option>
                    <option value="2024">2024년</option>
                    <option value="2023">2023년</option>
                    <option value="2022">2022년</option>
                    <option value="2021">2021년</option>
                    <option value="2020">2020년</option>
                    <option value="2019">2019년</option>
                    <option value="2018">2018년</option>
                    <option value="2017">2017년</option>
                    <option value="2016">2016년</option>
                    <option value="2015">2015년</option>
                    <option value="2014">2014년</option>
                    <option value="2013">2013년</option>
                    <option value="2012">2012년</option>
                    <option value="2011">2011년</option>
                    <option value="2010">2010년</option>
                    <option value="2009">2009년</option>
                    <option value="2008">2008년</option>
                    <option value="2007">2007년</option>
                    <option value="2006">2006년</option>
                    <option value="2005">2005년</option>
                    <option value="2004">2004년</option>
                    <option value="2003">2003년</option>
                    <option value="2002">2002년</option>
                    <option value="2001">2001년</option>
                    <option value="2000">2000년</option>
                    <option value="1999">1999년</option>
                    <option value="1998">1998년</option>
                    <option value="1997">1997년</option>
                    <option value="1996">1996년</option>
                    <option value="1995">1995년</option>
                    <option value="1994">1994년</option>
                    <option value="1993">1993년</option>
                    <option value="1992">1992년</option>
                    <option value="1991">1991년</option>
                    <option value="1990">1990년</option>
                    <option value="1989">1989년</option>
                    <option value="1988">1988년</option>
                    <option value="1987">1987년</option>
                    <option value="1986">1986년</option>
                    <option value="1985">1985년</option>
                    <option value="1984">1984년</option>
                    <option value="1983">1983년</option>
                    <option value="1982">1982년</option>
                    <option value="1981">1981년</option>
                    <option value="1980">1980년</option>
                    <option value="1979">1979년</option>
                    <option value="1978">1978년</option>
                    <option value="1977">1977년</option>
                    <option value="1976">1976년</option>
                    <option value="1975">1975년</option>
                    <option value="1974">1974년</option>
                    <option value="1973">1973년</option>
                    <option value="1972">1972년</option>
                    <option value="1971">1971년</option>
                    <option value="1970">1970년</option>
                  </CareerPeriodSelect>
                  <CareerPeriodSelect disabled="">
                    <option disabled="" value="-1">
                      월
                    </option>
                    <option value="0">1월</option>
                    <option value="1">2월</option>
                    <option value="2">3월</option>
                    <option value="3">4월</option>
                    <option value="4">5월</option>
                    <option value="5">6월</option>
                    <option value="6">7월</option>
                    <option value="7">8월</option>
                    <option value="8">9월</option>
                    <option value="9">10월</option>
                    <option value="10">11월</option>
                    <option value="11">12월</option>
                  </CareerPeriodSelect>
                </CareerPeriodSelectInner2>
              </CareerPeriodSelectBox2>
            </CareerPeriodSelectBox>
          </CareerSelectBox>
          <CareerCreateCheckboxBox>
            <CareerCreateCheckbox type="checkbox" id="is-current-career" />
            <CareerCreateCheckboxText htmlFor="is-current-career">
              재직 중
            </CareerCreateCheckboxText>
          </CareerCreateCheckboxBox>
          <CareerInputBox>
            <div className="part-title-box">
              <CareerCreateLabel>산업 분야</CareerCreateLabel>
            </div>
            <CareerCreateRelativeBox>
              <CareerCreateButtonBox type="button">
                <CareerCreateButtonText>
                  산업 분야를 입력해 주세요. (예: 이커머스)
                </CareerCreateButtonText>
                <CareerCreateButtonSvg
                  width="24"
                  height="24"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <g id="style=outline">
                      <path
                        id="arrowRight"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.5858 12L7.29289 20.2929C6.90237 20.6834 6.90237 21.3166 7.29289 21.7071C7.68342 22.0976 8.31658 22.0976 8.70711 21.7071L17.7071 12.7071C18.0976 12.3166 18.0976 11.6834 17.7071 11.2929L8.70711 2.29289C8.31658 1.90237 7.68342 1.90237 7.29289 2.29289C6.90237 2.68342 6.90237 3.31658 7.29289 3.70711L15.5858 12Z"
                      ></path>
                    </g>
                  </g>
                </CareerCreateButtonSvg>
              </CareerCreateButtonBox>
            </CareerCreateRelativeBox>
          </CareerInputBox>
          <CareerInputBox>
            <div className="part-title-box">
              <CareerCreateLabel>스킬</CareerCreateLabel>
            </div>
            <CareerCreateRelativeBox>
              <CareerCreateButtonBox type="button">
                <CareerCreateButtonText>
                  사용한 스킬을 입력해주세요.
                </CareerCreateButtonText>
                <CareerCreateButtonSvg
                  width="24"
                  height="24"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <g id="style=outline">
                      <path
                        id="arrowRight"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.5858 12L7.29289 20.2929C6.90237 20.6834 6.90237 21.3166 7.29289 21.7071C7.68342 22.0976 8.31658 22.0976 8.70711 21.7071L17.7071 12.7071C18.0976 12.3166 18.0976 11.6834 17.7071 11.2929L8.70711 2.29289C8.31658 1.90237 7.68342 1.90237 7.29289 2.29289C6.90237 2.68342 6.90237 3.31658 7.29289 3.70711L15.5858 12Z"
                      ></path>
                    </g>
                  </g>
                </CareerCreateButtonSvg>
              </CareerCreateButtonBox>
            </CareerCreateRelativeBox>
          </CareerInputBox>
          <CareerCreateTextareaBox>
            <CareerCreateTextareaTextBox>
              <CareerCreateLabel>어떤 일을 했나요?</CareerCreateLabel>
            </CareerCreateTextareaTextBox>
            <CareerCreateTextarea
              placeholder="담당한 업무, 프로젝트 및 활동을 입력해 주세요.

예:
• 쇼핑라이브 프론트 지면 개발
• 프론트 매시업 api 개발"
              onChange={handleDescriptionChange}
            ></CareerCreateTextarea>
            <CareerCreateTextareaCount>
              {shortDescriptionLength}/1000
            </CareerCreateTextareaCount>
          </CareerCreateTextareaBox>
          <CareerSelectBox>
            <div className="part-title-box">
              <CareerCreateLabel>링크 연결</CareerCreateLabel>
            </div>
            <CareerCreateInput
              type="text"
              placeholder="관련된 웹사이트가 있다면 URL을 추가해주세요."
              value=""
            />
          </CareerSelectBox>
        </CareerCreateBox>
      </div>
    </div>
  );
}
export default CareerCreate;
