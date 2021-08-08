type UserTypes = string;
type CommentsType = string;

let myUserType: UserTypes = "Admin";
let myCommentType: CommentsType = "Public";

type AccessMode = 1 | 2 | 3 | 4 | 5;

type BiggerType = {
    commonProperty: string;
    additionalProperty: string;
}

type SmallerType = {
    commonProperty: string;
    anotherOneProperty: string;
}

function showProperty(someObject: SmallerType) {
    return someObject.commonProperty;
}

// const bigger: BiggerType = {
//     commonProperty: 'test',
//     additionalProperty: 'test',
// };

// showProperty(bigger);

type SomeFunction = (someObject: SmallerType) => string;

let func: SomeFunction = showProperty;

function showCommonProperty(objectWithCommonProperty: BiggerType | SmallerType) {
    return objectWithCommonProperty.commonProperty;
}

const objectTest: BiggerType & SmallerType = {
    commonProperty: 'TypeScript',
    additionalProperty: 'is',
    anotherOneProperty: 'fantastic!',
};

type NewType = {
    bigger: BiggerType,
    smaller: SmallerType,
};

// type NewType = {}; Error! Duplicate identifier 'NewType'.

function log(obj: NewType) {
    console.log(obj.bigger.additionalProperty);
    console.log(obj.smaller.anotherOneProperty);
}

interface Point {
    x: number,
    y: number,
}

interface Point {
    description: string,
}

const point: Point = {
    x: 2,
    y: 0,
    description: 'Property \'description\' is missing in type \'{ x: number; y: number; }\' but required in type \'Point\'.ts(2741)',
};

const exampleObject = {
    a: 'Wrocław',
    b: 4,
} as const;

// exampleObject.a = 'Tarnów'; Error! Cannot assign to 'a' because it is a read-only property.ts(2540)