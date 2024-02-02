export const attestationStationAbi = [
    {
      'inputs': [],
      'stateMutability': 'nonpayable',
      'type': 'constructor'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'creator',
          'type': 'address'
        },
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'about',
          'type': 'address'
        },
        {
          'indexed': true,
          'internalType': 'bytes32',
          'name': 'key',
          'type': 'bytes32'
        },
        {
          'indexed': false,
          'internalType': 'bytes',
          'name': 'val',
          'type': 'bytes'
        }
      ],
      'name': 'AttestationCreated',
      'type': 'event'
    },
    {
      'inputs': [
        {
          'components': [
            {
              'internalType': 'address',
              'name': 'about',
              'type': 'address'
            },
            {
              'internalType': 'bytes32',
              'name': 'key',
              'type': 'bytes32'
            },
            {
              'internalType': 'bytes',
              'name': 'val',
              'type': 'bytes'
            }
          ],
          'internalType': 'struct AttestationStation.AttestationData[]',
          'name': '_attestations',
          'type': 'tuple[]'
        }
      ],
      'name': 'attest',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        },
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        },
        {
          'internalType': 'bytes32',
          'name': '',
          'type': 'bytes32'
        }
      ],
      'name': 'attestations',
      'outputs': [
        {
          'internalType': 'bytes',
          'name': '',
          'type': 'bytes'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'version',
      'outputs': [
        {
          'internalType': 'string',
          'name': '',
          'type': 'string'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    }
  ] as const