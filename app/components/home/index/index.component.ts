import { Title } from 'angular2/platform/browser'
import { Component } from 'angular2/core'
import { OnActivate, Router } from 'angular2/router'

import { Navigable } from '../../../common/router/navigable'

@Component({
    templateUrl: 'app/components/home/index/index.component.html',
    providers: [Title],
})
export class IndexComponent implements OnActivate, Navigable {
    constructor(
        private _title: Title,
        private _router: Router
    ) {}

    routerOnActivate() {
        this._title.setTitle('ColonThree')
    }

    navigate(params) {
        this._router.navigate(params)
    }
}
