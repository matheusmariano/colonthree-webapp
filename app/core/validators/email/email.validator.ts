import { Directive, forwardRef, provide } from 'angular2/core'
import { Control, NG_VALIDATORS, Validator, Validators } from 'angular2/common'
import { isPresent } from 'angular2/src/facade/lang'
import { isEmail } from 'validator'

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
    if (isPresent(Validators.required(control))) {
        return null
    }

    return isEmail(control.value) ? null : {
        ctEmail: {
            valid: false,
        },
    }
}
