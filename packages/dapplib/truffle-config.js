require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy prize flee venture street cost situate common include praise army ghost'; 
let testAccounts = [
"0xcba819c0461d8881d3469c24abbdd2c097fbb0bfc6fb8b7350730152a79751e8",
"0x9084b915f083c3f9fca67a2840f541fd9d75c0746ac41538adb3c7ae253cf1e0",
"0x15f77b8ffb2cf4a67138c7cb955550438c810cdb1b60487552e2536a4e86155d",
"0xb8fdc9764ccfb6b3d9d073e92680734aee183f9287e42543311a05965a8f5406",
"0x8a6d6250d82ff93084eac44a719d0c68849d227c8569abe5c39148f0eca7bc8d",
"0x51662ab060c469c071d85f6328dd487af5f725d546ec8fe05b016e3c70048c56",
"0x35b361f6dd4690434d67f8ad8b322947453bacc97a0e7c07483383f889401958",
"0x74e97192142343841f3841e1bec321b974ae009781c0fe1845f3116a878753b0",
"0x9a78922c5f982be4a8bb5ad004c0c797334d7d88283c4ad45a9fb8aff06b5cb4",
"0xd5cbab8d524699f93cffe1f3ff89417720067c68442bcc2874404e03ef7c9b37"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


