import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            { id: 0, name: 'Zero' },
            { id: 11, name: 'Mallory' },
            { id: 12, name: 'Amy' },
            { id: 13, name: 'Becky' },
            { id: 14, name: 'Rick A' },
            { id: 15, name: 'Rick R' },
            { id: 16, name: 'Connie' },
            { id: 17, name: 'Steve' },
            { id: 18, name: 'Jessica' },
            { id: 19, name: 'Louie' },
            { id: 20, name: 'Ripley' },
            { id: 21, name: 'Paige' },
        ];
    return {heroes};
  }
}