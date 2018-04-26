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
            "first_name": "Gallagher",
            "last_name": "Velden",
            "email": "gvelden0@themeforest.net",
            "gender": "Male",
            "address": "8 Rutledge Point",
            "department": "Training",
            "dob": "10/13/2017"
        }, {
            "id": 2,
            "first_name": "Mayne",
            "last_name": "Whorall",
            "email": "mwhorall1@wordpress.org",
            "gender": "Male",
            "address": "67 Mariners Cove Road",
            "department": "Sales",
            "dob": "2/17/2018"
        }, {
            "id": 3,
            "first_name": "Brandy",
            "last_name": "Croote",
            "email": "bcroote2@trellian.com",
            "gender": "Female",
            "address": "62717 Steensland Plaza",
            "department": "Research and Development",
            "dob": "8/29/2017"
        }, {
            "id": 4,
            "first_name": "Ichabod",
            "last_name": "Gleave",
            "email": "igleave3@myspace.com",
            "gender": "Male",
            "address": "4898 Doe Crossing Street",
            "department": "Legal",
            "dob": "5/6/2017"
        }, {
            "id": 5,
            "first_name": "Jo-ann",
            "last_name": "Hallgarth",
            "email": "jhallgarth4@odnoklassniki.ru",
            "gender": "Female",
            "address": "69237 Dakota Crossing",
            "department": "Services",
            "dob": "12/22/2017"
        }, {
            "id": 6,
            "first_name": "Bern",
            "last_name": "Defty",
            "email": "bdefty5@live.com",
            "gender": "Male",
            "address": "70 Delaware Park",
            "department": "Marketing",
            "dob": "6/23/2017"
        }, {
            "id": 7,
            "first_name": "Terrye",
            "last_name": "Fishbourn",
            "email": "tfishbourn6@topsy.com",
            "gender": "Female",
            "address": "7 Eastwood Avenue",
            "department": "Product Management",
            "dob": "7/5/2017"
        }, {
            "id": 8,
            "first_name": "Lizabeth",
            "last_name": "Aisbett",
            "email": "laisbett7@bloglines.com",
            "gender": "Female",
            "address": "3481 La Follette Avenue",
            "department": "Support",
            "dob": "9/10/2017"
        }, {
            "id": 9,
            "first_name": "Ly",
            "last_name": "Canete",
            "email": "lcanete8@noaa.gov",
            "gender": "Male",
            "address": "45421 Sunnyside Terrace",
            "department": "Engineering",
            "dob": "12/12/2017"
        }, {
            "id": 10,
            "first_name": "Matt",
            "last_name": "Macknish",
            "email": "mmacknish9@blogger.com",
            "gender": "Male",
            "address": "337 Starling Crossing",
            "department": "Support",
            "dob": "10/23/2017"
        }, {
            "id": 11,
            "first_name": "Dael",
            "last_name": "Cockrill",
            "email": "dcockrilla@list-manage.com",
            "gender": "Female",
            "address": "22593 Orin Road",
            "department": "Accounting",
            "dob": "7/4/2017"
        }, {
            "id": 12,
            "first_name": "Cliff",
            "last_name": "Durbyn",
            "email": "cdurbynb@usatoday.com",
            "gender": "Male",
            "address": "075 Bunker Hill Hill",
            "department": "Training",
            "dob": "2/27/2018"
        }, {
            "id": 13,
            "first_name": "Marigold",
            "last_name": "MacGall",
            "email": "mmacgallc@guardian.co.uk",
            "gender": "Female",
            "address": "4 Green Ridge Court",
            "department": "Training",
            "dob": "7/2/2017"
        }, {
            "id": 14,
            "first_name": "Solomon",
            "last_name": "Macilhench",
            "email": "smacilhenchd@google.com",
            "gender": "Male",
            "address": "6 Texas Terrace",
            "department": "Product Management",
            "dob": "9/30/2017"
        }, {
            "id": 15,
            "first_name": "Georgeanne",
            "last_name": "Cholton",
            "email": "gcholtone@amazonaws.com",
            "gender": "Female",
            "address": "43 Goodland Crossing",
            "department": "Sales",
            "dob": "9/5/2017"
        }, {
            "id": 16,
            "first_name": "Arlan",
            "last_name": "Gennrich",
            "email": "agennrichf@netvibes.com",
            "gender": "Male",
            "address": "3651 Hagan Court",
            "department": "Marketing",
            "dob": "1/28/2018"
        }, {
            "id": 17,
            "first_name": "Lissie",
            "last_name": "Iveson",
            "email": "livesong@hp.com",
            "gender": "Female",
            "address": "06979 Continental Alley",
            "department": "Research and Development",
            "dob": "2/12/2018"
        }, {
            "id": 18,
            "first_name": "Aurelie",
            "last_name": "Ghelardi",
            "email": "aghelardih@timesonline.co.uk",
            "gender": "Female",
            "address": "9301 Memorial Park",
            "department": "Human Resources",
            "dob": "6/20/2017"
        }, {
            "id": 19,
            "first_name": "Idaline",
            "last_name": "Hebard",
            "email": "ihebardi@blogspot.com",
            "gender": "Female",
            "address": "29342 Starling Terrace",
            "department": "Sales",
            "dob": "11/6/2017"
        }, {
            "id": 20,
            "first_name": "Brooke",
            "last_name": "Pugh",
            "email": "bpughj@cbsnews.com",
            "gender": "Female",
            "address": "22052 Rowland Avenue",
            "department": "Support",
            "dob": "11/28/2017"
        }, {
            "id": 21,
            "first_name": "Jolie",
            "last_name": "Tinner",
            "email": "jtinnerk@livejournal.com",
            "gender": "Female",
            "address": "8 Arkansas Trail",
            "department": "Services",
            "dob": "3/31/2018"
        }, {
            "id": 22,
            "first_name": "Flora",
            "last_name": "Starkings",
            "email": "fstarkingsl@wufoo.com",
            "gender": "Female",
            "address": "52918 Eagan Hill",
            "department": "Accounting",
            "dob": "5/20/2017"
        }, {
            "id": 23,
            "first_name": "Carolynn",
            "last_name": "Huttley",
            "email": "chuttleym@howstuffworks.com",
            "gender": "Female",
            "address": "5573 Gateway Place",
            "department": "Legal",
            "dob": "9/30/2017"
        }, {
            "id": 24,
            "first_name": "Pat",
            "last_name": "Heyworth",
            "email": "pheyworthn@businesswire.com",
            "gender": "Male",
            "address": "89 6th Parkway",
            "department": "Human Resources",
            "dob": "5/9/2017"
        }, {
            "id": 25,
            "first_name": "Marcille",
            "last_name": "Leith",
            "email": "mleitho@ehow.com",
            "gender": "Female",
            "address": "1705 Oxford Court",
            "department": "Human Resources",
            "dob": "1/7/2018"
        }, {
            "id": 26,
            "first_name": "Marlie",
            "last_name": "Marcombe",
            "email": "mmarcombep@gnu.org",
            "gender": "Female",
            "address": "4 Maple Wood Court",
            "department": "Research and Development",
            "dob": "10/26/2017"
        }, {
            "id": 27,
            "first_name": "Christopher",
            "last_name": "Ricca",
            "email": "criccaq@theguardian.com",
            "gender": "Male",
            "address": "71 Evergreen Court",
            "department": "Training",
            "dob": "9/25/2017"
        }, {
            "id": 28,
            "first_name": "Ida",
            "last_name": "Noraway",
            "email": "inorawayr@tumblr.com",
            "gender": "Female",
            "address": "4815 Stuart Drive",
            "department": "Research and Development",
            "dob": "10/13/2017"
        }, {
            "id": 29,
            "first_name": "Joshia",
            "last_name": "Eustis",
            "email": "jeustiss@cargocollective.com",
            "gender": "Male",
            "address": "41208 Hanson Junction",
            "department": "Services",
            "dob": "3/3/2018"
        }, {
            "id": 30,
            "first_name": "Melany",
            "last_name": "Gillice",
            "email": "mgillicet@google.com",
            "gender": "Female",
            "address": "78439 Crowley Street",
            "department": "Training",
            "dob": "7/9/2017"
        }]

        return { users };
    }
}