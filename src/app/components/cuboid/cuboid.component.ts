import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cuboid',
  templateUrl: './cuboid.component.html',
  styleUrls: ['./cuboid.component.scss']
})
export class CuboidComponent implements OnInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle("Cuboid");
  }
  cuboidForm: FormGroup;
  is_table_show: boolean = false;
  data: any = [];
  col2_data: any = [];
  col3_data: any[][] = [];
  unique_value: any = [];
  ngOnInit(): void {
    this.cuboidForm = new FormGroup({
      in_1: new FormControl("T", [Validators.required]),
      in_2: new FormControl("I", [Validators.required]),
      in_3: new FormControl("S", [Validators.required]),
      in_4: new FormControl("D", [Validators.required])
    });
  }

  onCuboid(): void {
    this.col2_data = [];
    this.col3_data = [];
    this.unique_value = [];
    this.data = [];
    this.data = this.cuboidForm.value;
    this.col2_data.push(this.data.in_1 + this.data.in_2 + this.data.in_4);
    this.col2_data.push(this.data.in_2 + this.data.in_1 + this.data.in_3);
    this.col2_data.push(this.data.in_3 + this.data.in_2 + this.data.in_4);
    this.col2_data.push(this.data.in_4 + this.data.in_3 + this.data.in_1);
    this.col3_data.push([this.data.in_1 + this.data.in_2, this.data.in_2 + this.data.in_4, this.data.in_1 + this.data.in_4]);
    this.col3_data.push([this.data.in_1 + this.data.in_2, this.data.in_1 + this.data.in_3, this.data.in_2 + this.data.in_3]);
    this.col3_data.push([this.data.in_2 + this.data.in_3, this.data.in_2 + this.data.in_4, this.data.in_3 + this.data.in_4]);
    this.col3_data.push([this.data.in_3 + this.data.in_4, this.data.in_1 + this.data.in_3, this.data.in_1 + this.data.in_4]);
    this.unique_value.push(this.data.in_1 + this.data.in_2, this.data.in_2 + this.data.in_4, this.data.in_1 + this.data.in_4, this.data.in_1 + this.data.in_2, this.data.in_1 + this.data.in_3, this.data.in_2 + this.data.in_3, this.data.in_2 + this.data.in_3, this.data.in_2 + this.data.in_4, this.data.in_3 + this.data.in_4, this.data.in_3 + this.data.in_4, this.data.in_1 + this.data.in_3, this.data.in_1 + this.data.in_4);
    var tmpset = new Set(this.unique_value);
    this.unique_value = [...tmpset];
    this.is_table_show = true;
  }
}
