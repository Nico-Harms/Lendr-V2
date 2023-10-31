
export default function LocalUserData() {

    const userData = JSON.parse(localStorage.getItem('userData'));

    return userData;

}