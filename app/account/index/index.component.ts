import { Component } from 'angular2/core'
import { Router } from 'angular2/router'

import { Navigable } from '../../core/router/navigable'

@Component({
    templateUrl: 'app/account/index/index.component.html',
})
export class IndexComponent implements Navigable {
    constructor(private _router: Router) {}

    navigate(params) {
        this._router.navigate(params)
    }
}
