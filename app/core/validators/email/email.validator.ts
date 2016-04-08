import { Directive, forwardRef, provide } from 'angular2/core'
import { Control, NG_VALIDATORS, Validator } from 'angular2/common'

import { validateEmail } from '../validators'

@Directive({
    selector: '[ctEmail][ngControl],[ctEmail][ngModel],[ctEmail][ngFormControl]',
    providers: [
        provide(NG_VALIDATORS, {
            useExisting: forwardRef(() => EmailValidator),
            multi: true,
        }),
    ],
})
export class EmailValidator implements Validator {
    validate(control) {
        return validateEmail(control)
    }
}
