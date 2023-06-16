document.addEventListener("DOMContentLoaded", () => {
  const copyBtn = document.querySelectorAll(".copyBtn");
  const alertDiv = document.querySelector("#alertDiv");
  copyBtn.forEach((span) => {
    span.addEventListener("click", (e) => {
      const inputFieldId = span.id;
      const inputField = document.querySelector(`input#${inputFieldId}`);
      if (inputField) {
        navigator.clipboard
          .writeText(inputField.value)
          .then(() => {
            alertDiv.classList.add("copiedAlert");
            setTimeout(() => {
              alertDiv.classList.remove("copiedAlert");
            }, 2000);
          })
          .catch((error) => console.log("error", error));
      }
    });
  });
});
