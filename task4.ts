// Написать свой метод myFilter в прототипе массивов
const arr = [1, 5, -4, 3, -2, 0];

Array.prototype.myFilter = function <T>(func: (value: T, index: number, array: T[]) => boolean): T[] {
  const result: T[] = [];
  for (let index = 0; index < this.length; index++) {
    const value = this[index];
    if (func(value, index, this)) {
      result.push(value);
    }
  }
  return result;
};

console.log(arr.myFilter((value) => value > 0));
