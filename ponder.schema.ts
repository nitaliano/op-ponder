import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  Optimist: p.createTable({
    id: p.bytes(),
    tokenId: p.bigint(),
    chainId: p.int(),
    transactionHash: p.bytes(),
    blockNum: p.bigint(),
  }),
  CoinbaseQuestAttestation: p.createTable({
    id: p.bytes(),
    chainId: p.int(),
    transactionHash: p.bytes(),
    blockNum: p.bigint(),
  })
}));
