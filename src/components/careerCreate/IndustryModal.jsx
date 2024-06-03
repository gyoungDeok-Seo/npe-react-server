import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const IndustryModalBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 2rem;
`;

const IndustryModalContent = styled.div`
  display: flex;
  min-height: 30rem;
  flex-direction: column;
  gap: 1.5rem;
`;

const IndustryModalTitle = styled.h4`
  margin-bottom: 0;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.5;
`;
const IndustryModalCheckBoxList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const IndustryModalCheckBoxItem = styled.div`
  display: flex;
  gap: 0.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 1rem;
`;

const IndustryModalCheckBox = styled.input`
  color: #334155;
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
  border-color: #cbd5e1;
  background-color: #fff;
  &:checked {
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
    background-color: #334155;
    border-color: transparent;
    background-color: currentColor;
  }
`;

const IndustryModalLabel = styled.label`
  margin-bottom: 0;
  cursor: pointer;
  width: 100%;
  padding-left: 0.5rem;
  font-size: 0.875rem;
  font-weight: 400;
  --tw-text-opacity: 1;
  color: rgb(15 23 42 / var(--tw-text-opacity));
`;

const IndustryModalBtnBox = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  -moz-column-gap: 1rem;
  column-gap: 1rem;
  --tw-bg-opacity: 1;
  padding-bottom: 1.25rem;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
`;

const IndustryModalSubmitBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  border-radius: 0.25rem;
  border-width: 1px;
  border-style: solid;
  border-color: #334155;
  background-color: #334155;
  padding-left: 1rem;
  padding-bottom: 0.75rem;
  padding-right: 1rem;
  padding-top: 0.75rem;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
`;

const IndustryModalCancelBtn = styled(IndustryModalSubmitBtn)`
  color: #334155;
  background-color: #f1f5f9;
  border-color: #f1f5f9;
`;

const IndustryModalCraeteItemBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
const IndustryModalCraeteItem = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: -moz-fit-content;
  width: fit-content;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  background-color: #334155;
  border-color: #334155;
  border-style: solid;
  border-width: 1px;
  border-radius: 9999px;
`;

const IndustryModalCraeteItemText = styled.h3`
  line-height: 1;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 0.875rem;
  font-weight: 700;
`;

const IndustryModalCraeteItemSvgBox = styled.div`
  display: block;
  border-width: 0;
  padding: 0;
`;

const IndustryModalCraeteItemSvg = styled.svg`
  fill: #fff;
  stroke: #fff;
  display: block;
`;

function IndustryModal({ setIndustryModal, setIndustry, industry }) {
  const [checkedIndustries, setCheckedIndustries] = useState(
    industry ? industry : []
  );
  const checkboxRefs = useRef({});

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    const label = industryList.find((industry) => industry.id === id)?.label;

    setCheckedIndustries((prevState) => {
      if (checked) return [...prevState, { id, label }];
      else return prevState.filter((item) => item.id !== id);
    });
  };

  const handleIndustryItemClick = (id) => {
    setCheckedIndustries((prevState) =>
      prevState.filter((item) => item.id !== id)
    );

    if (checkboxRefs.current[id]) {
      checkboxRefs.current[id].checked = false;
    }
  };

  const handleSubmitModal = () => {
    setIndustry(() => checkedIndustries);
    setIndustryModal(false);
  };

  const handleCancelModal = () => {
    setIndustryModal(false);
  };
  useEffect(() => {
    console.log(industry);
  }, [industry]);
  const industryList = [
    { id: "industry-checkbox-1", label: "B2B" },
    { id: "industry-checkbox-2", label: "SaaS" },
    { id: "industry-checkbox-3", label: "플랫폼" },
    { id: "industry-checkbox-4", label: "이커머스" },
    { id: "industry-checkbox-5", label: "커뮤니티 / 소셜네트워킹" },
    { id: "industry-checkbox-6", label: "HR" },
    { id: "industry-checkbox-7", label: "금융 / 핀테크" },
    { id: "industry-checkbox-8", label: "교육 / 에듀테크" },
    { id: "industry-checkbox-9", label: "여행" },
    { id: "industry-checkbox-10", label: "콘텐츠" },
    { id: "industry-checkbox-11", label: "라이프스타일" },
    { id: "industry-checkbox-12", label: "의료 / 헬스케어" },
    { id: "industry-checkbox-13", label: "패션 / 뷰티" },
    { id: "industry-checkbox-14", label: "블록체인" },
    { id: "industry-checkbox-15", label: "AI" },
    { id: "industry-checkbox-16", label: "모빌리티 / 교통" },
    { id: "industry-checkbox-17", label: "게임" },
    { id: "industry-checkbox-18", label: "식음료" },
    { id: "industry-checkbox-19", label: "반려동물" },
    { id: "industry-checkbox-20", label: "유아" },
    { id: "industry-checkbox-21", label: "스포츠" },
    { id: "industry-checkbox-22", label: "법률" },
    { id: "industry-checkbox-23", label: "광고 / 마케팅" },
    { id: "industry-checkbox-24", label: "주거 / 부동산 / 프롭테크" },
    { id: "industry-checkbox-25", label: "보안" },
    { id: "industry-checkbox-26", label: "제조" },
    { id: "industry-checkbox-27", label: "방송 / 엔터테인먼트" },
    { id: "industry-checkbox-28", label: "농축수산업 / 애그테크" },
    { id: "industry-checkbox-29", label: "전자제품" },
    { id: "industry-checkbox-30", label: "정부 / 공공" },
    { id: "industry-checkbox-31", label: "건설" },
    { id: "industry-checkbox-32", label: "환경 / 에너지" },
    { id: "industry-checkbox-33", label: "물류 / 유통" },
    { id: "industry-checkbox-34", label: "반도체" },
    { id: "industry-checkbox-35", label: "컨설팅" },
  ];

  return (
    <>
      <div>
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            overflow: "auto",
            zIndex: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            tabIndex="-1"
            role="dialog"
            aria-modal="true"
            style={{
              position: "static",
              inset: "40px",
              border: "0px",
              background: "rgb(255, 255, 255)",
              overflow: "auto",
              borderRadius: "4px",
              outline: "none",
              padding: "0px",
              maxWidth: "500px",
              width: "560px",
              maxHeight: "calc(100% - 48px)",
              height: "640px",
            }}
          >
            <IndustryModalBox>
              <IndustryModalContent>
                <IndustryModalTitle>
                  산업 분야를 선택해 주세요
                </IndustryModalTitle>
                {checkedIndustries.length !== 0 && (
                  <IndustryModalCraeteItemBox>
                    {checkedIndustries.map((item) => (
                      <IndustryModalCraeteItem
                        key={item.id}
                        type="button"
                        onClick={() => handleIndustryItemClick(item.id)}
                      >
                        <IndustryModalCraeteItemText>
                          {item.label}
                        </IndustryModalCraeteItemText>
                        <IndustryModalCraeteItemSvgBox role="presentation">
                          <IndustryModalCraeteItemSvg
                            width="16"
                            height="16"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g>
                              <g id="style=solid">
                                <path
                                  id="Vector (Stroke)"
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                                ></path>
                              </g>
                            </g>
                          </IndustryModalCraeteItemSvg>
                        </IndustryModalCraeteItemSvgBox>
                      </IndustryModalCraeteItem>
                    ))}
                  </IndustryModalCraeteItemBox>
                )}
                <IndustryModalCheckBoxList>
                  {industryList.map((industryItem) => (
                    <IndustryModalCheckBoxItem key={industryItem.id}>
                      <IndustryModalCheckBox
                        type="checkbox"
                        id={industryItem.id}
                        ref={(ref) =>
                          (checkboxRefs.current[industryItem.id] = ref)
                        }
                        onChange={handleCheckboxChange}
                        checked={
                          checkedIndustries.find(
                            (item) => item.id === industryItem.id
                          ) !== undefined
                        }
                      />
                      <IndustryModalLabel htmlFor={industryItem.id}>
                        {industryItem.label}
                      </IndustryModalLabel>
                    </IndustryModalCheckBoxItem>
                  ))}
                </IndustryModalCheckBoxList>
              </IndustryModalContent>
              <IndustryModalBtnBox>
                <IndustryModalCancelBtn
                  type="button"
                  onClick={handleCancelModal}
                >
                  <span>취소</span>
                </IndustryModalCancelBtn>
                <IndustryModalSubmitBtn
                  type="button"
                  onClick={handleSubmitModal}
                >
                  <span>확인</span>
                </IndustryModalSubmitBtn>
              </IndustryModalBtnBox>
            </IndustryModalBox>
          </div>
        </div>
      </div>
    </>
  );
}
export default IndustryModal;
