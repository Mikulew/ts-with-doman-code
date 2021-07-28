const ADDITION_BUTTON_ID = 'addition-button';
const FIRST_NUMBER_ID = 'first-number';
const SECOND_NUMBER_ID = 'second-number';
const NUMBER_CLASS = 'number';
const RESULT_PLACEHOLDER_ID = 'result-placeholder';

type Addition = (firstNumber?: number | string, secondNumber?: number | string) => number;

const addition: Addition = (firstNumber = 0, secondNumber = 0) => {
    const a = typeof firstNumber === 'number' ? firstNumber : Number(firstNumber);
    const b = typeof secondNumber === 'number' ? secondNumber : Number(secondNumber);

    return a + b;
}

const addButton = document.getElementById(ADDITION_BUTTON_ID);

addButton?.addEventListener('click', () => {
    // const firstNumber = document.querySelector(`#${FIRST_NUMBER_ID}`) as HTMLInputElement;
    // const secondNumber = document.querySelector(`#${SECOND_NUMBER_ID}`) as HTMLInputElement;
    const [firstInput, secondInput] = Array.from(document.querySelectorAll<HTMLInputElement >(NUMBER_CLASS));
    const resultPlaceholder = document.querySelector(RESULT_PLACEHOLDER_ID) as HTMLInputElement;

    if (!firstInput || !secondInput || !resultPlaceholder) {
        console.log('Not found all requirement elements in click function');
        return;
    }

    const result = addition(firstInput.value, secondInput.value);

    resultPlaceholder.textContent = `${result}`;
});