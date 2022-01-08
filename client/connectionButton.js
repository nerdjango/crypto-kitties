var user;
var contractAddress = "0xaCed9780f71e88205b96aE2839746a7F3a946A63";
var marketAddress = "0x1308BA5BB90E9778Ab520A6952E0f3420DF96Ec1";
var accounts;
var walletDisconnect;

// Unpkg imports
var web3;

const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const evmChains = window.evmChains;

// Web3modal instance
let web3Modal

// Chosen wallet provider given by the dialog window
let provider;


/**
 * Setup the orchestra
 */
function init() {
    walletDisconnect = true;

    console.log("Initializing");
    console.log("WalletConnectProvider is", WalletConnectProvider);
    console.log("window.web3 is", window.web3, "window.ethereum is", window.ethereum);

    // Tell Web3modal what providers we have available.
    // Built-in web browser provider (only one can exist as a time)
    // like MetaMask, Brave or Opera is added automatically by Web3modal
    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                infuraId: "283b141c702747c8b27225f324287f00",
            }
        }
    };

    web3Modal = new Web3Modal({
        cacheProvider: true, // optional
        providerOptions, // required
        disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
    });

    console.log("Web3Modal instance is", web3Modal);
}


/**
 * Kick in the UI action after Web3modal dialog has chosen a provider
 */
async function fetchAccountData() {
    // Get a Web3 instance for the wallet
    web3 = new Web3(provider);

    console.log("Web3 instance is", web3);

    // Get list of accounts of the connected wallet
    accounts = await web3.eth.getAccounts();

    console.log(accounts)

    if (accounts.length > 0) {
        // Get connected chain id from Ethereum node
        const chainId = await web3.eth.getChainId();
        // Load chain information over an HTTP API
        const chainData = evmChains.getChain(chainId);

        if (chainId != 4) {
            alert(`You're currently connected to the ${chainData.name}. Please connect to the Ethereum Testnet Rinkeby to access full functionality of this dApp!`)
        }

        try {
            instance = new web3.eth.Contract(abi.kittyContract, contractAddress, { from: accounts[0] })
            marketInstance = new web3.eth.Contract(abi.marketplace, marketAddress, { from: accounts[0] })

            user = accounts[0]

            console.log(instance)
            console.log(marketInstance)
        } catch (e) {
            console.log("Could not get contract instance", e);
            return;
        }

        if (instance && marketInstance) {
            instance.events.Birth().on("data", function(event) {
                    console.log(event)
                    let owner = event.returnValues.owner
                    let kittenId = event.returnValues.kittenId
                    let mumId = event.returnValues.mumId
                    let dadId = event.returnValues.dadId
                    let genes = event.returnValues.genes
                    $("#kittenCreation").css("display", "block")
                    $("#kittenCreation").text("owner: " + owner + ", catId: " + kittenId + ", mumId: " + mumId +
                        ", dadId: " + dadId + ", genes: " + genes)
                })
                .on("error", console.error)

            marketInstance.events.MarketTransaction().on("data", function(event) {
                    console.log(event)
                    let txType = event.returnValues.TxType
                    let owner = event.returnValues.owner
                    let kittenId = event.returnValues.tokenId
                    $("#kittenCreation").css("display", "block")
                    $("#kittenCreation").text("Transaction: " + txType + ", owner: " + owner + ", catId: " + kittenId)
                })
                .on("error", console.error)
        }

        // Display fully loaded UI for wallet data
        document.querySelector("#btn-connect").style.display = "none";
        document.querySelector("#btn-disconnect").style.display = "block";
    } else {
        onDisconnect()
    }
}



/**
 * Fetch account data for UI when
 * - User switches accounts in wallet
 * - User switches networks in wallet
 * - User connects wallet initially
 */
async function refreshAccountData() {

    // If any current data is displayed when
    // the user is switching acounts in the wallet
    // immediate hide this data
    document.querySelector("#btn-connect").style.display = "block";
    document.querySelector("#btn-disconnect").style.display = "none";

    // Disable button while UI is loading.
    // fetchAccountData() will take a while as it communicates
    // with Ethereum node via JSON-RPC and loads chain data
    // over an API call.
    document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
    await fetchAccountData(provider);
    document.querySelector("#btn-connect").removeAttribute("disabled")
}


/**
 * Connect wallet button pressed.
 */
async function onConnect() {
    walletDisconnect = false

    console.log("Opening a dialog", web3Modal);
    try {
        provider = await web3Modal.connect();
    } catch (e) {
        console.log("Could not get a wallet connection", e);
        return;
    }

    // Subscribe to accounts change
    provider.on("accountsChanged", async(accounts) => {
        await fetchAccountData();
    });

    // Subscribe to chainId change
    provider.on("chainChanged", async(chainId) => {
        await fetchAccountData();
    });

    // Subscribe to networkId change
    provider.on("networkChanged", async(networkId) => {
        await fetchAccountData();
    });

    // Subscribe to disconnected
    provider.on("disconnect", async(accounts) => {
        if (provider.close) {
            onDisconnect()
        } else {
            await fetchAccountData();
        }
    });

    if (!walletDisconnect) {
        await refreshAccountData();
    }
}

/**
 * Disconnect wallet button pressed.
 */
async function onDisconnect() {
    walletDisconnect = true;

    console.log("Killing the wallet connection", provider);

    // TODO: Which providers have close method?
    if (provider.close) {
        await provider.close();

        // If the cached provider is not cleared,
        // WalletConnect will default to the existing session
        // and does not allow to re-scan the QR code with a new wallet.
        // Depending on your use case you may want or want not his behavir.
        await web3Modal.clearCachedProvider();
        provider = null;
        web3 = null;
    } else {
        await web3Modal.clearCachedProvider();
        provider = null;
        web3 = null;
    }

    selectedAccount = null;
    user = null;

    // Set the UI back to the initial state
    document.querySelector("#btn-connect").style.display = "block";
    document.querySelector("#btn-disconnect").style.display = "none";
    //location.reload()
}


/**
 * Main entry point.
 */
window.addEventListener('load', async() => {
    init();

    document.querySelector("#btn-connect").addEventListener("click", onConnect);
    document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);

    if (web3Modal.cachedProvider) {
        onConnect()
    } else {
        document.querySelector("#btn-connect").style.display = "block";
        document.querySelector("#btn-disconnect").style.display = "none";
    }
});