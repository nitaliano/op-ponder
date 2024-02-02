import { optimistAbi } from './abis/optimistAbi'
import { attestationStationAbi } from './abis/attestationStation'

export const optimist = {
    abi: optimistAbi,
    network: {
        optimism: {
            address: '0x2335022c740d17c2837f9C884Bfe4fFdbf0A95D5',
            filter: { event: 'Transfer' },
            startBlock: 49670714,
        },
        optimismSepolia: {
            address: '0xF6Ec1682996633B7cde3D8e33a9FD32686E993D3',
            filter: { event: 'Transfer' },
            startBlock: 2708644,
        },
    },
} as const

export const coinbaseQuestAttestation = {
    abi: attestationStationAbi,
    network: {
        optimism: {
            address: '0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77',
            filter: { event: 'AttestationCreated' },
            startBlock: 49669971,
        },
        optimismSepolia: {
            address: '0x49B290bB84Ed0c2315176BCD3CfE063B62141762',
            filter: { event: 'AttestationCreated' },
            startBlock: 2708452,
        },
    },
} as const
