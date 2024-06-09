import styled from "styled-components";
import ResultQna from "../../components/SearchResult/ResultBox/ResultQna";
import {
  SearchResultMainContent,
  SearchResultProfilesBox,
  SearchResultProfilesFlexBox,
  SearchResultProfilesInner,
  SearchResultProfilesTitle,
  SearchResultProfilesTitleBar,
} from "./ResultBox";
import { Link } from "react-router-dom";
import NoneResult from "../../components/SearchResult/ResultBox/NoneResult";
import { useState } from "react";

const SearchResultQnaContentBox = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

const CategoryQnaTagBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const CategoryQnaTagLink = styled(Link)`
  display: flex;
  align-items: center;
  background-color: #f8fafc;
  border-radius: 0.5rem;
  gap: 1.5rem;
  padding: 1.4rem;
`;

const CategoryQnaTag = styled.div`
  display: flex;
  flex: 1 1 0%;
  align-items: center;
  gap: 0.25rem;
`;

const CategoryQnaTagName = styled.span`
  color: #0f172a;
  font-weight: 700;
  font-size: 1.125rem;
  word-break: break-all;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

const CategoryQnaTagText = styled.span`
  color: #64748b;
  font-size: 0.875rem;
  flex: none;
`;

function CategoryQna() {
  const [isResult, setIsResult] = useState(true);

  return (
    <SearchResultMainContent>
      <SearchResultProfilesBox>
        <SearchResultProfilesInner>
          <SearchResultProfilesFlexBox>
            {isResult ? (
              <>
                <CategoryQnaTagBox>
                  <CategoryQnaTagLink to="#">
                    <CategoryQnaTag>
                      <CategoryQnaTagName>#검색</CategoryQnaTagName>
                      <CategoryQnaTagText>·</CategoryQnaTagText>
                      <CategoryQnaTagText>질문 3</CategoryQnaTagText>
                    </CategoryQnaTag>
                  </CategoryQnaTagLink>
                </CategoryQnaTagBox>
                <SearchResultProfilesTitleBar>
                  <SearchResultProfilesTitle>
                    현직자 Q&A 681
                  </SearchResultProfilesTitle>
                </SearchResultProfilesTitleBar>
                <div>
                  <SearchResultQnaContentBox>
                    <>
                      {[1, 2, 3].map(() => (
                        <ResultQna />
                      ))}{" "}
                    </>
                  </SearchResultQnaContentBox>
                </div>
              </>
            ) : (
              <NoneResult />
            )}
          </SearchResultProfilesFlexBox>
        </SearchResultProfilesInner>
      </SearchResultProfilesBox>
    </SearchResultMainContent>
  );
}
export default CategoryQna;
