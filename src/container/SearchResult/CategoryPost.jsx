import { useState } from "react";
import ResultPost from "../../components/SearchResult/ResultBox/ResultPost";
import {
  SearchResultMainContent,
  SearchResultProfilesBox,
  SearchResultProfilesContentBox,
  SearchResultProfilesFlexBox,
  SearchResultProfilesInner,
  SearchResultProfilesTitle,
  SearchResultProfilesTitleBar,
} from "./ResultBox";
import NoneResult from "../../components/SearchResult/ResultBox/NoneResult";

function CategoryPost() {
  const [isResult, setIsResult] = useState(true);

  return (
    <SearchResultMainContent>
      <SearchResultProfilesBox>
        <SearchResultProfilesInner>
          <SearchResultProfilesFlexBox>
            {isResult ? (
              <>
                <SearchResultProfilesTitleBar>
                  <SearchResultProfilesTitle>
                    게시물 1,883
                  </SearchResultProfilesTitle>
                </SearchResultProfilesTitleBar>
                <div>
                  <SearchResultProfilesContentBox>
                    {[1, 2, 3].map(() => (
                      <ResultPost />
                    ))}
                  </SearchResultProfilesContentBox>
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
export default CategoryPost;
