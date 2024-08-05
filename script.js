document.getElementById("paintCalculator").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get values from the form
  const length = parseFloat(document.getElementById("roomLength").value);
  const width = parseFloat(document.getElementById("roomWidth").value);
  const height = parseFloat(document.getElementById("roomHeight").value);
  const paintCoverage = parseFloat(document.getElementById("paintCoverage").value);
  const paintCoats = parseFloat(document.getElementById("paintCoats").value);

  // Calculate the area of the walls
  const wallArea = 2 * height * (length + width);

  // Calculate the amount of paint needed
  const paintNeeded = wallArea / paintCoverage;

  // Calculate total cost (assuming price per liter is missing; this should be added to the form if needed)
  const pricePerLiter = 20; // Example price, adjust as needed
  const totalCost = paintNeeded * pricePerLiter * paintCoats;

  // Display the result
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
    <p>Wall Area: ${wallArea.toFixed(2)} square meters</p>
    <p>Paint Needed: ${paintNeeded.toFixed(2)} liters</p>
    <p>Total Cost: $${totalCost.toFixed(2)}</p>`;
});
