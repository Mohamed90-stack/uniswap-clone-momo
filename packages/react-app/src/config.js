import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x857AF6E88e82b921E77Bb45d56a756edEf5d573a"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/OSR7SA1UScmA0VknKzdveb-VCXgbdcXg",
  },
};