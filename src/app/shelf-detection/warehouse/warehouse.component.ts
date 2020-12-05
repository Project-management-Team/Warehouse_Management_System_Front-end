import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';

interface ZoneNode {
  name: string;
  children?: ZoneNode[];
}

const TREE_DATA: ZoneNode[] = [
  {
    name: 'Zone1',
    children: [
      {name: 'Shelf1', children: [
        {name: 'A 1'}, {name: 'D 1'}
          ]
      },
    ]
  }, {
    name: 'Zone2',
    children: [
      {name: 'Shelf2', children: [
          {name: 'A 2'}, {name: 'D 2'}
        ]
      },
    ]
  },
];

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {

  treeControl = new NestedTreeControl<ZoneNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<ZoneNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ZoneNode) => !!node.children && node.children.length > 0;

  ngOnInit(): void {
  }

}