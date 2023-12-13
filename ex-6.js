let height = undefined;
let result;

let nullishClosing = (height) => {
  if (height === undefined) {
    result = "Height is not defined";
    return result;
  }
};

nullishClosing(height);

console.log(result);
