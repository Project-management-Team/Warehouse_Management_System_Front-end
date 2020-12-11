export interface Truck {
  'Number': string;
  'Width': number;
  'Height': number;
  'TruckCells': [
    {
      'ItemId': number,
      'Column': number,
      'Row': number
    }
  ];
}
