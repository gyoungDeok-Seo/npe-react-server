import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setSkills } from "../../redux/createSkills";

const CareerSkillModalInputBox = styled.div`
  border-color: rgb(226 232 240 / 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  outline: ${(props) => (props.isFocused ? "2px solid #64748b" : "")};
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
  color: #0f172a;
  font-size: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  background-color: transparent;
  border-width: 0;
  border-radius: 0.25rem;
  outline: none;
  &::placeholder {
    font-weight: 500;
    color: #9da7b1;
  }
`;

const CareerSkillModalSearchBtn = styled.button`
  padding: 0.625rem;
`;
const CareerSkillModalSearchSvg = styled.svg`
  fill: #64748b;
  display: block;
`;

const SkillListBox = styled.div`
  position: relative;
  width: 100%;
`;
const SkillList = styled.ul`
  position: absolute;
  top: 0;
  width: 100%;
  border-radius: 0.25rem;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.2);
  height: 210px;
  overflow-y: auto;
  font-size: 14.5px;
  border: 1px solid #c3cad8;
  background-color: #fff;
`;
const SkillItem = styled.li`
  padding: 15px;
  width: 100%;
  color: #000;
  font-weight: 500;
  &:hover {
    background-color: #edf0f5;
  }
`;

const SearchNothing = styled.p`
  color: rgb(100 116 139 / 1);
  font-size: 0.875rem;
  text-align: center;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  --tw-translate-y: -50%;
  --tw-translate-x: -50%;
  top: 50%;
  left: 50%;
  position: absolute;
`;

function SkillSearchInput() {
  const createSkills = useSelector((state) => state.createSkills);
  const dispatch = useDispatch();
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState([]);
  const [showBox, setShowBox] = useState(false);

  useEffect(() => {
    const searchSkillsFetch = async (keyword) => {
      const response = await fetch(
        `http://localhost:10000/members/api/skillSearch?keyword=${keyword}`
      );
      let data = await response.json();
      data = data.map((search) => ({
        id: search.id,
        skillName: search.skillName,
      }));

      inputValue && setSearch(data);
    };

    if (inputValue) {
      searchSkillsFetch(inputValue);
    }
  }, [inputValue]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleClear = () => {
    setInputValue("");
    setIsFocused(false);
    setShowBox(false);
  };

  const searchSkills = (e) => {
    setInputValue(e.target.value);
    setShowBox(true);
  };

  const handleSearch = (item) => {
    const skillExists = createSkills.skills.some(
      (skill) => skill.id === item.id
    );

    if (!skillExists) {
      const updatedSkills = [...createSkills.skills, item];
      dispatch(setSkills(updatedSkills));
    }

    setShowBox(false);
    setInputValue("");
  };
  return (
    <>
      <CareerSkillModalInputBox
        onFocus={handleFocus}
        onBlur={handleBlur}
        isFocused={isFocused}
      >
        <CareerSkillModalInput
          type="text"
          placeholder="스킬을 검색해 보세요."
          autoComplete="off"
          value={inputValue}
          onChange={searchSkills}
        />
        {isFocused ? (
          <CareerSkillModalSearchBtn
            type="button"
            name="empty"
            onClick={handleClear}
          >
            <CareerSkillModalSearchSvg
              width="24"
              height="24"
              strokeWidth="0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <g id="style=solid">
                  <path
                    id="Vector"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22 12C22 13.3132 21.7413 14.6136 21.2388 15.8268C20.7362 17.0401 19.9997 18.1425 19.0711 19.0711C18.1425 19.9997 17.0401 20.7362 15.8268 21.2388C14.6136 21.7413 13.3132 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C4.00035 18.1425 3.26375 17.0401 2.7612 15.8268C2.25866 14.6136 2 13.3132 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2C14.6522 2 17.1957 3.05357 19.0711 4.92893C20.9464 6.8043 22 9.34784 22 12ZM9.70711 8.29289C9.31658 7.90237 8.68342 7.90237 8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711L10.5858 12L8.29289 14.2929C7.90237 14.6834 7.90237 15.3166 8.29289 15.7071C8.68342 16.0976 9.31658 16.0976 9.70711 15.7071L12 13.4142L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L13.4142 12L15.7071 9.70711C16.0976 9.31658 16.0976 8.68342 15.7071 8.29289C15.3166 7.90237 14.6834 7.90237 14.2929 8.29289L12 10.5858L9.70711 8.29289Z"
                  ></path>
                </g>
              </g>
            </CareerSkillModalSearchSvg>
          </CareerSkillModalSearchBtn>
        ) : (
          <CareerSkillModalSearchBtn type="button" name="search">
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
        )}
      </CareerSkillModalInputBox>
      <SkillListBox>
        {showBox && (
          <SkillList>
            {search.length > 0 ? (
              <>
                {search.map((item) => (
                  <SkillItem key={item.id} onClick={() => handleSearch(item)}>
                    {item.skillName}
                  </SkillItem>
                ))}
              </>
            ) : (
              <SearchNothing>검색 결과가 없습니다.</SearchNothing>
            )}
          </SkillList>
        )}
      </SkillListBox>
    </>
  );
}

export default SkillSearchInput;
