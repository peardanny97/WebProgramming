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
        if (currentClassicRankData[0][String(5)].score >= score) {
            return currentClassicRankData[0];
        } else {
            const classicRank = {};
            for(let i = 1; i <= 5; i++) {
                console.log(currentClassicRankData[0][String(i)].score < score);
                if (Number(currentClassicRankData[0][String(i)].score) < score) {

                    for(let j = 5; j >= i + 1; j--) {
                        classicRank[String(j)] = currentClassicRankData[0][String(j-1)];
                    }
                    classicRank[String(i)] = {
                        user: name,
                        score: score
                    }
                    console.log(classicRank);
                    updateDoc(doc(db, "classic_rank", "classic_rank"), classicRank)
                        .then(() => {
                            console.log("classic_rank update");
                        })
                    return classicRank;
                } else {
                    classicRank[i.toString()] = currentClassicRankData[0][i.toString()];
                }
            }
        }
    }).catch(e => {
        console.log(e);
    })

}

export default setClassicRank;