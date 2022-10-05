import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import { FormsModule } from '@angular/forms';
import { ReplyComponent } from './reply/reply.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    ReplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
