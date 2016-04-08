import { Control } from 'angular2/common'

export function validateEmail(control: Control) {
    let pattern: RegExp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i

    return pattern.test(control.value) ? null : {
        ctEmail: {
            valid: false,
        },
    }
}
