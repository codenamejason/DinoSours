import React from "react";
import { PageHeader } from "antd";

// displays a page header

export default function Header() {
  return (
    <a href="https://github.com/austintgriffith/scaffold-eth" target="_blank" rel="noopener noreferrer">
      <PageHeader
        title="🏗 scaffold-eth"
        subTitle="👩‍🔬 Buyer pays to mint NFT example"
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
