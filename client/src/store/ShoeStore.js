import {makeAutoObservable} from "mobx";

export default class ShoeStore {
    constructor() {
        this._types = []
        this._brands = []
        this._shoes = []
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