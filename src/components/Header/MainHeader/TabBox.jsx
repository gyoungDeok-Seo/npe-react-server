import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

const a = css`
    border-top-color: transparent;
    --tw-border-opacity: 1;
    border-bottom-color: rgb(237 102 83 / var(--tw-border-opacity));
    border-style: solid;
    border-width: 3px;
    border-left-width: 0;
    border-right-width: 0;
`;

const TabLink = styled(Link)`
    /* isThis */
    color: ${({ isThis }) => (isThis ? "rgb(15 23 42 / 1)" : "rgb(100 116 139 / 1)")};
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
    ${({ isThis }) => isThis && a}
    &:hover {
        --tw-text-opacity: 1;
        color: rgb(15 23 42 / var(--tw-text-opacity));
    }
`;

function TabBox() {
    const { pathname } = useLocation();

    const isThis = pathname.startsWith("/qnas");

    return (
        <>
            {/* <TabLink to="/">
                <p>커리어리 트렌드</p>
            </TabLink> */}
            <TabLink isThis={isThis} to="/qnas">
                현직자 Q&A
            </TabLink>
        </>
    );
}
export default TabBox;
