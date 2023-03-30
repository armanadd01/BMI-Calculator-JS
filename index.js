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

    if (bmi <= 18.49) {
        document.getElementById("status").innerHTML = `You are <span class="text-warning">Underweight</span> <br>
            <span class="text-danger">Please consult a doctor, and eat more.</span>
        `;
        var box = document.getElementById("input-section");
        box.classList.remove("border-primary");
        box.classList.add("border-warning");
    }
    else if(bmi >= 18.50 && bmi <= 25){
        document.getElementById("status").innerHTML = `You are <span class="text-success">Normal</span> <br>
        <span class="text-primary">Congratulation!!! You are a healthy person.</span>
        `;
        var box = document.getElementById("input-section");
        box.classList.remove("border-primary");
        box.classList.add("border-success");
    }
    else if(bmi >= 25.01 && bmi <= 30){
        document.getElementById("status").innerHTML = `You are <span class="text-warning-emphasis">Overweight</span> <br>
            <span class="text-danger">Please consult a doctor, and eat less.</span>
        `;
        var box = document.getElementById("input-section");
        box.classList.remove("border-primary");
        box.classList.add("border-danger-subtle");
    }
    else if(bmi >= 30.01 ){
        document.getElementById("status").innerHTML = `You are <span class="text-danger">Obesity</span> <br>
            <span class="text-danger">Please consult a doctor ASAP.</span>
        `;
        var box = document.getElementById("input-section");
        box.classList.remove("border-primary");
        box.classList.add("border-danger");
    }

}