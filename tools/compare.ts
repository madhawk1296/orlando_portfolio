export function arraysAreEqual(array1: any[], array2: any[]) {
    return array1.length === array2.length && array1.every((element, index) => {
        return element === array2[index]; // or a more complex comparison if your elements are objects
    });
}