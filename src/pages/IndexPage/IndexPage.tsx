import { Section, Cell, Image, List } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';
import { useAccount, useReadContract } from 'wagmi'
import { abi as ABI1 } from '../../Utils/DegenDealsERC721.json';


import wallet from '../../../public/wallet.png'
import member from '../../../public/member.jpeg'
import degen from '../../../public/logo.jpg'
import './IndexPage.css';
import React, { useState } from 'react';
import { Link } from '../../components/Link/Link';
import { Account } from '../../components/Account/Account';
import { WalletOptions } from '../../components/WalletOptions/WalletOptions';
import Logo from '../../../public/logo.jpg'
import LogoPoster from '../../../public/logo_poster_rmbg.png'

function ConnectWallet() {
  const { isConnected } = useAccount()
  if (isConnected) return <Account />
  return <WalletOptions />;

}

export const IndexPage: FC = () => {
  const { isConnected, } = useAccount();
  const { address } = useAccount();

  const { data: ismm } = useReadContract({
    address: '0xAA45302106FfAa5D84c9AB05db688F877659fb1B',
    abi: ABI1,
    functionName: 'isMember',
    args: [address]
  })

  const becomeAMember = () => {

  }
  return (
    <List>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img style={{ width: '90vw' }}
          src={LogoPoster}
        />
      </div>

      <div>
        <Section
          header='Start your Degen Deals expirience.'
        >


          {isConnected && ismm as boolean && <Link to='/products'>
            <Cell
              before={<Image src={degen} style={{ backgroundColor: '#007AFF' }} />}
              subtitle='Degen vs Degen'>
              Launch DegenDeals
            </Cell>
          </Link>}

        </Section>
        <Section
          header={isConnected ? 'Disconnect your wallet if it is needed' : 'Please connect your wallet to proceed'}
        >
          <ConnectWallet />

        </Section>
        {!(ismm as boolean) && isConnected && (<Section
          header='You are not a member'
        >

          <Cell
            before={<Image src={member} onClick={becomeAMember} style={{ backgroundColor: '#007AFF' }} />}
          >
            Become a member
          </Cell>

        </Section>)}



      </div>

    </List >
  );
};
