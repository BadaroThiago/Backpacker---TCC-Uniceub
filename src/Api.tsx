import axios from 'axios';
import firebase from 'firebase';

const BASE_API = '';

export async function createUser (name: string, email: string, password: string, date: string) {
    await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

        // await axios.post(`${BASE_API}/user/new`, {
            // name: name,
            // email: email,
            // date: date,
            // fireabase_id: firebase.auth().currentUser.uid,
        // });
};
