export class User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    address: string;
    department: string;
    dob: string;
    state: string;
    isAgree: boolean;
}

export const states = ['CA', 'MD', 'OH', 'VA'];

export const customNotificationOptions = {
    timeOut: 1000,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: true
  }