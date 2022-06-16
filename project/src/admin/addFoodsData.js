import {getDownloadURL, getStorage, ref} from "firebase/storage"
import {addDoc, getFirestore, collection} from "firebase/firestore";


function addFoodData(image, title, price, hint) {
    const db = getFirestore();
    const storage = getStorage();
    console.log(image);
    getDownloadURL(ref(storage, image))
        .then(url => {
            console.log(url);
            addDoc(collection(db, "foods"), {
                image: url,
                title: title,
                price: price,
                hint: hint
            })
                .then(()=> {
                    console.log("add complete");
                }).catch(e=>console.log(e));
        })
        .catch(e => {
            console.log(e);
        })
}



function addFoodsData(jsons) {
    Array.from(jsons).forEach((json) => {
        const image = json.image + '.png';
        addFoodData(image, json.title, json.price, json.hint);
    })
}


export default addFoodsData;