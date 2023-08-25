let output = document.getElementById("output");

function appendToOutput(value) {
  output.value += value;
}

function clearOutput() {
  output.value = "";
}

function calculate() {
  try {
    output.value = eval(output.value);
  } catch (error) {
    output.value = "Error";
  }
}

function calculateSquareRoot() {
  try {
    output.value = Math.sqrt(eval(output.value));
  } catch (error) {
    output.value = "Error";
  }
}

function calculateExponent() {
  try {
    output.value = eval(output.value) ** 2;
  } catch (error) {
    output.value = "Error";
  }
}
