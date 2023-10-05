// Create a user object with name, height in CM, and weight in Kg
const user = {
    name: "John",
    heightCM: 175,
    weightKg: 70
};

// Function to calculate BMI
function calculateBMI(user) {
    const heightM = user.heightCM / 100; // Convert height to meters
    const bmi = user.weightKg / (heightM * heightM);
    return bmi;
}

// Function to classify BMI and provide a message
function classifyBMI(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Healthy Weight";
    } else {
        return "Overweight";
    }
}

// Calculate the BMI for the user
const userBMI = calculateBMI(user);

// Get the BMI classification
const classification = classifyBMI(userBMI);

// Output the results
console.log(`${user.name}'s BMI is ${userBMI.toFixed(2)} - ${classification}`);
