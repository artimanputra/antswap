import { discord, medium, telegram, twitter } from "../assets";


export const navLinks = [
    {
      id: "about",
      icon: twitter,
      icon_link:"https://twitter.com/AntSwapfinance",
    },
    {
      id: "telegram",
      icon: telegram,
      icon_link:"https://t.me/AntswapFinance",
    },
    {
      id: "medium",
      icon: medium,
      icon_link:"https://medium.com/@antswapofficial",
    },
    {
      id: "discord",
      icon: discord,
      icon_link:"https://discord.gg/tMmrbqvJ6c",
    },
   
  ];
  const experiences = [
    {
      title: "Phase 1",
      icon: "1",
      iconBg: "#E6DEDD",
      points: [
        "WEBSITE AND SOCIAL MEDIA LAUNCH",
        "AntSwap DEX Public Testnet",
        "Twitter trend Campaigns ",
        "Early Patnership",
      ],
    },
    {
      title: "Phase 2",
      icon_color: "#fff" ,
      icon: "2",
      iconBg: "linear-gradient(top,#5fe6d0,#597bff 38%,#9380ff 72%,#e590ff)",
      points: [
        "MAINNET LAUNCH ON LINEA",
        "Coinmarketcap & Coingecko",
        "NFT MINT LIVE ON LINEA",
        "Burn: After the NFT minting ends, all unminted NFTs will be burned.",
      ],
    },
    {
      title: "Phase 3",
      icon_color: "#fff" ,
      icon: "3",
      iconBg: "#383E56",
      points: [
        "TOKEN LAUNCH ($ANS)",
        "ANtSwap (DEX) Mainnet",
        "Yield Farming & POOLS",
        "Antswap (IDO) Testnet",
      ],
    },
    {
      title: "Phase 4",
      icon_color: "#fff" ,
      icon: "4",
      iconBg: "#383E56",
      points: [
        "Listing on CEX",
        "Antswap (IDO) Testnet",
        "ANTMarketplace",
        "ANTCharity",
      ],
    },

  ];
  export {experiences};