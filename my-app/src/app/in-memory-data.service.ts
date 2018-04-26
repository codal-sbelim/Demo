import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemUsersService implements InMemoryDbService {
    createDb() {
        let users = [
            { id: 1, name: 'Alexa' },
            { id: 2, name: 'Jason' },
            { id: 3, name: 'Nil' },
            { id: 4, name: 'Jade' }
        ];
        return { users };
    }
}