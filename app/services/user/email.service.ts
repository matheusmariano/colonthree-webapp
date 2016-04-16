import { Injectable } from 'angular2/core'
import { Http } from 'angular2/http'

import { HttpService } from '../../common/services/http.service'
import { UniqueService } from '../../common/validators/unique/unique.validator'

@Injectable()
export class EmailService extends HttpService implements UniqueService {
    constructor(http: Http) {
        super(http)
    }

    getUnique(email: string) {
        let body: string = JSON.stringify({ email })

        return this.post('/user/email', body)
    }
}
