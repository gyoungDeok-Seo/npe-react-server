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

function CategoryProfile() {
  return (
    <SearchResultMainContent>
      <SearchResultProfilesBox>
        <SearchResultProfilesInner>
          <SearchResultProfilesFlexBox>
            <SearchResultProfilesTitleBar>
              <SearchResultProfilesTitle>프로필 64</SearchResultProfilesTitle>
            </SearchResultProfilesTitleBar>
            <div>
              <SearchResultProfilesContentBox>
                {[1, 2, 3].map(() => (
                  <ResultProfile />
                ))}
              </SearchResultProfilesContentBox>
            </div>
          </SearchResultProfilesFlexBox>
        </SearchResultProfilesInner>
      </SearchResultProfilesBox>
    </SearchResultMainContent>
  );
}
export default CategoryProfile;
