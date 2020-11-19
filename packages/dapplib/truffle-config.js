require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose swift top edge rare remember million grid nasty foam spring'; 
let testAccounts = [
"0x95cb18fa461b639148f9ef4a6da5adce0ae3e7368aa5ac273e452b71124732ed",
"0x6a04f208826432cd4628570b6c008a721e4f5ae68c446929fdad264f4949979c",
"0x0da919cc9d4e150efb3f9174602aa8604f7c65702ab8e3b518ccd6938ae7228e",
"0xdfacc305c903659942f0f023d6f29dfba0918ae0799a5c9035362cbc1f218028",
"0x3223b0fe8f64ec12ac8be88803d317010c0d24e2a982eb11447714871a111daa",
"0x2951d6d8c10cb84750da1206bf14966fae367c856bec458908b043ace06dc523",
"0xb13751ed9a65c4078e384d929a04256c2a51cbf6b846a885875981c654cc89a4",
"0x4385558a08a3afff460d5c34406dbd5e9af00384e1bf9aadf178bc6e62d7ec0b",
"0xd781d3a6c0173367055f55c56259e7b81b4bb0988c21f68a39a095c6e3dec4dd",
"0x51b3329dee06b7e523dcfd825641bfd8d4d12e9df736682c4ef79c13df8d784c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
