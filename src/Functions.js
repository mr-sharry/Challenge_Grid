//File Handling



//Binary Questions
export function binary_question() {
  let bin = '';
    for (let i = 0; i < 8; i++) {
      bin += String(Math.floor(Math.random() * 2));
    }
    let den = parseInt(bin, 2).toString();
    /*let q, a;
    if (Math.floor(Math.random() * 2) === 0) {
      q = "Convert " + bin + " to denary.";
      a = den;
    } else {
      q = "Convert " + den + " to 8 bit binary.";
      a = bin;
    }*/
    return [bin, den];
}