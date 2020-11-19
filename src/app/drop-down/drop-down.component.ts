import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent  {

  contactMethod=[
    {id:1 ,name:"email"},
    {id:2 ,name:"phone"},
    {id:3 ,name:"name"},
  ];
}
