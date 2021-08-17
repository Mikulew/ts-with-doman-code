type Person = {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
}

function updateUserFirstName(id: number, personToUpdate: Pick<Person, 'firstName'>) {
    personToUpdate.firstName // OK
    personToUpdate.lastName // Property 'lastName' does not exist on type 'Pick<Person, "firstName">'.
    personToUpdate.age // Property 'age' does not exist on type 'Pick<Person, "firstName">'.
    personToUpdate.id // Property 'id' does not exist on type 'Pick<Person, "firstName">'.
}

function updatePerson(id: number, personToUpdate: Omit<Person, 'id'>) {
    personToUpdate.firstName // OK
    personToUpdate.lastName // OK
    personToUpdate.age // OK
    personToUpdate.id // Property 'id' does not exist on type 'Omit<Person, "id">'.
}

type TechnologiesInOurCompany = 'React' | 'JavaScript' | 'TypeScript' | 'C#' | '.NET' | 'Cypress';
type BackendTechnologiesInOurCompany = 'C#' | '.NET';
type FrontendTechnologiesInOurCompany = Exclude<TechnologiesInOurCompany, BackendTechnologiesInOurCompany>;

const jsDevOnFrontendGood: FrontendTechnologiesInOurCompany = 'TypeScript'; // OK
const jsDevOnFrontendBad: FrontendTechnologiesInOurCompany = '.NET'; // Type '".NET"' is not assignable to type 'FrontendTechnologiesInOurCompany'.

type MikulewDev = 'Vue' | 'React' | 'JavaScript' | 'TypeScript';

const newProjectGood: Extract<TechnologiesInOurCompany, MikulewDev> = 'React'; // OK
const newProjectBad: Extract<TechnologiesInOurCompany, MikulewDev> = 'Vue'; // Type '"Vue"' is not assignable to type '"React" | "JavaScript" | "TypeScript"'.