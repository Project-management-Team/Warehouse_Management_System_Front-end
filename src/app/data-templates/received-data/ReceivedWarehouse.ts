export interface ReceivedWarehouse {
  'Id': number;
  'Name': string;
  'Address': string;
  'Whzones': [
    {
      'Id': number,
      'Name': string,
      'Whid': number,
      'Height': number,
      'Width': number,
      'Row': number,
      'Column': number,
      'Whlockers': [
        {
          'Id': number,
          'Name': string,
          'WhzoneId': number,
          'Height': number,
          'Width': number,
          'Row': number,
          'Column': number,
          'Whcells': [
            {
              'Id': number,
              'Name': string,
              'WhlockerId': number,
              'ItemId': number,
              'Status': number,
              'Row': number,
              'Column': number,
              'Item': {
                'Id': number,
                'SerialNumber': string,
                'Description': string,
                'Status': number,
                'TruckCells': [
                  {
                    'Id': number,
                    'TruckId': number,
                    'ItemId': number,
                    'Column': number,
                    'Row': number,
                    'Truck': {
                      'Id': number,
                      'Number': string,
                      'Width': number,
                      'Height': number,
                      'TruckCells': [
                        null
                      ]
                    }
                  }
                ],
                'Whcells': [
                  null
                ]
              }
            }
          ]
        }
      ]
    }
  ];
}
