// Abstract classes
abstract class Human {
    abstract age: number;
    abstract firstName: string;
    public abstract lastName: string;
    protected abstract pesel: number;
    private abstract secret: string; // 'private' modifier cannot be used with 'abstract' modifier.

    abstract greetings(): void;
    abstract getAge(): number;
}

const human = new Human(); // Cannot create an instance of an abstract class.

class Person extends Human { // Non-abstract class 'Person' does not implement inherited abstract member 'secret' from class 'Human'.
    constructor (
        public age: number,
        public firstName: string,
        public lastName: string,
        protected pesel: number,
    ) {
        super();
    }

    public greetings() {
        console.log(`Hello! My name is ${this.firstName} ${this.lastName}`);
    }

    public getAge() {
        return this.age;
    }
}

const user = new Person(31, "Mateusz", "Domański", 11222333444);