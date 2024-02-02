import { createConfig } from "@ponder/core";
import { http } from "viem";

import { optimist, coinbaseQuestAttestation } from './src/contracts';

export default createConfig({
  networks: {
    optimism: {
      chainId: 10,
      transport: http(process.env.JSON_RPC_URL_OP_MAINNET),
    },
    optimismSepolia: {
      chainId: 11155420,
      transport: http(process.env.JSON_RPC_URL_OP_SEPOLIA),
    },
  },
  contracts: {
    optimist,
    coinbaseQuestAttestation,
  },
});
