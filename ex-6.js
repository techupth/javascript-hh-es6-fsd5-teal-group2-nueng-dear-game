let height = undefined;
let result;

const heightCheck = function (height) {
  result = height ?? "Height is not defined";
};
heightCheck(height);
console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
