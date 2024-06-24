import { styled } from "styled-components";
import SearchTagHeadLine from "./SearchTagHeadLine";
import SearchTagQuestion from "./SearchTagQuestion";
import SearchTagQuestionNone from "./SearchTagQuestionNone";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { tagQnaListApi } from "../../../service/qnaApi";

const SearchTagWrap = styled.div`
  padding-bottom: 5rem;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  width: 1024px;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  -moz-column-gap: 3rem;
  column-gap: 3rem;
  row-gap: 2rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

const SearchTagContainer = styled.div`
  padding-top: 2rem;
  grid-column: span 10 / span 10;
  grid-column-start: 2;
`;
function SearchTagComponent() {
  const { pathname } = useLocation();
  const match = pathname.split("/")[3];
  const [qnaList, setQnaList] = useState([]);
  const [pages, setPages] = useState(1); // 현재 페이지 번호
  const { data, isLoading, isError } = useQuery(
    ["searchTag", match, pages],
    () => tagQnaListApi(match, pages),
    {
      enabled: !!match,
    }
  );

  const handleScroll = () => {
    const { scrollTop, offsetHeight } = document.documentElement;
    const innerHeight = window.innerHeight;
    if (innerHeight + scrollTop >= offsetHeight) {
      setPages((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [match, qnaList]);

  useEffect(() => {
    if (data) {
      setQnaList((prevQnaList) => [...prevQnaList, ...data.list]);
    }
  }, [data]);

  return (
    <SearchTagWrap>
      <SearchTagContainer>
        <SearchTagHeadLine listCount={data?.listCount} />
        {qnaList?.length !== 0 ? (
          qnaList?.map((question, index) => (
            <SearchTagQuestion key={index} question={question} index={index} />
          ))
        ) : (
          <SearchTagQuestionNone />
        )}
      </SearchTagContainer>
    </SearchTagWrap>
  );
}

export default SearchTagComponent;
