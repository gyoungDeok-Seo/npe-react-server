import { useEffect, useState } from "react";
import styled from "styled-components";

const CareerSkillModalBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
`;
const CareerSkillModalContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-height: 30rem;
  display: flex;
`;
const CareerSkillModalTitle = styled.h4`
  margin-bottom: 0;
  font-size: 1.25rem;
`;
const CareerSkillModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const CareerSkillModalInputBox = styled.div`
  --tw-border-opacity: 1;
  border-color: rgb(226 232 240 / var(--tw-border-opacity));
  border-style: solid;
  border-width: 1px;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
`;
const CareerSkillModalInput = styled.input`
  width: 100%;
  display: block;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #fff;
  border-color: #94a3b8;
  border-width: 1px;
  border-radius: 0;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  --tw-shadow: 0 0 #0000;
  color: var(--color-text-bold, #0f172a);
  font-size: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  background-color: transparent;
  border-width: 0;
  border-radius: 0.25rem;
`;

const CareerSkillModalRelativeBox = styled.div`
  position: relative;
  width: 100%;
`;
const CareerSkillModalSearchBtn = styled.button`
  padding: 0.625rem;
`;
const CareerSkillModalSearchSvg = styled.svg`
  fill: #64748b;
  display: block;
`;
const CareerSkillModalSubTitle = styled.p`
  font-weight: 700;
  font-size: 0.875rem;
  margin-top: 1rem;
  margin-bottom: 0.75rem;
`;
const CareerSkillModalSkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
const CareerSkillModalSkillBtn = styled.button`
  --tw-text-opacity: 1;
  color: rgb(15 23 42 / var(--tw-text-opacity));
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  --tw-bg-opacity: 1;
  background-color: ${(props) =>
    props.selected ? "#334155" : "rgb(255 255 255)"};
  --tw-border-opacity: 1;
  border-color: ${(props) => (props.selected ? "#334155" : "rgb(226 232 240)")};
  border-style: solid;
  border-width: 1px;
  border-radius: 9999px;
`;
const CareerSkillModalSkillBtnText = styled.h3`
  color: ${(props) => (props.selected ? "#fff" : "#0f172a")};
  line-height: 1;
  font-weight: 700;
  font-size: 0.875rem;
  margin-top: 0;
  margin-bottom: 0;
`;
const CareerSkillModalBtnBox = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  -moz-column-gap: 1rem;
  column-gap: 1rem;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
`;

const CareerSkillModalSubmitBtn = styled.button`
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

const CareerSkillModalCancelBtn = styled(CareerSkillModalSubmitBtn)`
  color: #334155;
  background-color: #f1f5f9;
  border-color: #f1f5f9;
`;

const CareerSkillModalCraeteItemBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
const CareerSkillModalCraeteItem = styled.button`
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

const CareerSkillModalCraeteItemText = styled.h3`
  line-height: 1;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 0.875rem;
  font-weight: 700;
`;

const CareerSkillModalCraeteItemSvgBox = styled.div`
  display: block;
  border-width: 0;
  padding: 0;
`;

const CareerSkillModalCraeteItemSvg = styled.svg`
  fill: #fff;
  stroke: #fff;
  display: block;
`;

function CareerSkillModal({
  setCareerSkillModal,
  setCareerSkill,
  careerSkill,
}) {
  const [selectedSkills, setSelectedSkills] = useState(
    careerSkill ? careerSkill : []
  );

  const popularSkills = [
    "javascript",
    "React",
    "Github",
    "typescript",
    "css",
    "Java",
    "html",
    "Next.js",
    "MySQL",
    "python",
    "html5",
    "Node.js",
    "UI 디자인",
    "SpringBoot",
    "css3",
    "커뮤니케이션",
    "UX 디자인",
    "AWS",
    "Vue.js",
    "c언어",
    "Android",
    "React Query",
    "C++",
    "React Native",
    "Flutter",
    "c#",
    "Kotlin",
    "swift",
    "iOS",
    "Unity",
  ];

  const handleSkillClick = (skill) => {
    setSelectedSkills((prevSelectedSkills) =>
      prevSelectedSkills.includes(skill)
        ? prevSelectedSkills.filter((s) => s !== skill)
        : [...prevSelectedSkills, skill]
    );
  };

  const handleSubmitModal = () => {
    setCareerSkill(() => selectedSkills);
    setCareerSkillModal(false);
  };

  const handleCancelModal = () => {
    setCareerSkillModal(false);
  };

  return (
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
          }}
        >
          <CareerSkillModalBox>
            <CareerSkillModalContentBox>
              <CareerSkillModalTitle>
                내 스킬을 선택해 주세요.
              </CareerSkillModalTitle>
              {selectedSkills.length !== 0 && (
                <CareerSkillModalCraeteItemBox>
                  {selectedSkills.map((item) => (
                    <CareerSkillModalCraeteItem
                      key={item}
                      type="button"
                      onClick={() => handleSkillClick(item)}
                    >
                      <CareerSkillModalCraeteItemText>
                        {item}
                      </CareerSkillModalCraeteItemText>
                      <CareerSkillModalCraeteItemSvgBox role="presentation">
                        <CareerSkillModalCraeteItemSvg
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
                        </CareerSkillModalCraeteItemSvg>
                      </CareerSkillModalCraeteItemSvgBox>
                    </CareerSkillModalCraeteItem>
                  ))}
                </CareerSkillModalCraeteItemBox>
              )}

              <CareerSkillModalContent>
                <CareerSkillModalInputBox>
                  <CareerSkillModalInput
                    type="text"
                    placeholder="스킬을 검색해 보세요."
                    autoComplete="off"
                    value=""
                  />
                  <CareerSkillModalSearchBtn type="button">
                    <CareerSkillModalSearchSvg
                      width="24"
                      height="24"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <g id="style=outline">
                          <path
                            id="search"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.4551 9.84879C15.4551 12.9451 12.9451 15.4551 9.84879 15.4551C6.75253 15.4551 4.24251 12.9451 4.24251 9.84879C4.24251 6.75253 6.75253 4.24251 9.84879 4.24251C12.9451 4.24251 15.4551 6.75253 15.4551 9.84879ZM16.0841 14.6165C17.0962 13.2948 17.6976 11.642 17.6976 9.84879C17.6976 5.51402 14.1836 2 9.84879 2C5.51402 2 2 5.51402 2 9.84879C2 14.1836 5.51402 17.6976 9.84879 17.6976C11.6421 17.6976 13.295 17.0961 14.6167 16.0839C14.6435 16.119 14.6729 16.1527 14.705 16.1848L20.2269 21.7067C20.6175 22.0972 21.2506 22.0972 21.6412 21.7067L21.7069 21.641C22.0975 21.2504 22.0975 20.6173 21.7069 20.2267L16.185 14.7048C16.1529 14.6727 16.1192 14.6433 16.0841 14.6165Z"
                          ></path>
                        </g>
                      </g>
                    </CareerSkillModalSearchSvg>
                  </CareerSkillModalSearchBtn>
                </CareerSkillModalInputBox>
                <CareerSkillModalRelativeBox></CareerSkillModalRelativeBox>
                <div>
                  <CareerSkillModalSubTitle>인기 스킬</CareerSkillModalSubTitle>

                  <CareerSkillModalSkillList>
                    {popularSkills.map((skill) => (
                      <CareerSkillModalSkillBtn
                        key={skill}
                        type="button"
                        onClick={() => handleSkillClick(skill)}
                        selected={selectedSkills.includes(skill)}
                      >
                        <CareerSkillModalSkillBtnText
                          selected={selectedSkills.includes(skill)}
                        >
                          {skill}
                        </CareerSkillModalSkillBtnText>
                      </CareerSkillModalSkillBtn>
                    ))}
                  </CareerSkillModalSkillList>
                </div>
              </CareerSkillModalContent>
            </CareerSkillModalContentBox>
            <CareerSkillModalBtnBox>
              <CareerSkillModalCancelBtn
                type="button"
                onClick={handleCancelModal}
              >
                <span>취소</span>
              </CareerSkillModalCancelBtn>
              <CareerSkillModalSubmitBtn
                type="button"
                onClick={handleSubmitModal}
              >
                <span>확인</span>
              </CareerSkillModalSubmitBtn>
            </CareerSkillModalBtnBox>
          </CareerSkillModalBox>
        </div>
      </div>
    </div>
  );
}

export default CareerSkillModal;
