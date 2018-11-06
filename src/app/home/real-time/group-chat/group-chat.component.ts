import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RestApiService } from '../../../shared/rest-api.service';
import { environment } from '../../../../environments/environment';

declare let $:any;
declare let app:any;

@Component({
  selector: 'app-group-chat',
  templateUrl: './group-chat.component.html',
  styleUrls: ['./group-chat.component.scss']
})
export class GroupChatComponent implements OnInit {

  message:any;
	my_conversation = [];
	online_users = [];
	online_users_count = 0;
	current_chat_mates = [];
	myStatus = "Online";
	statusList = app.status_list;

  constructor() { }

  ngOnInit() {
  	this.userList();
  	this.onlineUsersCount();
  }

  onlineUsersCount(){
  	this.online_users_count = this.online_users.filter(x => x.status === 'online').length;
  }

  userList(){
  	this.online_users = app.online_users;
  }

  searchUser(){

  }

  getConversation(id){
  	this.my_conversation = app.chat_messages;
  	this.current_chat_mates.push("Sunil Kumar T");
  }

  statusUpdate(newStatus){
  	this.myStatus = newStatus;
  	console.log(this.myStatus)
  }

  assert(field, value){
  	if(!value){alert(field + " is empty and is required."); throw new Error(field + " is empty and is required.");}
  }

  sendMessage(){
  	this.assert("Message", this.message);
  	let chat_message = {"id":1, "conversation_id":1, "from":"sunilkumar", "to":"manjunath", "message":"hi bro whats up!"};
  	chat_message['message'] = this.message;
  	this.my_conversation.push(chat_message);
  	this.message = "";
  	// console.log(this.message);
  }

  closeThisChat(){
  	
  }

}
