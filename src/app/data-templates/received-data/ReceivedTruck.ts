export interface ReceivedTruck {
  'Id': number;
  'Number': number;
  'Width': number;
  'Height': number;
  'TruckCells': [
    {
      'Id': number,
      'TruckId': number,
      'ItemId': number,
      'Column': number,
      'Row': number,
      'Item': {
        'Id': number,
        'SerialNumber': string,
        'Description': string,
        'Status': number,
        'TruckCells': [
          null
        ],
        'Whcells': [
          {
            'Id': number,
            'Name': string,
            'WhlockerId': number,
            'ItemId': number,
            'Status': number,
            'Row': number,
            'Column': number,
            'Whlocker': {
              'Id': number,
              'Name': string,
              'WhzoneId': number,
              'Height': number,
              'Width': number,
              'Row': number,
              'Column': number,
              'Whzone': {
                'Id': number,
                'Name': string,
                'Whid': number,
                'Height': number,
                'Width': number,
                'Row': number,
                'Column': number,
                'Wh': {
                  'Id': number,
                  'Name': string,
                  'Address': string,
                  'Whzones': [
                    null
                  ]
                },
                'Whlockers': [
                  null
                ]
              },
              'Whcells': [
                null
              ]
            }
          }
        ]
      }
    }
  ];
}
