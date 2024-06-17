import styled from "styled-components";

const ProfileImgUploadBox = styled.div`
    margin-bottom: 2rem;
`;
const ProfileImgUploadInner = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const ProfileRelativeBox = styled.div`
    position: relative;
`;
const PrevProfileImgBox = styled.div`
    flex: none;
    overflow: hidden;
    border-radius: 9999px;
    -o-object-fit: cover;
    object-fit: cover;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(226 232 240 / 1);
    background-color: rgb(255 255 255 / 1);
    position: relative;
    @media (min-width: 1024px) {
        & {
            width: 7.5rem;
        }
    }
    @media (min-width: 1024px) {
        & {
            height: 7.5rem;
        }
    }
`;
const PrevProfileImg = styled.img`
    -o-object-fit: cover;
    object-fit: cover;
`;

function ProfileFileInput({ member }) {
    return (
        <ProfileImgUploadBox>
            <ProfileImgUploadInner>
                <ProfileRelativeBox>
                    <PrevProfileImgBox>
                        <span
                            style={{
                                boxSizing: "border-box",
                                display: "block",
                                overflow: "hidden",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: "0px",
                                margin: "0px",
                                padding: "0px",
                                position: "absolute",
                                inset: "0px",
                            }}
                        >
                            <PrevProfileImg
                                alt=""
                                sizes="100vw"
                                src={member && member.kakaoProfileUrl}
                                decoding="async"
                                data-nimg="fill"
                                style={{
                                    position: "absolute",
                                    inset: "0px",
                                    boxSizing: "border-box",
                                    padding: "0px",
                                    border: "none",
                                    margin: "auto",
                                    display: "block",
                                    width: "0px",
                                    height: "0px",
                                    minWidth: "100%",
                                    maxWidth: "100%",
                                    minHeight: "100%",
                                    maxHeight: "100%",
                                }}
                            />
                        </span>
                    </PrevProfileImgBox>
                </ProfileRelativeBox>
            </ProfileImgUploadInner>
        </ProfileImgUploadBox>
    );
}
export default ProfileFileInput;
