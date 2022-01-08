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
        appendCat(kitty[0], arrayId[i], kitty[4])
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
        appendCatForBreeding(kitty[0], arrayId[i], kitty[4])
    }
    console.log(kitty);

}

async function getOffers() {

    var arrayId;
    var kitty;
    try {
        arrayId = await marketInstance.methods.getAllTokenOnSale().call();
    } catch (err) {
        console.log(err);
    }
    for (i = 0; i < arrayId.length; i++) {
        kitty = await instance.methods.getCat(arrayId[i]).call();
        appendCatOffers(kitty[0], arrayId[i], kitty[4])
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

function setOffer(price, tokenId) {
    marketInstance.methods.setOffer(price, tokenId).send({}, function(err, txHash) {
        if (err) {
            console.log(err);
        } else {
            location.reload();
        }
    })
}

async function setSellOffer(id) {
    var priceId = `price` + id
    var price = document.getElementById(priceId).value;
    var weiValue = web3.utils.toWei(price, 'ether')
    var _id = parseInt(id)
    console.log(weiValue)
    console.log(_id)

    var isApprovedForAll = await instance.methods.isApprovedForAll(user, marketAddress).call();

    if (isApprovedForAll == false) {
        instance.methods.setApprovalForAll(marketAddress, true).send({}, function(err, txHash) {
            if (err) {
                console.log(err);
            } else {
                setOffer(weiValue, _id);
            }
        })
    } else {
        setOffer(weiValue, _id);
    }
}

async function cancelSellOffer(id) {
    marketInstance.methods.removeOffer(id).send({}, function(err, txHash) {
        if (err) {
            console.log(err);
        } else {
            location.reload();
        }
    })
}

async function buyKitty(id) {
    var offer = await marketInstance.methods.getOffer(id).call();
    marketInstance.methods.buyKitty(id).send({ value: offer.price }, function(err, txHash) {
        if (err) {
            console.log(err);
        } else {
            location.reload();
        }
    })
}