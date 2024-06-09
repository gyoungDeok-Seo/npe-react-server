import LinkPreView from "./PostItem/LinkPreView";
import PostContent from "./PostItem/PostContent";
import Toolbox from "./PostItem/ToolBox";
import SubContent from "./PostItem/SubContent";
import CreaterProfile from "./PostItem/CreaterProfile";
import styled from "styled-components";

const PostItemBox = styled.div`
  border-bottom: 1px solid #e2e8f0;
  &:last-child {
    border: none;
  }
`;

function PostItem({ setLikeUsersModal }) {
  return (
    <PostItemBox style={{ backgroundColor: "#fff" }}>
      <CreaterProfile />
      <PostContent />
      <LinkPreView />
      <SubContent setLikeUsersModal={setLikeUsersModal} />
      <Toolbox />
    </PostItemBox>
  );
}
export default PostItem;
