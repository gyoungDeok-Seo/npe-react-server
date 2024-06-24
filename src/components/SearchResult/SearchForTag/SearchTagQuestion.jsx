import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { timeForToday } from "../../profiles/QnaActivity/QnaActivityAnswer";

const QuestionLink = styled(Link)`
  padding: 1rem;
  border-color: #e2e8f0;
  border-style: solid;
  border-width: 0;
  border-bottom-width: 1px;
  flex-direction: column;
  min-width: 0;
  display: flex;
  &:hover {
    background-color: #f8fafc;
  }
`;

const QuestionInfo = styled.div`
  gap: 0.25rem;
  align-items: center;
  display: flex;
  margin-bottom: 0.875rem;
`;

const AnswerSvg = styled.svg`
  fill: #64748b;
  width: 1rem;
  height: 1rem;
`;

const AnswerWrierIntro = styled.p`
  color: #64748b;
  font-weight: 700;
  font-size: 0.75rem;
  word-break: break-all;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

const QuestionHeaderBox = styled.p`
  font-weight: 600;
  font-size: 1.25rem;
  -webkit-line-clamp: 2;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  margin-bottom: 0.25rem;
`;

const QuestionHeaderText = styled.span`
  color: #0f172a;
`;

const QuestionContent = styled.p`
  color: #0f172a;
  font-size: 0.875rem;
  -webkit-line-clamp: 2;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  margin-bottom: 0.375rem;
`;

const TagAndCategoryBox = styled.div`
  row-gap: 0.25rem;
  column-gap: 0.625rem;
  align-items: center;
  flex-wrap: wrap;
  display: flex;
  margin-bottom: 1rem;
`;

const CategoryBox = styled.div`
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background-color: #f1f5f9;
  border-radius: 0.25rem;
  gap: 0.375rem;
  align-items: center;
  width: fit-content;
  display: flex;
`;

const CategorySvg = styled.svg`
  fill: #16a34a;
  display: block;
`;

const CategoryText = styled.p`
  color: #64748b;
  line-height: 1;
  font-weight: 700;
  font-size: 0.75rem;
`;

const TagText = styled.p`
  color: #64748b;
  font-size: 0.875rem;
`;

const StateCountBox = styled.div`
  gap: 0.625rem;
  display: flex;
`;

const AnswerCount = styled.p`
  color: #0f172a;
  font-size: 0.75rem;
`;

const ReplyCount = styled.p`
  color: #64748b;
  font-size: 0.75rem;
`;

const HitsCount = styled.p`
  color: #64748b;
  font-size: 0.75rem;
  margin-left: auto;
`;

function SearchTagQuestion({ question, index }) {
  return (
    <QuestionLink to={`/qnas/detail/${question?.id}`} key={index}>
      <QuestionInfo>
        <AnswerSvg
          width="24"
          height="24"
          strokeWidth="0"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <g id="style=outline">
              {/* {question.type === "answer" ? (
                                <path
                                    id="Vector (Stroke)"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M5 5C4.73478 5 4.48043 5.10536 4.29289 5.29289C4.10536 5.48043 4 5.73478 4 6V14C4 14.2652 4.10536 14.5196 4.29289 14.7071C4.48043 14.8946 4.73478 15 5 15H9C9.55228 15 10 15.4477 10 16V18.5858L13.2929 15.2929C13.4804 15.1054 13.7348 15 14 15H19C19.2652 15 19.5196 14.8946 19.7071 14.7071C19.8946 14.5196 20 14.2652 20 14V6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5H5ZM2.87868 3.87868C3.44129 3.31607 4.20435 3 5 3H19C19.7957 3 20.5587 3.31607 21.1213 3.87868C21.6839 4.44129 22 5.20435 22 6V14C22 14.7957 21.6839 15.5587 21.1213 16.1213C20.5587 16.6839 19.7957 17 19 17H14.4142L9.70711 21.7071C9.42111 21.9931 8.99099 22.0787 8.61732 21.9239C8.24364 21.7691 8 21.4045 8 21V17H5C4.20435 17 3.44129 16.6839 2.87868 16.1213C2.31607 15.5587 2 14.7956 2 14V6C2 5.20435 2.31607 4.44129 2.87868 3.87868ZM7 10C7 9.44772 7.44772 9 8 9H8.01C8.56228 9 9.01 9.44772 9.01 10C9.01 10.5523 8.56228 11 8.01 11H8C7.44772 11 7 10.5523 7 10ZM11 10C11 9.44772 11.4477 9 12 9H12.01C12.5623 9 13.01 9.44772 13.01 10C13.01 10.5523 12.5623 11 12.01 11H12C11.4477 11 11 10.5523 11 10ZM15 10C15 9.44772 15.4477 9 16 9H16.01C16.5623 9 17.01 9.44772 17.01 10C17.01 10.5523 16.5623 11 16.01 11H16C15.4477 11 15 10.5523 15 10Z"
                                ></path>
                            ) : ( */}
              <path
                id="Vector (Stroke)"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.5 3.99976C18.1021 3.99976 17.7205 4.15783 17.4391 4.43919L16.6462 5.23209L18.768 7.35387L19.5609 6.56098C19.8423 6.27961 20.0003 5.898 20.0003 5.50009C20.0003 5.10217 19.8423 4.72056 19.5609 4.43919C19.2795 4.15783 18.8979 3.99976 18.5 3.99976ZM20.9751 7.97519C21.6315 7.31875 22.0003 6.42843 22.0003 5.50009C22.0003 4.57174 21.6315 3.68142 20.9751 3.02498C20.3187 2.36854 19.4283 1.99976 18.5 1.99976C17.5717 1.99976 16.6813 2.36854 16.0249 3.02498L2.29289 16.757C2.10536 16.9445 2 17.1989 2 17.4641V21.0361C2 21.5884 2.44772 22.0361 3 22.0361H6.5C6.76522 22.0361 7.01957 21.9307 7.20711 21.7432L20.9751 7.97519ZM17.3538 8.76808L15.232 6.6463L4 17.8783V20.0361H6.08579L17.3538 8.76808Z"
              ></path>
              {/* )} */}
            </g>
          </g>
        </AnswerSvg>
        <AnswerWrierIntro>
          <span>{timeForToday(question?.createdDate)}</span>
          <span> · </span>
          <span>{question?.memberName} 님의 새로운 질문</span>
        </AnswerWrierIntro>
      </QuestionInfo>
      <QuestionHeaderBox>
        <QuestionHeaderText>{question?.questionTitle}</QuestionHeaderText>
      </QuestionHeaderBox>
      <QuestionContent>{question?.questionContent}</QuestionContent>
      <TagAndCategoryBox>
        <CategoryBox>
          <CategorySvg
            width="12"
            height="12"
            strokeWidth="0"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <g id="style=outline">
                <path
                  id="Vector (Stroke)"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.2425 3.02985C14.7783 3.1638 15.1041 3.70673 14.9701 4.24253L10.9701 20.2425C10.8362 20.7783 10.2933 21.1041 9.75746 20.9701C9.22167 20.8362 8.89591 20.2933 9.02986 19.7575L13.0299 3.75746C13.1638 3.22166 13.7067 2.8959 14.2425 3.02985ZM6.70711 7.29289C7.09763 7.68341 7.09763 8.31658 6.70711 8.7071L3.41421 12L6.70711 15.2929C7.09763 15.6834 7.09763 16.3166 6.70711 16.7071C6.31658 17.0976 5.68342 17.0976 5.29289 16.7071L1.29289 12.7071C0.902369 12.3166 0.902369 11.6834 1.29289 11.2929L5.29289 7.29289C5.68342 6.90236 6.31658 6.90236 6.70711 7.29289ZM17.2929 7.29289C17.6834 6.90236 18.3166 6.90236 18.7071 7.29289L22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L18.7071 16.7071C18.3166 17.0976 17.6834 17.0976 17.2929 16.7071C16.9024 16.3166 16.9024 15.6834 17.2929 15.2929L20.5858 12L17.2929 8.7071C16.9024 8.31658 16.9024 7.68341 17.2929 7.29289Z"
                ></path>
              </g>
            </g>
          </CategorySvg>
          <CategoryText>{question?.categoryName}</CategoryText>
        </CategoryBox>
        {question?.tags &&
          question?.tags?.map((tag, index) => (
            <TagText key={index}>#{tag}</TagText>
          ))}
      </TagAndCategoryBox>
      <StateCountBox>
        <AnswerCount>
          답변 <span>{question?.answerCnt}</span>
        </AnswerCount>
        <ReplyCount>
          댓글 <span>{question?.replyCnt}</span>
        </ReplyCount>
        <HitsCount>
          조회 <span>{question?.hits}</span>
        </HitsCount>
      </StateCountBox>
    </QuestionLink>
  );
}
export default SearchTagQuestion;
