import styled from "styled-components";
import PostItem from "../../components/profiles/Post/PostItem";
import { useState } from "react";
import LikeUserModal from "../../components/profiles/Modal/LikeUserModal";
import NonePost from "../../components/profiles/Post/NonePost";

const ProfileContentContainer = styled.div`
    border-color: #e2e8f0;
    border-style: solid;
    border-top-width: 1px;
`;

const ProfileContentBox = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: grid;
    width: 1024px;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    -moz-column-gap: 3rem;
    column-gap: 3rem;
    row-gap: 2rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-bottom: 5rem;
`;

const ProfileContentInner = styled.div`
    grid-column: span 8 / span 8;
    grid-column-start: 3;
`;

const ProfileColSpanBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin-top: 1.25rem;
`;
const PostCount = styled.p`
    font-size: 0.875rem;
    font-weight: 700;
    color: #64748b;
`;

const CreatePostBtn = styled.button`
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    background-color: #f8fafc;
    border-radius: 9999px;
    &:hover {
        background-color: #f1f5f9;
    }
`;

const CreatePostProfileImg = styled.img`
    flex: none;
    overflow: hidden;
    border-radius: 9999px;
    -o-object-fit: cover;
    object-fit: cover;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(226 232 240 / 1);
    background-color: rgb(255 255 255 / 1);
    height: 2.5rem;
    width: 2.5rem;
`;

const CreatePostProfilePlaceholder = styled.span`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    color: #94a3b8;
    font-size: 1rem;
    text-align: left;
    word-break: break-all;
    flex-grow: 1;
    overflow: hidden;
`;

const CreatePostProfileSvg = styled.svg`
    height: 1.5rem;
    width: 1.5rem;
    fill: #94a3b8;
`;

const PostList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;
function Post() {
    const [likeUsersModal, setLikeUsersModal] = useState(false);
    const [isPost, setIsPost] = useState(false);
    return (
        <>
            <ProfileContentContainer>
                <ProfileContentBox>
                    <ProfileContentInner>
                        <ProfileColSpanBox>
                            <PostCount>게시물 0개</PostCount>
                            <CreatePostBtn type="button">
                                <CreatePostProfileImg src="https://publy.imgix.net/static/images/img_profile-dummy.png?w=200&amp;h=200&amp;auto=format&amp;fm=png" alt="img" />
                                <CreatePostProfilePlaceholder>나누고 싶은 생각이 있으신가요?</CreatePostProfilePlaceholder>
                                <CreatePostProfileSvg width="24" height="24" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <g id="style=solid">
                                            <g id="Subtract">
                                                <path d="M22.0003 5.49886C22.0003 6.42721 21.6315 7.31753 20.9751 7.97397L20.1822 8.76684L15.232 3.81663L16.0249 3.02376C16.6813 2.36732 17.5717 1.99854 18.5 1.99854C19.4283 1.99854 20.3187 2.36732 20.9751 3.02376C21.6315 3.6802 22.0003 4.57052 22.0003 5.49886Z"></path>
                                                <path d="M13.8178 5.23085L18.768 10.1811L7.20711 21.742C7.01957 21.9295 6.76522 22.0349 6.5 22.0349H3C2.44772 22.0349 2 21.5871 2 21.0349V17.4629C2 17.1976 2.10536 16.9433 2.29289 16.7558L13.8178 5.23085Z"></path>
                                            </g>
                                        </g>
                                    </g>
                                </CreatePostProfileSvg>
                            </CreatePostBtn>
                            <div>
                                {isPost ? (
                                    <PostList style={{ height: "auto", overflow: "inherit" }}>
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
                                            <PostItem setLikeUsersModal={setLikeUsersModal} />
                                        ))}
                                    </PostList>
                                ) : (
                                    <NonePost target={"게시물"} />
                                )}
                            </div>
                        </ProfileColSpanBox>
                    </ProfileContentInner>
                </ProfileContentBox>
            </ProfileContentContainer>
            {likeUsersModal && <LikeUserModal setLikeUsersModal={setLikeUsersModal} />}
        </>
    );
}
export default Post;
