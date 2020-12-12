export interface ReceivedItems {
  id: 0;
  serialNumber: string;
  description: string;
  status: 0;
  truckCells: [
    {
      id: 0;
      truckId: 0;
      itemId: 0;
      column: 0;
      row: 0;
      truck: {
        id: 0;
        number: string;
        width: 0;
        height: 0;
        truckCells: [
          null
        ]
      }
    }
  ];
  whcells: [
    {
      id: 0;
      name: string;
      whlockerId: 0;
      itemId: 0;
      status: 0;
      row: 0;
      column: 0;
      whlocker: {
        id: 0;
        name: string;
        whzoneId: 0;
        height: 0;
        width: 0;
        row: 0;
        column: 0;
        whzone: {
          id: 0;
          name: string;
          whId: 0;
          height: 0;
          width: 0;
          row: 0;
          column: 0;
          wh: {
            id: 0;
            name: string;
            address: string;
            whzones: [
              null
            ]
          };
          whlockers: [
            null
          ]
        };
        whcells: [
          null
        ]
      }
    }
  ];
}
