// Get the elements
let billInput = document.getElementById("bill");
let btn = document.getElementById("btn");
let result = document.getElementById("result");

// Add event listener to the button
btn.addEventListener("click", () => {
  // Get the value from the input field and convert it to a number
  let bill = parseFloat(billInput.value);

  // Check if the bill amount is a number and not NaN
  if (isNaN(bill)) {
    result.innerHTML = "Please enter a valid number for the bill.";
    return;
  }

  // Calculate the tips
  let tip1 = bill * (15 / 100);
  let tip2 = bill * (20 / 100);

  // Determine which tip rate to use and construct the message
  let billTip =
    bill >= 50 && bill <= 300
      ? `The bill was ${bill.toFixed(2)}, the tip was ${tip1.toFixed(2)}, and the total value is ${(
          bill + tip1
        ).toFixed(2)}.`
      : `The bill was ${bill.toFixed(2)}, the tip was ${tip2.toFixed(2)}, and the total value is ${(
          bill + tip2
        ).toFixed(2)}.`;

  // Update the result element with the calculated tip information
  result.innerHTML = billTip;
});