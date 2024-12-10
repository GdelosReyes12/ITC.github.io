document.addEventListener("DOMContentLoaded", () => {
    const calculateBtn = document.getElementById("calculateBtn");
    const clearBtn = document.getElementById("clearBtn");
    const resultBox = document.getElementById("result");
    const numberInput = document.getElementById("numberInput");
  
    
    calculateBtn.addEventListener("click", () => {
      const n = parseInt(numberInput.value);
  
      if (isNaN(n) || n <= 0) {
        resultBox.style.display = "block";
        resultBox.innerHTML = "<p>Please enter a positive integer.</p>";
        return;
      }
  
      
      let factorial = 1;
      let i = n;
      while (i > 1) {
        factorial *= i;
        i--;
      }
  
      
      let sum = 0;
      let j = 1;
      do {
        sum += j;
        j++;
      } while (j <= n);
  
      
      let average = 0;
      for (let k = 1; k <= n; k++) {
        average += k;
      }
      average /= n;
  
      
      resultBox.style.display = "block";
      resultBox.innerHTML = `
        <p><strong>Results for n = ${n}:</strong></p>
        <p>Factorial (while loop): ${factorial}</p>
        <p>Sum of first n numbers (do-while loop): ${sum}</p>
        <p>Average of first n numbers (for loop): ${average.toFixed(2)}</p>
      `;
    });
  
   
    clearBtn.addEventListener("click", () => {
      numberInput.value = "";
      resultBox.style.display = "none";
      resultBox.innerHTML = "";
    });
  });
  
