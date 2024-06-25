import { useEffect, useState } from "react";
import { CreateEducationsInput, CreateEducationsInputCount, CreateEducationsLabel, CreateEducationsPartTitleBox, EducationsInputBox } from "../../pages/CreateEducations";
import { useDispatch, useSelector } from "react-redux";
import { setEducationCourse } from "../../redux/createEducation";
import { useLocation } from "react-router-dom";

function CourseInput() {
    const createEducation = useSelector((state) => state.createEducation);
    const dispatch = useDispatch();
    const [courseLength, setCourseLength] = useState(0);
    const [condition, setCondition] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        setCourseLength(createEducation?.educationCourse?.length);
        if (pathname.split("/")[4]) {
            setCondition(true);
        }
    }, [condition]);

    const handleCourseChange = (e) => {
        const value = e.target.value;
        const valueLength = value.length;
        setCourseLength(valueLength);
        if (valueLength <= 50) {
            dispatch(setEducationCourse(value));
        }
    };

    return (
        <EducationsInputBox>
            <CreateEducationsPartTitleBox>
                <CreateEducationsLabel>전공/과정</CreateEducationsLabel>
                <CreateEducationsInputCount>{courseLength}/50</CreateEducationsInputCount>
            </CreateEducationsPartTitleBox>
            <CreateEducationsInput type="text" placeholder="전공/과정을 입력해 주세요. (예: 웹 개발 과정)" maxLength="50" value={createEducation?.educationCourse} onChange={handleCourseChange} />
        </EducationsInputBox>
    );
}
export default CourseInput;
