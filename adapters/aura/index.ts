import adapter from "./aura";
const maxSupply = 100_000_000;

export const treasury = adapter(
  "0x43B17088503F4CE1AED9fB302ED6BB51aD6694Fa",
  "ethereum",
  maxSupply * 17.5,
);
export const balancer = adapter(
  "0xFd72170339AC6d7bdda09D1eACA346B21a30D422",
  "ethereum",
  maxSupply * 0.02,
);
