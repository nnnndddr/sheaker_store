import {makeAutoObservable} from "mobx";

export default class ShoeStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Кеды'},
            {id: 2, name: 'Кроссовки'}
        ]
        this._brands = [
            {id: 1, name: 'Nike'},
            {id: 2, name: 'Adidas'},
            {id: 3, name: 'Converse'}
        ]
        this._shoes = [
            {id:1, name:'Chuck Taylor 70 HI', price: 256, rating: 5, img: 'https://styles.ua/content/images/42/kedy-converse-162050c-81237711380254_small11.jpeg'},
            {id:2, name:'Superstar', price: 123, rating: 3, img: 'https://coolsoks.ru/image/cache/catalog/i/jj/mj/3aad76cb57bd463337e20b679c2acff4-1200x800.jpg'},
            {id:3, name:'Gazelle', price: 100, rating: 4, img: 'https://sneakernews.com/wp-content/uploads/2016/08/adidas-gazelle-burgundy-core-blue-3.jpg'},
            {id:4, name:'Air Force 1', price: 120, rating: 4, img: 'https://sneakernews.com/wp-content/uploads/2014/12/nike-air-force-1-low-cmft-white-team-orange-white-2.jpg'}
        ]
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
}