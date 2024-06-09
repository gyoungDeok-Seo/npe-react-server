import styled from "styled-components";
import OptionBar from "../../components/profiles/QnaActivity/OptionBar";
import QnaActivityAnswer from "../../components/profiles/QnaActivity/QnaActivityAnswer";
import QnaActivityQuestion from "../../components/profiles/QnaActivity/QnaActivityQuestion";
import { useState } from "react";

const QnaActivityContainer = styled.div`
  border-color: #e2e8f0;
  border-style: solid;
  border-width: 0;
  border-top-width: 1px;
`;

const QnaActivityBox = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  width: 1024px;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  -moz-column-gap: 3rem;
  column-gap: 3rem;
  row-gap: 2rem;
  padding-left: 1.5rem;
  padding-bottom: 5rem;
  padding-right: 1.5rem;
`;
const QnaActivityColSpanBox = styled.div`
  grid-column: span 8 / span 8;
  grid-column-start: 3;
`;
const QnaActivityInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 1.25rem;
`;

const QnaActivityAnswerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

function QnaActivity() {
  const [option, setOption] = useState(1);
  const [likeUsersModal, setLikeUsersModal] = useState(false);
  return (
    <QnaActivityContainer>
      <QnaActivityBox>
        <QnaActivityColSpanBox>
          <QnaActivityInner>
            <OptionBar option={option} setOption={setOption} />
            <div>
              <QnaActivityAnswerList
                style={{ height: "auto", overflow: "inherit" }}
              >
                {[1, 2, 3, 4, 5].map(() => (
                  <>
                    {option === 1 ? (
                      <QnaActivityAnswer
                        likeUsersModal={likeUsersModal}
                        setLikeUsersModal={setLikeUsersModal}
                      />
                    ) : (
                      <QnaActivityQuestion />
                    )}
                  </>
                ))}
              </QnaActivityAnswerList>
            </div>
          </QnaActivityInner>
        </QnaActivityColSpanBox>
      </QnaActivityBox>
    </QnaActivityContainer>
  );
}
export default QnaActivity;
