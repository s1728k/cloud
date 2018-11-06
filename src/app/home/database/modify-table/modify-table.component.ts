import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RestApiService } from '../../../shared/rest-api.service';
import { environment } from '../../../../environments/environment';

declare let $:any;
declare let app:any;

@Component({
  selector: 'app-modify-table',
  templateUrl: './modify-table.component.html',
  styleUrls: ['./modify-table.component.scss']
})
export class ModifyTableComponent implements OnInit {

  my_table_fields = [{"field_name":"fskljfs"}, {"field_name":"hfghfh"}, {"field_name":"trytruy"}];
  my_table_list = [];
  table_group_names = app.table_group_name;
  databaseList = app.free_databases;
  data_types = app.data_types;
  data_type_modifiers = app.data_type_modifiers;
  my_sql_indexes = app.my_sql_indexes;
  newTableGroup = {};
  selTable = {};
  mi = 0;
  si = 0;
  civ = {};


  constructor(private http: RestApiService,) { }

  ngOnInit() {
    this.getTablesInActiveApp();
    this.selTable['fields'] = [];
    this.selTable['composite_indexes'] = [];
    this.selTable['delete_fields'] = [];
    this.selTable['delete_fields_indexes'] = [];
    this.addNewField();
  }

  getTablesInActiveApp(){
    this.http.url = environment.apiUrl + "active_app/tables" + "?token=" + app.token;
    this.http.getObjs().subscribe((data:any)=>{
      console.log(data);
      this.my_table_list = data;
    });
  }

  getTableFields(){
    this.http.url = environment.apiUrl + this.selTable['table_name'] + "/details" + "?token=" + app.token;
    console.log(this.http.url);
    this.http.getObjs().subscribe((data:any)=>{
      console.log(data);
      this.my_table_fields = data['fields'];
      this.selTable['table_description'] = data['table_description'];
      this.selTable['keywords'] = data['keywords'];
    });
  }

  addDeleteField(){
    if(this.civ['dfield']){
      if(this.selTable['delete_fields'].indexOf(this.civ['dfield'])==-1){
        this.selTable['delete_fields'].push(this.civ['dfield']);
      }
    }
  }

  removeDeleteField(){
    if(this.civ['dfield']){
      let di = this.selTable['delete_fields'].indexOf(this.civ['dfield']);
      if(di != -1){
        this.selTable['delete_fields'].splice(di,1);
      }
    }
  }

  addDeleteFieldIndex(){
    if(this.civ['difield']){
      if(this.selTable['delete_fields_indexes'].indexOf(this.civ['difield'])==-1){
        this.selTable['delete_fields_indexes'].push(this.civ['difield']);
      }
    }
  }

  removeDeleteFieldIndex(){
    if(this.civ['difield']){
      let di = this.selTable['delete_fields_indexes'].indexOf(this.civ['difield']);
      if(di !=- 1){
        this.selTable['delete_fields_indexes'].splice(di,1);
      }
    }
  }

  addNewField(){
    this.selTable['fields'].push({}={});
    this.selTable['fields'][this.selTable['fields'].length-1]['elequent_array'] = "fillable";
  }

  removeField(i){
    this.selTable['fields'].splice(i,1);
  }

  modifierInputDialog(i){
    this.mi = i;
    $("#modifierInputModel").modal();
  }

  addNewModifier(i){
    this.selTable['fields'][this.mi]['data_type_modifier'] = [];
    if(this.data_type_modifiers[i]['required']){
      this.selTable['fields'][this.mi]['data_type_modifier'].push({}={});
      let di = this.selTable['fields'][this.mi]['data_type_modifier'].length - 1;
      this.selTable['fields'][this.mi]['data_type_modifier'][di]['name']= this.data_type_modifiers[i]['name'];
      this.selTable['fields'][this.mi]['data_type_modifier'][di]['value']= this.data_type_modifiers[i]['value'];
    }
  }

  indexInputDialog(i){
    this.si = i;
    $("#sqlIndexInputModel").modal();
  }

  addNewIndex(i){
    this.selTable['fields'][this.si]['my_sql_index'] = [];
    if(this.my_sql_indexes[i]['required']){
      this.selTable['fields'][this.si]['my_sql_index'].push({}={});
      let di = this.selTable['fields'][this.si]['my_sql_index'].length - 1;
      this.selTable['fields'][this.si]['my_sql_index'][di]['name']= this.my_sql_indexes[i]['name'];
      this.selTable['fields'][this.si]['my_sql_index'][di]['value']= this.selTable['fields'][this.si]['field_name'];
    }
  }

  compositeIndexInputDialog(){
    $("#compositeIndexInputModel").modal();
  }

  addNewCompositeIndex(){
    this.selTable['composite_indexes'].push({}={});
    this.selTable['composite_indexes'][this.selTable['composite_indexes'].length-1]['value'] = [];
  }

  removeCompositeIndex(i){
    this.selTable['composite_indexes'].splice(i,1);
  }

  addCompositeIndexValue(i){
    console.log(this.civ[i]);
    this.selTable['composite_indexes'][i]['value'].push(this.civ[i]);
    console.log(this.selTable['composite_indexes'][i]['value']);
  }

  assert(field, value){
    if(!value){alert(field + " is empty and is required."); throw new Error(field + " is empty and is required.");}
  }

  validateNewTable(){
    this.assert('Table Name', this.selTable['table_name'])
    for (let i = 0; i < this.selTable['fields'].length; i++) {
      this.assert('Field Name' + String(i+1), this.selTable['fields'][i]['field_name']);
      this.assert('Data Type' + String(i+1), this.selTable['fields'][i]['data_type']);
    }
  }

  updateTable(){
  	this.validateNewTable();
    this.http.url = environment.apiUrl + "updatetable" + "?token=" + app.token;
    this.http.updateObj(this.selTable).subscribe((data:any)=>{
      console.log(data);
    });
  }

}
