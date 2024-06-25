import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { industryList } from "../../service/dummyData";
import { useDispatch, useSelector } from "react-redux";
import { setIndustry } from "../../redux/createCareer";

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
  color: rgb(15 23 42 / 1);
`;

const IndustryModalBtnBox = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  -moz-column-gap: 1rem;
  column-gap: 1rem;
  padding-bottom: 1.25rem;
  background-color: rgb(255 255 255 /1);
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
  color: rgb(255 255 255 / 1);
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
function IndustryModal({ setIndustryModal }) {
  const createCareer = useSelector((state) => state.createCareer);
  const dispatch = useDispatch();
  const [checkedIndustries, setCheckedIndustries] = useState(
    createCareer.careerIndustries || []
  );
  const checkboxRefs = useRef({});

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    const industry = industryList.find(
      (industry) => industry.industryId === parseInt(id)
    );

    setCheckedIndustries((prevState) => {
      if (checked) {
        return [...prevState, industry];
      } else {
        return prevState.filter(
          (item) => item.industryId !== industry.industryId
        );
      }
    });
  };

  const handleIndustryItemClick = (industry) => {
    setCheckedIndustries((prevState) => {
      return prevState.filter(
        (item) => item.industryId !== industry.industryId
      );
    });

    if (checkboxRefs.current[industry.industryId]) {
      checkboxRefs.current[industry.industryId].checked = false;
    }
  };

  const handleSubmitModal = () => {
    dispatch(setIndustry(checkedIndustries));
    setIndustryModal(false);
  };

  const handleCancelModal = () => {
    setIndustryModal(false);
  };

  useEffect(() => {
    setCheckedIndustries(createCareer.careerIndustries);
  }, [createCareer.careerIndustries]);

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
                        key={item.industryId}
                        type="button"
                        onClick={() => handleIndustryItemClick(item)}
                      >
                        <IndustryModalCraeteItemText>
                          {item.industryName}
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
                  {industryList.map((item) => (
                    <IndustryModalCheckBoxItem key={item.industryId}>
                      <IndustryModalCheckBox
                        type="checkbox"
                        id={item.industryId.toString()}
                        ref={(ref) =>
                          (checkboxRefs.current[item.industryId] = ref)
                        }
                        onChange={handleCheckboxChange}
                        checked={checkedIndustries.some(
                          (industry) => industry.industryId === item.industryId
                        )}
                      />
                      <IndustryModalLabel htmlFor={item.industryId.toString()}>
                        {item.industryName}
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
