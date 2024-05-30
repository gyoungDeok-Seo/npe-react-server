import { useState } from "react";
import Header from "../components/header/Header";
import "./profileUpdate.css";
function ProfileUpdate() {
  const [file, setFile] = useState(
    "https://careerly.co.kr/_next/image?url=https%3A%2F%2Fpubly-cdn.s3.ap-northeast-2.amazonaws.com%2Fstatic%2Fimages%2Fimg_profile-dummy.png&w=1920&q=75"
  );
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [nameLength, setNameLength] = useState(0);
  const [titleLength, setTitleLength] = useState(0);
  const [shortDescriptionLength, setShortDescriptionLength] = useState(0);

  const handleFileCHange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setFile(previewUrl);
    }
  };

  const handleNameChange = (e) => {
    const valueLength = e.target.value.length;
    setNameLength(valueLength);
    if (valueLength <= 20) {
      setName(e.target.value);
    }
  };

  const handleTitleChange = (e) => {
    const valueLength = e.target.value.length;
    setTitleLength(valueLength);
    if (valueLength <= 40) {
      setTitle(e.target.value);
    }
  };

  const handleDescriptionChange = (e) => {
    const valueLength = e.target.value.length;
    setShortDescriptionLength(valueLength);
    if (valueLength <= 150) {
      setShortDescription(e.target.value);
    }
  };

  return (
    <div>
      <div
        style={{
          position: "fixed",
          zIndex: 9999,
          top: "16px",
          left: "16px",
          right: "16px",
          bottom: "16px",
          pointerEvents: "none",
        }}
        className="global-toaster"
      ></div>
      <div>
        <Header />
        <div className="height-box"></div>
        <div className="profile-update-box">
          <div className="profile-update-inner">
            <div className="profile-img-upload-box">
              <div className="profile-img-upload-inner">
                <div className="profile-relative-box">
                  <label
                    htmlFor="profile_image"
                    className="profile-label-pointer"
                  >
                    <div className="prev-profile-img-box">
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
                        <img
                          alt=""
                          sizes="100vw"
                          src={file}
                          decoding="async"
                          data-nimg="fill"
                          className="prev-profile-img"
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
                    </div>
                    <div className="profile-add-svg-box">
                      <svg
                        width="24"
                        height="24"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="profile-add-svg"
                      >
                        <g>
                          <g id="style=solid">
                            <path
                              id="Subtract"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2C14.6522 2 17.1957 3.05357 19.0711 4.92893C20.9464 6.8043 22 9.34784 22 12C22 13.3132 21.7413 14.6136 21.2388 15.8268C20.7362 17.0401 19.9997 18.1425 19.0711 19.0711C18.1425 19.9997 17.0401 20.7362 15.8268 21.2388C14.6136 21.7413 13.3132 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C4.00035 18.1425 3.26375 17.0401 2.7612 15.8268C2.25866 14.6136 2 13.3132 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893ZM6.75757 12C6.75757 11.4477 7.20528 11 7.75757 11H11.0002V7.75732C11.0002 7.20504 11.4479 6.75732 12.0002 6.75732C12.5525 6.75732 13.0002 7.20504 13.0002 7.75732V11H16.2429C16.7951 11 17.2429 11.4477 17.2428 12C17.2429 12.5522 16.7951 13 16.2429 13H13.0002V16.2426C13.0002 16.7949 12.5525 17.2426 12.0002 17.2426C11.4479 17.2426 11.0002 16.7949 11.0002 16.2426V13H7.75757C7.20528 13 6.75757 12.5522 6.75757 12Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </label>
                  <input
                    id="profile_image"
                    className="profile-img-update-input"
                    type="file"
                    accept="image/*"
                    name="image"
                    onChange={handleFileCHange}
                  />
                </div>
              </div>
            </div>
            <div className="profile-update-input-box">
              <div className="profile-update-input-inner">
                <label htmlFor="name" className="profile-update-label">
                  이름
                  <span className="profile-update-label-sub">(필수)</span>
                </label>
                <p className="input-length-count-text">{nameLength}/20</p>
              </div>
              <input
                type="text"
                className="profile-update-input"
                placeholder="이름을 입력해 주세요."
                name="name"
                maxLength="20"
                onChange={handleNameChange}
              />
            </div>
            <div className="profile-update-input-box">
              <div className="profile-update-input-inner">
                <label htmlFor="name" className="profile-update-label">
                  대표 직함
                  <span className="profile-update-label-sub">(필수)</span>
                </label>
                <p className="input-length-count-text">{titleLength}/40</p>
              </div>
              <input
                type="text"
                className="profile-update-input"
                placeholder="본인을 대표하는 직함을 입력해 주세요."
                name="title"
                maxLength="40"
                onChange={handleTitleChange}
              />
            </div>
            <div className="profile-update-input-inner">
              <label htmlFor="name" className="profile-update-label">
                자기소개
              </label>
              <p className="input-length-count-text">
                {shortDescriptionLength}/150
              </p>
            </div>
            <textarea
              className="profile-update-textarea"
              placeholder="나를 소개해주세요."
              name="shortDescription"
              maxLength="150"
              onChange={handleDescriptionChange}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileUpdate;
