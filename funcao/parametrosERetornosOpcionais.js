function area(a, b) {
  const area = a * b;
  if (area > 20) {
    console.log(`valor acima do permitido: ${area}`);
  } else {
    return area;
  }
}

console.log(area(2,3))
