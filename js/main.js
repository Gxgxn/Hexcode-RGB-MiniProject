function randompickerbtn() {
  let random = "ABCDEF0123456789";
  let outHex = [];
  for (let i = 0; i < 6; i++) {
    outHex.push(random.charAt(Math.floor(Math.random() * random.length)));
  }
  document.getElementById(
    "randomPicker"
  ).style.backgroundColor = `#${outHex.join("")}`;
  document.getElementById("randomValuePara").innerText = `#${outHex.join("")}`;
}

function hexFindbtn() {
  let input = document.getElementById("hexInput").value;
  let display = document.getElementById("color-box");
  if (input.length === 0 || input.length !== 7) {
    throw "Only 6 digit hex values allows";
  } else if (input.match(/[abcdef0-9]{6}/gi) === null) {
    throw "Hex Value is out of bounds";
  }
  display.style.backgroundColor = input;
}

function RGBFindbtn() {
  let r = +document.getElementById("RInput").value;
  let g = +document.getElementById("GInput").value;
  let b = +document.getElementById("BInput").value;
  if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
    throw "RGB VALUE OUT OF BOUNDS";
  }
  let bg = `rgb(${r},${g},${b})`;
  console.log(bg);
  document.getElementById("rgb-color-box").style.backgroundColor = bg;
}

function RangeSelector() {
  let r = +document.getElementById("RrInput").value;
  let g = +document.getElementById("GrInput").value;
  let b = +document.getElementById("BrInput").value;

  let display = document.getElementById("range-color-box");
  display.style.backgroundColor = `rgb(${r},${g},${b})`;
}

// hex to rgb converter

String.prototype.convertToRGB = function () {
  if (this.length === 0 || this.length !== 6) {
    throw "Only 6 digit hex values allows";
  } else if (this.match(/[abcdef0-9]{6}/gi) === null) {
    throw "Hex Value is out of bounds";
  }
  let rgb = this.match(/.{1,2}/g);
  return [parseInt(rgb[0], 16), parseInt(rgb[1], 16), parseInt(rgb[2], 16)];
};

function hexConvbtn() {
  let input = document.getElementById("hexCInp").value;
  //   console.log(input);
  document.getElementById("hexCOut").innerText = `rbg(${input
    .convertToRGB()
    .join(",")})`;
}
// document.getElementById("HexConvertButton").onclick() = hexConvbtn();
function rgbConvbtn() {
  let r = +document.getElementById("RCInput").value;
  let g = +document.getElementById("GCInput").value;
  let b = +document.getElementById("BCInput").value;
  if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
    throw "RGB VALUE OUT OF BOUNDS";
  }
  document.getElementById("rgbCOut").innerText = `#${r.toString(
    16
  )}${g.toString(16)}${b.toString(16)}`;
  return `# ${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}
