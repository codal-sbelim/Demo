import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemUsersService implements InMemoryDbService {
    createDb() {
        // let users = [
        //     { id: 1, name: 'Alexa' },
        //     { id: 2, name: 'Jason' },
        //     { id: 3, name: 'Nil' },
        //     { id: 4, name: 'Jade' }
        // ];
        let users = [{
            "id": 1,
            "first_name": "Mercy",
            "last_name": "Delcastel",
            "email": "mdelcastel0@java.com",
            "gender": "Female",
            "address": "943 Gateway Junction",
            "department": "Marketing",
            "dob": "1990-05-20"
          }, {
            "id": 2,
            "first_name": "Tristam",
            "last_name": "Kermeen",
            "email": "tkermeen1@go.com",
            "gender": "Male",
            "address": "9566 Old Gate Parkway",
            "department": "Training",
            "dob": "2009-09-11"
          }, {
            "id": 3,
            "first_name": "Douglass",
            "last_name": "Mannix",
            "email": "dmannix2@miibeian.gov.cn",
            "gender": "Male",
            "address": "9 Dovetail Junction",
            "department": "Product Management",
            "dob": "1996-12-08"
          }, {
            "id": 4,
            "first_name": "Ruperto",
            "last_name": "Klimuk",
            "email": "rklimuk3@xing.com",
            "gender": "Male",
            "address": "24552 Hoepker Court",
            "department": "Product Management",
            "dob": "2013-05-25"
          }, {
            "id": 5,
            "first_name": "Reeba",
            "last_name": "Challis",
            "email": "rchallis4@businesswire.com",
            "gender": "Female",
            "address": "0 Laurel Terrace",
            "department": "Training",
            "dob": "1998-11-25"
          }, {
            "id": 6,
            "first_name": "Teressa",
            "last_name": "Vernon",
            "email": "tvernon5@t.co",
            "gender": "Female",
            "address": "47061 Claremont Pass",
            "department": "Engineering",
            "dob": "2006-03-27"
          }, {
            "id": 7,
            "first_name": "Suellen",
            "last_name": "Froschauer",
            "email": "sfroschauer6@narod.ru",
            "gender": "Female",
            "address": "987 Oakridge Trail",
            "department": "Business Development",
            "dob": "2005-02-15"
          }, {
            "id": 8,
            "first_name": "Benedikt",
            "last_name": "Gosart",
            "email": "bgosart7@github.io",
            "gender": "Male",
            "address": "883 Mariners Cove Alley",
            "department": "Product Management",
            "dob": "2012-02-06"
          }, {
            "id": 9,
            "first_name": "Talbert",
            "last_name": "Roantree",
            "email": "troantree8@fc2.com",
            "gender": "Male",
            "address": "8 Mayfield Way",
            "department": "Support",
            "dob": "2006-01-14"
          }, {
            "id": 10,
            "first_name": "Deerdre",
            "last_name": "Oxford",
            "email": "doxford9@indiegogo.com",
            "gender": "Female",
            "address": "69 Debs Terrace",
            "department": "Human Resources",
            "dob": "2009-09-10"
          }];

        return { users };
    }
}