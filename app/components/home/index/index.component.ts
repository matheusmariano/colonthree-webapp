import { Component } from 'angular2/core'
import { Router } from 'angular2/router'

import { Navigable } from '../../../common/router/navigable'

@Component({
    templateUrl: 'app/components/home/index/index.component.html',
})
export class IndexComponent implements Navigable {
    constructor(private _router: Router) {}

    navigate(params) {
        this._router.navigate(params)
    }
}
