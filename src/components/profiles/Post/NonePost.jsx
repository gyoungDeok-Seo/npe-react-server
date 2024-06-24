import styled from "styled-components";

const NonePostBox = styled.div`
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const NonePostImg = styled.img`
    flex: none;
`;

const NonePostTextBox = styled.div`
    text-align: center;
    margin-top: 1.25rem;
`;

const NonePostTitle = styled.p`
    color: rgb(100 116 139 / 1);
    font-weight: 700;
    font-size: 1rem;
    margin-bottom: 0.5rem;
`;

const NonePostContent = styled.p`
    color: rgb(100 116 139 /1);
    font-size: 0.875rem;
`;
function NonePost({ target }) {
    return (
        <NonePostBox>
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
                        src="https://careerly.co.kr/_next/image?url=%2F_next%2Fstatic%2Fimages%2Fimg_empty-curator-list-25831d86bf04b56db3e6fa2ca609f85e.png&w=96&q=75"
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
                <NonePostImg
                    alt=""
                    src="https://careerly.co.kr/_next/image?url=%2F_next%2Fstatic%2Fimages%2Fimg_empty-curator-list-25831d86bf04b56db3e6fa2ca609f85e.png&w=96&q=75"
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
            <NonePostTextBox>
                <NonePostTitle>{target == "게시물" ? target + "이 없어요." : target + "가 없어요."}</NonePostTitle>
                {target == "게시물" && <NonePostContent>{target}을 등록해보세요!</NonePostContent>}
            </NonePostTextBox>
        </NonePostBox>
    );
}
export default NonePost;
