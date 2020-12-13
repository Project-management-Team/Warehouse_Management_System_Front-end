import {Component, OnInit, Output} from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {HttpService} from '../../http.service';
import {ReceivedWarehouse} from '../../data-templates/received-data/ReceivedWarehouse';
import {ReceivedTree} from '../../data-templates/received-data/ReceivedTree';
import { EventEmitter } from '@angular/core';
import {SingleShelf} from '../../data-templates/SingleShelf';
import {MatDialog} from '@angular/material/dialog';
import {AddNewElementPopComponent} from './add-new-element-pop/add-new-element-pop.component';
import {DeleteElementPopComponent} from './delete-element-pop/delete-element-pop.component';


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
  treeIsReady = false;
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
  myTree: ReceivedTree = {
    id: 0,
    name: '',
    address: '',
    whzones: [
      {
        id: 0,
        name: '',
        whid: 0,
        height: 0,
        width: 0,
        row: 0,
        column: 0,
        whlockers: [
          {
            id: 0,
            name: '',
            whzoneId: 0,
            height: 0,
            width: 0,
            row: 0,
            column: 0,
            whcells: [
              {
                id: 0,
                name: '',
                whlockerId: 0,
                itemId: 0,
                status: 0,
                row: 0,
                column: 0,
                item: {
                  id: 0,
                  serialNumber: '',
                  description: '',
                  status: 0,
                  truckCells: [
                    {
                      id: 0,
                      truckId: 0,
                      itemId: 0,
                      column: 0,
                      row: 0,
                      truck: {
                        id: 0,
                        number: '',
                        width: 0,
                        height: 0,
                        truckCells: [
                          null
                        ]
                      }
                    }
                  ],
                  whcells: [
                    null
                  ]
                }
              }
            ]
          }
        ]
      }
    ]
  };
  treeFlag = true;
  currentWareHouse = this.warehouses[0].name;
  animal: string;
  name: string;
  @Output() messageEvent = new EventEmitter<SingleShelf>();

  constructor(private httpService: HttpService, public dialog: MatDialog) {
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
    if (this.warehouses.length !== 0) {
      this.httpService.warehouseTreeGet(1).subscribe(
        (data: ReceivedTree) => {
          this.myTree = data;
          sessionStorage.setItem('whID', String(this.myTree.id));
          this.treeIsReady = true;
        }
      );
    }
  }

  getTree(msg): void {
    console.log(msg);
    this.warehouses.forEach(e => {
      if (e.name === msg) {
        console.log(e.id);
        this.httpService.warehouseTreeGet(e.id).subscribe(
          (data: ReceivedTree) => {
            this.myTree = data;
            sessionStorage.setItem('whID', String(this.myTree.id));
            // this.treeIsReady = true;
            // this.myTree.whzones.forEach(zone => {
            //   zone.whlockers.forEach(shelf => {
            //     shelf.whcells.forEach(element => {
            //       this.myCurrentTreeElements.name = element.name;
            //       this.myCurrentTreeElements.children = [];
            //     });
            //   });
            // });
            // this.myTree.whzones.forEach(zone => {
            //   zone.whlockers.forEach(shelf => {
            //     this.myCurrentTreeShelfs.name = shelf.name;
            //     this.myCurrentTreeShelfs.children.push(this.myCurrentTreeElements);
            //   });
            // });
            // this.myTree.whzones.forEach(zone => {
            //   this.myCurrentTreeZones.name = zone.name;
            //   this.myCurrentTreeZones.children.push(this.myCurrentTreeShelfs);
            // });
            // this.dataSource.data = [this.myCurrentTreeZones];
          }
        );
      }
    });
    // this.httpService.warehouseTreeGet('http://wmsproject.azurewebsites.net/api/Warehouse/tree?whId=1').subscribe(
    //   (data: ReceivedTree) => {console.log(data); }
    // );
  }

  showShelfInfo(shelf: SingleShelf): void {
    this.messageEvent.emit(shelf);
  }

  addNewElement(): void {
    // this.httpService
    const dialogRef = this.dialog.open(AddNewElementPopComponent, {
      width: '60vw',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
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
      if (this.warehouses.length !== 0) {
        this.httpService.warehouseTreeGet(1).subscribe(
          (data: ReceivedTree) => {
            this.myTree = data;
            sessionStorage.setItem('whID', String(this.myTree.id));
            this.treeIsReady = true;
          }
        );
      }
    });
  }

  removeElement(): void {
    // this.httpService
    const dialogRef = this.dialog.open(DeleteElementPopComponent, {
      width: '60vw',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
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
      if (this.warehouses.length !== 0) {
        this.httpService.warehouseTreeGet(1).subscribe(
          (data: ReceivedTree) => {
            this.myTree = data;
            sessionStorage.setItem('whID', String(this.myTree.id));
            this.treeIsReady = true;
          }
        );
      }
    });
  }
}
