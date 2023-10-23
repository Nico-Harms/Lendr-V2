
export default function LocalUserData() {

    const userData = JSON.parse(sessionStorage.getItem('userData'));

    return userData;

}