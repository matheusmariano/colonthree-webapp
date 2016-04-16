import { Injectable } from 'angular2/core'
import { Http } from 'angular2/http'
import { Observable } from 'rxjs/Observable'

import { HttpService } from '../../common/services/http.service'
import { User } from './user'

@Injectable()
export class UserService extends HttpService {
    constructor(http: Http) {
        super(http)
    }

    store(user: User): Observable<any> {
        let body = JSON.stringify(user)

        return this.post('/user', body)
    }
}
