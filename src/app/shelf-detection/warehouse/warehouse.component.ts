import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {HttpService} from '../../http.service';
import {ReceivedWarehouse} from '../../data-templates/received-data/ReceivedWarehouse';
import {ReceivedTree} from '../../data-templates/received-data/ReceivedTree';


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
  warehouses: ReceivedWarehouse[] = [
    {
      id: 0,
      name: '',
      Address: '',
      Whzones: [
        null
      ]
    }
  ];
  treeFlag = false;
  currentWareHouse = this.warehouses[0].name;
  constructor(private httpService: HttpService) {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ZoneNode) => !!node.children && node.children.length > 0;

  ngOnInit(): void {
    this.httpService.warehousesGet().subscribe(
      (data: ReceivedWarehouse[]) => {
        this.warehouses.pop();
        data.forEach(e => {
          console.log(e);
          this.warehouses.push(e);
        });
        this.currentWareHouse = this.warehouses[0].name;
      }, error => console.log(error)
    );
  }

  getTree(msg): void {
    console.log(msg);
    this.warehouses.forEach(e => {
      if (e.name === msg) {
        this.httpService.warehouseTreeGet(e.id).subscribe(
          (data: ReceivedTree) => {

          }
        );
      }
    });
  }
}
