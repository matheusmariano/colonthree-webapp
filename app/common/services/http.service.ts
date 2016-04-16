import { Http, Headers, Response, RequestOptions } from 'angular2/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx'

import { Config } from '../config'

export abstract class HttpService {
    constructor(private _http: Http) {}

    post(method: string, body: string): Observable<any> {
        let uri: string = Config.apiBaseUrl + method
        let headers = new Headers({ 'Content-Type': 'application/json' })
        let options = new RequestOptions({ headers })

        return this._http
            .post(uri, body, options)
            .map((response) => response.json().body)
            .catch(this._handleError)
    }

    private _handleError(error: Response) {
        let meta: { status: number, message: string } = error.json().meta
        let message: string = `${meta.status} ${meta.message}`

        return Observable.throw(message || 'Server Error')
    }
}
