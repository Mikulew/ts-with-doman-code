type Person = {
    id: number;
    firstName: string;
    lastName: string;
}

const mateusz = {
    id: 0,
    firstName: 'Mateusz',
    lastName: 'Domański',
};

const mateuszUpdated = {
    id: 1,
};

function updatePerson(id: number, person: Partial<Person>) {};

function anotherUpdate(oldData: Person, newData: Partial<Person>) {
    return { ...oldData, ...newData };
}

const newNameOfPerson = {
    firstName: 'Cyprian',
};

updatePerson(0, newNameOfPerson);
anotherUpdate(mateusz, mateuszUpdated);

type Emplpoyee = {
    id: number;
    firstName: string;
    lastName: string;
    jobPosition?: string;
}

const newFrontendDev: Required<Emplpoyee> = {
    id: 89,
    firstName: 'Aleksander',
    lastName: 'Jarosiński',
}; // Property 'jobPosition' is missing in type '{ id: number; firstName: string; lastName: string; }' but required in type 'Required<Emplpoyee>'.

type NamesKey = 'mateusz' | 'joanna' | 'cyprian';
type MyFamily = Record<NamesKey, Person>;

const myFamily: MyFamily = {
    mateusz: {
        id: 1,
        firstName: 'Mateusz',
        lastName: 'Domański',
    },
    joanna: {
        id: 2,
        firstName: 'Joanna',
        lastName: 'Bączkowska',
    },
    cyprian: {
        id: 1,
        firstName: 'Cyprian',
        lastName: 'Koziński',
    },
};
