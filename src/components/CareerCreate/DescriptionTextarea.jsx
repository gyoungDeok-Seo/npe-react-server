import {  useEffect, useState } from "react";
import styled from "styled-components";
import { CareerCreateLabel } from "../../pages/CareerCreate";
import { useDispatch, useSelector } from "react-redux";
import { setDescription } from "../../redux/createCareer";
import { useLocation } from "react-router-dom";

const CareerCreateTextareaBox = styled.div`
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
`;
const CareerCreateTextareaTextBox = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
`;
const CareerCreateTextarea = styled.textarea`
    appearance: none;
    display: block;
    min-height: 9rem;
    width: 100%;
    resize: none;
    border-radius: 0.25rem;
    border-width: 1px;
    border-style: solid;
    border-color: #e2e8f0;
    background-color: #fff;
    padding: 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #0f172a;
    &:focus {
        border-color: #64748b;
        outline: 1px solid #64748b;
    }
    &::placeholder {
        font-weight: 500;
        color: #9da7b1;
    }
`;
const CareerCreateTextareaCount = styled.p`
    text-align: right;
    font-size: 0.875rem;
    font-weight: 400;
    color: #64748b;
`;
function DescriptionTextarea() {
    const createCareer = useSelector((state) => state.createCareer);
    const dispatch = useDispatch();
    const [descriptionLength, setDescriptionLength] = useState(createCareer.description?.length);
    const [condition, setCondition] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        setDescriptionLength(createCareer?.description?.length);
        if (pathname.split("/")[4]) {
            setCondition(true);
        }
    }, [condition]);

    const handleDescriptionChange = (e) => {
        const value = e.target.value;
        const valueLength = value.length;
        setDescriptionLength(valueLength);
        if (valueLength <= 1000) {
            dispatch(setDescription(value));
        }
    };
    return (
        <CareerCreateTextareaBox>
            <CareerCreateTextareaTextBox>
                <CareerCreateLabel>어떤 일을 했나요?</CareerCreateLabel>
            </CareerCreateTextareaTextBox>
            <CareerCreateTextarea
                placeholder="담당한 업무, 프로젝트 및 활동을 입력해 주세요.
                              예:
                              • 쇼핑라이브 프론트 지면 개발
                              • 프론트 매시업 api 개발"
                onChange={handleDescriptionChange}
                value={createCareer.description}
                maxLength={1000}
            ></CareerCreateTextarea>
            <CareerCreateTextareaCount>{descriptionLength}/1000</CareerCreateTextareaCount>
        </CareerCreateTextareaBox>
    );
}
export default DescriptionTextarea;
