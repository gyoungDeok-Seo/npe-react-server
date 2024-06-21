import { useEffect, useState } from "react";
import styled from "styled-components";
import { CreateEducationsLabel, EducationsInputBox } from "../../pages/CreateEducations";
import { Pilsu } from "../../pages/CareerCreate";
import { useDispatch, useSelector } from "react-redux";
import { setEducationEnd, setEducationStart } from "../../redux/createEducation";

const EducationsPeriodSelectBox = styled.div`
    margin-top: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`;
const EducationsPeriodSelectInner = styled.div`
    display: flex;
    flex: 1 1 0%;
    gap: 0.5rem;
`;
const EducationsPeriodSelect = styled.select`
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%239aa8bc' d='m12 15.375l-6-6l1.4-1.4L12 12.55l4.6-4.575l1.4 1.4z'/%3E%3C/svg%3E");
    --tw-shadow: 0 0 #0000;
    appearance: none;
    background-position: right 0.5rem center;
    background-repeat: no-repeat;
    background-size: 1.5em 1.5em;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    display: block;
    width: 100%;
    border-radius: 0.25rem;
    border-width: 1px;
    border-style: solid;
    background-color: #fff;
    padding: 0.75rem 1.5rem 0.75rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #0f172a;
    width: auto;
    word-wrap: normal;
    text-transform: none;
    flex-grow: 1;
    border-color: #e2e8f0;
    &:disabled {
        background-color: #f1f5f9;
        color: #64748b;
        opacity: 1;
    }
    &:focus {
        border-color: #64748b;
        outline: 1px solid #64748b;
    }
    @media (min-width: 1024px) {
        & {
            width: 100%;
        }
    }
`;
const CreateEducationsCheckboxBox = styled.div`
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
`;
const CreateEducationsCheckbox = styled.input`
    --tw-shadow: 0 0 #0000;
    color: #334155;
    user-select: none;
    flex-shrink: 0;
    display: inline-block;
    vertical-align: middle;
    background-origin: border-box;
    appearance: none;
    height: 1.25rem;
    width: 1.25rem;
    cursor: pointer;
    border-radius: 0.25rem;
    border-width: 2px;
    border-style: solid;
    border-color: #cbd5e1;
    background-color: #fff;
    &:checked {
        border-color: transparent;
        background-color: currentColor;
        background-size: 100% 100%;
        background-position: 50%;
        background-repeat: no-repeat;
        background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
    }
`;
const CreateEducationsCheckboxText = styled.label`
    margin-bottom: 0;
    cursor: pointer;
    padding-left: 0.5rem;
    font-size: 0.875rem;
    font-weight: 400;
    color: rgb(15 23 42 / 1);
`;

const EducationsPeriodSelectBox2 = styled.div`
    flex: 1 1 0%;
`;
const EducationsPeriodSelectInner2 = styled.div`
    display: flex;
    gap: 0.5rem;
`;

const CreateEducationsIsWorking = styled.input`
    display: block;
    width: 100%;
    border-radius: 0.25rem;
    border-width: 1px;
    border-style: solid;
    border-color: #e2e8f0;
    appearance: none;
    padding: 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    &:disabled {
        color: #0f172a;
        background-color: #f1f5f9;
        opacity: 1;
    }
    &:focus {
        border-color: #64748b;
        outline: 1px solid #64748b;
    }
    &::placeholder {
        font-weight: 500;
        color: #9da7b1;
    }
`;

// const PeriodValidationMessage = styled.div`
//   color: #be1e08;
//   font-size: 0.875rem;
//   margin-top: 0.5rem;
// `;

function EducationsPeriod() {
    const createEducation = useSelector((state) => state.createEducation);
    const dispatch = useDispatch();
    const [isWorking, setIsWorking] = useState(createEducation?.educationEnd === "1111-11-11" ?? false);
    const [endDateDisabled, setEndDateDisabled] = useState(createEducation?.educationEnd === "1111-11-11" ?? true);

    useEffect(() => {
        const bool = createEducation?.educationEnd === "1111-11-11" ? true : false;
        setIsWorking(bool);
        setEndDateDisabled(bool);
    }, [createEducation]);

    const handleStartChange = (e) => {
        const newStartYear = e.target.value;
        const newEducationStart = `${newStartYear}-${createEducation.educationStart.split("-")[1] || ""}-01`;
        dispatch(setEducationStart(newEducationStart));
        if (newStartYear && createEducation.educationStart.split("-")[1]) {
            setEndDateDisabled(false);
        }
    };

    const handleStartMonthChange = (e) => {
        const newStartMonth = e.target.value;
        const newEducationStart = `${createEducation.educationStart.split("-")[0] || ""}-${newStartMonth}-01`;
        dispatch(setEducationStart(newEducationStart));
        if (newStartMonth && createEducation.educationStart.split("-")[0]) {
            setEndDateDisabled(false);
        }
    };
    const handleEndYearChange = (e) => {
        const newEndYear = e.target.value;
        const newEducationEnd = `${newEndYear}-${createEducation.educationEnd.split("-")[1] || ""}-01`;
        dispatch(setEducationEnd(newEducationEnd));
    };

    const handleEndMonthChange = (e) => {
        const newEndMonth = e.target.value;
        const newEducationEnd = `${createEducation.educationEnd.split("-")[0] || ""}-${newEndMonth}-01`;
        dispatch(setEducationEnd(newEducationEnd));
    };

    const handleIsWorking = () => {
        setIsWorking((prevIsWorking) => !prevIsWorking);
        if (!isWorking) {
            setEndDateDisabled(true);
            dispatch(setEducationEnd("1111-11-11"));
        } else {
            setEndDateDisabled(false);
            dispatch(setEducationEnd(""));
        }
    };

    return (
        <>
            <EducationsInputBox>
                <CreateEducationsLabel>
                    교육 기간
                    <Pilsu>(필수)</Pilsu>
                </CreateEducationsLabel>
                <EducationsPeriodSelectBox>
                    <EducationsPeriodSelectInner>
                        <EducationsPeriodSelect value={createEducation.educationStart?.split("-")[0] || -1} onChange={handleStartChange}>
                            <option disabled="true" value="-1">
                                시작연도
                            </option>
                            <option value="2024">2024년</option>
                            <option value="2023">2023년</option>
                            <option value="2022">2022년</option>
                            <option value="2021">2021년</option>
                            <option value="2020">2020년</option>
                            <option value="2019">2019년</option>
                            <option value="2018">2018년</option>
                            <option value="2017">2017년</option>
                            <option value="2016">2016년</option>
                            <option value="2015">2015년</option>
                            <option value="2014">2014년</option>
                            <option value="2013">2013년</option>
                            <option value="2012">2012년</option>
                            <option value="2011">2011년</option>
                            <option value="2010">2010년</option>
                            <option value="2009">2009년</option>
                            <option value="2008">2008년</option>
                            <option value="2007">2007년</option>
                            <option value="2006">2006년</option>
                            <option value="2005">2005년</option>
                            <option value="2004">2004년</option>
                            <option value="2003">2003년</option>
                            <option value="2002">2002년</option>
                            <option value="2001">2001년</option>
                            <option value="2000">2000년</option>
                            <option value="1999">1999년</option>
                            <option value="1998">1998년</option>
                            <option value="1997">1997년</option>
                            <option value="1996">1996년</option>
                            <option value="1995">1995년</option>
                            <option value="1994">1994년</option>
                            <option value="1993">1993년</option>
                            <option value="1992">1992년</option>
                            <option value="1991">1991년</option>
                            <option value="1990">1990년</option>
                            <option value="1989">1989년</option>
                            <option value="1988">1988년</option>
                            <option value="1987">1987년</option>
                            <option value="1986">1986년</option>
                            <option value="1985">1985년</option>
                            <option value="1984">1984년</option>
                            <option value="1983">1983년</option>
                            <option value="1982">1982년</option>
                            <option value="1981">1981년</option>
                            <option value="1980">1980년</option>
                            <option value="1979">1979년</option>
                            <option value="1978">1978년</option>
                            <option value="1977">1977년</option>
                            <option value="1976">1976년</option>
                            <option value="1975">1975년</option>
                            <option value="1974">1974년</option>
                            <option value="1973">1973년</option>
                            <option value="1972">1972년</option>
                            <option value="1971">1971년</option>
                            <option value="1970">1970년</option>
                        </EducationsPeriodSelect>
                        <EducationsPeriodSelect value={createEducation.educationStart?.split("-")[1] || -1} onChange={handleStartMonthChange}>
                            <option disabled="true" value="-1">
                                월
                            </option>
                            <option value="01">1월</option>
                            <option value="02">2월</option>
                            <option value="03">3월</option>
                            <option value="04">4월</option>
                            <option value="05">5월</option>
                            <option value="06">6월</option>
                            <option value="07">7월</option>
                            <option value="08">8월</option>
                            <option value="09">9월</option>
                            <option value="10">10월</option>
                            <option value="11">11월</option>
                            <option value="12">12월</option>
                        </EducationsPeriodSelect>
                    </EducationsPeriodSelectInner>
                    <EducationsPeriodSelectBox2>
                        {isWorking ? (
                            <CreateEducationsIsWorking disabled value="현재" />
                        ) : (
                            <EducationsPeriodSelectInner2>
                                <EducationsPeriodSelect disabled={!createEducation.educationStart?.split("-")[0] || !createEducation.educationStart?.split("-")[1]} value={createEducation.educationEnd?.split("-")[0] || -1} onChange={handleEndYearChange}>
                                    <option disabled="true" value="-1">
                                        종료연도
                                    </option>
                                    <option value="2024">2024년</option>
                                    <option value="2023">2023년</option>
                                    <option value="2022">2022년</option>
                                    <option value="2021">2021년</option>
                                    <option value="2020">2020년</option>
                                    <option value="2019">2019년</option>
                                    <option value="2018">2018년</option>
                                    <option value="2017">2017년</option>
                                    <option value="2016">2016년</option>
                                    <option value="2015">2015년</option>
                                    <option value="2014">2014년</option>
                                    <option value="2013">2013년</option>
                                    <option value="2012">2012년</option>
                                    <option value="2011">2011년</option>
                                    <option value="2010">2010년</option>
                                    <option value="2009">2009년</option>
                                    <option value="2008">2008년</option>
                                    <option value="2007">2007년</option>
                                    <option value="2006">2006년</option>
                                    <option value="2005">2005년</option>
                                    <option value="2004">2004년</option>
                                    <option value="2003">2003년</option>
                                    <option value="2002">2002년</option>
                                    <option value="2001">2001년</option>
                                    <option value="2000">2000년</option>
                                    <option value="1999">1999년</option>
                                    <option value="1998">1998년</option>
                                    <option value="1997">1997년</option>
                                    <option value="1996">1996년</option>
                                    <option value="1995">1995년</option>
                                    <option value="1994">1994년</option>
                                    <option value="1993">1993년</option>
                                    <option value="1992">1992년</option>
                                    <option value="1991">1991년</option>
                                    <option value="1990">1990년</option>
                                    <option value="1989">1989년</option>
                                    <option value="1988">1988년</option>
                                    <option value="1987">1987년</option>
                                    <option value="1986">1986년</option>
                                    <option value="1985">1985년</option>
                                    <option value="1984">1984년</option>
                                    <option value="1983">1983년</option>
                                    <option value="1982">1982년</option>
                                    <option value="1981">1981년</option>
                                    <option value="1980">1980년</option>
                                    <option value="1979">1979년</option>
                                    <option value="1978">1978년</option>
                                    <option value="1977">1977년</option>
                                    <option value="1976">1976년</option>
                                    <option value="1975">1975년</option>
                                    <option value="1974">1974년</option>
                                    <option value="1973">1973년</option>
                                    <option value="1972">1972년</option>
                                    <option value="1971">1971년</option>
                                    <option value="1970">1970년</option>
                                </EducationsPeriodSelect>
                                <EducationsPeriodSelect disabled={!createEducation.educationStart?.split("-")[0] || !createEducation.educationStart?.split("-")[1]} value={createEducation.educationEnd?.split("-")[1] || -1} onChange={handleEndMonthChange}>
                                    <option disabled="true" value="-1">
                                        월
                                    </option>
                                    <option value="01">1월</option>
                                    <option value="02">2월</option>
                                    <option value="03">3월</option>
                                    <option value="04">4월</option>
                                    <option value="05">5월</option>
                                    <option value="06">6월</option>
                                    <option value="07">7월</option>
                                    <option value="08">8월</option>
                                    <option value="09">9월</option>
                                    <option value="10">10월</option>
                                    <option value="11">11월</option>
                                    <option value="12">12월</option>
                                </EducationsPeriodSelect>
                            </EducationsPeriodSelectInner2>
                        )}
                    </EducationsPeriodSelectBox2>
                </EducationsPeriodSelectBox>
            </EducationsInputBox>
            <CreateEducationsCheckboxBox>
                <CreateEducationsCheckbox type="checkbox" id="is-current-Educations" onClick={handleIsWorking} checked={createEducation.educationEnd === "1111-11-11"} />
                <CreateEducationsCheckboxText htmlFor="is-current-Educations">재학 중</CreateEducationsCheckboxText>
            </CreateEducationsCheckboxBox>
        </>
    );
}
export default EducationsPeriod;
