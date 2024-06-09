import { Link } from "react-router-dom";
import { styled } from "styled-components";

const QnaMainItemLink = styled(Link)`
    padding: 1rem;
    border-color: var(--color-slate-200, #e2e8f0);
    border-style: solid;
    border-width: 0;
    border-bottom-width: 1px;
    flex-direction: column;
    min-width: 0;
    display: flex;
    &:hover {
        background-color: var(--color-slate-50, #f8fafc);
    }
`;

const QnaHeader = styled.div`
    gap: 0.25rem;
    align-items: center;
    display: flex;
    margin-bottom: 0.875rem;
`;

const AnswerSvg = styled.svg`
    fill: var(--color-slate-500, #64748b);
    width: 1rem;
    height: 1rem;
`;

const TimeWriterType = styled.p`
    color: var(--color-slate-500, #64748b);
    font-weight: 700;
    font-size: 0.75rem;
    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
`;

const QnaTitle = styled.p`
    font-weight: 600;
    font-size: 1.25rem;
    -webkit-line-clamp: 2;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    margin-bottom: 0.25rem;
`;

const QnaTitleInside = styled.span`
    color: var(--color-slate-900, #0f172a);
`;

const QnaContent = styled.p`
    color: var(--color-slate-900, #0f172a);
    font-size: 0.875rem;
    -webkit-line-clamp: 2;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    margin-bottom: 0.375rem;
`;

const QnaTagBox = styled.div`
    row-gap: 0.25rem;
    column-gap: 0.625rem;
    align-items: center;
    flex-wrap: wrap;
    display: flex;
    margin-bottom: 1rem;
`;

const TagName = styled.p`
    color: var(--color-slate-500, #64748b);
    font-size: 0.875rem;
`;

const QnaStatBox = styled.div`
    gap: 0.625rem;
    display: flex;
`;

const AnswerCount = styled.p`
    color: var(--color-slate-900, #0f172a);
    font-size: 0.75rem;
`;

const ReplyCount = styled.p`
    color: var(--color-slate-500, #64748b);
    font-size: 0.75rem;
`;

const HitsCount = styled(ReplyCount)`
    margin-left: auto;
`;

function QnaMainItem() {
    return (
        <QnaMainItemLink href="">
            <QnaHeader>
                <AnswerSvg width="24" height="24" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {/* 말풍선 모양 */}
                    <g>
                        <g id="style=outline">
                            <path
                                id="Vector (Stroke)"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5 5C4.73478 5 4.48043 5.10536 4.29289 5.29289C4.10536 5.48043 4 5.73478 4 6V14C4 14.2652 4.10536 14.5196 4.29289 14.7071C4.48043 14.8946 4.73478 15 5 15H9C9.55228 15 10 15.4477 10 16V18.5858L13.2929 15.2929C13.4804 15.1054 13.7348 15 14 15H19C19.2652 15 19.5196 14.8946 19.7071 14.7071C19.8946 14.5196 20 14.2652 20 14V6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5H5ZM2.87868 3.87868C3.44129 3.31607 4.20435 3 5 3H19C19.7957 3 20.5587 3.31607 21.1213 3.87868C21.6839 4.44129 22 5.20435 22 6V14C22 14.7957 21.6839 15.5587 21.1213 16.1213C20.5587 16.6839 19.7957 17 19 17H14.4142L9.70711 21.7071C9.42111 21.9931 8.99099 22.0787 8.61732 21.9239C8.24364 21.7691 8 21.4045 8 21V17H5C4.20435 17 3.44129 16.6839 2.87868 16.1213C2.31607 15.5587 2 14.7956 2 14V6C2 5.20435 2.31607 4.44129 2.87868 3.87868ZM7 10C7 9.44772 7.44772 9 8 9H8.01C8.56228 9 9.01 9.44772 9.01 10C9.01 10.5523 8.56228 11 8.01 11H8C7.44772 11 7 10.5523 7 10ZM11 10C11 9.44772 11.4477 9 12 9H12.01C12.5623 9 13.01 9.44772 13.01 10C13.01 10.5523 12.5623 11 12.01 11H12C11.4477 11 11 10.5523 11 10ZM15 10C15 9.44772 15.4477 9 16 9H16.01C16.5623 9 17.01 9.44772 17.01 10C17.01 10.5523 16.5623 11 16.01 11H16C15.4477 11 15 10.5523 15 10Z"
                            ></path>
                        </g>
                    </g>
                    {/* 연필 모양 */}
                    {/* <g>
                        <g id="style=outline">
                            <path id="Vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M18.5 3.99976C18.1021 3.99976 17.7205 4.15783 17.4391 4.43919L16.6462 5.23209L18.768 7.35387L19.5609 6.56098C19.8423 6.27961 20.0003 5.898 20.0003 5.50009C20.0003 5.10217 19.8423 4.72056 19.5609 4.43919C19.2795 4.15783 18.8979 3.99976 18.5 3.99976ZM20.9751 7.97519C21.6315 7.31875 22.0003 6.42843 22.0003 5.50009C22.0003 4.57174 21.6315 3.68142 20.9751 3.02498C20.3187 2.36854 19.4283 1.99976 18.5 1.99976C17.5717 1.99976 16.6813 2.36854 16.0249 3.02498L2.29289 16.757C2.10536 16.9445 2 17.1989 2 17.4641V21.0361C2 21.5884 2.44772 22.0361 3 22.0361H6.5C6.76522 22.0361 7.01957 21.9307 7.20711 21.7432L20.9751 7.97519ZM17.3538 8.76808L15.232 6.6463L4 17.8783V20.0361H6.08579L17.3538 8.76808Z"></path>
                        </g>
                    </g> */}
                </AnswerSvg>
                <TimeWriterType>
                    <span>10분 전</span>
                    <span>&nbsp;·&nbsp;</span>
                    <span>백승훈 님의 새로운 답변</span>
                </TimeWriterType>
            </QnaHeader>
            <QnaTitle>
                <QnaTitleInside>상황에 의한 퇴사를 고민중입니다.</QnaTitleInside>
            </QnaTitle>
            <QnaContent>
                안녕하세요, 한 중소기업에서 일하고있는 2년차 웹 개발자입니다. 다름아니라 최근 일련의 한 사건으로 인해 퇴사를 고민중입니다. 저희팀은 팀장 1명에 팀원 3명으로 구성된 팀입니다. 최근 팀장의 기분이 매우 언짢은 주간에 단체로 1:1 면담을 진행하였습니다. 대부분의 내용은 현재 상황에 대한 모두까기식 질책이었습니다. 하지만 그 과정에서 팀 내 특정 인원을 본인이 편애한다고 대놓고 저에게 밝혔습니다. 그 편애하는 대상은 제 동기였습니다. 이전까지는 업무나 회사생활 가운데 편애하는 것 같은 심증만 있었을뿐인데 저에게는 어떻게 보면 팀장을 통해 심증이 물증으로 입증된 시간이었습니다. 면담 이후 부터는 별로 중요하지 않은 곁가지 도는 업무 또는 단순 유지보수 업무만 부여되고 일부 개선 업무를 진행하여도 해당 내용을 확인 후 적용하지도 않고 흐지부지 넘어가는 형국이 여러번 이어졌습니다. 그러나 편애한다는 그 동기에게는 다른 모듈과 협의가 잦고 연계해야하는 것이나 프로젝트에서 비중이 꽤 있는 업무, 팀장과 협업하거나 팀 내에서도 비중이 꽤 있는 업무들이 배정되었습니다. 제가 현재까지 한 업무들을 보면 지연이나
                크리티컬한 운영 이슈가 발생한 적도 없는데 이런 상황이 지속되면서 동기에 비해 업계에서 소위 말하는 물경력이 되어가는 것은 당연하고 업무관련 채팅을 보내면 답은 늦고 관심이 매우 낮은편인 상황에서 저는 그 면담시간에 들었던 말에 갇혀 하루하루 멘탈이 나가고있는 상황이라 이런 상황이라면 퇴사를 하는 것이 맞을까요? 현실적으로 주변에서는 시기를 버텨내야한다고 얘기하는데 제가 무엇을 시도하려고 한들 지금 팀장 아래에서는 버텨내는 것이 무언가 시간낭비라고 느껴지는데 현실적인 조언 부탁드립니다.
            </QnaContent>
            <QnaTagBox>
                <TagName>#이직</TagName>
                <TagName>#직장생활</TagName>
                <TagName>#퇴사</TagName>
                <TagName>#번아웃</TagName>
                <TagName>#회사생활</TagName>
            </QnaTagBox>
            <QnaStatBox>
                <AnswerCount>
                    답변 <span>1</span>
                </AnswerCount>
                <ReplyCount>
                    댓글 <span>0</span>
                </ReplyCount>
                <HitsCount>
                    조회 <span>12</span>
                </HitsCount>
            </QnaStatBox>
        </QnaMainItemLink>
    );
}
export default QnaMainItem;
