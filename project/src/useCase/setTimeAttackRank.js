import {doc, updateDoc, getFirestore, getDocs, collection} from "firebase/firestore";
import timeAttack from "../Components/TimeAttack";



function getTimeAttackRank() {
    const db = getFirestore();
    const timeAttackRank = [];
    return getDocs(collection(db, "timeattack_rank"))
        .then(snapshot => {
            snapshot.forEach((rank) => {
                timeAttackRank.push(rank.data());
            })
            return timeAttackRank;
        })
        .catch(e => {
            console.log(e);
        })
}

function setTimeAttackRank(name, time) {
    const db = getFirestore();
    return getTimeAttackRank()
        .then(currentTimeAttackRankData => {
            const timeAttackRankArray = new Array(5);
            const timeAttackRankObject = {};
            for(let i = 1; i <= 5; i++) {
                if (Number(currentTimeAttackRankData[0][String(i)].time) > time) {
                    for(let j = 5; j >= i + 1; j--) {
                        timeAttackRankArray[String(j-1)] = currentTimeAttackRankData[0][String(j-1)];
                        timeAttackRankObject[String(j)] = currentTimeAttackRankData[0][String(j-1)];
                    }
                    timeAttackRankArray[String(i-1)] = {
                        user: name,
                        time: time
                    }
                    timeAttackRankObject[String(i)] = {
                        user: name,
                        time: time
                    }
                    updateDoc(doc(db, "timeattack_rank", "timeattack_rank"), timeAttackRankObject)
                        .then(() => {
                            console.log("timeattack_rank update");
                        })
                    return timeAttackRankArray;
                } else {
                    timeAttackRankArray[String(i-1)] = currentTimeAttackRankData[0][String(i)];
                    timeAttackRankObject[String(i)] = currentTimeAttackRankData[0][String(i)];
                }
            }
            return timeAttackRankArray;
        }).catch(e => {
            console.log(e);
        })
}

export default setTimeAttackRank;