export interface SingleShelf {
  id: number;
  name: string;
  whzoneId: number;
  height: number;
  width: number;
  row: number;
  column: number;
  whcells: [
    {
      id: number;
      name: string;
      whlockerId: number;
      itemId: number;
      status: number;
      row: number;
      column: number;
      item: {
        id: number;
        serialNumber: string;
        description: string;
        status: number;
        truckCells: [
          {
            id: number;
            truckId: number;
            itemId: number;
            column: number;
            row: number;
            truck: {
              id: number;
              number: string;
              width: number;
              height: number;
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
  ];
}