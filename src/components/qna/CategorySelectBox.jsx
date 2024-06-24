import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { styled } from "styled-components";
import { categoryList, qnaListApi } from "../../service/qnaApi";
import { useSelector } from "react-redux";

const CategorySelectBoxDiv = styled.div`
  width: fit-content;
  position: relative;
`;

const CategoryBtn = styled.button`
  padding: 0;
  gap: 0.5rem;
  align-items: center;
  width: fit-content;
  display: flex;
`;

const SelectedCategoryName = styled.span`
  color: #0f172a;
  line-height: 1.25;
  font-weight: 700;
  font-size: 1.5rem;
  text-align: left;
  max-width: 9.5rem;
`;

const CategoryArrowSvg = styled.svg`
  fill: #0f172a;
  width: 1.25rem;
  height: 1.25rem;
  display: block;
  transform: ${({ isReversed }) =>
    isReversed ? "rotate(180deg)" : "rotate(0deg)"};
`;

const CategoryListBox = styled.div`
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
    0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: #fff;
  border-color: #cbd5e1;
  border-style: solid;
  border-width: 1px;
  border-radius: 0.5rem;
  width: 208px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  z-index: 1;
  top: 2.4rem;
  position: absolute;
`;

const CategoryItemLink = styled(Link)`
  padding-right: 1rem;
  padding-left: 2.5rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
  width: 100%;
  display: flex;
  position: relative;
  &:hover {
    background-color: #f8fafc;
  }
`;

const SelectedSvg = styled.svg`
  fill: var(--color-text-bold, #0f172a);
  width: 1rem;
  height: 1rem;
  left: 1rem;
  position: absolute;
`;

const CategoryName = styled.span`
  color: ${({ selected }) => (selected ? "#0f172a" : "#64748b")};
  font-weight: ${({ selected }) => (selected ? "700" : "")};
  font-size: 1rem;
`;

function CategorySelectBox() {
  const [isOpen, setIsOpen] = useState(false);
  const listBoxRef = useRef(null);
  const arrowSvgRef = useRef(null);
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab") || "newest";
  const qsCategory = searchParams.get("category") || "java";
  const { categories } = useSelector((state) => state.categoryList);

  const handleClickOutside = (e) => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const ClickCategory = (e) => {
    e.stopPropagation();
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <CategorySelectBoxDiv>
      {/* useRef 사용처 */}
      <CategoryBtn type="button" onClick={ClickCategory}>
        <SelectedCategoryName>
          {categories?.map(
            (item) =>
              item.categoryName.toLowerCase() === qsCategory &&
              item.categoryName
          )}
        </SelectedCategoryName>
        <CategoryArrowSvg
          ref={arrowSvgRef}
          isReversed={isOpen}
          width="24"
          height="24"
          strokeWidth="0"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <g id="style=outline">
              <path
                id="arrowDown"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 15.5858L20.2929 7.29289C20.6834 6.90237 21.3166 6.90237 21.7071 7.29289C22.0976 7.68342 22.0976 8.31658 21.7071 8.70711L12.7071 17.7071C12.3166 18.0976 11.6834 18.0976 11.2929 17.7071L2.29289 8.70711C1.90237 8.31658 1.90237 7.68342 2.29289 7.29289C2.68342 6.90237 3.31658 6.90237 3.70711 7.29289L12 15.5858Z"
              ></path>
            </g>
          </g>
        </CategoryArrowSvg>
      </CategoryBtn>
      <CategoryListBox ref={listBoxRef} isOpen={isOpen}>
        {categories &&
          categories?.map((category, index) => (
            <CategoryItemLink
              key={index}
              to={`?category=${category.categoryValue.replace(
                /\+/g,
                "%2B"
              )}&tab=${tab}`}
            >
              {category.categoryName === qsCategory && (
                <SelectedSvg
                  width="24"
                  height="24"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <g id="style=outline">
                      <path
                        id="Vector (Stroke)"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.669 6.25671C20.0795 6.62617 20.1128 7.25846 19.7433 7.66897L10.7433 17.669C10.5598 17.8729 10.3005 17.9925 10.0263 17.9997C9.75204 18.0069 9.48688 17.9011 9.29289 17.7071L4.29289 12.707C3.90237 12.3165 3.90237 11.6833 4.2929 11.2928C4.68343 10.9023 5.31659 10.9023 5.70711 11.2928L9.96181 15.5476L18.2567 6.33104C18.6262 5.92053 19.2585 5.88726 19.669 6.25671Z"
                      ></path>
                    </g>
                  </g>
                </SelectedSvg>
              )}
              <CategoryName selected={category.categoryName === qsCategory}>
                {category.categoryName}
              </CategoryName>
            </CategoryItemLink>
          ))}
      </CategoryListBox>
    </CategorySelectBoxDiv>
  );
}
export default CategorySelectBox;
