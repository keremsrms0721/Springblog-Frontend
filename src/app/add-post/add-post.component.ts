import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AddPostService } from '../add-post.service';
import { PostPayload } from './post-payload';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  postPayload : PostPayload=new PostPayload();


  constructor(
    private addPostService : AddPostService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  onSave(myForm : NgForm){
    this.addPostService.addPost(this.postPayload).subscribe(data => {
      this.router.navigateByUrl("/");
    },error=>{
      console.log(error);
    });
  }

}
