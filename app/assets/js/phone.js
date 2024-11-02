document.addEventListener("DOMContentLoaded", () => {
  const phoneInput = document.getElementById("phoneNumber");

  phoneInput.addEventListener("input", function (e) {
    // Remove all non-digit characters from the input
    let input = this.value.replace(/\D/g, "");

    // Format to xxx-xxx-xxxx
    let formattedNumber = "";
    if (input.length > 0) {
      formattedNumber = input.substring(0, 3) + "-";
      if (input.length > 3) {
        formattedNumber += input.substring(3, 6) + "-";
        if (input.length > 6) {
          formattedNumber += input.substring(6, 10);
        } else {
          formattedNumber += input.substring(6);
        }
      } else {
        formattedNumber += input.substring(3);
      }
    }

    // Set the formatted value back to the input
    this.value = formattedNumber;

    // Keep the caret position if the user is typing or deleting
    let caretPos = this.value.length;
    if (
      e.inputType === "deleteContentBackward" &&
      this.value[this.value.length - 1] === "-"
    ) {
      caretPos -= 1;
    }
    this.setSelectionRange(caretPos, caretPos);
  });

  // Handle pasting to format the number correctly
  phoneInput.addEventListener("paste", function (e) {
    // Short delay to ensure the pasted content is in the input value
    setTimeout(() => {
      this.dispatchEvent(new Event("input", { bubbles: true }));
    }, 0);
  });
});
