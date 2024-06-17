import styled from "styled-components";
import { CreateQnaPilsu } from "../../../container/CreateQna/CategoryAndTag";
import { useEffect, useRef, useState } from "react";
import { skillList } from "../../../service/dummyData";
import { useDispatch, useSelector } from "react-redux";
import { setTags } from "../../../redux/createQna";

const CreateQnaTagInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const CreateQnaTagLabelBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
`;
const CreateQnaTagLabel = styled.label`
  font-weight: 700;
  font-size: 0.875rem;
  margin-bottom: 0;
`;
const CreateQnaTagLabelCount = styled.p`
  color: #64748b;
  font-weight: 400;
`;
const CreateQnaTagInsertBox = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  width: 100%;
  position: relative;
  padding: 0.75rem;
  background-color: #fff;
  border-color: #e2e8f0;
  border-style: solid;
  border-width: 1px;
  border-radius: 0.25rem;
`;
const CreateQnaTagInsertIcon = styled.span`
  color: #0f172a;
  font-size: 1rem;
`;
const CreateQnaTagInput = styled.input`
  color: #0f172a;
  padding: 0;
  border-width: 0;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #fff;
  border-color: #94a3b8;
  border-radius: 0;
  font-size: 1rem;
  line-height: 1.5rem;
  outline: none;
`;
const SkillListBox = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
`;
const SkillList = styled.ul`
  position: absolute;
  top: 0;
  width: 100%;
  border-radius: 0.25rem;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.2);
  max-height: 210px;
  overflow-y: scroll;
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

const AddTag = () => {
  const createQna = useSelector((state) => state.createQna);
  const dispatch = useDispatch();
  const [tag, setTag] = useState("");
  const [tagLength, setTagLength] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearch] = useState([]);
  const [showBox, setShowBox] = useState(false);
  const skillListRef = useRef(null);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleTagChange = (e) => {
    const value = e.target.value;
    const valueLength = value.length;
    setTagLength(valueLength);
    if (valueLength <= 35) {
      setTag(value);
    }
    const searchWord = value.trim().toLowerCase();
    const searching = searchWord
      ? skillList.filter((item) => item.id.toLowerCase().startsWith(searchWord))
      : [];
    setSearch(searching);
    setShowBox(searching.length > 0 || valueLength > 0); // Show box if searching or input is not empty
  };

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      if (createQna.tags.length >= 5) return;
      const trimmedTag = tag.trim();
      if (trimmedTag && !createQna.tags.some((t) => t.tagName === trimmedTag)) {
        dispatch(setTags([...createQna.tags, { tagName: trimmedTag }]));
      }
      setTag("");
      setTagLength(0);
    }
  };

  const handleSearch = (e) => {
    if (createQna.tags.length >= 5) {
      setShowBox(false);
      return;
    }
    const selectedTag = e.target.innerText.trim();
    if (!createQna.tags.some((t) => t.tagName === selectedTag)) {
      dispatch(setTags([...createQna.tags, { tagName: selectedTag }]));
    }
    setShowBox(false);
    setTag("");
    setTagLength(0);
  };

  const handleClickOutside = (event) => {
    if (skillListRef.current && !skillListRef.current.contains(event.target)) {
      setShowBox(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <CreateQnaTagInner>
      <CreateQnaTagLabelBox>
        <CreateQnaTagLabel htmlFor="hashtag">
          태그 <CreateQnaPilsu>(필수)</CreateQnaPilsu>
        </CreateQnaTagLabel>
        <CreateQnaTagLabelCount>{tagLength} / 35</CreateQnaTagLabelCount>
      </CreateQnaTagLabelBox>
      <CreateQnaTagInsertBox
        onFocus={handleFocus}
        onBlur={handleBlur}
        isFocused={isFocused}
      >
        <CreateQnaTagInsertIcon>#</CreateQnaTagInsertIcon>
        <CreateQnaTagInput
          id="hashtag"
          type="text"
          placeholder="태그를 적어주세요. (예: react, 이직)"
          autoComplete="off"
          maxLength={35}
          name="customHashTag"
          value={tag}
          onChange={handleTagChange}
          onKeyDown={handleEnter}
        />
      </CreateQnaTagInsertBox>
      <SkillListBox ref={skillListRef}>
        {showBox && (
          <SkillList>
            {search.map((item, index) => (
              <SkillItem key={index} onClick={handleSearch}>
                {item.id}
              </SkillItem>
            ))}
          </SkillList>
        )}
      </SkillListBox>
    </CreateQnaTagInner>
  );
}

export default AddTag;