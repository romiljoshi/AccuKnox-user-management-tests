import{faker} from '@faker-js/faker';

export class RandomDataGenerator{
    static getUserName(){
        return faker.internet.username();
    }

    static getEmployeeName(){
        return faker.person.firstName() + " " + faker.person.lastName();
    }

    static getpassword(){
        return faker.internet.password();
    }
}    