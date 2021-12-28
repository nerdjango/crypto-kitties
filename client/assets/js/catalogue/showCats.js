// File for fetching all the cats from smart contrat 
// into the catalogue

//Append cat for breeding
function breedAppend(dna, id, gen, gender) {
    //1 return DNA cat into readable string 
    var KittyDna = catDna(dna)
        //2 build the catBox into HTML    
    catBox(id)
        //3 Render the cats CSS style depending on DNA string
    renderCat(KittyDna, id)
    $('#catDNA' + id).html(`
    <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>GEN:</b>` + gen + `</h4></span>
    <br>
    <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>DNA:</b>` + dna + `</h4></span>`)

    $('#catview' + id).attr('onclick', 'selectBreed("' + dna + '","' + id + '","' + gen + '","' + gender + '")')
}


function selectBreed(dna, id, gen, gender) {

    var KittyDna = catDna(dna)
        //2 build the singleCat into HTML
    var body = catBody(gender)
    var Cattributes = cattributes(gender)
    $('#cattributes' + gender).html(Cattributes)
    $('#' + gender).html(body)
        //3 Render the cats CSS style depending on DNA string
    renderCat(KittyDna, gender)
    $('#' + gender).addClass('breedSelect')
    $('#' + gender).attr('data-catid', id)
    $('#' + gender).attr('onclick', 'breedKitties("' + gender + '")')
    $('#catDNA' + gender).html(`
    <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>GEN:</b>` + gen + `</h4><input class="hidden" id="` + gender + `Id" type="number" value=` + id + `></span>
    <br>
    <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>DNA:</b>` + dna + `</h4></span>`)
    $('#catSelection').modal('hide')
    removeSelection(id, gender)
    readyToBreed()
}

//Append each Cat card as a catalog

function appendCat(dna, id, gen) {
    //1 return DNA cat into readable string 
    var KittyDna = catDna(dna)
        //2 build the catBox into HTML
    catBox(id)
        //3 Render the cats CSS style depending on DNA string
    renderCat(KittyDna, id)
    $('#catDNA' + id).html(`
    <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>GEN:</b>` + gen + `</h4></span>
    <br>
    <span class="badge badge-light"><h4 class="tsp-2 m-0"><b>DNA:</b>` + dna + `</h4></span>`)
}

function readyToBreed() {

    var mumId = $('#DameId').val()
    var dadId = $('#SireId').val()

    if (!empty(mumId) && !empty(dadId)) {
        $('#breed').css('filter', 'none')
        $('#breed').prop('disabled', false)
        $('#breed').attr('onclick', 'breed("' + dadId + '","' + mumId + '")')
        return true
    }
    $('#breed').prop('disabled', true)
    $('#breed').css('filter', ' grayscale()')
    return false
}

//If user select a selected cat from any gender, its remove it from the selection box
function removeSelection(id, gender) {

    var selectionDiv = `<div align="center">
                                <div class="egg">
                                </div>
                                <h4>Select a cat as ` + gender + `</h4>
                            </div>
                        </div>`

    if (gender == 'Dame') {
        var catData = $('#Sire').attr('data-catid')
        if (catData == id) {
            $('#Sire').attr('data-catid', -1)
            $('#Sire').attr('onclick', 'breedKitties(this.id)')
            $('#Sire').html(selectionDiv)
            $('#Sire').removeClass('breedSelect')
            $('#catDNASire').html('')
        }
    }
    if (gender == 'Sire') {
        var catData = $('#Dame').attr('data-catid')
        if (catData == id) {
            $('#Dame').attr('data-catid', -1)
            $('#Dame').attr('onclick', 'breedKitties(this.id)')
            $('#Dame').html(selectionDiv)
            $('#Dame').removeClass('breedSelect')
            $('#catDNADame').html('')
        }
    }
}

//Apply cat CSS Styles from buidCat.js

function renderCat(dna, id) {

    headColor(dna.headcolor, id)
    mouthAndBelly(dna.mouthColor, id)
    eyeColor(dna.eyesColor, id)
    earsAndPaw(dna.earsColor, id)
    eyeVariation(dna.eyesShape, id)
    decorationVariation(dna.decorationPattern, id)
    midColor(dna.decorationMidcolor, id)
    SidesColor(dna.decorationSidescolor, id)
    animationVariation(dna.animation, id)
}

//Splitting the cat DNA to use it in render

function catDna(dnaStr) {


    var dna = {
        //Colors
        "headcolor": dnaStr.substring(0, 2),
        "mouthColor": dnaStr.substring(2, 4),
        "eyesColor": dnaStr.substring(4, 6),
        "earsColor": dnaStr.substring(6, 8),
        //Cattributes
        "eyesShape": dnaStr.substring(8, 9),
        "decorationPattern": dnaStr.substring(9, 10),
        "decorationMidcolor": dnaStr.substring(10, 12),
        "decorationSidescolor": dnaStr.substring(12, 14),
        "animation": dnaStr.substring(14, 15),
        "lastNum": dnaStr.substring(15, 16)
    }

    return dna
}

//Cat HTML Div
var name = "Filip"
var string = "hello " + name + "!"

//Cat HTML Div for catalogue
function catBox(id) {

    var catDiv = `<div class="col-lg-4 pointer fit-content" id="catview` + id + `">
                 <div class="featureBox catDiv ">
                 ` + catBody(id) + `                           
                 </div>
                 <div class="dnaDiv" id="catDNA` + id + `"></div>
                 ` + cattributes(id) + `
                </div>`
    var catView = $('#catview' + id)
    if (!catView.length) {
        $('#catsDiv').append(catDiv)
    }
}


//Simple body of a cat
function catBody(id) {

    var single = `<div class="cat">

                    <div id="posterior` + id + `" class="posterior">
                        <div id="lower` + id + `" class="lower"></div>
                        <div id="paws` + id + `" class="paws">
                            <div id="l-paw` + id + `" class="l-paw"></div>
                            <div id="r-paw` + id + `" class="r-paw"></div>
                        </div>
                    </div>

                    <div id="anterior` + id + `" class="anterior">
                        <div id="limbs` + id + `" class="limbs">
                            <div id="l-limb` + id + `" class="l-limb"></div>
                            <div id="r-limb` + id + `" class="r-limb"></div>
                        </div>
                        <div id="upper` + id + `" class="upper">
                            <div id="stomach-mark` + id + `" class="stomach-mark"></div>
                        </div>
                    </div>

                    <div id="head` + id + `" class="head">
                        <div id="l-ear` + id + `" class="l-ear"></div>
                        <div id="r-ear` + id + `" class="r-ear"></div>

                        <div id="face-bottom` + id + `" class="face-bottom">
                            <div id="mouth-surrounding` + id + `" class="mouth-surrounding"></div>
                            <div id="mouth` + id + `" class="mouth"></div>
                            <div id="l-wisker` + id + `" class="l-wisker"></div>
                            <div id="r-wisker` + id + `" class="r-wisker"></div>
                        </div>

                        <div id="top-bar` + id + `" class="top-bar"></div>

                        <div id="face-top` + id + `" class="face-top">
                            <div id="l-mark` + id + `" class="l-mark"></div>
                            <div id="r-mark` + id + `" class="r-mark"></div>
                            <div id="l-eye` + id + `" class="l-eye">
                                <div id="lpupil` + id + `" class="l-pupil"></div>
                            </div>
                            <div id="r-eye` + id + `" class="r-eye">
                                <div id="rpupil` + id + `" class="r-pupil"></div>
                            </div>
                        </div>
                    </div>
                </div>`
    return single
}

function cattributes(id) {

    var Cattributes = `<ul class="ml-5 cattributes">
                            <li><span id="eyeName` + id + `"></span> eyes</li>
                            <li><span id="decorationName` + id + `"></span> decoration</li>
                            <li><span id="animationName` + id + `"></span></li>
                        </ul>`
    return Cattributes


}