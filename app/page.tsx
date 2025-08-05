import React from "react";
import Hero from "@/components/Hero";
import Milky_way from "@/components/Milky_way";
import WalletsWeSupport from "@/components/WalletsWeSupport";
import HowItWorks from "@/components/HowItWorks";
import OurCollection from "@/components/OurCollection";
import NFTList from "@/components/NFTList";
import Subscribe from "@/components/Subscribe";


export interface NFTItem {
  nft_name: string;
  creator: string;
  likes: number;
  nft_path: string;
  isOnSale: boolean;
  priceInETH: number;
  priceInUSD: number;
}

export interface NFTInfluencer {
  nft_left_path: string;
  nft_right_path: string;
  user_name: string;
  user_tag: string;
  user_avatar_path: string;
}

const trending: NFTItem[] = [
  {
    nft_name: "Monkey Ape",
    creator: "JSmith",
    likes: 341,
    nft_path: "/images/monkey_ape_small.png",
    isOnSale: true,
    priceInETH: 4.89,
    priceInUSD: 654874.86,
  },
  {
    nft_name: "Moonfall",
    creator: "JSmith",
    likes: 341,
    nft_path: "/images/moonfall_small.png",
    isOnSale: true,
    priceInETH: 4.89,
    priceInUSD: 654874.86,
  },
  {
    nft_name: "Wired Human",
    creator: "JSmith",
    likes: 341,
    nft_path: "/images/wired_human_small.png",
    isOnSale: true,
    priceInETH: 4.89,
    priceInUSD: 654874.86,
  },
  {
    nft_name: "Racer-To-Go",
    creator: "JSmith",
    likes: 341,
    nft_path: "/images/racer-to-go_small.png",
    isOnSale: true,
    priceInETH: 4.89,
    priceInUSD: 654874.86,
  },
  {
    nft_name: "Monkey Ape",
    creator: "JSmith",
    likes: 341,
    nft_path: "/images/monkey_ape_small.png",
    isOnSale: true,
    priceInETH: 4.89,
    priceInUSD: 654874.86,
  },
  {
    nft_name: "Moonfall",
    creator: "JSmith",
    likes: 341,
    nft_path: "/images/moonfall_small.png",
    isOnSale: true,
    priceInETH: 4.89,
    priceInUSD: 654874.86,
  },
  {
    nft_name: "Wired Human",
    creator: "JSmith",
    likes: 341,
    nft_path: "/images/wired_human_small.png",
    isOnSale: true,
    priceInETH: 4.89,
    priceInUSD: 654874.86,
  },
  {
    nft_name: "Racer-To-Go",
    creator: "JSmith",
    likes: 341,
    nft_path: "/images/racer-to-go_small.png",
    isOnSale: true,
    priceInETH: 4.89,
    priceInUSD: 654874.86,
  },
];

const influencers: NFTInfluencer[] = [
  {
    nft_left_path: "/images/nft_woman_square.png",
    nft_right_path: "/images/nft_col3.png",
    user_name: "John Smith",
    user_tag: "Jsmith",
    user_avatar_path: "/images/avatar1.png",
  },
  {
    nft_left_path: "/images/nft_monkey_square.png",
    nft_right_path: "/images/nft_col9.png",
    user_name: "John Smith",
    user_tag: "Jsmith",
    user_avatar_path: "/images/avatar1.png",
  },
  {
    nft_left_path: "/images/nft_face_square.png",
    nft_right_path: "/images/nft_col8.png",
    user_name: "John Smith",
    user_tag: "Jsmith",
    user_avatar_path: "/images/avatar1.png",
  },
  {
    nft_left_path: "/images/nft_monkey_with_nimb_square.png",
    nft_right_path: "/images/nft_col8.png",
    user_name: "John Smith",
    user_tag: "Jsmith",
    user_avatar_path: "/images/avatar1.png",
  },
  {
    nft_left_path: "/images/nft_woman_square.png",
    nft_right_path: "/images/nft_col3.png",
    user_name: "John Smith",
    user_tag: "Jsmith",
    user_avatar_path: "/images/avatar1.png",
  },
  {
    nft_left_path: "/images/nft_monkey_square.png",
    nft_right_path: "/images/nft_col9.png",
    user_name: "John Smith",
    user_tag: "Jsmith",
    user_avatar_path: "/images/avatar1.png",
  },
  {
    nft_left_path: "/images/nft_face_square.png",
    nft_right_path: "/images/nft_col8.png",
    user_name: "John Smith",
    user_tag: "Jsmith",
    user_avatar_path: "/images/avatar1.png",
  },
  {
    nft_left_path: "/images/nft_monkey_with_nimb_square.png",
    nft_right_path: "/images/nft_col8.png",
    user_name: "John Smith",
    user_tag: "Jsmith",
    user_avatar_path: "/images/avatar1.png",
  },
];

export default function Page() {
  return (
    <div className="text-white">
      <Hero />
      <Milky_way />
      <WalletsWeSupport />
      <HowItWorks />
      <OurCollection />
      <NFTList
        title="Hot Trending NFTs"
        subtitle="Most Loved NFTs Of The Time"
        items={trending}
        isInfluencers={false}
      />
      <NFTList
        title="Live Auction NFTs"
        subtitle="Most Appreciated NFTsOn Sale For The Day"
        items={trending}
        isInfluencers={false}
      />
      <NFTList
        title="Joined Influencers"
        subtitle="Watch and follow celebrities to get the best collection of NFTs"
        items={influencers}
        isInfluencers={true}
      />
      <Subscribe />
    </div>
  );
}
