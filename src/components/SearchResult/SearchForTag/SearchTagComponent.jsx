import { styled } from "styled-components";
import SearchTagHeadLine from "./SearchTagHeadLine";
import SearchTagQuestion from "./SearchTagQuestion";
import SearchTagQuestionNone from "./SearchTagQuestionNone";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useLocation } from "react-router-dom";

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

  return (
    <SearchTagWrap>
      <SearchTagContainer>
        {/* {!isLoading && (
          <>
            <SearchTagHeadLine />
            {qnaListData ? (
              qnaListData?.list.map((question, index) => (
                <SearchTagQuestion
                  key={index}
                  question={question}
                  index={index}
                />
              ))
            ) : (
              <SearchTagQuestionNone />
            )}
          </>
        )} */}
      </SearchTagContainer>
    </SearchTagWrap>
  );
}

export default SearchTagComponent;
