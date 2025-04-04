const num1Input = document.getElementById('num1') as HTMLInputElement;
const num2Input = <HTMLInputElement>document.getElementById('num2');
const buttonElement = document.querySelector('button');

function add(a: number, b: number) {
  return a + b;
}

const result = add(5, 3);

console.log(result);

type CalculationResults = { res: number, print: () => void }[];

const results: CalculationResults = []; //assigning type to array { res: number }[] 

buttonElement.addEventListener('click', () => {
  const num1 = +num1Input.value;
  const num2 = +num2Input.value;
  const result = add(num1, num2);

  const resultContainer = { // assign type to object; however type inference automaticlly deduce the type
    res: result,
    print() {
      console.log(this.res);
    }
  };
  results.push(resultContainer);

});