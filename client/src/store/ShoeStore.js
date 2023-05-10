import {makeAutoObservable} from "mobx";

export default class ShoeStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Кеды'},
            {id: 2, name: 'Кроссовки'},
            {id: 3, name: 'Ботинки'},
            {id: 4, name: 'Спортивная обувь'},
        ]
        this._brands = [
            {id: 1, name: 'Nike'},
            {id: 2, name: 'Adidas'},
            {id: 3, name: 'Converse'},
            {id: 4, name: 'Puma'},
            {id: 5, name: 'Rick Owens'},
        ]
        this._shoes = [
            {id:1, name:'Chuck Taylor 70 HI', price: 256, size: 5, img: 'https://6fc2cc26-685a-4c6d-87fa-cc155b3870b1.selcdn.net/S1ZKIccsi/670-image.jpg'},
            {id:2, name:'Superstar', price: 123, size: 3, img: 'https://media.gq.com/photos/60ca5583f1da6f59930e7c73/master/w_1280%2Cc_limit/Adidas-Originals-Superstar-sneaker.jpg'},
            {id:3, name:'Gazelle', price: 100, size: 4, img: 'https://sneakernews.com/wp-content/uploads/2016/08/adidas-gazelle-burgundy-core-blue-3.jpg'},
            {id:4, name:'Gazelle', price: 100, size: 4, img: 'https://sneakernews.com/wp-content/uploads/2016/08/adidas-gazelle-burgundy-core-blue-3.jpg'},
            {id:5, name:'Gazelle', price: 100, size: 4, img: 'https://sneakernews.com/wp-content/uploads/2016/08/adidas-gazelle-burgundy-core-blue-3.jpg'},
            {id:6, name:'Air Force 1', price: 120, size: 4, img: 'https://sneakernews.com/wp-content/uploads/2014/12/nike-air-force-1-low-cmft-white-team-orange-white-2.jpg'}
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }


    get types() {
        return this._types;
    }

    setTypes(value) {
        this._types = value;
    }

    get brands() {
        return this._brands;
    }

    setBrands(value) {
        this._brands = value;
    }

    get shoes() {
        return this._shoes;
    }

    setShoes(value) {
        this._shoes = value;
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    get selectedType() {
        return this._selectedType;
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get selectedBrand() {
        return this._selectedBrand;
    }
}