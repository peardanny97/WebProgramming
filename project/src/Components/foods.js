
/* we assume that we get our url, hint, image, price form firebase during Game START process */
/* This file is just used for test, there will be random 20 items*/

var food1 = {
    name: "김가네 삼색칼국수",
    url: "img/1.png",
    price: 10000,
    hint: "메밀, 콩, 부추 등이 들어간 삼색면의 건강 칼국수"
}
var food2 = {
    name: "연잎풍천장어",
    url: "img/2.png",
    price: 85000,
    hint: "연잎을 더한 최고의 기력 보충 장어구이"
}
var food3 = {
    name: "해물천지 해물조개전골",
    url: "img/3.png",
    price: 54500,
    hint: "푸짐한 해물에 깔끔한 국물 맛이 더해진 조개 전골"
}
var food4 = {
    name: "별난곱창 곱창구이",
    url: "img/4.png",
    price: 34000,
    hint: "안산 곱창 골목에서도 가장 유명한 곱창구이"
}
var food5 = {
    name: "가연 마늘떡갈비",
    url: "img/5.png",
    price: 20000,
    hint: "단양에서 가장 유명한 한정식집의 인기 메뉴 떡갈비"
}


let foods = [
        food1,food2,food3,food4,food5
    ];

export default foods;