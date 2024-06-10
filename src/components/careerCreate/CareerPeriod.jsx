import { useContext, useState } from "react";
import styled from "styled-components";
import {
  CareerCreateCheckbox,
  CareerCreateCheckboxBox,
  CareerCreateIsWorking,
  CareerCreateLabel,
  CareerPeriodSelect,
  CareerPeriodSelectBox,
  CareerPeriodSelectBox2,
  CareerPeriodSelectInner,
  CareerPeriodSelectInner2,
  CareerSelectBox,
  Pilsu,
} from "../../pages/CareerCreate";
import { CreateCareerContext } from "../../context/CreateCareerContext";

const CareerCreateCheckboxText = styled.label`
  margin-bottom: 0;
  cursor: pointer;
  padding-left: 0.5rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: rgb(15 23 42 / 1);
`;

function CareerPeriod() {
  const { datas, setDatas } = useContext(CreateCareerContext);
  const [endDateDisabled, setEndDateDisabled] = useState(true);
  const [isWorking, setIsworking] = useState(false);

  const handleStartChange = (e) => {
    setDatas((prevDatas) => ({
      ...prevDatas,
      startYear: e.target.value,
    }));
    if (e.target.value && datas.startMonth) {
      setEndDateDisabled(false);
    }
  };

  const handleStartMonthChange = (e) => {
    setDatas((prevDatas) => ({
      ...prevDatas,
      startMonth: e.target.value,
    }));
    if (e.target.value && datas.startYear) {
      setEndDateDisabled(false);
    }
  };

  const handleEndYearChange = (e) => {
    setDatas((prevDatas) => ({
      ...prevDatas,
      endYear: e.target.value,
    }));
  };

  const handleEndMonthChange = (e) => {
    setDatas((prevDatas) => ({
      ...prevDatas,
      endMonth: e.target.value,
    }));
  };

  const handleIsWorking = () => {
    setIsworking((prevIsWorking) => !prevIsWorking);
  };
  return (
    <>
      <CareerSelectBox>
        <CareerCreateLabel>
          재직 기간
          <Pilsu>(필수)</Pilsu>
        </CareerCreateLabel>
        <CareerPeriodSelectBox>
          <CareerPeriodSelectInner>
            <CareerPeriodSelect
              value={datas.startYear}
              onChange={handleStartChange}
            >
              <option disabled="" value="-1">
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
            </CareerPeriodSelect>
            <CareerPeriodSelect
              value={datas.startMonth}
              onChange={handleStartMonthChange}
            >
              <option disabled="" value="-1">
                월
              </option>
              <option value="0">1월</option>
              <option value="1">2월</option>
              <option value="2">3월</option>
              <option value="3">4월</option>
              <option value="4">5월</option>
              <option value="5">6월</option>
              <option value="6">7월</option>
              <option value="7">8월</option>
              <option value="8">9월</option>
              <option value="9">10월</option>
              <option value="10">11월</option>
              <option value="11">12월</option>
            </CareerPeriodSelect>
          </CareerPeriodSelectInner>
          <CareerPeriodSelectBox2>
            {isWorking ? (
              <CareerCreateIsWorking disabled value="현재" />
            ) : (
              <CareerPeriodSelectInner2>
                <CareerPeriodSelect
                  disabled={endDateDisabled}
                  value={datas.endYear}
                  onChange={handleEndYearChange}
                >
                  <option disabled="" value="-1">
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
                </CareerPeriodSelect>
                <CareerPeriodSelect
                  disabled={endDateDisabled}
                  value={datas.endMonth}
                  onChange={handleEndMonthChange}
                >
                  <option disabled="" value="-1">
                    월
                  </option>
                  <option value="0">1월</option>
                  <option value="1">2월</option>
                  <option value="2">3월</option>
                  <option value="3">4월</option>
                  <option value="4">5월</option>
                  <option value="5">6월</option>
                  <option value="6">7월</option>
                  <option value="7">8월</option>
                  <option value="8">9월</option>
                  <option value="9">10월</option>
                  <option value="10">11월</option>
                  <option value="11">12월</option>
                </CareerPeriodSelect>
              </CareerPeriodSelectInner2>
            )}
          </CareerPeriodSelectBox2>
        </CareerPeriodSelectBox>
      </CareerSelectBox>
      <CareerCreateCheckboxBox>
        <CareerCreateCheckbox
          type="checkbox"
          id="is-current-career"
          onChange={handleIsWorking}
        />
        <CareerCreateCheckboxText htmlFor="is-current-career">
          재직 중
        </CareerCreateCheckboxText>
      </CareerCreateCheckboxBox>
    </>
  );
}
export default CareerPeriod;
