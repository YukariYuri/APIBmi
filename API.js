const ApiPort = 'http://localhost:3000'

async function BmiCal() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    const wN = Number(weight);
    const hN = Number(height);

    if (isNaN(wN) || isNaN(hN)) 
        return alert("Number invalid or exceeds limit.");
    else if (wN <= 0 || hN <= 0)
        return alert("Please fill in your weight and height information correctly. (Value must be greater than 0)");

    const response = await fetch(`${ApiPort}/BmiCal?weight=${wN}&height=${hN}`)
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