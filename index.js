function bmi() {
    let h = document.getElementById("height").value;

    let w = document.getElementById("weight").value;

    let bmi = w / (h / 100 * h / 100);

    let total = (bmi.toFixed(2));
    // alert(total);

    document.getElementById("result").innerHTML = "Your BMI is" + " " + total;
}

