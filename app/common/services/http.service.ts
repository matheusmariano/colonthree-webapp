import { Http, Headers, Response, RequestOptions } from 'angular2/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx'

import { Config } from '../config'

export abstract class HttpService {
    constructor(private _http: Http) {}

    post(
        method: string,
        body: string,
        headers: { [key: string]: string } = {}
    ): Observable<any> {
        let uri: string = Config.apiBaseUrl + method

        headers['Content-Type'] = 'application/json'

        let options = new RequestOptions({
            headers: new Headers(headers),
        })

        return this._http
            .post(uri, body, options)
            .map((response) => response.json().body)
            .catch(this._handleError)
    }

    private _handleError(response: Response) {
        let error = response.json()
        let message: string = 'Server Error'

        if (error.meta) {
            let meta: { status: number, message: string } = error.meta
            message = `${meta.status} ${meta.message}`
        }

        return Observable.throw(message)
    }
}
