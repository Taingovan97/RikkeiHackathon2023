import React, { useEffect, useState } from 'react'
import { Button, Text, View } from "react-native";

import { Screen } from "../components/Screen";
import { Section } from "../components/Section";

import {PublicKey, SystemProgram, TransferParams} from '@solana/web3.js'
import {useSolanaConnection, usePublicKey} from 'react-xnft'

const HelloScreen = () => {
    const tokenAddress = "Ddq6ecXkGux7UrntjFtQVE6AS4Tki22a4z4C4nFZJYqp"
    const API_KEY = "jJAr_CHSumNdEedL"
    
    const [nftData, setNftData] = useState<any>([]); 
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", API_KEY);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    useEffect(() => {
        async function fetchNFTData() {
          const url = `https://api.shyft.to/sol/v1/nft/read?network=devnet&token_address=${tokenAddress}`;
          try {
            const response = await fetch(url, requestOptions);
            if (!response.ok) {
              console.error(`API Error: ${response.status} ${response.statusText}`);
              return;
            }
            const data = await response.json();
            setNftData(data.result); // Save the 'result' object from the response
          } catch (error) {
            console.error('Error fetching NFT data:', error);
          }
        }
    
        fetchNFTData();
    }, [tokenAddress]);
    
    if (!nftData) {
        return <div>Loading...</div>;
    }

    const connection = useSolanaConnection()
    const [blockhash, setBlockhash] = useState("")
    const pks = usePublicKey();
    let pksString: string = "No pubkeys available!"
    if (pks) {
        pksString = pks.toString()
    }

    const receiver = new PublicKey("DUiWsNdzNeVadS8SmdHdUpo5TVVENT4oXqdnLJ8raQK2")
    async function onBtnClick() {
        if (!pks) {
            throw new Error("Invalid pubkey")
        }
        
        const instruction = SystemProgram.transfer({
            fromPubkey: pks,
            toPubkey: receiver,
            lamports: 10**6,})
            
        const bh = (await connection.getLatestBlockhash()).blockhash
        setBlockhash(bh)
    }

    return (
    <Screen>
        <Section title=''>
            <Text style={{fontFamily: 'Inter_900Black', fontStyle: 'italic'}}>
                {nftData.image_uri}
            </Text>
            <View>
                {<img src={nftData.image_uri} alt='My Image' style={{width: '100px', height: '100px'}}/>}
            </View>
            <Text>
                Public key: {pksString}
            </Text>
            <Text>
                Recent Blockhash: {blockhash}
            </Text>
            <Button title='Click me!' onPress={onBtnClick}></Button>
        </Section>
    </Screen>
  )
}

export default HelloScreen
