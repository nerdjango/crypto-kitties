var web3 = new Web3(Web3.givenProvider);

var instance;
var user;
var contractAddress = "0xcFB5122E154fC973402a2D53dAae5aF456bdB4f2";

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

$('#new-kitty').click(() => {
    var catDNA = getDna()
    instance.methods.createCatGen0(catDNA).send({}, function(err, txHash) {
        if (err) {
            console.log(err);
        } else {
            console.log(txHash);
        }
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
        appendCat(kitty[0], i, kitty[4])
    }
    console.log(kitty);

}

async function getKittiesForBreeding() {

    var arrayId;
    var kitty;
    try {
        arrayId = await instance.methods.getCatByOwner().call();
    } catch (err) {
        console.log(err);
    }
    for (i = 0; i < arrayId.length; i++) {
        kitty = await instance.methods.getCat(arrayId[i]).call();
        appendCatForBreeding(kitty[0], i, kitty[4])
    }
    console.log(kitty);

}

function getCheckboxesValues() {
    return [].slice.apply(document.querySelectorAll("input[type=checkbox]"))
        .filter(function(c) { return c.checked; })
        .map(function(c) { return c.value; });
}

$('#breedKitties').click(() => {
    selectedCats = getCheckboxesValues()
    tomcat = parseInt(selectedCats[0])
    queen = parseInt(selectedCats[1])
    instance.methods.breed(tomcat, queen).send({}, function(err, txHash) {
        if (err) {
            console.log(err);
        } else {
            location.reload();
        }
    })
})