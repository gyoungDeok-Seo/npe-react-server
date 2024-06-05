import { useState } from "react";
import styled from "styled-components";

const ProfilePostContent = styled.div`
  padding: 1rem;
`;
const ProfilePostContentTitle = styled.p`
  margin-bottom: 1.5rem;
  font-weight: 700;
`;
const ProfilePostContentShowAll = styled.div`
  &:focus {
    outline: none;
  }
`;
const ProfilePostContentSummary = styled.div`
  white-space: pre-wrap;
  font-size: 1rem;
  color: #0f172a;
`;

const ProfilePostContentSummaryMore = styled.div`
  cursor: pointer;
  color: rgb(100 116 139 / 1);
`;

function PostContent() {
  const [viewAll, setViewAll] = useState(false);

  const handelViewAll = () => {
    setViewAll(true);
  };

  return (
    <ProfilePostContent>
      <ProfilePostContentTitle>
        프로그래머스 문제 풀이 - 같은 숫자는 싫어
      </ProfilePostContentTitle>
      <div>
        {viewAll ? (
          <ProfilePostContentShowAll>
            <ProfilePostContentSummary
              style={{
                overflowWrap: "break-word",
              }}
            >
              <p style={{ display: "inline-block" }}>
                구독자분들께서 프로그래머스의 문제도 풀어달라는 요청을 해주셔서,
                올해는 프로그래머스의 문제 풀이도 시작하려고 해요! 이번 시간에는
                프로그래머스의 같은 숫자는 싫어 문제를 다양한 스트일로
                풀어보겠습니다. <br />
                <br />
                📺 동영상: https://youtu.be/CbjtFNN_WfY <br />
                📝 설명/코드:
                https://www.algodale.com/problems/%EA%B0%99%EC%9D%80-%EC%88%AB%EC%9E%90%EB%8A%94-%EC%8B%AB%EC%96%B4/
              </p>
            </ProfilePostContentSummary>
          </ProfilePostContentShowAll>
        ) : (
          <ProfilePostContentShowAll
            role="button"
            tabindex="-1"
            onClick={handelViewAll}
          >
            <ProfilePostContentSummary
              style={{
                overflowWrap: "break-word",
                display: "block",
              }}
            >
              <p style={{ display: "inline-block" }}>
                구독자분들께서 프로그래머스의 문제도 풀어달라는 요청을 해주셔서,
                올해는 프로그래머스의 문
              </p>
              <span>
                ...{" "}
                <ProfilePostContentSummaryMore>
                  더 보기
                </ProfilePostContentSummaryMore>
              </span>
            </ProfilePostContentSummary>
          </ProfilePostContentShowAll>
        )}
      </div>
    </ProfilePostContent>
  );
}
export default PostContent;
