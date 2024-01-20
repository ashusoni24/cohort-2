function explainParseInt(value) {
  console.log("Original Value:", value);
  let result = parseInt(value);
  console.log("After parseInt:", result);
}

// Example Usage for parseInt
//parseInt("13hadbfb") - converts to int with no decimal or any letters
explainParseInt("42");
explainParseInt("42px");
explainParseInt("3.14");

function explainParseFloat(value) {
  console.log("Original Value:", value);
  let result = parseFloat(value);
  console.log("After parseFloat:", result);
}

// Example Usage for parseFloat
//parseFloat("3.13") can have the decimal numbers after
explainParseFloat("3.14");
explainParseFloat("42");
explainParseFloat("42px");
