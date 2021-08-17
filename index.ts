type UserId = number | string | null | undefined;
type NonNullableUserId = NonNullable<UserId>;

const userId: NonNullableUserId = null; // Type 'null' is not assignable to type 'NonNullableUserId'.

function someFunction(age: number, id: number, firstName: string, lastName: string) {
    console.log(age, id, firstName, lastName);
}

type SomeFunction = Parameters<typeof someFunction>; // [age: number, id: number, firstName: string, lastName: string]

const parametersForOurFunction: SomeFunction = [4, 15, 'Aleksander', 'Krawiec'];

someFunction(...parametersForOurFunction);

class User {
    constructor(
        public age: number,
        public id: number,
        public firstName: string,
        public lastName: string,
    ) {}
}

type UserClassParameters = ConstructorParameters<typeof User>; // [age: number, id: number, firstName: string, lastName: string]

const newUserParams: UserClassParameters = [4, 15, 'Dominik', 'Szewc'];

new User(...newUserParams);

type Person = {
    age: number,
    firstName: string,
    lastName: string,
}

function gerFirstName(person: Person) {
    return person.age;
}

const age: ReturnType<typeof gerFirstName> = 31;