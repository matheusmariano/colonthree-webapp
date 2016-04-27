import { Injectable } from 'angular2/core'

@Injectable()
export class StorageService {
    private _data: { meta: { [key: string]: any }, body: any } = {
        meta: {},
        body: ''
    }

    private _storage

    local() {
        this._storage = window.localStorage

        return this
    }

    session() {
        this._storage = window.sessionStorage

        return this
    }

    get(key: string): any {
        this._data = JSON.parse(this._storage.getItem(key))

        if (!this._valid()) {
            return undefined
        }

        if (this._getMeta('flash')) {
            this.remove(key)
        }

        return this._data.body
    }

    set(key: string, value: any): void {
        this._data.body = value

        let data: string = JSON.stringify(this._data)

        this._storage.setItem(key, data)
    }

    flash(key: string, value: any): void {
        this._data.meta['flash'] = true

        this.set(key, value)
    }

    remove(key: string): void {
        this._storage.removeItem(key)
    }

    private _valid(): boolean {
        if (this._data && this._data.body && this._data.meta) {
            return true
        }

        return false
    }

    private _getMeta(key: string): any {
        if (this._valid && this._data.meta[key]) {
            return this._data.meta[key]
        }
    }
}
