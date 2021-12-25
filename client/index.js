var web3 = new Web3(Web3.givenProvider);

var instance;
var user;
var contractAddress = "0x57C6D5E38303e5F02d572811B324668A75A1436c";

$(document).ready(async function() {
    await window.ethereum.request({ method: 'eth_requestAccounts' }).then(function(accounts) {

        instance = new web3.eth.Contract(abi, contractAddress, { from: accounts[0] })
        user = accounts[0]

        console.log(instance)

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
    })
})