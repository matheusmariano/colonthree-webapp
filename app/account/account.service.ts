import { Injectable } from 'angular2/core'
import { Http } from 'angular2/http'
import { Observable } from 'rxjs/Observable'

import { HttpService } from '../core/services/http.service'
import { CreateForm } from './create/create-form'

@Injectable()
export class AccountService extends HttpService {
    constructor(http: Http) {
        super(http)
    }

    store(account: CreateForm): Observable<any> {
        let body = JSON.stringify(account)

        return this.post('/account', body)
    }
}
