import React, { useState } from 'react';

const calculateProd85 = (wildfireDays) => {
    // Base productivity loss is 1.69% per wildfire exposure day
    const dailyProductivityLoss = 1.69;
    
    // Calculate total productivity loss (linear scaling)
    const totalProductivityLoss = wildfireDays * dailyProductivityLoss;
    
    return {
        days: wildfireDays,
        productivityLoss: totalProductivityLoss.toFixed(2),
        hasLoss: wildfireDays > 0
    };
};

const calculateProd851 = (twoWeekPM25Average) => {
    // Threshold for productivity impact is 12 μg/m³ over two weeks
    // Odds ratio is 1.45 when exceeding threshold
    const threshold = 12;
    const baseOddsRatio = 1.45;
    
    // Determine if PM2.5 levels exceed threshold
    const exceedsThreshold = twoWeekPM25Average > threshold;
    
    // Calculate how much the threshold is exceeded by
    const exceedanceAmount = exceedsThreshold ? (twoWeekPM25Average - threshold).toFixed(2) : 0;
    
    return {
        average: twoWeekPM25Average.toFixed(2),
        oddsRatio: exceedsThreshold ? baseOddsRatio : 1,
        exceedsThreshold: exceedsThreshold,
        exceedanceAmount: exceedanceAmount
    };
};

const calculateProd852 = (previousTwoWeekAverage, currentTwoWeekAverage) => {
    // Base odds ratio is 1.05 for every 2.56 μg/m³ increase over two weeks
    const threshold = 2.56; // 2.56 μg/m³ threshold
    const baseOddsRatio = 1.05;
    
    // Calculate the difference between averages
    const difference = currentTwoWeekAverage - previousTwoWeekAverage;
    
    // Calculate how many units of 2.56 μg/m³ increase
    const units = difference / threshold;
    
    // Calculate final odds ratio (compound for each unit of 2.56 μg/m³)
    const finalOddsRatio = units > 0 ? Math.pow(baseOddsRatio, units) : 1;
    
    return {
        difference: difference.toFixed(2),
        oddsRatio: finalOddsRatio.toFixed(2),
        increased: difference > 0
    };
};

const BrainHealthPM2_5_Wildfire = () => {
    // State variables will go here as we add calculators
    const [wildfireDays_Prod85, setWildfireDays_Prod85] = useState(1);
    const [twoWeekPM25_Prod851, setTwoWeekPM25_Prod851] = useState(12);
    const [prevTwoWeekPM25_Prod852, setPrevTwoWeekPM25_Prod852] = useState(10);
    const [currentTwoWeekPM25_Prod852, setCurrentTwoWeekPM25_Prod852] = useState(12.56);
    
    // Get results from the calculation
    const productivityLoss = calculateProd85(wildfireDays_Prod85);
    const productivityOdds = calculateProd851(twoWeekPM25_Prod851);
    const incrementalProductivityOdds = calculateProd852(
        prevTwoWeekPM25_Prod852,
        currentTwoWeekPM25_Prod852
    );
    
    return (
        <div className="brain-health-calculator">
            <h2>Wildfire PM2.5 Brain Health Impact Calculator</h2>
            <p className="calculator-intro">
                Calculate the specific impacts of wildfire-generated PM2.5 on brain health. 
                Wildfire smoke particles may have different toxicity profiles compared to urban PM2.5.
            </p>
            
            {/* Individual calculator sections will be added here */}
            
            <h3>Wildfire Work Productivity Impact Calculator (Prod85)</h3>
            <div className="calculator-section">
                <p className="age-notice">Results applicable for working adult population during active wildfire days</p>
                <label>
                    Number of Wildfire Exposure Days:
                    <input 
                        type="number" 
                        min="0"
                        value={wildfireDays_Prod85}
                        onChange={(e) => setWildfireDays_Prod85(Number(e.target.value))}
                    />
                </label>
                <div className="results">
                    <p>Wildfire Exposure Duration: {productivityLoss.days} days</p>
                    <p>Total Productivity Loss: {productivityLoss.productivityLoss}%</p>
                    <p>Impact Status: {
                        productivityLoss.hasLoss 
                            ? `Estimated work productivity loss of ${productivityLoss.productivityLoss}% over ${productivityLoss.days} days` 
                            : `No wildfire exposure days recorded`
                    }</p>
                    <div className="impact-details">
                        {productivityLoss.hasLoss && (
                            <>
                                <p className="warning">Productivity Impact Areas:</p>
                                <ul>
                                    <li>Work Output Quantity</li>
                                    <li>Task Completion Time</li>
                                    <li>Decision-Making Efficiency</li>
                                    <li>Concentration Ability</li>
                                    <li>Physical Task Performance</li>
                                    <li>Overall Work Quality</li>
                                </ul>
                            </>
                        )}
                    </div>
                    <p className="note">Note: Based on reported work productivity loss during active wildfire days. Each exposure day is associated with a 1.69% decrease in work productivity</p>
                </div>
            </div>
            
            <h3>Two-Week Wildfire Productivity Impact Calculator (Prod851)</h3>
            <div className="calculator-section">
                <p className="age-notice">Results applicable for working adult population during two-week wildfire smoke exposure</p>
                <label>
                    Two-Week Average PM2.5 Level:
                    <input 
                        type="number" 
                        min="0"
                        value={twoWeekPM25_Prod851}
                        onChange={(e) => setTwoWeekPM25_Prod851(Number(e.target.value))}
                    />
                    <span className="unit">μg/m³</span>
                </label>
                <div className="results">
                    <p>Two-Week PM2.5 Average: {productivityOdds.average} μg/m³</p>
                    <p>Critical Threshold: 12 μg/m³</p>
                    <p>Work Loss Odds Ratio: {productivityOdds.oddsRatio.toFixed(2)}</p>
                    <p>Impact Status: {
                        productivityOdds.exceedsThreshold 
                            ? `ELEVATED RISK: PM2.5 levels exceed threshold by ${productivityOdds.exceedanceAmount} μg/m³, indicating increased odds of work productivity loss` 
                            : `PM2.5 levels below critical threshold for productivity impact`
                    }</p>
                    <div className="impact-details">
                        {productivityOdds.exceedsThreshold && (
                            <>
                                <p className="warning">Extended Exposure Impact Areas:</p>
                                <ul>
                                    <li>Sustained Productivity Decrease</li>
                                    <li>Increased Work Absences</li>
                                    <li>Reduced Work Capacity</li>
                                    <li>Cognitive Performance Decline</li>
                                    <li>Extended Recovery Needs</li>
                                    <li>Cumulative Fatigue Effects</li>
                                </ul>
                            </>
                        )}
                    </div>
                    <p className="note">Note: Based on two-week wildfire smoke exposure. PM2.5 levels above 12 μg/m³ are associated with a 1.45 odds ratio increase in work productivity loss</p>
                </div>
            </div>
            
            <h3>Incremental Two-Week Wildfire Productivity Impact Calculator (Prod852)</h3>
            <div className="calculator-section">
                <p className="age-notice">Results applicable for working adult population during incremental wildfire smoke exposure changes</p>
                <label>
                    Previous Two-Week PM2.5 Average:
                    <input 
                        type="number" 
                        min="0"
                        value={prevTwoWeekPM25_Prod852}
                        onChange={(e) => setPrevTwoWeekPM25_Prod852(Number(e.target.value))}
                    />
                    <span className="unit">μg/m³</span>
                </label>
                <br />
                <label>
                    Current Two-Week PM2.5 Average:
                    <input 
                        type="number" 
                        min="0"
                        value={currentTwoWeekPM25_Prod852}
                        onChange={(e) => setCurrentTwoWeekPM25_Prod852(Number(e.target.value))}
                    />
                    <span className="unit">μg/m³</span>
                </label>
                <div className="results">
                    <p>Change in Two-Week PM2.5: {incrementalProductivityOdds.difference} μg/m³</p>
                    <p>Incremental Unit: 2.56 μg/m³</p>
                    <p>Work Loss Odds Ratio: {incrementalProductivityOdds.oddsRatio}</p>
                    <p>Impact Status: {
                        incrementalProductivityOdds.increased 
                            ? `Increased odds of work productivity loss (Odds Ratio: ${incrementalProductivityOdds.oddsRatio})` 
                            : `No increased risk of work productivity loss`
                    }</p>
                    <div className="impact-details">
                        {incrementalProductivityOdds.increased && (
                            <>
                                <p className="warning">Incremental Impact Areas:</p>
                                <ul>
                                    <li>Gradual Productivity Decline</li>
                                    <li>Incremental Work Efficiency Loss</li>
                                    <li>Progressive Task Completion Delays</li>
                                    <li>Cumulative Focus Reduction</li>
                                    <li>Stepped Increase in Work Errors</li>
                                    <li>Progressive Fatigue Development</li>
                                </ul>
                            </>
                        )}
                    </div>
                    <p className="note">Note: Each 2.56 μg/m³ increase in two-week average PM2.5 is associated with a 1.05 odds ratio increase in work productivity loss</p>
                </div>
            </div>
            
            <div className="general-notes">
                <h4>Important Notes:</h4>
                <ul>
                    <li>Wildfire PM2.5 may contain unique chemical compositions</li>
                    <li>Short-term exposure spikes are common during wildfire events</li>
                    <li>Effects may differ from typical urban PM2.5 exposure</li>
                    <li>Consider both acute and chronic exposure impacts</li>
                </ul>
            </div>
        </div>
    );
};

export default BrainHealthPM2_5_Wildfire; 