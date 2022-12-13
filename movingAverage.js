/**
*
* @param {array} 	data       // the data used to calculate the moving average
* @param {number} timeFrame  // moving average length
*
*/

// Variables
const data = [
  40000, 50000, 80000, 50000, 35000, 70000, 55000, 70000, 95000, 72500, 90000, 50000,
  70000, 65000, 80000, 60000, 85000, 62500, 60000, 95000, 90000, 87500, 115000, 85000
];
const timeFrame = 3;

const calculateMovingAverage = (data, timeFrame) => {
	
	const movingAverage = [];
	let total = 0;
	let count = 0;

	for (let i = 0; i < data.length; i++) {
		
		for (let j = 0; j < timeFrame; j++) {
			if (data[i-j] !== undefined) {
				total += data[i-j];
				count++;
			}
		}
		
		const currentMonthAverage = total / count;
		movingAverage[i] = parseInt(currentMonthAverage); // No need to parse if you don't need to ... 
    total = 0; count = 0;

	};
	
	return movingAverage;

};

console.log(calculateMovingAverage(data, timeFrame));
