import React, {useState} from 'react';

import { CustomButton, CustomInput, PageHOC } from '../components';
import { useGlobalContext } from '../context';

const Home = () => {
  const { contract, walletAddress, setShowAlert} = useGlobalContext();
  const { playerName, setPlayerName} = useState('');

  const handleClick = async () => {
    try{
      console.log({contract});
      // contract의 isPlayer 함수가 bool 값을 리턴하고 있음
      const playerExists = await contract.isPlayer(walletAddress);
      console.log(playerExists);
      if(!playerExists) {
        console.log("walletAddress", walletAddress);
        console.log("playerName", playerName);
        console.log("!playerExists");
        await contract.registerPlayer(playerName, playerName);
        console.log("!playerExists");
        setShowAlert({
         status: true,
         type: 'info',
         message: `${playerName} is being summoned!`
        })
      }
    }catch(error) {
      alert(error);
    }
  }

  return (
    <div className="flex flex-col">
      <CustomInput
        label="Name"
        placeholder="Enter your player name"
        value={playerName}
        handleValueChange={setPlayerName}
      />

      <CustomButton
        title="Register"
        handleClick={handleClick}
        restStyles="mt-6"
      />
    </div>
  )
};

export default PageHOC(
  Home,
  <>Welcome to Avax Gods <br/> a Web3 NFT Card Game</>,
  <>Connect your wallet to start playing <br/> the ultimate Web3 Battle Card Game</>

);