import React, { useState } from 'react';
import './NewComponent.css';  // If you want to add styles
import { calculateDep32 } from '../utils/anxietyCalculations';

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

const calculateDep96 = (previousWeekAverage, currentWeekAverage) => {
    // Base odds ratio is 1.07 for every 5 μg/m³ increase over 7 days
    const threshold = 5; // 5 μg/m³ threshold
    const baseOddsRatio = 1.07;
    
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

const calculateDep961 = (previousMonthAverage, currentMonthAverage) => {
    // Base odds ratio is 1.2 for every 5 μg/m³ increase over 30 days
    const threshold = 5; // 5 μg/m³ threshold
    const baseOddsRatio = 1.2;
    
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

const calculateDep963 = (previousYearAverage, currentYearAverage) => {
    // Base odds ratio is 1.1 for every 5 μg/m³ increase over 365 days
    const threshold = 5; // 5 μg/m³ threshold
    const baseOddsRatio = 1.1;
    
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

const calculateDep964 = (previous4YearAverage, current4YearAverage) => {
    // Base odds ratio is 1.17 for every 5 μg/m³ increase over 4 years
    const threshold = 5; // 5 μg/m³ threshold
    const baseOddsRatio = 1.17;
    
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

const calculateDep801Dep701 = (previous180Average, current180Average) => {
    // Base odds ratio is 1.102 for every 10 μg/m³ increase over 180 days
    const threshold = 10; // 10 μg/m³ threshold
    const baseOddsRatio = 1.102;
    
    // Calculate the difference between 6-month periods
    const difference = current180Average - previous180Average;
    
    // Calculate how many units of 10 μg/m³ increase
    const units = difference / threshold;
    
    // Calculate final odds ratio (compound for each unit of 10 μg/m³)
    const finalOddsRatio = units > 0 ? Math.pow(baseOddsRatio, units) : 1;
    
    return {
        difference: difference.toFixed(2),
        oddsRatio: finalOddsRatio.toFixed(3),
        increased: difference > 0
    };
};

const calculateDep05 = (annualMeanPM25) => {
    // Base odds ratio is 1.69 when annual mean is above 25 μg/m³
    const threshold = 25; // 25 μg/m³ threshold
    const baseOddsRatio = 1.69;
    
    // Calculate if above threshold
    const isAboveThreshold = annualMeanPM25 > threshold;
    
    // Return odds ratio of 1.69 if above threshold, else 1
    const finalOddsRatio = isAboveThreshold ? baseOddsRatio : 1;
    
    return {
        annualMean: annualMeanPM25.toFixed(2),
        oddsRatio: finalOddsRatio.toFixed(2),
        increased: isAboveThreshold
    };
};

const calculateDepSym17 = (lowerQuartilePM25, upperQuartilePM25) => {
    // Base risk ratio is 1.19 for every 6.9 μg/m³ IQRR increase during second trimester
    const threshold = 6.9; // 6.9 μg/m³ threshold
    const baseRiskRatio = 1.19;
    
    // Calculate the difference between quartiles
    const difference = upperQuartilePM25 - lowerQuartilePM25;
    
    // Calculate how many units of 6.9 μg/m³ increase
    const units = difference / threshold;
    
    // Calculate final risk ratio (compound for each unit of 6.9 μg/m³)
    const finalRiskRatio = units > 0 ? Math.pow(baseRiskRatio, units) : 1;
    
    return {
        difference: difference.toFixed(2),
        riskRatio: finalRiskRatio.toFixed(2),
        increased: difference > 0
    };
};

const calculateDepDis32 = (lowerQuartilePM25, upperQuartilePM25) => {
    // Base odds ratio is 1.19 for every 3.8 μg/m³ IQR increase
    const threshold = 3.8; // 3.8 μg/m³ threshold
    const baseOddsRatio = 1.19;
    
    // Calculate the difference between quartiles
    const difference = upperQuartilePM25 - lowerQuartilePM25;
    
    // Calculate how many units of 3.8 μg/m³ increase
    const units = difference / threshold;
    
    // Calculate final odds ratio (compound for each unit of 3.8 μg/m³)
    const finalOddsRatio = units > 0 ? Math.pow(baseOddsRatio, units) : 1;
    
    return {
        difference: difference.toFixed(2),
        oddsRatio: finalOddsRatio.toFixed(3),
        increased: difference > 0
    };
};

const calculateDepDis34 = (previous6MonthAverage, current6MonthAverage) => {
    // Base hazard ratio is 1.16 for every 5 μg/m³ increase over 6 months
    const threshold = 5; // 5 μg/m³ threshold
    const baseHazardRatio = 1.16;
    
    // Calculate the difference between 6-month periods
    const difference = current6MonthAverage - previous6MonthAverage;
    
    // Calculate how many units of 5 μg/m³ increase
    const units = difference / threshold;
    
    // Calculate final hazard ratio (compound for each unit of 5 μg/m³)
    const finalHazardRatio = units > 0 ? Math.pow(baseHazardRatio, units) : 1;
    
    return {
        difference: difference.toFixed(2),
        hazardRatio: finalHazardRatio.toFixed(3),
        increased: difference > 0
    };
};

const calculateCogFunc80 = (lowerQuartilePM25, upperQuartilePM25) => {
    // Base decrease is 7.48% for every 11.37 μg/m³ IQR increase
    const threshold = 11.37; // 11.37 μg/m³ threshold
    const baseDecrease = 7.48;
    
    // Calculate the difference between quartiles
    const difference = upperQuartilePM25 - lowerQuartilePM25;
    
    // Calculate how many units of 11.37 μg/m³ increase
    const units = difference / threshold;
    
    // Calculate final decrease percentage (linear scaling)
    const finalDecrease = units > 0 ? baseDecrease * units : 0;
    
    return {
        difference: difference.toFixed(2),
        decreasePercentage: finalDecrease.toFixed(2),
        decreased: difference > 0
    };
};

const calculateCogScor79 = (previousAnnualAverage, currentAnnualAverage) => {
    // Base decrease is 0.021 points for every 10 μg/m³ annual increase
    const threshold = 10; // 10 μg/m³ threshold
    const baseDecrease = 0.021;
    
    // Calculate the difference between annual averages
    const difference = currentAnnualAverage - previousAnnualAverage;
    
    // Calculate how many units of 10 μg/m³ increase
    const units = difference / threshold;
    
    // Calculate final decrease in score (linear scaling)
    const finalDecrease = units > 0 ? baseDecrease * units : 0;
    
    return {
        difference: difference.toFixed(2),
        scoreDecrease: finalDecrease.toFixed(3),
        decreased: difference > 0
    };
};

const calculateCOGTP26 = (previousAnnualAverage, currentAnnualAverage) => {
    // Base decrease is 0.7% in throughput for every 8.8 μg/m³ annual increase
    const threshold = 8.8; // 8.8 μg/m³ threshold
    const baseDecrease = 0.7;
    
    // Calculate the difference between annual averages
    const difference = currentAnnualAverage - previousAnnualAverage;
    
    // Calculate how many units of 8.8 μg/m³ increase
    const units = difference / threshold;
    
    // Calculate final decrease in throughput (linear scaling)
    const finalDecrease = units > 0 ? baseDecrease * units : 0;
    
    return {
        difference: difference.toFixed(2),
        throughputDecrease: finalDecrease.toFixed(2),
        decreased: difference > 0
    };
};

const calculateCogResp261 = (previousAnnualAverage, currentAnnualAverage) => {
    // Base increase is 6.18% in interference time for every 8.8 μg/m³ annual increase
    const threshold = 8.8; // 8.8 μg/m³ threshold
    const baseIncrease = 6.18;
    
    // Calculate the difference between annual averages
    const difference = currentAnnualAverage - previousAnnualAverage;
    
    // Calculate how many units of 8.8 μg/m³ increase
    const units = difference / threshold;
    
    // Calculate final increase in interference time (linear scaling)
    const finalIncrease = units > 0 ? baseIncrease * units : 0;
    
    return {
        difference: difference.toFixed(2),
        interferenceIncrease: finalIncrease.toFixed(2),
        increased: difference > 0
    };
};

const calculateCogMath26 = (previousAnnualAverage, currentAnnualAverage) => {
    // Base decrease is 1.51% in math response time for every 8.8 μg/m³ annual increase
    const threshold = 8.8; // 8.8 μg/m³ threshold
    const baseDecrease = 1.51;
    
    // Calculate the difference between annual averages
    const difference = currentAnnualAverage - previousAnnualAverage;
    
    // Calculate how many units of 8.8 μg/m³ increase
    const units = difference / threshold;
    
    // Calculate final decrease in math response time (linear scaling)
    const finalDecrease = units > 0 ? baseDecrease * units : 0;
    
    return {
        difference: difference.toFixed(2),
        mathResponseDecrease: finalDecrease.toFixed(2),
        decreased: difference > 0
    };
};

const calculateStress71 = (previousMonthAverage, currentMonthAverage) => {
    // Base increase is 1.47% in stress levels for every 10 μg/m³ increase over 30 days
    // Applicable for adults aged 35-49 years
    const threshold = 10; // 10 μg/m³ threshold
    const baseIncrease = 1.47;
    
    // Calculate the difference between monthly averages
    const difference = currentMonthAverage - previousMonthAverage;
    
    // Calculate how many units of 10 μg/m³ increase
    const units = difference / threshold;
    
    // Calculate final increase in stress levels (linear scaling)
    const finalIncrease = units > 0 ? baseIncrease * units : 0;
    
    return {
        difference: difference.toFixed(2),
        stressIncrease: finalIncrease.toFixed(2),
        increased: difference > 0
    };
};

const calculateStress712 = (previousMonthAverage, currentMonthAverage) => {
    // Base increase is 2% in stress levels for every 10 μg/m³ increase over 30 days
    // Applicable for adults aged 65 and older
    const threshold = 10; // 10 μg/m³ threshold
    const baseIncrease = 2.0;
    
    // Calculate the difference between monthly averages
    const difference = currentMonthAverage - previousMonthAverage;
    
    // Calculate how many units of 10 μg/m³ increase
    const units = difference / threshold;
    
    // Calculate final increase in stress levels (linear scaling)
    const finalIncrease = units > 0 ? baseIncrease * units : 0;
    
    return {
        difference: difference.toFixed(2),
        stressIncrease: finalIncrease.toFixed(2),
        increased: difference > 0
    };
};

const calculateBDev57 = (annualAveragePM25) => {
    // Threshold for negative impact on brain development is 30.9 μg/m³
    // Applicable for young adults
    const threshold = 30.9;
    
    // Determine if PM2.5 levels exceed threshold
    const exceedsThreshold = annualAveragePM25 > threshold;
    
    // Calculate how much the threshold is exceeded by
    const exceedanceAmount = exceedsThreshold ? (annualAveragePM25 - threshold).toFixed(2) : 0;
    
    return {
        annualAverage: annualAveragePM25.toFixed(2),
        exceedsThreshold: exceedsThreshold,
        exceedanceAmount: exceedanceAmount
    };
};

const calculateDim21 = (lowerQuartilePM25, upperQuartilePM25) => {
    // Base hazard ratio is 1.2 for every 5 μg/m³ IQR increase for all-cause dementia
    const threshold = 5; // 5 μg/m³ threshold
    const baseHazardRatio = 1.2;
    
    // Calculate the difference between quartiles
    const difference = upperQuartilePM25 - lowerQuartilePM25;
    
    // Calculate how many units of 5 μg/m³ increase
    const units = difference / threshold;
    
    // Calculate final hazard ratio (compound for each unit of 5 μg/m³)
    const finalHazardRatio = units > 0 ? Math.pow(baseHazardRatio, units) : 1;
    
    return {
        difference: difference.toFixed(2),
        hazardRatio: finalHazardRatio.toFixed(2),
        increased: difference > 0
    };
};

const calculateADHD05 = (annualAveragePM25) => {
    // Threshold for ADHD symptom increase is 25 μg/m³
    // Odds ratio is 1.52 when exceeding threshold for 12-year-olds
    const threshold = 25;
    const baseOddsRatio = 1.52;
    
    // Determine if PM2.5 levels exceed threshold
    const exceedsThreshold = annualAveragePM25 > threshold;
    
    // Calculate how much the threshold is exceeded by
    const exceedanceAmount = exceedsThreshold ? (annualAveragePM25 - threshold).toFixed(2) : 0;
    
    return {
        annualAverage: annualAveragePM25.toFixed(2),
        oddsRatio: exceedsThreshold ? baseOddsRatio : 1,
        exceedsThreshold: exceedsThreshold,
        exceedanceAmount: exceedanceAmount
    };
};

const calculatePerc39 = (previousAverage, currentAverage) => {
    // Base odds ratio is 1.27 for every 3.9 μg/m³ increase in PM2.5
    const threshold = 3.9; // 3.9 μg/m³ threshold
    const baseOddsRatio = 1.27;
    
    // Calculate the difference between averages
    const difference = currentAverage - previousAverage;
    
    // Calculate how many units of 3.9 μg/m³ increase
    const units = difference / threshold;
    
    // Calculate final odds ratio (compound for each unit of 3.9 μg/m³)
    const finalOddsRatio = units > 0 ? Math.pow(baseOddsRatio, units) : 1;
    
    return {
        difference: difference.toFixed(2),
        oddsRatio: finalOddsRatio.toFixed(2),
        increased: difference > 0
    };
};

const calculatePerc391 = (previousAverage, currentAverage) => {
    // Base odds ratio is 1.2 for every 3.9 μg/m³ increase in PM2.5
    const threshold = 3.9; // 3.9 μg/m³ threshold
    const baseOddsRatio = 1.2;
    
    // Calculate the difference between averages
    const difference = currentAverage - previousAverage;
    
    // Calculate how many units of 3.9 μg/m³ increase
    const units = difference / threshold;
    
    // Calculate final odds ratio (compound for each unit of 3.9 μg/m³)
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
    
    // Add new state variables
    const [lowerQuartilePM25, setLowerQuartilePM25] = useState(10);
    const [upperQuartilePM25, setUpperQuartilePM25] = useState(11.13);
    
    // Get results from the calculation
    const depressionRisk = calculateDep32(lowerQuartilePM25, upperQuartilePM25);
    
    // Add new state variables
    const [prevWeekDepPM25, setPrevWeekDepPM25] = useState(10);
    const [currentWeekDepPM25, setCurrentWeekDepPM25] = useState(15);
    
    // Get results from the calculation
    const weeklyDepressionRisk = calculateDep96(prevWeekDepPM25, currentWeekDepPM25);
    
    // Add new state variables
    const [prevMonthDepPM25, setPrevMonthDepPM25] = useState(10);
    const [currentMonthDepPM25, setCurrentMonthDepPM25] = useState(15);
    
    // Get results from the calculation
    const monthlyDepressionRisk = calculateDep961(prevMonthDepPM25, currentMonthDepPM25);
    
    // Add new state variables
    const [prevYearDepPM25, setPrevYearDepPM25] = useState(10);
    const [currentYearDepPM25, setCurrentYearDepPM25] = useState(15);
    
    // Get results from the calculation
    const yearlyDepressionRisk = calculateDep963(prevYearDepPM25, currentYearDepPM25);
    
    // Add new state variables
    const [prev4YearDepPM25, setPrev4YearDepPM25] = useState(10);
    const [current4YearDepPM25, setCurrent4YearDepPM25] = useState(15);
    
    // Get results from the calculation
    const fourYearDepressionRisk = calculateDep964(prev4YearDepPM25, current4YearDepPM25);

    // Add new state variables
    const [prev180DepPM25_801, setPrev180DepPM25_801] = useState(10);
    const [current180DepPM25_801, setCurrent180DepPM25_801] = useState(20);
    
    // Get results from the calculation
    const sixMonthDepressionRisk801 = calculateDep801(prev180DepPM25_801, current180DepPM25_801);

    // Add new state variables
    const [lowerQuartilePM25_Dep17, setLowerQuartilePM25_Dep17] = useState(10);
    const [upperQuartilePM25_Dep17, setUpperQuartilePM25_Dep17] = useState(16.9);
    
    // Get results from the calculation
    const secondTrimesterDepressionRisk = calculateDepSym17(
        lowerQuartilePM25_Dep17, 
        upperQuartilePM25_Dep17
    );
    
    // Add new state variables
    const [lowerQuartilePM25_DepDis32, setLowerQuartilePM25_DepDis32] = useState(10);
    const [upperQuartilePM25_DepDis32, setUpperQuartilePM25_DepDis32] = useState(13.8);
    
    // Get results from the calculation
    const depressionDiagnosisRisk = calculateDepDis32(
        lowerQuartilePM25_DepDis32, 
        upperQuartilePM25_DepDis32
    );

    // Add new state variables
    const [prev6MonthMDD_PM25, setPrev6MonthMDD_PM25] = useState(10);
    const [current6MonthMDD_PM25, setCurrent6MonthMDD_PM25] = useState(15);
    
    // Get results from the calculation
    const mddRisk = calculateDepDis34(prev6MonthMDD_PM25, current6MonthMDD_PM25);
    
    // Add new state variables
    const [lowerQuartilePM25_Cog80, setLowerQuartilePM25_Cog80] = useState(10);
    const [upperQuartilePM25_Cog80, setUpperQuartilePM25_Cog80] = useState(21.37);
    
    // Get results from the calculation
    const cognitiveDecline = calculateCogFunc80(
        lowerQuartilePM25_Cog80, 
        upperQuartilePM25_Cog80
    );
    
    // Add new state variables
    const [prevAnnualPM25_Cog79, setPrevAnnualPM25_Cog79] = useState(10);
    const [currentAnnualPM25_Cog79, setCurrentAnnualPM25_Cog79] = useState(20);
    
    // Get results from the calculation
    const cognitiveScoreDecline = calculateCogScor79(
        prevAnnualPM25_Cog79, 
        currentAnnualPM25_Cog79
    );
    
    // Add new state variables
    const [prevAnnualPM25_COGTP26, setPrevAnnualPM25_COGTP26] = useState(10);
    const [currentAnnualPM25_COGTP26, setCurrentAnnualPM25_COGTP26] = useState(18.8);
    
    // Get results from the calculation
    const throughputDecrease = calculateCOGTP26(
        prevAnnualPM25_COGTP26, 
        currentAnnualPM25_COGTP26
    );
    
    // Add new state variables
    const [prevAnnualPM25_CogResp261, setPrevAnnualPM25_CogResp261] = useState(10);
    const [currentAnnualPM25_CogResp261, setCurrentAnnualPM25_CogResp261] = useState(18.8);
    
    // Get results from the calculation
    const interferenceIncrease = calculateCogResp261(
        prevAnnualPM25_CogResp261, 
        currentAnnualPM25_CogResp261
    );
    
    // Add new state variables
    const [prevAnnualPM25_CogMath26, setPrevAnnualPM25_CogMath26] = useState(10);
    const [currentAnnualPM25_CogMath26, setCurrentAnnualPM25_CogMath26] = useState(18.8);
    
    // Get results from the calculation
    const mathResponseDecrease = calculateCogMath26(
        prevAnnualPM25_CogMath26, 
        currentAnnualPM25_CogMath26
    );
    
    // Add new state variables
    const [prevMonthPM25_Stress71, setPrevMonthPM25_Stress71] = useState(10);
    const [currentMonthPM25_Stress71, setCurrentMonthPM25_Stress71] = useState(20);
    
    // Get results from the calculation
    const stressIncreaseElderly = calculateStress712(
        prevMonthPM25_Stress71, 
        currentMonthPM25_Stress71
    );

    // Add new state variable
    const [annualPM25_BDev57, setAnnualPM25_BDev57] = useState(30.9);
    
    // Get results from the calculation
    const brainDevelopmentImpact = calculateBDev57(annualPM25_BDev57);
    
    // Add new state variables
    const [lowerQuartilePM25_Dim21, setLowerQuartilePM25_Dim21] = useState(10);
    const [upperQuartilePM25_Dim21, setUpperQuartilePM25_Dim21] = useState(15);
    
    // Get results from the calculation
    const dementiaRisk = calculateDim21(
        lowerQuartilePM25_Dim21, 
        upperQuartilePM25_Dim21
    );
    
    // Add new state variable
    const [annualPM25_ADHD05, setAnnualPM25_ADHD05] = useState(25);
    
    // Get results from the calculation
    const adhdRisk = calculateADHD05(annualPM25_ADHD05);
    
    // Add new state variables
    const [prevPM25_Perc39, setPrevPM25_Perc39] = useState(10);
    const [currentPM25_Perc39, setCurrentPM25_Perc39] = useState(13.9);
    
    // Get results from the calculation
    const vitalityPerception = calculatePerc39(
        prevPM25_Perc39, 
        currentPM25_Perc39
    );
    
    // Add new state variables
    const [prevPM25_Perc391, setPrevPM25_Perc391] = useState(10);
    const [currentPM25_Perc391, setCurrentPM25_Perc391] = useState(13.9);
    
    // Get results from the calculation
    const healthPerception = calculatePerc391(
        prevPM25_Perc391, 
        currentPM25_Perc391
    );
    
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

            <h3>PM2.5 Depression Risk Calculator (Dep32)</h3>
            <div className="calculator-section">
                <p className="age-notice">Results applicable for adults over 30 years old</p>
                <label>
                    Lower Quartile PM2.5 Average:
                    <input 
                        type="number" 
                        value={lowerQuartilePM25}
                        onChange={(e) => setLowerQuartilePM25(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Upper Quartile PM2.5 Average:
                    <input 
                        type="number" 
                        value={upperQuartilePM25}
                        onChange={(e) => setUpperQuartilePM25(Number(e.target.value))}
                    />
                </label>
                <div className="results">
                    <p>Change in PM2.5: {depressionRisk.difference} μg/m³</p>
                    <p>Hazard Ratio (&gt;30 years): {depressionRisk.hazardRatio}</p>
                    <p>Risk Status: {
                        depressionRisk.increased 
                            ? `Increased risk of depression in adults over 30` 
                            : `No increased risk`
                    }</p>
                </div>
            </div>

            <h3>Weekly PM2.5 Depression Risk Calculator (Dep96)</h3>
            <div className="calculator-section">
                <p className="age-notice">Results applicable for adults 57 years or older</p>
                <label>
                    Previous Week PM2.5 Average:
                    <input 
                        type="number" 
                        value={prevWeekDepPM25}
                        onChange={(e) => setPrevWeekDepPM25(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Current Week PM2.5 Average:
                    <input 
                        type="number" 
                        value={currentWeekDepPM25}
                        onChange={(e) => setCurrentWeekDepPM25(Number(e.target.value))}
                    />
                </label>
                <div className="results">
                    <p>Change in PM2.5: {weeklyDepressionRisk.difference} μg/m³</p>
                    <p>7-Day Odds Ratio (&ge;57 years): {weeklyDepressionRisk.oddsRatio}</p>
                    <p>Risk Status: {
                        weeklyDepressionRisk.increased 
                            ? `Increased risk of depression in adults 57 years or older` 
                            : `No increased risk`
                    }</p>
                </div>
            </div>

            <h3>Monthly PM2.5 Depression Risk Calculator (Dep961)</h3>
            <div className="calculator-section">
                <p className="age-notice">Results applicable for adults 57 years or older</p>
                <label>
                    Previous Month PM2.5 Average:
                    <input 
                        type="number" 
                        value={prevMonthDepPM25}
                        onChange={(e) => setPrevMonthDepPM25(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Current Month PM2.5 Average:
                    <input 
                        type="number" 
                        value={currentMonthDepPM25}
                        onChange={(e) => setCurrentMonthDepPM25(Number(e.target.value))}
                    />
                </label>
                <div className="results">
                    <p>Change in PM2.5: {monthlyDepressionRisk.difference} μg/m³</p>
                    <p>30-Day Odds Ratio (&ge;57 years): {monthlyDepressionRisk.oddsRatio}</p>
                    <p>Risk Status: {
                        monthlyDepressionRisk.increased 
                            ? `Increased risk of depression in adults 57 years or older` 
                            : `No increased risk`
                    }</p>
                </div>
            </div>

            <h3>365-Day PM2.5 Depression Risk Calculator (Dep963)</h3>
            <div className="calculator-section">
                <p className="age-notice">Results applicable for adults 57 years or older</p>
                <label>
                    Previous Year PM2.5 Average:
                    <input 
                        type="number" 
                        value={prevYearDepPM25}
                        onChange={(e) => setPrevYearDepPM25(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Current Year PM2.5 Average:
                    <input 
                        type="number" 
                        value={currentYearDepPM25}
                        onChange={(e) => setCurrentYearDepPM25(Number(e.target.value))}
                    />
                </label>
                <div className="results">
                    <p>Change in PM2.5: {yearlyDepressionRisk.difference} μg/m³</p>
                    <p>365-Day Odds Ratio (&ge;57 years): {yearlyDepressionRisk.oddsRatio}</p>
                    <p>Risk Status: {
                        yearlyDepressionRisk.increased 
                            ? `Increased risk of depression in adults 57 years or older` 
                            : `No increased risk`
                    }</p>
                </div>
            </div>

            <h3>4-Year PM2.5 Depression Risk Calculator (Dep964)</h3>
            <div className="calculator-section">
                <p className="age-notice">Results applicable for adults 57 years or older</p>
                <label>
                    Previous 4-Year PM2.5 Average:
                    <input 
                        type="number" 
                        value={prev4YearDepPM25}
                        onChange={(e) => setPrev4YearDepPM25(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Current 4-Year PM2.5 Average:
                    <input 
                        type="number" 
                        value={current4YearDepPM25}
                        onChange={(e) => setCurrent4YearDepPM25(Number(e.target.value))}
                    />
                </label>
                <div className="results">
                    <p>Change in PM2.5: {fourYearDepressionRisk.difference} μg/m³</p>
                    <p>4-Year Odds Ratio (&ge;57 years): {fourYearDepressionRisk.oddsRatio}</p>
                    <p>Risk Status: {
                        fourYearDepressionRisk.increased 
                            ? `Increased risk of depression in adults 57 years or older` 
                            : `No increased risk`
                    }</p>
                </div>
            </div>

            <h3>180-Day PM2.5 Depression Risk Calculator (Dep801)</h3>
            <div className="calculator-section">
                <p className="age-notice">Results applicable for general population</p>
                <label>
                    Previous 6-Month PM2.5 Average:
                    <input 
                        type="number" 
                        value={prev180DepPM25_801}
                        onChange={(e) => setPrev180DepPM25_801(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Current 6-Month PM2.5 Average:
                    <input 
                        type="number" 
                        value={current180DepPM25_801}
                        onChange={(e) => setCurrent180DepPM25_801(Number(e.target.value))}
                    />
                </label>
                <div className="results">
                    <p>Change in PM2.5: {sixMonthDepressionRisk801.difference} μg/m³</p>
                    <p>180-Day Odds Ratio: {sixMonthDepressionRisk801.oddsRatio}</p>
                    <p>Risk Status: {
                        sixMonthDepressionRisk801.increased 
                            ? `Increased risk of depression` 
                            : `No increased risk`
                    }</p>
                </div>
            </div>

            <h3>Second Trimester PM2.5 Depression Risk Calculator (DepSym17)</h3>
            <div className="calculator-section">
                <p className="age-notice">Results applicable for pregnant women during second trimester</p>
                <label>
                    Lower Quartile PM2.5 Level:
                    <input 
                        type="number" 
                        value={lowerQuartilePM25_Dep17}
                        onChange={(e) => setLowerQuartilePM25_Dep17(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Upper Quartile PM2.5 Level:
                    <input 
                        type="number" 
                        value={upperQuartilePM25_Dep17}
                        onChange={(e) => setUpperQuartilePM25_Dep17(Number(e.target.value))}
                    />
                </label>
                <div className="results">
                    <p>IQRR Change in PM2.5: {secondTrimesterDepressionRisk.difference} μg/m³</p>
                    <p>Second Trimester Risk Ratio: {secondTrimesterDepressionRisk.riskRatio}</p>
                    <p>Risk Status: {
                        secondTrimesterDepressionRisk.increased 
                            ? `Increased risk of depression during second trimester of pregnancy` 
                            : `No increased risk during second trimester`
                    }</p>
                    <p className="note">Note: IQRR = Interquartile Range Ratio</p>
                </div>
            </div>

            <h3>PM2.5 Depression Diagnosis Risk Calculator (DepDis32)</h3>
            <div className="calculator-section">
                <p className="age-notice">Results applicable for general population</p>
                <label>
                    Lower Quartile PM2.5 Level:
                    <input 
                        type="number" 
                        value={lowerQuartilePM25_DepDis32}
                        onChange={(e) => setLowerQuartilePM25_DepDis32(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Upper Quartile PM2.5 Level:
                    <input 
                        type="number" 
                        value={upperQuartilePM25_DepDis32}
                        onChange={(e) => setUpperQuartilePM25_DepDis32(Number(e.target.value))}
                    />
                </label>
                <div className="results">
                    <p>IQR Change in PM2.5: {depressionDiagnosisRisk.difference} μg/m³</p>
                    <p>Depression Diagnosis Odds Ratio: {depressionDiagnosisRisk.oddsRatio}</p>
                    <p>Risk Status: {
                        depressionDiagnosisRisk.increased 
                            ? `Increased risk of depression diagnosis` 
                            : `No increased risk of depression diagnosis`
                    }</p>
                    <p className="note">Note: IQR = Interquartile Range</p>
                </div>
            </div>

            <h3>Major Depressive Disorder Risk Calculator (DepDis34)</h3>
            <div className="calculator-section">
                <p className="age-notice">Results applicable for general population</p>
                <label>
                    Previous 6-Month PM2.5 Average:
                    <input 
                        type="number" 
                        value={prev6MonthMDD_PM25}
                        onChange={(e) => setPrev6MonthMDD_PM25(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Current 6-Month PM2.5 Average:
                    <input 
                        type="number" 
                        value={current6MonthMDD_PM25}
                        onChange={(e) => setCurrent6MonthMDD_PM25(Number(e.target.value))}
                    />
                </label>
                <div className="results">
                    <p>Change in PM2.5: {mddRisk.difference} μg/m³</p>
                    <p>6-Month MDD Hazard Ratio: {mddRisk.hazardRatio}</p>
                    <p>Risk Status: {
                        mddRisk.increased 
                            ? `Increased risk of major depressive disorder` 
                            : `No increased risk of major depressive disorder`
                    }</p>
                    <p className="note">Note: MDD = Major Depressive Disorder</p>
                </div>
            </div>

            <h3>PM2.5 Cognitive Function Impact Calculator (CogFunc80)</h3>
            <div className="calculator-section">
                <p className="age-notice">Results applicable for general population</p>
                <label>
                    Lower Quartile PM2.5 Level:
                    <input 
                        type="number" 
                        value={lowerQuartilePM25_Cog80}
                        onChange={(e) => setLowerQuartilePM25_Cog80(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Upper Quartile PM2.5 Level:
                    <input 
                        type="number" 
                        value={upperQuartilePM25_Cog80}
                        onChange={(e) => setUpperQuartilePM25_Cog80(Number(e.target.value))}
                    />
                </label>
                <div className="results">
                    <p>IQR Change in PM2.5: {cognitiveDecline.difference} μg/m³</p>
                    <p>Cognitive Function Decrease: {cognitiveDecline.decreasePercentage}%</p>
                    <p>Impact Status: {
                        cognitiveDecline.decreased 
                            ? `Decreased cognitive function by ${cognitiveDecline.decreasePercentage}%` 
                            : `No decrease in cognitive function`
                    }</p>
                    <p className="note">Note: IQR = Interquartile Range</p>
                </div>
            </div>

            <h3>Global Cognitive Score Impact Calculator (CogScor79)</h3>
            <div className="calculator-section">
                <p className="age-notice">Results applicable for older women</p>
                <label>
                    Previous Annual PM2.5 Average:
                    <input 
                        type="number" 
                        value={prevAnnualPM25_Cog79}
                        onChange={(e) => setPrevAnnualPM25_Cog79(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Current Annual PM2.5 Average:
                    <input 
                        type="number" 
                        value={currentAnnualPM25_Cog79}
                        onChange={(e) => setCurrentAnnualPM25_Cog79(Number(e.target.value))}
                    />
                </label>
                <div className="results">
                    <p>Change in Annual PM2.5: {cognitiveScoreDecline.difference} μg/m³</p>
                    <p>Global Cognitive Score Decrease: {cognitiveScoreDecline.scoreDecrease} points</p>
                    <p>Impact Status: {
                        cognitiveScoreDecline.decreased 
                            ? `Decreased global cognitive score by ${cognitiveScoreDecline.scoreDecrease} points` 
                            : `No decrease in global cognitive score`
                    }</p>
                    <p className="note">Note: Based on standardized global cognitive assessment scores in older women</p>
                </div>
            </div>

            <h3>Cognitive Throughput Impact Calculator (COGTP26)</h3>
            <div className="calculator-section">
                <p className="age-notice">Results applicable for general population</p>
                <label>
                    Previous Annual PM2.5 Average:
                    <input 
                        type="number" 
                        value={prevAnnualPM25_COGTP26}
                        onChange={(e) => setPrevAnnualPM25_COGTP26(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Current Annual PM2.5 Average:
                    <input 
                        type="number" 
                        value={currentAnnualPM25_COGTP26}
                        onChange={(e) => setCurrentAnnualPM25_COGTP26(Number(e.target.value))}
                    />
                </label>
                <div className="results">
                    <p>Change in Annual PM2.5: {throughputDecrease.difference} μg/m³</p>
                    <p>Throughput Decrease: {throughputDecrease.throughputDecrease}%</p>
                    <p>Impact Status: {
                        throughputDecrease.decreased 
                            ? `Decreased cognitive throughput by ${throughputDecrease.throughputDecrease}%` 
                            : `No decrease in cognitive throughput`
                    }</p>
                    <p className="note">Note: Throughput measures the amount of cognitive work completed in a given time</p>
                </div>
            </div>

            <h3>Cognitive Interference Impact Calculator (CogResp261)</h3>
            <div className="calculator-section">
                <p className="age-notice">Results applicable for general population</p>
                <label>
                    Previous Annual PM2.5 Average:
                    <input 
                        type="number" 
                        value={prevAnnualPM25_CogResp261}
                        onChange={(e) => setPrevAnnualPM25_CogResp261(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Current Annual PM2.5 Average:
                    <input 
                        type="number" 
                        value={currentAnnualPM25_CogResp261}
                        onChange={(e) => setCurrentAnnualPM25_CogResp261(Number(e.target.value))}
                    />
                </label>
                <div className="results">
                    <p>Change in Annual PM2.5: {interferenceIncrease.difference} μg/m³</p>
                    <p>Interference Time Increase: {interferenceIncrease.interferenceIncrease}%</p>
                    <p>Impact Status: {
                        interferenceIncrease.increased 
                            ? `Increased cognitive interference by ${interferenceIncrease.interferenceIncrease}% (worse cognition)` 
                            : `No increase in cognitive interference`
                    }</p>
                    <p className="note">Note: Higher interference time indicates reduced cognitive performance and increased mental processing difficulties</p>
                </div>
            </div>

            <h3>Mathematical Processing Speed Calculator (CogMath26)</h3>
            <div className="calculator-section">
                <p className="age-notice">Results applicable for general population</p>
                <label>
                    Previous Annual PM2.5 Average:
                    <input 
                        type="number" 
                        value={prevAnnualPM25_CogMath26}
                        onChange={(e) => setPrevAnnualPM25_CogMath26(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Current Annual PM2.5 Average:
                    <input 
                        type="number" 
                        value={currentAnnualPM25_CogMath26}
                        onChange={(e) => setCurrentAnnualPM25_CogMath26(Number(e.target.value))}
                    />
                </label>
                <div className="results">
                    <p>Change in Annual PM2.5: {mathResponseDecrease.difference} μg/m³</p>
                    <p>Math Response Time Decrease: {mathResponseDecrease.mathResponseDecrease}%</p>
                    <p>Impact Status: {
                        mathResponseDecrease.decreased 
                            ? `Slowed mathematical processing speed by ${mathResponseDecrease.mathResponseDecrease}%` 
                            : `No decrease in mathematical processing speed`
                    }</p>
                    <p className="note">Note: Higher percentage indicates slower mathematical computation and processing abilities</p>
                </div>
            </div>

            <h3>30-Day Stress Level Impact Calculator for Elderly (Stress712)</h3>
            <div className="calculator-section">
                <p className="age-notice">Results applicable for adults aged 65 and older</p>
                <label>
                    Previous Month PM2.5 Average:
                    <input 
                        type="number" 
                        value={prevMonthPM25_Stress712}
                        onChange={(e) => setPrevMonthPM25_Stress712(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Current Month PM2.5 Average:
                    <input 
                        type="number" 
                        value={currentMonthPM25_Stress712}
                        onChange={(e) => setCurrentMonthPM25_Stress712(Number(e.target.value))}
                    />
                </label>
                <div className="results">
                    <p>Change in Monthly PM2.5: {stressIncreaseElderly.difference} μg/m³</p>
                    <p>Stress Level Increase: {stressIncreaseElderly.stressIncrease}%</p>
                    <p>Impact Status: {
                        stressIncreaseElderly.increased 
                            ? `Increased stress levels by ${stressIncreaseElderly.stressIncrease}% in adults aged 65+` 
                            : `No increase in stress levels`
                    }</p>
                    <p className="note">Note: Based on 30-day exposure measurements and reported stress levels in adults aged 65 and older</p>
                </div>
            </div>

            <h3>Brain Development Impact Calculator for Young Adults (BDev57)</h3>
            <div className="calculator-section">
                <p className="age-notice">Results applicable for young adults (brain development continues into early 20s)</p>
                <label>
                    Annual Average PM2.5 Level:
                    <input 
                        type="number" 
                        value={annualPM25_BDev57}
                        onChange={(e) => setAnnualPM25_BDev57(Number(e.target.value))}
                    />
                </label>
                <div className="results">
                    <p>Annual PM2.5 Level: {brainDevelopmentImpact.annualAverage} μg/m³</p>
                    <p>Critical Threshold: 30.9 μg/m³</p>
                    <p>Impact Status: {
                        brainDevelopmentImpact.exceedsThreshold 
                            ? `WARNING: PM2.5 levels exceed safe threshold by ${brainDevelopmentImpact.exceedanceAmount} μg/m³` 
                            : `PM2.5 levels below critical threshold for young adult brain development`
                    }</p>
                    <div className="impact-details">
                        {brainDevelopmentImpact.exceedsThreshold && (
                            <>
                                <p className="warning">Potential negative impacts on young adult brain development:</p>
                                <ul>
                                    <li>Prefrontal Cortex Development</li>
                                    <li>Executive Function</li>
                                    <li>Decision-Making Ability</li>
                                    <li>Emotional Regulation</li>
                                    <li>Complex Problem Solving</li>
                                    <li>Social Cognition</li>
                                </ul>
                            </>
                        )}
                    </div>
                    <p className="note">Note: Based on annual exposure measurements. Consistent exposure above 30.9 μg/m³ may negatively impact brain development in young adults, whose brains continue developing into their early 20s</p>
                </div>
            </div>

            <h3>All-Cause Dementia Risk Calculator (Dim21)</h3>
            <div className="calculator-section">
                <p className="age-notice">Results applicable for general adult population</p>
                <label>
                    Lower Quartile PM2.5 Level:
                    <input 
                        type="number" 
                        value={lowerQuartilePM25_Dim21}
                        onChange={(e) => setLowerQuartilePM25_Dim21(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Upper Quartile PM2.5 Level:
                    <input 
                        type="number" 
                        value={upperQuartilePM25_Dim21}
                        onChange={(e) => setUpperQuartilePM25_Dim21(Number(e.target.value))}
                    />
                </label>
                <div className="results">
                    <p>IQR Change in PM2.5: {dementiaRisk.difference} μg/m³</p>
                    <p>All-Cause Dementia Hazard Ratio: {dementiaRisk.hazardRatio}</p>
                    <p>Risk Status: {
                        dementiaRisk.increased 
                            ? `Increased risk of all-cause dementia (Hazard Ratio: ${dementiaRisk.hazardRatio})` 
                            : `No increased risk of dementia`
                    }</p>
                    <p className="note">Note: Based on IQR (Interquartile Range) measurements. Each 5 μg/m³ increase corresponds to a hazard ratio of 1.2 for all-cause dementia</p>
                </div>
            </div>

            <h3>ADHD Symptoms Risk Calculator for 12-Year-Olds (ADHD05)</h3>
            <div className="calculator-section">
                <p className="age-notice">Results applicable specifically for children aged 12 years</p>
                <label>
                    Annual Average PM2.5 Level:
                    <input 
                        type="number" 
                        value={annualPM25_ADHD05}
                        onChange={(e) => setAnnualPM25_ADHD05(Number(e.target.value))}
                    />
                </label>
                <div className="results">
                    <p>Annual PM2.5 Level: {adhdRisk.annualAverage} μg/m³</p>
                    <p>Critical Threshold: 25 μg/m³</p>
                    <p>ADHD Symptoms Odds Ratio: {adhdRisk.oddsRatio.toFixed(2)}</p>
                    <p>Impact Status: {
                        adhdRisk.exceedsThreshold 
                            ? `ELEVATED RISK: PM2.5 levels exceed threshold by ${adhdRisk.exceedanceAmount} μg/m³, indicating increased risk of ADHD symptoms` 
                            : `PM2.5 levels below critical threshold for ADHD risk`
                    }</p>
                    <div className="impact-details">
                        {adhdRisk.exceedsThreshold && (
                            <>
                                <p className="warning">Potential increased symptoms in 12-year-olds:</p>
                                <ul>
                                    <li>Attention Difficulties</li>
                                    <li>Hyperactivity</li>
                                    <li>Impulsivity</li>
                                    <li>Task Focus Challenges</li>
                                    <li>Behavioral Regulation</li>
                                </ul>
                            </>
                        )}
                    </div>
                    <p className="note">Note: Based on annual exposure measurements. Exposure above 25 μg/m³ is associated with a 1.52 odds ratio increase in ADHD symptoms for 12-year-old children</p>
                </div>
            </div>

            <h3>Perceived Vitality Impact Calculator (Perc39)</h3>
            <div className="calculator-section">
                <p className="age-notice">Results applicable for general adult population</p>
                <label>
                    Previous PM2.5 Level:
                    <input 
                        type="number" 
                        value={prevPM25_Perc39}
                        onChange={(e) => setPrevPM25_Perc39(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Current PM2.5 Level:
                    <input 
                        type="number" 
                        value={currentPM25_Perc39}
                        onChange={(e) => setCurrentPM25_Perc39(Number(e.target.value))}
                    />
                </label>
                <div className="results">
                    <p>Change in PM2.5: {vitalityPerception.difference} μg/m³</p>
                    <p>Suboptimal Vitality Odds Ratio: {vitalityPerception.oddsRatio}</p>
                    <p>Impact Status: {
                        vitalityPerception.increased 
                            ? `Increased likelihood of perceiving suboptimal vitality (Odds Ratio: ${vitalityPerception.oddsRatio})` 
                            : `No increased risk of perceiving suboptimal vitality`
                    }</p>
                    <div className="impact-details">
                        {vitalityPerception.increased && (
                            <>
                                <p className="warning">Potential perceptions of:</p>
                                <ul>
                                    <li>Reduced Energy Levels</li>
                                    <li>Decreased Mental Vigor</li>
                                    <li>Lower Physical Vitality</li>
                                    <li>Diminished Overall Wellbeing</li>
                                    <li>Increased Mental Fatigue</li>
                                </ul>
                            </>
                        )}
                    </div>
                    <p className="note">Note: Each 3.9 μg/m³ increase in PM2.5 is associated with a 1.27 odds ratio increase in perception of suboptimal vitality</p>
                </div>
            </div>

            <h3>Self-Rated Health Impact Calculator (Perc391)</h3>
            <div className="calculator-section">
                <p className="age-notice">Results applicable for general adult population</p>
                <label>
                    Previous PM2.5 Level:
                    <input 
                        type="number" 
                        value={prevPM25_Perc391}
                        onChange={(e) => setPrevPM25_Perc391(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Current PM2.5 Level:
                    <input 
                        type="number" 
                        value={currentPM25_Perc391}
                        onChange={(e) => setCurrentPM25_Perc391(Number(e.target.value))}
                    />
                </label>
                <div className="results">
                    <p>Change in PM2.5: {healthPerception.difference} μg/m³</p>
                    <p>Poor Self-Rated Health Odds Ratio: {healthPerception.oddsRatio}</p>
                    <p>Impact Status: {
                        healthPerception.increased 
                            ? `Increased likelihood of poor self-rated health (Odds Ratio: ${healthPerception.oddsRatio})` 
                            : `No increased risk of poor self-rated health`
                    }</p>
                    <div className="impact-details">
                        {healthPerception.increased && (
                            <>
                                <p className="warning">Potential areas of perceived health decline:</p>
                                <ul>
                                    <li>Overall Health Status</li>
                                    <li>Physical Wellbeing</li>
                                    <li>Daily Function Capacity</li>
                                    <li>General Health Satisfaction</li>
                                    <li>Perceived Quality of Life</li>
                                </ul>
                            </>
                        )}
                    </div>
                    <p className="note">Note: Each 3.9 μg/m³ increase in PM2.5 is associated with a 1.2 odds ratio increase in poor self-rated health perception</p>
                </div>
            </div>
        </div>
    );
};

export default BrainHealthPM2_5; 