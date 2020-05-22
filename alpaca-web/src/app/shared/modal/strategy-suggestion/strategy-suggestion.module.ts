import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {StrategySuggestionComponent } from './strategy-suggestion.component';
@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ StrategySuggestionComponent ],
    exports: [ StrategySuggestionComponent ]
})

export class StrategySuggestionModule {}
