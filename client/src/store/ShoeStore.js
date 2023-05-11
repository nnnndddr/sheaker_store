import {makeAutoObservable} from "mobx";

export default class ShoeStore {
    constructor() {
        this._types = []
        this._brands = []
        this._shoes = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
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
        this.setPage(1)
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


    get page() {
        return this._page;
    }

    setPage(value) {
        this._page = value;
    }

    get totalCount() {
        return this._totalCount;
    }

    setTotalCount(value) {
        this._totalCount = value;
    }

    get limit() {
        return this._limit;
    }

    setLimit(value) {
        this._limit = value;
    }
}