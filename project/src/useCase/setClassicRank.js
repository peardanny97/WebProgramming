import {doc, updateDoc, getFirestore, getDocs, collection} from "firebase/firestore";



function getClassicRank() {
    const db = getFirestore();
    const classicRank = [];
    return getDocs(collection(db, "classic_rank"))
        .then(snapshot => {
            snapshot.forEach((rank) => {
                classicRank.push(rank.data());
            })
            return classicRank;
        })
        .catch(e => {
            console.log(e);
        })
}

function setClassicRank(name, score) {
    const db = getFirestore();
    return getClassicRank()
        .then(currentClassicRankData => {
            const classicRankArray = new Array(5);
            const classicRankObject = {};
            for(let i = 1; i <= 5; i++) {
                if (Number(currentClassicRankData[0][String(i)].score) < score) {
                    for(let j = 5; j >= i + 1; j--) {
                        classicRankArray[String(j-1)] = currentClassicRankData[0][String(j-1)];
                        classicRankObject[String(j)] = currentClassicRankData[0][String(j-1)];
                    }
                    classicRankArray[String(i-1)] = {
                        user: name,
                        score: score
                    }
                    classicRankObject[String(i)] = {
                        user: name,
                        score: score
                    }
                    updateDoc(doc(db, "classic_rank", "classic_rank"), classicRankObject)
                        .then(() => {
                            console.log("classic_rank update");
                        })
                    return classicRankArray;
                } else {
                    classicRankArray[String(i-1)] = currentClassicRankData[0][String(i)];
                    classicRankObject[String(i)] = currentClassicRankData[0][String(i)];
                }
            }
            return classicRankArray;
        }).catch(e => {
            console.log(e);
        })
}

export default setClassicRank;