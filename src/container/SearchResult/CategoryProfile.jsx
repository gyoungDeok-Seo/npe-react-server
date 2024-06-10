import ResultProfile from "../../components/SearchResult/ResultBox/ResultProfile";
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
import { useState } from "react";

function CategoryProfile() {
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
                    프로필 64
                  </SearchResultProfilesTitle>
                </SearchResultProfilesTitleBar>
                <div>
                  <SearchResultProfilesContentBox>
                    {[1, 2, 3].map(() => (
                      <ResultProfile />
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
export default CategoryProfile;
