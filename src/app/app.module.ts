import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TarefasComponent } from './components/tarefas/tarefas.component';

@NgModule({
    declarations: [
        AppComponent,
        TarefasComponent
    ],
    imports: [
        BrowserModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
