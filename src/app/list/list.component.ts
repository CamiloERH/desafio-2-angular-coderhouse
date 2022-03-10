import { Component } from "@angular/core";

@Component({
    selector: 'list',
    templateUrl: './list.component.html'
})
export class ListComponent {
    items: string[] = [];
    item: string = '';

    agregarItem(){
        this.items.push(this.item);
    }

    eliminarItem(index: any){
        console.log(index);
        this.items.splice(index, 1);
    }
}