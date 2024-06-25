import { useEffect, useState } from "react";
import styled from "styled-components";

const CareerCreateSelectedBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
const CareerCreateSelectedList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
const CareerCreateSelected = styled.div`
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  background-color: rgb(241 245 249 / 1);
  border-width: 1px;
  border-radius: 9999px;
`;
const CareerCreateSelectedText = styled.h3`
  color: #64748b;
  line-height: 1;
  font-weight: 700;
  font-size: 0.875rem;
  margin-top: 0;
  margin-bottom: 0;
`;
const CareerCreateSelectedBtnBox = styled.div`
  display: flex;
  justify-content: center;
`;
const CareerCreateSelectedBtn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: rgb(51 65 85 / 1);
  font-weight: 700;
  font-size: 0.875rem;
  padding: 0.25rem;
  border-radius: 0.25rem;
`;
const CareerCreateSelectedBtnSvg = styled.svg`
  height: 1rem;
  width: 1rem;
  fill: #334155;
`;
const CareerCreateSelectedBtnText = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  margin-right: 0.25rem;
`;

const CareerSelectedList = ({ selectedList, handleModal }) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const normalizedList = selectedList?.map((item) => ({
      id: item.skillId || item.industryId,
      name: item.skillName || item.industryName,
    }));
    setList(normalizedList);
  }, [selectedList]);

  return (
    <CareerCreateSelectedBox>
      <CareerCreateSelectedList>
        {list.map((item) => (
          <CareerCreateSelected key={item.id}>
            <CareerCreateSelectedText>{item.name}</CareerCreateSelectedText>
          </CareerCreateSelected>
        ))}
      </CareerCreateSelectedList>
      <CareerCreateSelectedBtnBox>
        <CareerCreateSelectedBtn type="button" onClick={handleModal}>
          <CareerCreateSelectedBtnSvg
            width="24"
            height="24"
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
                  d="M18.5 3.99976C18.1021 3.99976 17.7205 4.15783 17.4391 4.43919L16.6462 5.23209L18.768 7.35387L19.5609 6.56098C19.8423 6.27961 20.0003 5.898 20.0003 5.50009C20.0003 5.10217 19.8423 4.72056 19.5609 4.43919C19.2795 4.15783 18.8979 3.99976 18.5 3.99976ZM20.9751 7.97519C21.6315 7.31875 22.0003 6.42843 22.0003 5.50009C22.0003 4.57174 21.6315 3.68142 20.9751 3.02498C20.3187 2.36854 19.4283 1.99976 18.5 1.99976C17.5717 1.99976 16.6813 2.36854 16.0249 3.02498L2.29289 16.757C2.10536 16.9445 2 17.1989 2 17.4641V21.0361C2 21.5884 2.44772 22.0361 3 22.0361H6.5C6.76522 22.0361 7.01957 21.9307 7.20711 21.7432L20.9751 7.97519ZM17.3538 8.76808L15.232 6.6463L4 17.8783V20.0361H6.08579L17.3538 8.76808Z"
                ></path>
              </g>
            </g>
          </CareerCreateSelectedBtnSvg>
          <CareerCreateSelectedBtnText>편집</CareerCreateSelectedBtnText>
        </CareerCreateSelectedBtn>
      </CareerCreateSelectedBtnBox>
    </CareerCreateSelectedBox>
  );
};
export default CareerSelectedList;
