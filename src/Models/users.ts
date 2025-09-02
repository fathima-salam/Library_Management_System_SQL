export class User {
    constructor(
        public user_id: string,      
        public name: string,
        public email: string,
        public age: number,
        public joined_date?: Date
    ) {}

    isAdult(): boolean {
        return this.age >= 18;
    }
}