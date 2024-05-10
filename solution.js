const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  
  try {
    if (dividend === "" || divider === "") {
      throw new Error("Both values are required.");
    }
    if (isNaN(dividend) || isNaN(divider)) {
      throw new Error("Values should be numbers.");
    }
    if (divider === "0" || dividend < 0 || divider < 0) {
      throw new Error("Invalid input provided.");
    }
    
    const divideResult = dividend / divider;
    result.innerText = Math.floor(divideResult);
    result.classList.remove("error-message", "critical-error");
  } catch (error) {
    result.innerText = "Error: " + error.message;
    result.classList.add(error.message.includes("Invalid") ? "error-message" : "critical-error");
    console.error("An unexpected error occurred:", error);
  }
});