import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

const SearchTagHeaderBox = styled.div`
  padding: 1.5rem;
  border-color: var(--color-slate-200, #e2e8f0);
  border-style: solid;
  border-width: 1px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  margin-bottom: 1rem;
`;

const SearchTagHeaderItems = styled.div`
  gap: 0.25rem;
  flex-direction: column;
  display: flex;
`;

const SearchTagTitle = styled.h1`
  color: var(--color-text-bold, #0f172a);
  font-size: 1.875rem;
  margin: 0;
`;

const QuestionBox = styled.div`
  color: var(--color-text-subtler, #64748b);
  gap: 0.25rem;
  align-items: center;
  display: flex;
`;

const Question = styled.span`
  font-size: 0.75rem;
`;

const QuestionCount = styled.span`
  font-weight: 700;
  font-size: 0.75rem;
`;

const TagSearchIntroBox = styled.div`
  position: relative;
`;

const TagSearchIntroSvg = styled.svg`
  fill: var(--color-text-subtler, #64748b);
  width: 1rem;
  height: 1rem;
  display: block;
  &:hover + div {
    opacity: 1;
    left: 1.5rem;
    visibility: visible;
  }
`;

const TagSearchIntroItems = styled.div`
  transition-duration: 0.3s;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  align-items: center;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  --tw-translate-y: -50%;
  display: flex;
  z-index: 1;
  top: 50%;
  left: 1rem;
  position: absolute;
  visibility: hidden;
`;

const TooltipArrow = styled.div`
  height: 0;
  width: 0;
  border-top: 4px solid transparent;
  --tw-border-opacity: 1;
  border-right: 8px solid rgb(15 23 42 / var(--tw-border-opacity));
  border-bottom: 4px solid transparent;
  border-left: 0 solid transparent;
`;

const TooltipContents = styled.div`
  color: var(--color-white, #fff);
  font-weight: 700;
  font-size: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  background-color: var(--color-slate-900, #0f172a);
  border-radius: 0.25rem;
  white-space: nowrap;
  display: block;
`;

function SearchTagHeadLine({listCount}) {
  const { tag } = useParams();
  return (
    <SearchTagHeaderBox>
      <SearchTagHeaderItems>
        <SearchTagTitle>#{tag}</SearchTagTitle>
        <QuestionBox>
          <div>
            <Question>질문 </Question>
            <QuestionCount>{listCount}</QuestionCount>
          </div>
          <TagSearchIntroBox>
            <TagSearchIntroSvg
              width="24"
              height="24"
              strokeWidth="0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <g id="style=outline">
                  <path
                    id="Icon (Stroke)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11 8C11 7.44772 11.4477 7 12 7H12.01C12.5623 7 13.01 7.44772 13.01 8C13.01 8.55228 12.5623 9 12.01 9H12C11.4477 9 11 8.55228 11 8ZM10 12C10 11.4477 10.4477 11 11 11H12C12.5523 11 13 11.4477 13 12V15C13.5523 15 14 15.4477 14 16C14 16.5523 13.5523 17 13 17H12C11.4477 17 11 16.5523 11 16V13C10.4477 13 10 12.5523 10 12Z"
                  ></path>
                </g>
              </g>
            </TagSearchIntroSvg>
            <TagSearchIntroItems>
              <TooltipArrow></TooltipArrow>
              <TooltipContents>
                해시태그 없이 키워드만 일치하는 질문은 개수에 포함되지 않아요.
              </TooltipContents>
            </TagSearchIntroItems>
          </TagSearchIntroBox>
        </QuestionBox>
      </SearchTagHeaderItems>
    </SearchTagHeaderBox>
  );
}
export default SearchTagHeadLine;
