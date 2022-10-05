import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  database: any;
  comments: any;
  text: string = "";
  reply: string = "";
  tem: boolean = false;
  ed: boolean = true;
  edR: boolean = false;
  mark: boolean = false;
  com: number = 0;
  idGlobal: number = 10;
  noreply = "juliusomo"
  constructor(private httpserv: HttpserviceService) { }

  ngOnInit(): void {
    this.httpserv.getJson().subscribe(res => { this.database = res; this.comments = this.database.comments; console.log(this.comments); });
  }
  sendReply(id: number) {

    let user = {
      "id": this.idGlobal,
      "content": this.reply,
      "createdAt": "just now",
      "score": 0,
      "user": {
        "image": {
          "png": this.database.currentUser.image.png,
          "webp": ""
        },
        "username": this.database.currentUser.username
      },
      "replies": []
    }
    this.idGlobal++;

    for (let i in this.comments) {
      if (this.comments[i].id == id) {
        this.comments[i].replies.push(user)
        break;
      }
    }
    this.tem = false;
    this.reply = "";
  }
  sendRReply(id: number) {


    let user = {

      "id": this.idGlobal,
      "content": this.reply,
      "createdAt": "Just now",
      "score": 0,
      "user": {
        "image": {
          "png": this.database.currentUser.image.png,
          "webp": ""
        },
        "username": this.database.currentUser.username
      },
      "replies": []
    }
    this.idGlobal++;

    for (let i in this.comments) {
      if (this.comments[i].id == id) {
        this.comments[i].replies.push(user)
        break;
      }
    }
    this.tem = false;
    this.reply = "";
    this.edR = !this.edR;

  }
  send() {
    let user = {
      "id": this.idGlobal,
      "content": this.text,
      "createdAt": "just now",
      "score": 0,
      "user": {
        "image": {
          "png": this.database.currentUser.image.png,
          "webp": "assets/images/avatars/image-amyrobson.webp"
        },
        "username": this.database.currentUser.username
      },
      "replies": []
    }
    this.comments.push(user);
    this.text = "";
    this.idGlobal++;
  }
  funn(id: number, us: string) {
    this.com = id;
    this.tem = !this.tem;
    this.reply = "@" + us + ","
  }
  ff(id: number, us: string){
    this.com = id;
    this.edR = !this.edR;
    this.reply = "@" + us + ","
  }
  f(id: number) {
    this.edR = !this.edR;
    this.com = id;
  }

  delet(id: number) {
    let aux = [];
    for (let i in this.comments) {
      if (this.comments[i].id != id)
        aux.push(this.comments[i]);
    }
    this.comments = [];
    this.comments = aux
  }
  deleteR(idP: number, idH: number) {
    let aux = [];
    for (let i in this.comments) {
      if (this.comments[i].id == idP) {

        for (let j in this.comments[i].replies) {
          console.log(this.comments[i].replies[j].id);
          if (this.comments[i].replies[j].id != idH) {
            aux.push(this.comments[i].replies[j]);
            console.log(this.comments[i].replies[j].id);
          }

        }
        this.comments[i].replies = [];
        this.comments[i].replies = aux;

      }
    }
  }

  editar(id: number, us: string) {
    if (this.tem) {
      this.updateText(id);
      return;
    }

    this.funn(id, us);
    for (let i in this.comments) {
      if (this.comments[i].id == id) {
        this.reply = this.comments[i].content;
        this.comments[i].content = "";
        this.ed = false;
        break;
      }

    }
  }
  editR(idP: number, idH: number) {
    this.f(idH);
    for (let i in this.comments) {
      if (this.comments[i].id == idP) {
        for (let j in this.comments[i].replies) {
          if (this.comments[i].replies[j].id == idH) {
            this.reply = this.comments[i].replies[j].content;
            break;
          }
        }

      }
    }

  }
  updateText(id: number) {
    for (let i in this.comments) {
      if (this.comments[i].id == id) {
        this.comments[i].content = this.reply;
        break;
      }

    }
    this.tem = !this.tem;
    this.reply = ""
    this.ed = true;
  }
  updateTextR(idP: number, idH: number) {
    for (let i in this.comments) {
      if (this.comments[i].id == idP) {
        for(let j in this.comments[i].replies)
        {
          if(this.comments[i].replies[j].id == idH)
          {
            this.comments[i].replies[j].content = this.reply;
            break;
          }
        }
       break;
      }

    }
    //this.tem = !this.tem;
    this.reply = ""
    
    this.edR = !this.edR;
  
  }

}

