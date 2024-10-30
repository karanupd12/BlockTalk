import chatAppJSON from './ChatApp.json';

//hardhat address
//export const ChatAppAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

//polygon address
export const ChatAppAddress = "0x252A54dE047178466BB72836704617Efd33909a1";
export const ChatAppABI = chatAppJSON.abi;

//NETWORKS
const networks = {

    localhost: {
      chainId: `0x${Number(31337).toString(16)}`,
      chainName: 'Localhost',
      rpcUrls: ['http://127.0.0.1:8545/'],
      nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18,
      },
    },

    base_sepolia: {
      chainId: '0xaa36a7', 
      chainName: 'Base Sepolia',
      rpcUrls: ['https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID'],
      nativeCurrency: {
        name: 'SepoliaETH',
        symbol: 'ETH',
        decimals: 18,
      },
    },

    polygon_amoy: {
      chainId: `0X${Number(80002).toString(16)}`,
      chainName: 'Polygon Amoy',
      nativeCurrency: {
        name: 'MATIC',
        symbol: 'MATIC',
        decimals: 18,
      },
      rpcUrls: ["https://rpc-amoy.polygon.technology/"],
      blockExplorerUrls: ['https://www.oklink.com/amoy'],
    },

};

const changeNetwork = async ({ networkName }) => {
    try {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: networks[networkName].chainId }],
        });
    } catch (switchError) {
        if (switchError.code === 4902) {
            try {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [networks[networkName]],
                });
            } catch (addError) {
                console.error('Failed to add network', addError);
            }
        } else {
            console.error('Failed to switch network', switchError);
        }
    }
};

export const handleNetworkSwitch = async () => {
    const networkName = "polygon_amoy";
    await changeNetwork({ networkName });
};