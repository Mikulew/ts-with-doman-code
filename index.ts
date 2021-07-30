function mapToElementLengthTypes(array: { length: number }[]): number[] {
    return array.map(e => e.length);
}

const map1 = mapToElementLengthTypes(["this", "works!"]);
console.log('map1:', map1);
const map2 = mapToElementLengthTypes(["this", "works!", [3, 5, 7, 3]]);
console.log('map2:', map2);
const map3 = mapToElementLengthTypes(["this", "works!", [3, 5, 7, 3]], 5);

function enrichWithIndex(array: any[]): { index: number, value: any }[] {
    return array.map((e, index) => ({ value: e, index }));
}

const result = enrichWithIndex(["hey", "there", "whats up"]);
console.log(result[0].value.notExistingMethod());

function enrichWithIndexTyped<T>(array: T[]): { index: number, value: T }[] {
    return array.map((e, index) => ({ value: e, index }));
}

const result2 = enrichWithIndexTyped(["hey", "there", "whats up"]);
console.log(result2[0].value.notExistingMethod());