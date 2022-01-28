import { Component, OnInit } from '@angular/core';
import { TblAnnotation } from 'src/app/annotation.model'; 
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-annotation',
  templateUrl: './annotation.component.html',
  styleUrls: ['./annotation.component.scss']
})
export class AnnotationComponent implements OnInit {
  val: any; 
  annotation: any = "";
  list_labels: any = [];
  labels: any = {};
  onelabel: any="";
  document: any= "";
  showtext: any = true;
  addtxt: any = false;
  addlabel: any = true;
  save = true;
  selctedcolor: any= "";
  selctedlab: any= "";
  i = 0;
  colors=["rebeccapurple", "rosybrown", "royalblue", "blue", "pink"];

  constructor(private service:SharedService, private router: Router) { }

  ngOnInit(): void {
  };

  addlab() {
    if (this.onelabel != "" && !(this.list_labels.includes(this.onelabel)) ){
      this.labels = {
        label: this.onelabel ,
        color: this.colors[this.i]
      }
      this.i = this.i + 1
      this.list_labels.push(this.labels); 
      console.log(this.list_labels)
    }
  };
  addtext(){
    this.addtxt = true;
    this.showtext = false;
    this.addlabel= false;

  }
  select(event:any) {
    const start = event.target.selectionStart;
    const end = event.target.selectionEnd;
    this.annotation = this.annotation + " ++++ other ++++ " + this.selctedlab + " ++++ : ++++ " + event.target.value.substr(start, end - start)
    this.save = false;
    console.log(event.target.value.substr(start, end - start));
 }
 
 labselected(color:any, lab:any){
  this.selctedcolor = color
  this.selctedlab = lab
  console.log("Label selected", this.selctedlab, "with color = ", this.selctedcolor);
 }
 addannot(){
  this.val = {Document: this.document, Annotation: this.annotation};
  this.service.addannotation(this.val ).subscribe(res=>{
              alert(res.toString());
            })
  }
 
}
