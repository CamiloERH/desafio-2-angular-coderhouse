import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ListComponent } from "./list.component";


@NgModule({
    declarations: [
        ListComponent
    ],
    exports: [
        ListComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
})
export class ListModule {}