import React, { useState } from 'react';
import './NewComponent.css';  // If you want to add styles

const calculateAnxSym96 = (previousWeekAverage, currentWeekAverage) => {
    // Base odds ratio is 1.14 for every 5 μg/m³ increase
    const threshold = 5; // 5 μg/m³ threshold
    const baseOddsRatio = 1.14;
    
    // Calculate the difference between weeks
    const difference = currentWeekAverage - previousWeekAverage;
    
    // Calculate how many units of 5 μg/m³ increase
    const units = difference / threshold;
    
    // Calculate final odds ratio (compound for each unit of 5 μg/m³)
    const finalOddsRatio = units > 0 ? Math.pow(baseOddsRatio, units) : 1;
    
    return {
        difference: difference.toFixed(2),
        oddsRatio: finalOddsRatio.toFixed(2),
        increased: difference > 0
    };
};

const calculateAnxSym961 = (previousMonthAverage, currentMonthAverage) => {
    // Base odds ratio is 1.34 for every 5 μg/m³ increase over 30 days
    const threshold = 5; // 5 μg/m³ threshold
    const baseOddsRatio = 1.34;
    
    // Calculate the difference between months
    const difference = currentMonthAverage - previousMonthAverage;
    
    // Calculate how many units of 5 μg/m³ increase
    const units = difference / threshold;
    
    // Calculate final odds ratio (compound for each unit of 5 μg/m³)
    const finalOddsRatio = units > 0 ? Math.pow(baseOddsRatio, units) : 1;
    
    return {
        difference: difference.toFixed(2),
        oddsRatio: finalOddsRatio.toFixed(2),
        increased: difference > 0
    };
};

const calculateAnxSym962 = (previous180Average, current180Average) => {
    // Base odds ratio is 1.55 for every 5 μg/m³ increase over 180 days
    const threshold = 5; // 5 μg/m³ threshold
    const baseOddsRatio = 1.55;
    
    // Calculate the difference between 180-day periods
    const difference = current180Average - previous180Average;
    
    // Calculate how many units of 5 μg/m³ increase
    const units = difference / threshold;
    
    // Calculate final odds ratio (compound for each unit of 5 μg/m³)
    const finalOddsRatio = units > 0 ? Math.pow(baseOddsRatio, units) : 1;
    
    return {
        difference: difference.toFixed(2),
        oddsRatio: finalOddsRatio.toFixed(2),
        increased: difference > 0
    };
};

const calculateAnxSym963 = (previousYearAverage, currentYearAverage) => {
    // Base odds ratio is 1.33 for every 5 μg/m³ increase over 365 days
    const threshold = 5; // 5 μg/m³ threshold
    const baseOddsRatio = 1.33;
    
    // Calculate the difference between yearly periods
    const difference = currentYearAverage - previousYearAverage;
    
    // Calculate how many units of 5 μg/m³ increase
    const units = difference / threshold;
    
    // Calculate final odds ratio (compound for each unit of 5 μg/m³)
    const finalOddsRatio = units > 0 ? Math.pow(baseOddsRatio, units) : 1;
    
    return {
        difference: difference.toFixed(2),
        oddsRatio: finalOddsRatio.toFixed(2),
        increased: difference > 0
    };
};

const calculateAnxSym964 = (previous4YearAverage, current4YearAverage) => {
    // Base odds ratio is 1.29 for every 5 μg/m³ increase over 4 years
    const threshold = 5; // 5 μg/m³ threshold
    const baseOddsRatio = 1.29;
    
    // Calculate the difference between 4-year periods
    const difference = current4YearAverage - previous4YearAverage;
    
    // Calculate how many units of 5 μg/m³ increase
    const units = difference / threshold;
    
    // Calculate final odds ratio (compound for each unit of 5 μg/m³)
    const finalOddsRatio = units > 0 ? Math.pow(baseOddsRatio, units) : 1;
    
    return {
        difference: difference.toFixed(2),
        oddsRatio: finalOddsRatio.toFixed(2),
        increased: difference > 0
    };
};

const calculateAnxSym30 = (previousMonthAverage, currentMonthAverage) => {
    // Base odds ratio is 1.49 for every 5 μg/m³ increase month over month
    const threshold = 5; // 5 μg/m³ threshold
    const baseOddsRatio = 1.49;
    
    // Calculate the difference between months
    const difference = currentMonthAverage - previousMonthAverage;
    
    // Calculate how many units of 5 μg/m³ increase
    const units = difference / threshold;
    
    // Calculate final odds ratio (compound for each unit of 5 μg/m³)
    const finalOddsRatio = units > 0 ? Math.pow(baseOddsRatio, units) : 1;
    
    return {
        difference: difference.toFixed(2),
        oddsRatio: finalOddsRatio.toFixed(2),
        increased: difference > 0
    };
};

const calculateAnxSym00 = (previousMonthAverage, currentMonthAverage) => {
    // Base odds ratio is 1.12 for every 10 μg/m³ increase month over month
    const threshold = 10; // 10 μg/m³ threshold
    const baseOddsRatio = 1.12;
    
    // Calculate the difference between months
    const difference = currentMonthAverage - previousMonthAverage;
    
    // Calculate how many units of 10 μg/m³ increase
    const units = difference / threshold;
    
    // Calculate final odds ratio (compound for each unit of 10 μg/m³)
    const finalOddsRatio = units > 0 ? Math.pow(baseOddsRatio, units) : 1;
    
    return {
        difference: difference.toFixed(2),
        oddsRatio: finalOddsRatio.toFixed(2),
        increased: difference > 0
    };
};

const calculateAnxDis32 = (previousQuarterAverage, currentQuarterAverage) => {
    // Base hazard ratio is 1.097 for every 1.13 μg/m³ increase quarter over quarter
    const threshold = 1.13; // 1.13 μg/m³ threshold
    const baseHazardRatio = 1.097;
    
    // Calculate the difference between quarters
    const difference = currentQuarterAverage - previousQuarterAverage;
    
    // Calculate how many units of 1.13 μg/m³ increase
    const units = difference / threshold;
    
    // Calculate final hazard ratio (compound for each unit of 1.13 μg/m³)
    const finalHazardRatio = units > 0 ? Math.pow(baseHazardRatio, units) : 1;
    
    return {
        difference: difference.toFixed(2),
        hazardRatio: finalHazardRatio.toFixed(3),
        increased: difference > 0
    };
};

const calculateAnxSym001 = (previousQuarterAverage, currentQuarterAverage) => {
    // Base odds ratio is 1.1 for every 10 μg/m³ increase quarter over quarter
    const threshold = 10; // 10 μg/m³ threshold
    const baseOddsRatio = 1.1;
    
    // Calculate the difference between quarters
    const difference = currentQuarterAverage - previousQuarterAverage;
    
    // Calculate how many units of 10 μg/m³ increase
    const units = difference / threshold;
    
    // Calculate final odds ratio (compound for each unit of 10 μg/m³)
    const finalOddsRatio = units > 0 ? Math.pow(baseOddsRatio, units) : 1;
    
    return {
        difference: difference.toFixed(2),
        oddsRatio: finalOddsRatio.toFixed(2),
        increased: difference > 0
    };
};

const calculateAnxSym002 = (previousSixMonthAverage, currentSixMonthAverage) => {
    // Base odds ratio is 1.14 for every 10 μg/m³ increase per 6-month period
    const threshold = 10; // 10 μg/m³ threshold
    const baseOddsRatio = 1.14;
    
    // Calculate the difference between 6-month periods
    const difference = currentSixMonthAverage - previousSixMonthAverage;
    
    // Calculate how many units of 10 μg/m³ increase
    const units = difference / threshold;
    
    // Calculate final odds ratio (compound for each unit of 10 μg/m³)
    const finalOddsRatio = units > 0 ? Math.pow(baseOddsRatio, units) : 1;
    
    return {
        difference: difference.toFixed(2),
        oddsRatio: finalOddsRatio.toFixed(2),
        increased: difference > 0
    };
};

const calculateAnxSym003 = (previousYearAverage, currentYearAverage) => {
    // Base odds ratio is 1.15 for every 10 μg/m³ increase per 12-month period
    const threshold = 10; // 10 μg/m³ threshold
    const baseOddsRatio = 1.15;
    
    // Calculate the difference between yearly periods
    const difference = currentYearAverage - previousYearAverage;
    
    // Calculate how many units of 10 μg/m³ increase
    const units = difference / threshold;
    
    // Calculate final odds ratio (compound for each unit of 10 μg/m³)
    const finalOddsRatio = units > 0 ? Math.pow(baseOddsRatio, units) : 1;
    
    return {
        difference: difference.toFixed(2),
        oddsRatio: finalOddsRatio.toFixed(2),
        increased: difference > 0
    };
};

const calculateAnxSym05 = (previousYearAverage, currentYearAverage) => {
    // Base odds ratio is 1.14 for every 25 μg/m³ increase year over year
    const threshold = 25; // 25 μg/m³ threshold
    const baseOddsRatio = 1.14;
    
    // Calculate the difference between years
    const difference = currentYearAverage - previousYearAverage;
    
    // Calculate how many units of 25 μg/m³ increase
    const units = difference / threshold;
    
    // Calculate final odds ratio (compound for each unit of 25 μg/m³)
    const finalOddsRatio = units > 0 ? Math.pow(baseOddsRatio, units) : 1;
    
    return {
        difference: difference.toFixed(2),
        oddsRatio: finalOddsRatio.toFixed(2),
        increased: difference > 0
    };
};

const BrainHealthPM2_5 = () => {
    const [prevWeekPM25, setPrevWeekPM25] = useState(10);
    const [currentWeekPM25, setCurrentWeekPM25] = useState(15);
    
    const weeklyAnxietyRisk = calculateAnxSym96(prevWeekPM25, currentWeekPM25);
    
    // Add new state variables for monthly averages
    const [prevMonthPM25, setPrevMonthPM25] = useState(10);
    const [currentMonthPM25, setCurrentMonthPM25] = useState(15);
    
    // Get results from both calculations
    const monthlyAnxietyRisk = calculateAnxSym961(prevMonthPM25, currentMonthPM25);
    
    // Add new state variables for 180-day averages
    const [prev180PM25, setPrev180PM25] = useState(10);
    const [current180PM25, setCurrent180PM25] = useState(15);
    
    // Get results from the 180-day calculation
    const sixMonthAnxietyRisk = calculateAnxSym962(prev180PM25, current180PM25);
    
    // Add new state variables for yearly averages
    const [prevYearPM25, setPrevYearPM25] = useState(10);
    const [currentYearPM25, setCurrentYearPM25] = useState(15);
    
    // Get results from the yearly calculation
    const yearlyAnxietyRisk = calculateAnxSym963(prevYearPM25, currentYearPM25);
    
    // Add new state variables for 4-year averages
    const [prev4YearPM25, setPrev4YearPM25] = useState(10);
    const [current4YearPM25, setCurrent4YearPM25] = useState(15);
    
    // Get results from the 4-year calculation
    const fourYearAnxietyRisk = calculateAnxSym964(prev4YearPM25, current4YearPM25);
    
    // Add new state variables for monthly averages (45-74 age group)
    const [prevMonth45PM25, setPrevMonth45PM25] = useState(10);
    const [currentMonth45PM25, setCurrentMonth45PM25] = useState(15);
    
    // Get results from the calculation
    const monthlyAnxietyRisk45 = calculateAnxSym30(prevMonth45PM25, currentMonth45PM25);

    // Add new state variables for monthly averages (women over 65)
    const [prevMonthWomenPM25, setPrevMonthWomenPM25] = useState(10);
    const [currentMonthWomenPM25, setCurrentMonthWomenPM25] = useState(20);
    
    // Get results from the calculation
    const monthlyAnxietyRiskWomen = calculateAnxSym00(prevMonthWomenPM25, currentMonthWomenPM25);
    
    // Add new state variables for quarterly averages
    const [prevQuarterPM25, setPrevQuarterPM25] = useState(10);
    const [currentQuarterPM25, setCurrentQuarterPM25] = useState(11.13);
    
    // Get results from the calculation
    const quarterlyAnxietyDiagnosis = calculateAnxDis32(prevQuarterPM25, currentQuarterPM25);
    
    // Add after existing monthly women's calculator state variables
    const [prevQuarterWomenPM25, setPrevQuarterWomenPM25] = useState(10);
    const [currentQuarterWomenPM25, setCurrentQuarterWomenPM25] = useState(20);
    
    // Get results from the calculation
    const quarterlyAnxietyRiskWomen = calculateAnxSym001(prevQuarterWomenPM25, currentQuarterWomenPM25);
    
    // Add after existing quarterly women's calculator state variables
    const [prevSixMonthWomenPM25, setPrevSixMonthWomenPM25] = useState(10);
    const [currentSixMonthWomenPM25, setCurrentSixMonthWomenPM25] = useState(20);
    
    // Get results from the calculation
    const sixMonthAnxietyRiskWomen = calculateAnxSym002(prevSixMonthWomenPM25, currentSixMonthWomenPM25);
    
    // Add after existing six-month women's calculator state variables
    const [prevYearWomenPM25, setPrevYearWomenPM25] = useState(10);
    const [currentYearWomenPM25, setCurrentYearWomenPM25] = useState(20);
    
    // Get results from the calculation
    const yearlyAnxietyRiskWomen = calculateAnxSym003(prevYearWomenPM25, currentYearWomenPM25);
    
    // Add new state variables for yearly children's averages
    const [prevYearChildrenPM25, setPrevYearChildrenPM25] = useState(10);
    const [currentYearChildrenPM25, setCurrentYearChildrenPM25] = useState(35);
    
    // Get results from the calculation
    const yearlyAnxietyRiskChildren = calculateAnxSym05(prevYearChildrenPM25, currentYearChildrenPM25);
    
    return (
        <div className="brain-health-calculator">
            <h2>PM2.5 Anxiety Risk Calculators for Adults Over 65 Years Old</h2>
            
            {/* Weekly Calculator */}
            <h3>Weekly PM2.5 Anxiety Risk Calculator (AnxSym96)</h3>
            <div className="calculator-section">
                <p className="age-notice">Results applicable for adults over 65 years old</p>
                <label>
                    Previous Week PM2.5 Average:
                    <input 
                        type="number" 
                        value={prevWeekPM25}
                        onChange={(e) => setPrevWeekPM25(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Current Week PM2.5 Average:
                    <input 
                        type="number" 
                        value={currentWeekPM25}
                        onChange={(e) => setCurrentWeekPM25(Number(e.target.value))}
                    />
                </label>
                <div className="results">
                    <p>Change in PM2.5: {weeklyAnxietyRisk.difference} μg/m³</p>
                    <p>7-Day Odds Ratio (&gt;65 years): {weeklyAnxietyRisk.oddsRatio}</p>
                    <p>Risk Status: {
                        weeklyAnxietyRisk.increased 
                            ? `Increased risk of anxiety symptoms in elderly adults` 
                            : `No increased risk`
                    }</p>
                </div>
            </div>

            {/* Monthly Calculator */}
            <h3>Monthly PM2.5 Anxiety Risk Calculator (AnxSym961)</h3>
            <div className="calculator-section">
                <p className="age-notice">Results applicable for adults over 65 years old</p>
                <label>
                    Previous Month PM2.5 Average:
                    <input 
                        type="number" 
                        value={prevMonthPM25}
                        onChange={(e) => setPrevMonthPM25(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Current Month PM2.5 Average:
                    <input 
                        type="number" 
                        value={currentMonthPM25}
                        onChange={(e) => setCurrentMonthPM25(Number(e.target.value))}
                    />
                </label>
                <div className="results">
                    <p>Change in PM2.5: {monthlyAnxietyRisk.difference} μg/m³</p>
                    <p>30-Day Odds Ratio (&gt;65 years): {monthlyAnxietyRisk.oddsRatio}</p>
                    <p>Risk Status: {
                        monthlyAnxietyRisk.increased 
                            ? `Increased risk of anxiety symptoms in elderly adults` 
                            : `No increased risk`
                    }</p>
                </div>
            </div>

            {/* 180-Day Calculator */}
            <h3>180-Day PM2.5 Anxiety Risk Calculator (AnxSym962)</h3>
            <div className="calculator-section">
                <p className="age-notice">Results applicable for adults over 65 years old</p>
                <label>
                    Previous 180-Day PM2.5 Average:
                    <input 
                        type="number" 
                        value={prev180PM25}
                        onChange={(e) => setPrev180PM25(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Current 180-Day PM2.5 Average:
                    <input 
                        type="number" 
                        value={current180PM25}
                        onChange={(e) => setCurrent180PM25(Number(e.target.value))}
                    />
                </label>
                <div className="results">
                    <p>Change in PM2.5: {sixMonthAnxietyRisk.difference} μg/m³</p>
                    <p>180-Day Odds Ratio (&gt;65 years): {sixMonthAnxietyRisk.oddsRatio}</p>
                    <p>Risk Status: {
                        sixMonthAnxietyRisk.increased 
                            ? `Increased risk of anxiety symptoms in elderly adults` 
                            : `No increased risk`
                    }</p>
                </div>
            </div>

            {/* Yearly Calculator */}
            <h3>365-Day PM2.5 Anxiety Risk Calculator (AnxSym963)</h3>
            <div className="calculator-section">
                <p className="age-notice">Results applicable for adults over 65 years old</p>
                <label>
                    Previous Year PM2.5 Average:
                    <input 
                        type="number" 
                        value={prevYearPM25}
                        onChange={(e) => setPrevYearPM25(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Current Year PM2.5 Average:
                    <input 
                        type="number" 
                        value={currentYearPM25}
                        onChange={(e) => setCurrentYearPM25(Number(e.target.value))}
                    />
                </label>
                <div className="results">
                    <p>Change in PM2.5: {yearlyAnxietyRisk.difference} μg/m³</p>
                    <p>365-Day Odds Ratio (&gt;65 years): {yearlyAnxietyRisk.oddsRatio}</p>
                    <p>Risk Status: {
                        yearlyAnxietyRisk.increased 
                            ? `Increased risk of anxiety symptoms in elderly adults` 
                            : `No increased risk`
                    }</p>
                </div>
            </div>

            {/* 4-Year Calculator */}
            <h3>4-Year PM2.5 Anxiety Risk Calculator (AnxSym964)</h3>
            <div className="calculator-section">
                <p className="age-notice">Results applicable for adults over 65 years old</p>
                <label>
                    Previous 4-Year PM2.5 Average:
                    <input 
                        type="number" 
                        value={prev4YearPM25}
                        onChange={(e) => setPrev4YearPM25(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Current 4-Year PM2.5 Average:
                    <input 
                        type="number" 
                        value={current4YearPM25}
                        onChange={(e) => setCurrent4YearPM25(Number(e.target.value))}
                    />
                </label>
                <div className="results">
                    <p>Change in PM2.5: {fourYearAnxietyRisk.difference} μg/m³</p>
                    <p>4-Year Odds Ratio (&gt;65 years): {fourYearAnxietyRisk.oddsRatio}</p>
                    <p>Risk Status: {
                        fourYearAnxietyRisk.increased 
                            ? `Increased risk of anxiety symptoms in elderly adults` 
                            : `No increased risk`
                    }</p>
                </div>
            </div>

            <h3>Monthly PM2.5 Anxiety Risk Calculator (AnxSym30)</h3>
            <div className="calculator-section">
                <p className="age-notice">Results applicable for adults aged 45-74 years</p>
                <label>
                    Previous Month PM2.5 Average:
                    <input 
                        type="number" 
                        value={prevMonth45PM25}
                        onChange={(e) => setPrevMonth45PM25(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Current Month PM2.5 Average:
                    <input 
                        type="number" 
                        value={currentMonth45PM25}
                        onChange={(e) => setCurrentMonth45PM25(Number(e.target.value))}
                    />
                </label>
                <div className="results">
                    <p>Change in PM2.5: {monthlyAnxietyRisk45.difference} μg/m³</p>
                    <p>Monthly Odds Ratio (Ages 45-74): {monthlyAnxietyRisk45.oddsRatio}</p>
                    <p>Risk Status: {
                        monthlyAnxietyRisk45.increased 
                            ? `Increased risk of anxiety symptoms in adults aged 45-74` 
                            : `No increased risk`
                    }</p>
                </div>
            </div>

            <h3>Monthly PM2.5 Anxiety Risk Calculator for Women (AnxSym00)</h3>
            <div className="calculator-section">
                <p className="age-notice">Results applicable for women over 65 years old</p>
                <label>
                    Previous Month PM2.5 Average:
                    <input 
                        type="number" 
                        value={prevMonthWomenPM25}
                        onChange={(e) => setPrevMonthWomenPM25(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Current Month PM2.5 Average:
                    <input 
                        type="number" 
                        value={currentMonthWomenPM25}
                        onChange={(e) => setCurrentMonthWomenPM25(Number(e.target.value))}
                    />
                </label>
                <div className="results">
                    <p>Change in PM2.5: {monthlyAnxietyRiskWomen.difference} μg/m³</p>
                    <p>Monthly Odds Ratio (Women &gt;65): {monthlyAnxietyRiskWomen.oddsRatio}</p>
                    <p>Risk Status: {
                        monthlyAnxietyRiskWomen.increased 
                            ? `Increased risk of anxiety symptoms in women over 65` 
                            : `No increased risk`
                    }</p>
                </div>
            </div>

            <h3>Quarterly PM2.5 Anxiety Disorder Diagnosis Risk Calculator (AnxDis32)</h3>
            <div className="calculator-section">
                <p className="age-notice">Results applicable for adults over 30 years old</p>
                <label>
                    Previous Quarter PM2.5 Average:
                    <input 
                        type="number" 
                        value={prevQuarterPM25}
                        onChange={(e) => setPrevQuarterPM25(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Current Quarter PM2.5 Average:
                    <input 
                        type="number" 
                        value={currentQuarterPM25}
                        onChange={(e) => setCurrentQuarterPM25(Number(e.target.value))}
                    />
                </label>
                <div className="results">
                    <p>Change in PM2.5: {quarterlyAnxietyDiagnosis.difference} μg/m³</p>
                    <p>Quarterly Hazard Ratio (&gt;30 years): {quarterlyAnxietyDiagnosis.hazardRatio}</p>
                    <p>Risk Status: {
                        quarterlyAnxietyDiagnosis.increased 
                            ? `Increased risk of anxiety disorder diagnosis in adults over 30` 
                            : `No increased risk`
                    }</p>
                </div>
            </div>

            <h3>Quarterly PM2.5 Anxiety Risk Calculator for Women (AnxSym001)</h3>
            <div className="calculator-section">
                <p className="age-notice">Results applicable for women over 65 years old</p>
                <label>
                    Previous Quarter PM2.5 Average:
                    <input 
                        type="number" 
                        value={prevQuarterWomenPM25}
                        onChange={(e) => setPrevQuarterWomenPM25(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Current Quarter PM2.5 Average:
                    <input 
                        type="number" 
                        value={currentQuarterWomenPM25}
                        onChange={(e) => setCurrentQuarterWomenPM25(Number(e.target.value))}
                    />
                </label>
                <div className="results">
                    <p>Change in PM2.5: {quarterlyAnxietyRiskWomen.difference} μg/m³</p>
                    <p>Quarterly Odds Ratio (Women &gt;65): {quarterlyAnxietyRiskWomen.oddsRatio}</p>
                    <p>Risk Status: {
                        quarterlyAnxietyRiskWomen.increased 
                            ? `Increased risk of anxiety symptoms in women over 65` 
                            : `No increased risk`
                    }</p>
                </div>
            </div>

            <h3>6-Month PM2.5 Anxiety Risk Calculator for Women (AnxSym002)</h3>
            <div className="calculator-section">
                <p className="age-notice">Results applicable for women over 65 years old</p>
                <label>
                    Previous 6-Month PM2.5 Average:
                    <input 
                        type="number" 
                        value={prevSixMonthWomenPM25}
                        onChange={(e) => setPrevSixMonthWomenPM25(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Current 6-Month PM2.5 Average:
                    <input 
                        type="number" 
                        value={currentSixMonthWomenPM25}
                        onChange={(e) => setCurrentSixMonthWomenPM25(Number(e.target.value))}
                    />
                </label>
                <div className="results">
                    <p>Change in PM2.5: {sixMonthAnxietyRiskWomen.difference} μg/m³</p>
                    <p>6-Month Odds Ratio (Women &gt;65): {sixMonthAnxietyRiskWomen.oddsRatio}</p>
                    <p>Risk Status: {
                        sixMonthAnxietyRiskWomen.increased 
                            ? `Increased risk of anxiety symptoms in women over 65` 
                            : `No increased risk`
                    }</p>
                </div>
            </div>

            <h3>12-Month PM2.5 Anxiety Risk Calculator for Women (AnxSym003)</h3>
            <div className="calculator-section">
                <p className="age-notice">Results applicable for women over 65 years old</p>
                <label>
                    Previous Year PM2.5 Average:
                    <input 
                        type="number" 
                        value={prevYearWomenPM25}
                        onChange={(e) => setPrevYearWomenPM25(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Current Year PM2.5 Average:
                    <input 
                        type="number" 
                        value={currentYearWomenPM25}
                        onChange={(e) => setCurrentYearWomenPM25(Number(e.target.value))}
                    />
                </label>
                <div className="results">
                    <p>Change in PM2.5: {yearlyAnxietyRiskWomen.difference} μg/m³</p>
                    <p>12-Month Odds Ratio (Women &gt;65): {yearlyAnxietyRiskWomen.oddsRatio}</p>
                    <p>Risk Status: {
                        yearlyAnxietyRiskWomen.increased 
                            ? `Increased risk of anxiety symptoms in women over 65` 
                            : `No increased risk`
                    }</p>
                </div>
            </div>

            <h3>Yearly PM2.5 Anxiety Risk Calculator for Children (AnxSym05)</h3>
            <div className="calculator-section">
                <p className="age-notice">Results applicable for children under 12 years old</p>
                <label>
                    Previous Year PM2.5 Average:
                    <input 
                        type="number" 
                        value={prevYearChildrenPM25}
                        onChange={(e) => setPrevYearChildrenPM25(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Current Year PM2.5 Average:
                    <input 
                        type="number" 
                        value={currentYearChildrenPM25}
                        onChange={(e) => setCurrentYearChildrenPM25(Number(e.target.value))}
                    />
                </label>
                <div className="results">
                    <p>Change in PM2.5: {yearlyAnxietyRiskChildren.difference} μg/m³</p>
                    <p>Yearly Odds Ratio (Children &lt;12): {yearlyAnxietyRiskChildren.oddsRatio}</p>
                    <p>Risk Status: {
                        yearlyAnxietyRiskChildren.increased 
                            ? `Increased risk of anxiety symptoms in children under 12` 
                            : `No increased risk`
                    }</p>
                </div>
            </div>
        </div>
    );
};

export default BrainHealthPM2_5; 