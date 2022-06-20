import {doc, setDoc, getFirestore} from "firebase/firestore";

function postUser(email, classicHighScore, timeAttackHighScore) {
    const db = getFirestore();
    setDoc(doc(db, "user", "email"), {
        classicHighScore : classicHighScore,
        timeAttackHighScore : timeAttackHighScore
    }).then(e => {
        console.log(e);
    })
}

export default postUser;