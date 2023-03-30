console.log(456132);

function calculateBMI() {
			// Get input values
			var weight = document.getElementById("weight").value;
			var height = document.getElementById("height").value;

			// Convert height to meters
			height /= 100;

			// Calculate BMI
			var bmi = weight / (height * height);

			// Display result
			document.getElementById("result").innerHTML = bmi.toFixed(2);
		}