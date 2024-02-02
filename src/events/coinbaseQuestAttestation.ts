import { ponder } from '@/generated'
import { DatabaseModel } from '@ponder/core'
import { Address, Hash, Hex } from 'viem'

import { HEX_EMPTY, HEX_TRUE } from '../constants'

export type CoinbaseQuestAttestationModel = DatabaseModel<{
    id: `0x${string}`
    blockNum: bigint
    chainId: number
    transactionHash: `0x${string}`
}>

export type AttestationCreatedEvent = {
    dbModel: CoinbaseQuestAttestationModel
    address: Address
    value: Hex
    chainId: number
    transactionHash: Hash
    blockNum: bigint
}

export async function attestationCreated({
    address,
    blockNum,
    chainId,
    dbModel,
    transactionHash,
    value,
}: AttestationCreatedEvent) {
    if (value === HEX_TRUE) {
        await dbModel.create({
            id: address,
            data: {
                chainId: chainId,
                blockNum: blockNum,
                transactionHash: transactionHash,
            }
        })
    } else if (value === HEX_EMPTY) {
        await dbModel.delete({ id: address })
    }
}

export function registerCoinbaseQuestAttestationEvents() {
    ponder.on('coinbaseQuestAttestation:AttestationCreated', async ({ event, context }) => {
        await attestationCreated({
            address: event.args.about,
            blockNum: event.block.number,
            chainId: context.network.chainId,
            dbModel: context.db.CoinbaseQuestAttestation,
            transactionHash: event.transaction.hash,
            value: event.args.val,
        })
    })
}
