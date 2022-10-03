import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  bd: any;
  bb: any;
  text: string = "";
  reply: string = "";
  tem: boolean = false;
  com: number = 0;
  idG: number = 10;
  noreply = "juliusomo"
  constructor(private httpserv: HttpserviceService) { }

  ngOnInit(): void {
    this.httpserv.getJson().subscribe(res => { this.bd = res; this.bb = this.bd.comments; console.log(this.bb); });

  }
  sendReply(id: number) {


    let user = {

      "id": this.idG,
      "content": this.reply,
      "createdAt": "ahora",
      "score": 0,
      "user": {
        "image": {
          "png": this.bd.currentUser.image.png,
          "webp": "assets/images/avatars/image-amyrobson.webp"
        },
        "username": this.bd.currentUser.username
      },
      "replies": []
    }
    this.idG++;

    for (let i in this.bb) {
      if (this.bb[i].id == id) {
        this.bb[i].replies.push(user)
      }
    }
    this.tem = false;
    this.reply = "";

  }
  send() {
    let user = {
      "id": this.idG,
      "content": this.text,
      "createdAt": "just now",
      "score": 0,
      "user": {
        "image": {
          "png": this.bd.currentUser.image.png,
          "webp": "assets/images/avatars/image-amyrobson.webp"
        },
        "username": this.bd.currentUser.username
      },
      "replies": []
    }
    this.bb.push(user);
    this.text = "";
    this.idG++;
  }
  funn(id: number, us: string) {
    this.com = id;
    this.tem = !this.tem;
    this.reply = "@" + us + ","
  }
  delete(id: number) {
    let aux = [];
    for (let i in this.bb) {
      if (this.bb[i].id != id)
        aux.push(this.bb[i]);
    }
    this.bb = [];
    this.bb = aux
  }
  deleteR(idP: number, idH: number) {
    let aux = [];
    for (let i in this.bb) {
      if (this.bb[i].id == idP) {

        for (let j in this.bb[i].replies) {
          console.log(this.bb[i].replies[j].id);
          if (this.bb[i].replies[j].id != idH) {
            aux.push(this.bb[i].replies[j]);
            console.log(this.bb[i].replies[j].id);
          }

        }
        this.bb[i].replies = [];
        this.bb[i].replies = aux;

      }
    }
  }

  editar(){
    
  }

}

