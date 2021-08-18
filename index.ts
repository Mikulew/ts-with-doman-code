class Person {
    #pesel = 11122233344;

    constructor(
        public age: number,
        private firstName: string, 
        protected lastName: string
    ) {}

    changeFirstName(newName: string) {
        this.firstName = newName;
    }

    greetings() {
        console.log(`Hello! My name is ${this.firstName} ${this.lastName}`);
    }

    showPesel() {
        console.log(this.#pesel);
    }
}

const user = new Person(31, "Mateusz", "Domański");