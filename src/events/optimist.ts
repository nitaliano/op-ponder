import { ponder } from '@/generated'
import { DatabaseModel } from '@ponder/core'
import { Address, Hash } from 'viem'

import { NULL_ADDRESS } from '../constants'

export type OptimistModel = DatabaseModel<{
    id: `0x${string}`
    blockNum: bigint
    chainId: number
    transactionHash: `0x${string}`
    tokenId: bigint
}>

export type OptimistTransferEvent = {
    to: Address
    from: Address
    dbModel: OptimistModel
    chainId: number
    tokenId: bigint
    blockNum: bigint
    transactionHash: Hash
}

export async function transfer({
    to,
    from,
    dbModel,
    chainId,
    tokenId,
    blockNum,
    transactionHash,
}: OptimistTransferEvent) {
    if (from === NULL_ADDRESS) {
        await dbModel.create({
            id: to,
            data: {
                tokenId: tokenId,
                chainId: chainId,
                blockNum: blockNum,
                transactionHash: transactionHash,
            }
        })
    } else if (to === NULL_ADDRESS) {
        await dbModel.delete({ id: from })
    }
}

export function registerOptimistEvents() {
    ponder.on('optimist:Transfer', async ({ event, context }) => {
        await transfer({
            dbModel: context.db.Optimist,
            to: event.args.to,
            from: event.args.from,
            chainId: context.network.chainId,
            blockNum: event.block.number,
            tokenId: event.args.tokenId,
            transactionHash: event.transaction.hash,
        })
    })
}
