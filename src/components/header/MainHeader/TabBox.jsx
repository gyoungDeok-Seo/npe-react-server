import { Link } from "react-router-dom";
import styled from "styled-components";

const TabLink = styled(Link)`
  color: rgb(100 116 139 / 1);
  line-height: 1;
  font-weight: 500;
  font-size: 0.875rem;
  text-align: center;
  padding: 0.5rem;
  gap: 0.25rem;
  align-items: center;
  height: 100%;
  display: flex;
  text-decoration: none;
  background-color: transparent;
`;

function TabBox() {
  return (
    <>
      <TabLink to="/">
        <p>커리어리 트렌드</p>
      </TabLink>
      <TabLink to="/">현직자 Q&A</TabLink>
    </>
  );
}
export default TabBox;
