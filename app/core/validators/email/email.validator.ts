import { Directive, forwardRef, provide } from 'angular2/core'
import { Control, NG_VALIDATORS, Validator } from 'angular2/common'

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

export function validateEmail(control: Control) {
    let pattern: RegExp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i

    return pattern.test(control.value) ? null : {
        ctEmail: {
            valid: false,
        },
    }
}
