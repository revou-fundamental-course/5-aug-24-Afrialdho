function calculateBMI() {
      const weight = parseFloat(document.getElementById('weight').value);
      const height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters

      if (weight > 0 && height > 0) {
        const bmi = weight / (height * height);
        displayResult(bmi);
      } else {
        alert('Tolong masukkan data yang benar.');
      }
    }

    function displayResult(bmi) {
      const resultDiv = document.getElementById('result');
      let category = '';

      if (bmi < 18.5) {
        category = 'Kekurangan berat badan';
      } else if (bmi < 25) {
        category = 'Normal';
      } else if (bmi < 30) {
        category = 'Berat badan berlebih';
      } else {
        category = 'Obesitas';
      }

      resultDiv.innerHTML = `Skor BMI anda adalah ${bmi.toFixed(2)}. Anda masuk dalam kategori ${category}.`;
    }