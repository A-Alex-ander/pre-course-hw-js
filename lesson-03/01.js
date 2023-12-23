const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
  let copy = colors.filter(
    (el) => el === "черный" || el === "красный" || el === "желтый"
  );
  return copy.join("-");
}

console.log(createColorString());
