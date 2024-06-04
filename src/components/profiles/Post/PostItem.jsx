import LinkPreView from "./PostItem/LinkPreView";
import PostContent from "./PostItem/PostContent";
import Toolbox from "./PostItem/ToolBox";
import SubContent from "./PostItem/SubContent";
import CreaterProfile from "./PostItem/CreaterProfile";

function PostItem({ setLikeUsersModal }) {

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <CreaterProfile />
      <PostContent />
      <LinkPreView />
      <SubContent setLikeUsersModal={setLikeUsersModal} />
      <Toolbox />
    </div>
  );
}
export default PostItem;
