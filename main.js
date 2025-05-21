
function gcd(a, b) {
  return b ? gcd(b, a % b) : a;
}

function decimalToFractional(decimal) {
  let numerator = Math.round((decimal - 1) * 100);
  let denominator = 100;
  let factor = gcd(numerator, denominator);
  return `${numerator / factor}/${denominator / factor}`;
}

function decimalToAmerican(decimal) {
  return decimal >= 2
    ? `+${Math.round((decimal - 1) * 100)}`
    : `${Math.round(-100 / (decimal - 1))}`;
}

function convertOdds() {
  let d = parseFloat(document.getElementById("decimal").value);
  let fInput = document.getElementById("fractional").value;
  let a = parseFloat(document.getElementById("american").value);

  if (!isNaN(d)) {
    document.getElementById("fractional").value = decimalToFractional(d);
    document.getElementById("american").value = decimalToAmerican(d);
    document.getElementById("result").innerText = `จาก Decimal ${d} แปลงเรียบร้อยแล้ว.`;
  } else if (fInput.includes("/")) {
    let [num, den] = fInput.split("/").map(Number);
    let decimal = (num / den) + 1;
    document.getElementById("decimal").value = decimal.toFixed(2);
    document.getElementById("american").value = decimalToAmerican(decimal);
    document.getElementById("result").innerText = `จาก Fractional ${fInput} แปลงเรียบร้อยแล้ว.`;
  } else if (!isNaN(a)) {
    let decimal = a > 0 ? (a / 100 + 1) : (100 / Math.abs(a) + 1);
    document.getElementById("decimal").value = decimal.toFixed(2);
    document.getElementById("fractional").value = decimalToFractional(decimal);
    document.getElementById("result").innerText = `จาก American ${a} แปลงเรียบร้อยแล้ว.`;
  } else {
    document.getElementById("result").innerText = `กรุณากรอกอัตราต่อรองอย่างน้อยหนึ่งช่อง.`;
  }
}
