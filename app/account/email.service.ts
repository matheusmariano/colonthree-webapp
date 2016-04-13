import { Injectable } from 'angular2/core'
import { Http, Headers, Response, RequestOptions } from 'angular2/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx'

import { Config } from '../config'
import { Unique, UniqueService } from '../core/validators/unique/unique.validator'

@Injectable()
export class EmailService implements UniqueService {
    constructor(private _http: Http) {}

    getUnique(email: string) {
        let url: string = Config.apiBaseUrl + '/account/email'
        let body: string = JSON.stringify({ email })
        let headers = new Headers({ 'Content-Type': 'application/json' })
        let options = new RequestOptions({ headers })

        return this._http
            .post(url, body, options)
            .map((response): Unique => response.json())
            .catch(this._handleError)
    }

    private _handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error')
    }
}
