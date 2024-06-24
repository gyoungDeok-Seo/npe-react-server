import { useEffect, useState } from "react";
import styled from "styled-components";

const LinkPreViewBox = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

const LinkPreViewInner = styled.div`
  display: flex;
  background-color: rgb(248 250 252 / 1);
  border-color: rgb(226 232 240 / 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const LinkPreViewContentBox = styled.div`
  flex: 1 1 0%;
  padding: 1rem;
`;

const LinkPreViewTitle = styled.p`
  color: rgb(15 23 42 /1);
  font-weight: 700;
  font-size: 0.875rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  margin-bottom: 0.25rem;
`;

const LinkPreViewSiteName = styled.div`
  color: rgb(51 65 85 / 1);
  font-size: 0.875rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

const LinkPreViewImg = styled.img`
  background-color: rgb(255 255 255 / 1);
  object-fit: cover;
`;

function LinkPreView() {
  const [previewData, setPreviewData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url =
      "https://dev.to/rahulj9a/how-to-build-simple-link-preview-without-any-library-in-js-2j84";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");
        const title = doc
          .querySelector('meta[property="og:title"]')
          .getAttribute("content");
        const siteName = doc
          .querySelector('meta[property="og:site_name"]')
          .getAttribute("content");
        const image = doc
          .querySelector('meta[property="og:image"]')
          .getAttribute("content");

        setPreviewData({
          title,
          siteName,
          image,
          url,
        });

        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <LinkPreViewBox>
      <a href={previewData.url} target="_blank" rel="noopener">
        <LinkPreViewInner>
          <LinkPreViewContentBox>
            <LinkPreViewTitle>{previewData.title}</LinkPreViewTitle>
            <LinkPreViewSiteName>{previewData.siteName}</LinkPreViewSiteName>
          </LinkPreViewContentBox>
          <span
            style={{
              boxSizing: "border-box",
              display: "inline-block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: "0px",
              margin: "0px",
              padding: "0px",
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
                border: "0px",
                margin: "0px",
                padding: "0px",
                maxWidth: "100%",
              }}
            >
              <img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27160%27%20height=%27120%27/%3e"
                style={{
                  display: "block",
                  maxWidth: "100%",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: "0px",
                  margin: "0px",
                  padding: "0px",
                }}
              />
            </span>
            <LinkPreViewImg
              alt={previewData.title}
              src={previewData.image}
              decoding="async"
              data-nimg="intrinsic"
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
            <noscript></noscript>
          </span>
        </LinkPreViewInner>
      </a>
    </LinkPreViewBox>
  );
}
export default LinkPreView;
