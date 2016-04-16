import { Injectable } from 'angular2/core'
import { Http } from 'angular2/http'

import { HttpService } from '../../common/services/http.service'
import { UniqueService } from '../../common/validators/unique/unique.validator'

@Injectable()
export class UsernameService extends HttpService implements UniqueService {
    constructor(http: Http) {
        super(http)
    }

    getUnique(username: string) {
        let body: string = JSON.stringify({ username })

        return this.post('/user/username', body)
    }
}
