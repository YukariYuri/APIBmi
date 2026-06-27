const ApiPort = 'http://localhost:3000'

async function BmiCal() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    
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