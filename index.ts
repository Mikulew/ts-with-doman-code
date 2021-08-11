enum Frameworks {
    REACT,
    VUE,
    ANGULAR,
    DOT_NET,
    LARAVEL,
    NEST,
}

enum TestingTypes {
    UNIT,
    MANUAL,
    E2E,
}

type FrontendFrameworks = Frameworks.REACT | Frameworks.VUE | Frameworks.ANGULAR;
type BackendFrameworks = Frameworks.DOT_NET | Frameworks.LARAVEL | Frameworks.NEST;

type Employee = {
    firstName: string,
    lastName: string,
    age: number,
    pesel: number,
}

type FrontendDev = {
    frontendFramework: FrontendFrameworks,
} & Employee;

type BackendDev = {
    backendFramework: BackendFrameworks,
} & Employee;

type QADev = {
    typeOfTesting: TestingTypes.UNIT | TestingTypes.MANUAL | TestingTypes.E2E,
} & Employee;

// interface FrontendDevCollection {
//     devs: Array<FrontendDev>;
//     addDev(newDev: FrontendDev): void;
//     getDev(pesel: number): FrontendDev | null;
//     removeDev(pesel: number): void;
//     updateDev(pesel: number, newData: FrontendDev): void;
// }

// class FrontendDevDatabase implements FrontendDevCollection {
//     devs: Array<FrontendDev> = [];

//     addDev(newDev: FrontendDev) {
//         this.devs.push(newDev);
//     }

//     getDev(pesel: number) { 
//         return this.devs.find(dev => dev.pesel === pesel) ?? null;
//     }

//     removeDev(pesel: number) {
//         this.devs.filter(dev => dev.pesel !== pesel);
//     }

//     updateDev(pesel: number, newData: FrontendDev) {
//         this.devs = this.devs.map(dev => {
//             if (dev.pesel === pesel) {
//                 return { ...dev, ...newData };
//             }
//             return dev;
//         })
//     }
// }

interface Collection<T> {
    devs: Array<T>;
    addDev(newDev: T): void;
    getDev(pesel: number): T | null;
    removeDev(pesel: number): void;
    updateDev(pesel: number, newData: T): void;
}
class EmployeeDatabase<T extends Employee> implements Collection<T> {
    devs: Array<T> = [];

    addDev(newDev: T) {
        this.devs.push(newDev);
    }

    getDev(pesel: number) { 
        return this.devs.find(dev => dev.pesel === pesel) ?? null;
    }

    removeDev(pesel: number) {
        this.devs.filter(dev => dev.pesel !== pesel);
    }

    updateDev(pesel: number, newData: T) {
        this.devs = this.devs.map(dev => {
            if (dev.pesel === pesel) {
                return { ...dev, ...newData };
            }
            return dev;
        })
    }
}

// const frontendDevsDatabase = new FrontendDevDatabase();

// frontendDevsDatabase.addDev({
//     firstName: 'Mikołaj',
//     lastName: 'Lewandowski',
//     pesel: 44011122233,
//     age: 30,
//     frontendFramework: Frameworks.REACT,
// })

// const backendDevsDatabase = new BackendDevsDatabase();

// backendDevsDatabase.addDev({
//     firstName: 'Mateusz',
//     lastName: 'Domański',
//     age: 31,
//     pesel: 12345678901,
//     backendFramework: Frameworks.NEST,
// });

const frontendDevsDatabase = new EmployeeDatabase<FrontendDev>();

frontendDevsDatabase.addDev({
    firstName: 'Mikołaj',
    lastName: 'Lewandowski',
    pesel: 44011122233,
    age: 30,
    frontendFramework: Frameworks.REACT,
})

const backendDevsDatabase = new EmployeeDatabase<BackendDev>();

backendDevsDatabase.addDev({
    firstName: 'Mateusz',
    lastName: 'Domański',
    age: 31,
    pesel: 12345678901,
    backendFramework: Frameworks.NEST,
});

const qaDevsDatabase = new EmployeeDatabase<QADev>();

qaDevsDatabase.addDev({
    firstName: "Jan",
    lastName: "Kowalski",
    age: 49,
    pesel: 11222333444,
    typeOfTesting: TestingTypes.MANUAL,
});