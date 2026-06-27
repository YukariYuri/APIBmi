const ApiPort = 'http://localhost:3000'

async function BmiCal() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    if (isNaN(Number(weight)) || isNaN(Number(height)) || weight === "" || height === "") 
        return alert("Number invalid or exceeds limit.");
    
    if (weight <= 0 || height <= 0) 
        return alert("Please fill in your weight and height information correctly. (Value must be greater than 0)")

    const response = await fetch(`${ApiPort}/BmiCal?weight=${weight}&height=${height}`)
        .then(res => res.json())

    if (!response.error) {
        const bmi_result = document.getElementById("bmi-result");
        const type_result = document.getElementById("type-result");

        bmi_result.innerText = `Your BMI is : ${response.BMI}`;
        type_result.innerText = `Your BMI category is : ${response.Category}`;
    } else {
        alert(response.error);
    }
}