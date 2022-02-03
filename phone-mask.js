 phoneNumMask() {
    const phoneInputs = document.querySelectorAll("#phone");    //set ID for phone number inputs
    const mask = "+1 (___) ___-____";                           //set mask, use '_' for input area
   
    function nextUnderscore(inpField) {
      inpField.setSelectionRange(
        inpField.value.indexOf("_"),
        inpField.value.indexOf("_") + 1
      );

      if (!inpField.value.match(/_/g)) {
        inpField.blur();
      }
    }

    function setMask(input) {
      input.addEventListener("focus", (e) => {
        e.preventDefault();

        const target = e.target;
        target.value = mask;
        target.setSelectionRange(
          target.value.indexOf("_"),
          target.value.indexOf("_") + 1
        );
      });

      input.addEventListener("keydown", (e) => {
        if (e.key.match(/[^\d]/g)) {
          e.preventDefault();
          console.log('key = ""');
        } else {
          nextUnderscore(e.target);
        }
      });
    }

    phoneInputs.forEach((phoneInput) => {
      setMask(phoneInput);
    });
  }
