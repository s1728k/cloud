import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RestApiService } from '../../../shared/rest-api.service';
import { environment } from '../../../../environments/environment';

declare let $:any;
declare let app:any;

@Component({
  selector: 'app-create-new-table',
  templateUrl: './create-new-table.component.html',
  styleUrls: ['./create-new-table.component.scss']
})
export class CreateNewTableComponent implements OnInit {

  table_group_names = app.table_group_name;
	databaseList = app.free_databases;
	data_types = app.data_types;
	data_type_modifiers = app.data_type_modifiers;
	my_sql_indexes = app.my_sql_indexes;
  newTableGroup = {};
	newTable = {};
	mi = 0;
	si = 0;
  civ = {};

  constructor(private http: RestApiService, private router: Router,) { }

  ngOnInit() {
    // this.getDatabases();
  	this.newTable['fields'] = [];
    this.newTable['composite_indexes'] = [];
    this.addNewField();
    console.log(this.newTable['fields'])
  }

  getDatabases(){
    this.http.url = environment.apiUrl + "/databases";
    this.http.getObjs().subscribe((data:any)=>{
      console.log(data);
      this.databaseList = data;
    });
  }

  getTableGroups(){
    this.http.url = environment.apiUrl + this.newTable['database_name'] + "/tablegroups";
    this.http.getObjs().subscribe((data:any)=>{
      console.log(data);
      this.table_group_names = data;
    });
  }

  showCreateNewGroupModal(){
    console.log(this.newTable['group_name']);
    if (this.newTable['group_name'] == "Create New Group"){
      $("#createNewTableGroup").modal();
    }
  }

  addNewTableGroupName(){
    if(this.table_group_names.find(x => x.name === this.newTable['group_name'])){
      alert(this.newTable['group_name'] + " already exists and therefore not saved.")
    }else{
      // this.table_group_names.push({"name": this.newTable['group_name']});
      this.newTableGroup['name'] = this.newTable['group_name'];
      this.newTableGroup['database_name'] = this.newTable['database_name'];
      this.http.url = environment.apiUrl + this.newTable['database_name'] + "/tablegroup/new";
      this.http.addObj(this.newTableGroup).subscribe((data:any)=>{
        console.log(data);
        this.table_group_names.push({"name": this.newTable['group_name']});
      });
    }
  }

  addNewField(){
  	this.newTable['fields'].push({}={});
  	this.newTable['fields'][this.newTable['fields'].length-1]['elequent_array'] = "fillable";
  }

  removeField(i){
  	this.newTable['fields'].splice(i,1);
  }

  modifierInputDialog(i){
    this.mi = i;
    $("#modifierInputModel").modal();
  }

  addNewModifier(i){
    this.newTable['fields'][this.mi]['data_type_modifier'] = [];
    for (let i = 0; i < this.data_type_modifiers.length; i++) {
      if(this.data_type_modifiers[i]['required']){
        this.newTable['fields'][this.mi]['data_type_modifier'].push({}={});
        let di = this.newTable['fields'][this.mi]['data_type_modifier'].length - 1;
        this.newTable['fields'][this.mi]['data_type_modifier'][di]['name']= this.data_type_modifiers[i]['name'];
        this.newTable['fields'][this.mi]['data_type_modifier'][di]['value']= this.data_type_modifiers[i]['value'];
      }
    }
  }

  indexInputDialog(i){
    this.si = i;
    $("#sqlIndexInputModel").modal();
  }

  addNewIndex(i){
    this.newTable['fields'][this.si]['my_sql_index'] = [];
    for (let i = 0; i < this.my_sql_indexes.length; i++) {
      if(this.my_sql_indexes[i]['required']){
        this.newTable['fields'][this.si]['my_sql_index'].push({}={});
        let di = this.newTable['fields'][this.si]['my_sql_index'].length - 1;
        this.newTable['fields'][this.si]['my_sql_index'][di]['name']= this.my_sql_indexes[i]['name'];
        this.newTable['fields'][this.si]['my_sql_index'][di]['value']= this.newTable['fields'][this.si]['field_name'];
      }
    }
  }

  compositeIndexInputDialog(){
    $("#compositeIndexInputModel").modal();
  }

  addNewCompositeIndex(){
    this.newTable['composite_indexes'].push({}={});
    this.newTable['composite_indexes'][this.newTable['composite_indexes'].length-1]['value'] = [];
  }

  removeCompositeIndex(i){
    this.newTable['composite_indexes'].splice(i,1);
  }

  addCompositeIndexValue(i){
    console.log(this.civ[i]);
    this.newTable['composite_indexes'][i]['value'].push(this.civ[i]);
    console.log(this.newTable['composite_indexes'][i]['value']);
  }

  assert(field, value){
  	if(!value){alert(field + " is empty and is required."); throw new Error(field + " is empty and is required.");}
  }

  validateNewTable(){
  	this.assert('Table Name', this.newTable['table_name'])
  	// this.assert('Database Name', this.newTable['database_name'])
  	for (let i = 0; i < this.newTable['fields'].length; i++) {
  		this.assert('Field Name' + String(i+1), this.newTable['fields'][i]['field_name']);
  		this.assert('Data Type' + String(i+1), this.newTable['fields'][i]['data_type']);
  	}
  }

  createNewTable(){
  	this.validateNewTable();
  	this.http.url = environment.apiUrl + "newtable" + "?token=" + app.token;
    console.log(this.newTable);
  	this.http.addObj(this.newTable).subscribe((data:any)=>{
  		console.log(data);
      alert("Table Created");
      this.router.navigate(['/database/my-table-list'])
  	});
  }

}
