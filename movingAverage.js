// A simple moving average calculator which returns an array of 
// averages based upon inputted data and a specified time frame ...

/**
*
* @param {array}  data        // the data inputted to base the moving average on - in this instance: monthly sales
* @param {number} timeFrame   // moving average length - in this instance: number of months
*
*/

// Variables
// 24 months of sales data ...
const data = [
  40000, 50000, 80000, 50000, 35000, 70000, 55000, 70000, 95000, 72500, 90000, 50000,
  70000, 65000, 80000, 60000, 85000, 62500, 60000, 95000, 90000, 87500, 115000, 85000
];
const timeFrame = 3; // number of months, meaning this will return an array of 3 month moving averages

const calculateMovingAverage = (data, timeFrame) => {
	
	const movingAverage = [];
	let total = 0;
	let count = 0;

	// Iterate sales data
	for (let i = 0; i < data.length; i++) {
		
		// Iterate the number of months back for the specified time frame from the current month's data
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
