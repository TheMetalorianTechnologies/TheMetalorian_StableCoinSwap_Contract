const hre = require("hardhat");

// mainnet recipient

// const recipient = "0x43d903211aE9AFDbDa240e39FCaEB5dD7558e05B"

// testnet recipient

const recipient = "0x4057171680FA6f9A9E65707076c1b18eE078eBbA"

async function main() {

  // mainnet contracts

  // const USDT = "0xdAC17F958D2ee523a2206206994597C13D831ec7"
  // const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
  // const BUSD = "0x4Fabb145d64652a948d72533023f6E7A623C7C53"
  // const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F"

  // Tests contracts

  const USDT = "0x948D917067BEF88203B095EcDFb92573401Ce7CE"
  const USDC = "0xEC5b6c7973b67191c616bea8d2ABEaf934270896"
  const BUSD = "0x48D153249EE2B08E6bB89cfE3923053d3130ba78"
  const DAI = "0xD7961411DD94Cf52d6d32DB3600a8D08c57495D8"

  const MetalorianSwap = await ethers.getContractFactory("MetalorianSwap");

  const MS_USDT_USDC = await MetalorianSwap.deploy( USDT, USDC, "USDTUSDC_LP", recipient );
  await MS_USDT_USDC.deployed();

  console.log( `POOL USDT / USDC DEPLOYED, ADDRESS: ${MS_USDT_USDC.address}`);

  const MS_USDC_BUSD = await MetalorianSwap.deploy( USDC, BUSD, "USDCBUSD_LP", recipient );
  await MS_USDC_BUSD.deployed();

  console.log( `POOL USDC / BUSD DEPLOYED, ADDRESS: ${MS_USDC_BUSD.address}`);

  const MS_BUSD_USDT = await MetalorianSwap.deploy( BUSD, USDT, "BUSDUSDT_LP", recipient );
  await MS_BUSD_USDT.deployed();

  console.log( `POOL BUSD / USDT DEPLOYED, ADDRESS: ${MS_BUSD_USDT.address}`);

  const MS_USDT_DAI = await MetalorianSwap.deploy( USDT, DAI, "USDTDAI_LP", recipient );
  await MS_USDT_DAI.deployed();

  console.log( `POOL USDT / DAI DEPLOYED, ADDRESS: ${MS_USDT_DAI.address}`);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
