import React, { useState } from "react";
import { PageHOC, CustomInput, CustomButton } from "../components";
import { useGlobalContext } from "../context";

const Home = () => {
  const { contract, walletAddress, setShowAlert } = useGlobalContext();
  const [playername, setPlayerName] = useState("");

  const handleClick = async () => {
    try {
      console.log("contract>>>>", contract);
      const playerExists = await contract.isPlayer(walletAddress);

      if (!playerExists) {
        await contract.registerPlayer(playerName, playerName);

        setShowAlert({
          status: "true",
          type: "info",
          message: `${playerName} is being summoned!`,
        });
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="flex flex-col">
      <CustomInput
        Label="Name"
        placeholder="Enter your player name"
        value={playername}
        handleValueChange={setPlayerName}
      />

      <CustomButton
        title="Register"
        handleClick={handleClick}
        restStyles="mt-6"
      />
    </div>
  );
};

export default PageHOC(
  Home,
  <>
    Welcome to Avax Gods <br /> a Web3 NFT Card Game
  </>,
  <>
    Connect your wallet to start playing <br /> the ultimate Web3 Battle Card
    game
  </>
);
