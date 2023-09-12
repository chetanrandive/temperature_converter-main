const convertTemperature = () => {
    const opt = document.getElementById("options").value;
    const input = Number.parseInt(document.getElementById("input").value);
    const output1 = document.getElementById("output1");
    const output2 = document.getElementById("output2");
    let val1 = 0;
    let val2 = 0;
  
    if (opt === "C") {
      val1 = (input * 9) / 5 + 32;
      val2 = input + 273.15;
      
      val1 = Math.round(val1 * 100) / 100
      val2 = Math.round(val2 * 100) / 100

      output1.value = val1 + " °F" 
      output2.value = val2 + " °K"
      console.log(opt+""+input+""+val1+""+val2)

    } if (opt === "F") {
      val1 = ((input - 32) * 5) / 9;
      val2 = (input - 32) * 5/9 + 273.15;

      val1 = Math.round(val1 * 100) / 100
      val2 = Math.round(val2 * 100) / 100
  
      output1.value = val1 + " °C"
      output2.value = val2 + " °K"
      console.log(opt+""+input+""+val1+""+val2)

    } if (opt === "K") {
      val1 = input - 273.15;
      val2 = (input - 273.15) * 9/5 + 32

      val1 = Math.round(val1 * 100) / 100
      val2 = Math.round(val2 * 100) / 100
  
      output1.value = val1 + " °C"
      output2.value = val2 + " °F"
      console.log(opt+""+input+""+val1+""+val2)
    }
};