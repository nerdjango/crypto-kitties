var web3 = new Web3(Web3.givenProvider);

var instance;
var user;
var contractAddress = "0x5CA95cE8D8aFaE09e814500ba5A4f38b0B73E42E";

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

async function getKitties() {

    var arrayId;
    var kitty;
    try {
        arrayId = await instance.methods.getCatByOwner().call();
    } catch (err) {
        console.log(err);
    }
    for (i = 0; i < arrayId.length; i++) {
        kitty = await instance.methods.getCat(arrayId[i]).call();
        console.log(kitty)
        appendCat(kitty[0], i, kitty[4])
    }
    console.log(kitty);

}