const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const Port = 3000

function BMILevel(BMI) {
    if (BMI < 18.5) return "Underweight";
    else if (BMI < 22.9) return "Normal weight";
    else if (BMI < 24.9) return "Overweight";
    else if (BMI < 30) return "Obese Class I";
    return "Obese Class II";
}

function CalBMI(Weight, Height) {
    if (!Weight || !Height) 
        return {error : "Please specify your weight and height."};
    else if (isNaN(Number(Weight)) || isNaN(Number(Height))) 
        return {error : "Please fill in your weight and height in numbers only."};
    else if (Weight <= 0 || Height <= 0) 
        return {error : "Please fill in your weight and height information correctly. (Value must be greater than 0)"};

    const BmiResult = (Weight / ((Height / 100) ** 2)).toFixed(2);

    return {
        bmi: BmiResult,
        category: BMILevel(BmiResult)
    }
}

app.get('/BmiCal', (req, res) => {
    let weight = req.query.weight;
    let height = req.query.height;

    let Result = CalBMI(weight, height);

    if (Result.error) {
        return res.status(404).json({
            "error": Result.error
        })
    }

    res.json({
        "BMI": Result.bmi,
        "Category": Result.category
    })
})

app.listen(Port, () => {
    console.log("Server Starts successfully");
    console.log(`Start On : http://localhost:${Port}`);
})
