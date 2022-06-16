import { collection, getDocs , getFirestore } from "firebase/firestore";

function getFoodsData() {
    const foods = [];
    const db = getFirestore();
    return getDocs(collection(db, "foods"))
        .then(snapshot => {
            snapshot.forEach((food) => {
                foods.push(food.data());
            });
            return foods;
        })
        .catch(e => {
            console.log(e);
        })
}

export default getFoodsData;