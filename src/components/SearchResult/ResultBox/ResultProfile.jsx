import { Link } from "react-router-dom";
import styled from "styled-components";

const SearchResultProfilesLink = styled(Link)`
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border-bottom: 1px solid #e2e8f0;
    &:last-child {
        border: none;
    }
`;
const SearchResultProfilesUserImgBox = styled.div`
    flex: none;
    overflow: hidden;
    border-radius: 9999px;
    -o-object-fit: cover;
    object-fit: cover;
    width: 3rem;
    height: 3rem;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(226 232 240 / 1);
    background-color: rgb(255 255 255 / 1);
`;
const SearchResultProfilesUserImg = styled.img`
    object-fit: cover;
`;
const SearchResultProfilesUserContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    flex: 1 1 0%;
`;
const SearchResultProfilesUserName = styled.h3`
    color: #0f172a;
    font-weight: 700;
    font-size: 1rem;
    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    margin-bottom: 0;
`;
const SearchResultProfilesUserJob = styled.h3`
    color: #334155;
    font-weight: 400;
    font-size: 0.875rem;
    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    margin-bottom: 0;
`;
const SearchResultProfilesUserCareer = styled.p`
    color: #64748b;
    font-size: 0.75rem;
    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
`;

function ResultProfile({ profile, index }) {
    return (
        <SearchResultProfilesLink to={`/profile/${profile.id}`}>
            <SearchResultProfilesUserImgBox>
                <span
                    style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        maxWidth: "100%",
                    }}
                >
                    <span
                        style={{
                            boxSizing: "border-box",
                            display: "block",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            maxWidth: "100%",
                        }}
                    >
                        <img
                            alt=""
                            aria-hidden="true"
                            src="https://publy.imgix.net/static/images/img_profile-dummy.png?w=200&h=200&auto=format&fm=png"
                            style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                            }}
                        />
                    </span>
                    <SearchResultProfilesUserImg
                        alt=""
                        // src="https://publy.imgix.net/static/images/img_profile-dummy.png?w=200&h=200&auto=format&fm=png"
                        src={profile?.kakaoProfileUrl}
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                            position: "absolute",
                            inset: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                        }}
                    />
                </span>
            </SearchResultProfilesUserImgBox>
            <SearchResultProfilesUserContent>
                <div>
                    <SearchResultProfilesUserName>{profile?.memberName}&nbsp;</SearchResultProfilesUserName>
                    <SearchResultProfilesUserJob>{profile?.memberPosition}&nbsp;</SearchResultProfilesUserJob>
                </div>
                <div>
                    {profile?.careers[0] && (
                        <SearchResultProfilesUserCareer>
                            경력: {profile?.careers[0]?.companyName}&nbsp;
                            {profile?.careers[0]?.memberPosition}
                        </SearchResultProfilesUserCareer>
                    )}
                </div>
            </SearchResultProfilesUserContent>
        </SearchResultProfilesLink>
    );
}
export default ResultProfile;
