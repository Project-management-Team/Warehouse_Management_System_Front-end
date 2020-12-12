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

interface ElementInt {
  id: number;
  name: '';
  whlockerId: number;
  itemId: number;
  status: number;
  row: number;
  column: number;
  item: {
    id: number;
    serialNumber: '';
    description: '';
    status: number;
    truckCells: [
      null
    ];
    whcells: [
      null
    ]
  };
}

interface ShelfInt {
  id: 0;
  name: '';
  whzoneId: 0;
  height: 0;
  width: 0;
  row: 0;
  column: 0;
  whcells: ElementInt[];
}

interface ZoneInt {
  id: 0;
  name: '';
  whid: 0;
  height: 0;
  width: 0;
  row: 0;
  column: 0;
  whlockers: ShelfInt[];
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
  myCurrentTreeZones: ZoneNode = {
    name: '',
    children: []
  };
  myCurrentTreeShelfs: ZoneNode = {
    name: '',
    children: []
  };
  myCurrentTreeElements: ZoneNode = {
    name: '',
    children: []
  };
  treeFlag = true;
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
        console.log(e.id);
        this.httpService.warehouseTreeGet(e.id).subscribe(
          (data: ReceivedTree) => {
            this.myTree = data;
            sessionStorage.setItem('whID', String(this.myTree.id));
            this.treeIsReady = true;
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
}
