import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
})
export class ListComponent {
    items: string[] = [];

    formulario: FormGroup = new FormGroup({
        item: new FormControl('', [
            Validators.required,
            Validators.minLength(5),
        ]),
    });

    validarCampos(campo: string) {
        return (
            this.formulario.controls[campo]?.errors &&
            this.formulario.controls[campo]?.touched
        );
    }

    agregarItem() {
        if (this.formulario.invalid) {
            this.formulario.markAllAsTouched();
            return;
        }
        this.items.push(this.formulario.value.item);
        this.formulario.reset();
    }

    eliminarItem(index: any) {
        this.items.splice(index, 1);
    }
}
