// CSS properties to build each cat depending on the DNA


var colors = Object.values(allColors())

function headColor(code, id) {

    var color = colors[code]
    $('#top-bar' + id + ', #face-top' + id + ', #face-bottom' + id + ', #upper' + id).css('background', '#' + color)
}

function mouthAndBelly(code, id) {
    var color = colors[code]
    $('#mouth-surrounding' + id + ', #lower' + id).css('background', '#' + color)
}

function eyeColor(code, id) {
    var color = colors[code]
    $('#lpupil' + id + ', #rpupil' + id).css('background', '#' + color)
}

function earsAndPaw(code, id) {
    var color = colors[code]
    $('#l-limb' + id).css('border-right-color', '#' + color)
    $('#r-limb' + id).css('border-left-color', '#' + color)
    $('#l-limb' + id + ', #r-limb' + id).css('border-top-color', '#' + color)
    $('#l-paw' + id + ', #r-paw' + id).css('background', '#' + color)
    $('#l-ear' + id).css('box-shadow', '10px 10px 0 10px #' + color)
    $('#r-ear' + id).css('box-shadow', '-10px 10px 0 10px #' + color)

}

//Middle decoration color
function midColor(code, id) {
    var color = colors[code]
    $('#stomach-mark' + id).css('background', '#' + color)
    $('#stomach-mark' + id).css('bottom', '0px')
    $('#stomach-mark' + id).css('right', '32px')
}

//Sides decoration color
function SidesColor(code, id) {
    var color = colors[code]
    $('#l-mark' + id).css('background', '#' + color)
    $('#r-mark' + id).css('background', '#' + color)
}

// Variation functions for range-bars

//8 eye types
function eyeVariation(num, id) {

    switch (num) {
        case "1":
            normalEyes(id)
            $('#eyeName' + id).html('Basic')
            break
        case "2":
            normalEyes(id)
            $('#eyeName' + id).html('High')
            return eyesType1(id)
        case "3":
            normalEyes(id)
            $('#eyeName' + id).html('Bigger')
            return eyesType2(id)
        case "4":
            normalEyes(id)
            $('#eyeName' + id).html('Flat')
            return eyesType3(id)
        case "5":
            normalEyes(id)
            $('#eyeName' + id).html('Funky')
            return eyesType4(id)
        case "6":
            normalEyes(id)
            $('#eyeName' + id).html('Fallen')
            return eyesType5(id)
        case "7":
            normalEyes(id)
            $('#eyeName' + id).html('Diagonal')
            return eyesType6(id)
        default:
            normalEyes(id)
            $('#eyeName' + id).html('Basic')
            break
    }
}


//8 decorations types
function decorationVariation(num, id) {

    switch (num) {
        case "1":
            $('#decorationName' + id).html('Basic')
            normaldecoration(id)
            break
        case "2":
            $('#decorationName' + id).html('Left Face Mark')
            decorationType1(id)
            break
        case "3":
            $('#decorationName' + id).html('Right Face Mark')
            decorationType2(id)
            break
        case "4":
            $('#decorationName' + id).html('Stomach Mark')
            decorationType3(id)
            break
        case "5":
            $('#decorationName' + id).html('Face Mark')
            decorationType4(id)
            break
        case "6":
            $('#decorationName' + id).html('Stomach & Left Face Mark')
            decorationType5(id)
            break
        case "7":
            $('#decorationName' + id).html('Stomach & Right Face Mark')
            decorationType6(id)
            break
        default:
            $('#decorationName' + id).html('Basic')
            normaldecoration(id)
            break
    }
}

//6 Animations 
function animationVariation(num, id) {

    switch (num) {
        case "1":
            $('#animationName' + id).html('Head Moving')
            animationType1(id)
            break
        case "2":
            $('#animationName' + id).html('Left Ear Moving')
            animationType2(id)
            break
        case "3":
            $('#animationName' + id).html('Right Ear Moving')
            animationType3(id)
            break
        case "4":
            $('#animationName' + id).html('Ears Moving')
            animationType4(id)
            break
        case "5":
            $('#animationName' + id).html('Head & Ears Moving')
            animationType5(id)
            break
        case "6":
            $('#animationName' + id).html('Rear Paws Taping')
            animationType6(id)
            break
        default:
            $('#animationName' + id).html('Head Moving')
            animationType1(id)
            break
    }
}

// **   Eyes **  //

async function normalEyes(id) {
    await $('#l-eye' + id + ', #r-eye' + id).css({ "border-top": "2px solid", "width": "15px", "height": "20px" })
    await $('#rpupil' + id).css('left', '1px')
    await $('#lpupil' + id + ', #rpupil' + id).css({ "width": "13px", "height": "12px", "bottom": "0px", "transform": "rotate(0deg)" })

    //if (document.getElementById('lpupil').classList.contains("changed")) {
    //    await $('#lpupil').toggleClass('changed');
    //}
    //if (document.getElementById('rpupil').classList.contains("changed")) {
    //    await $('#rpupil').toggleClass('changed');
    //}
}

//top
async function eyesType1(id) {
    await $('#l-eye' + id + ', #r-eye' + id).css('border-top', '6px solid')
}

//bottom
async function eyesType2(id) {
    await $('#l-eye' + id + ', #r-eye' + id).css({ "border-top": "2px solid", "width": "20px" })
}

//top and bottom
async function eyesType3(id) {
    await $('#l-eye' + id + ', #r-eye' + id).css({ "border-top": "2px solid", "width": "20px", "height": "15px" })
}

//Right and left
async function eyesType4(id) {
    await $('#lpupil' + id + ', #rpupil' + id).toggleClass('changed');
    await $('#l-eye' + id + ', #r-eye' + id).css({ "border-top": "2px solid", "width": "20px" })
    await $('#lpupil' + id + ', #rpupil' + id).css('width', '5px')
}

//Right left top
async function eyesType5(id) {
    await $('#lpupil' + id + ', #rpupil' + id).toggleClass('changed');
    await $('#l-eye' + id + ', #r-eye' + id).css({ "border-top": "2px solid", "width": "20px" })
    await $('#lpupil' + id + ', #rpupil' + id).css('height', '5px')
}

//Right left botton
async function eyesType6(id) {
    await $('#lpupil' + id + ', #rpupil' + id).toggleClass('changed');
    await $('#l-eye' + id + ', #r-eye' + id).css({ "border-top": "2px solid", "width": "20px" })
    await $('#lpupil' + id + ', #rpupil' + id).css({ "height": "5px", "bottom": "5px" })
    await $('#lpupil' + id).css('transform', 'rotate(45deg)')
    await $('#rpupil' + id).css('transform', 'rotate(135deg)')
}
//Full shape

// **   Decoration **  //

// ** Angles ** //

async function normaldecoration(id) {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    await $('#l-mark' + id + ', #r-mark' + id).css({ "height": "40px", "width": "50px" })
    await $('#stomach-mark' + id).css({ "height": "8px", "width": "37px" })
}

//inverted
async function decorationType1(id) {
    await $('#r-mark' + id).css({ "height": "0px", "width": "50px" })
    await $('#stomach-mark' + id).css({ "height": "8px", "width": "0px" })
}

//Twiss
async function decorationType2(id) {
    await $('#l-mark' + id).css({ "height": "0px", "width": "50px" })
    await $('#stomach-mark' + id).css({ "height": "8px", "width": "0px" })
}

// ** Parterns **//
// Unifrom partern
async function decorationType3(id) {
    await $('#stomach-mark' + id).css({ "height": "8px", "width": "37px" })
    await $('#l-mark' + id + ', #r-mark' + id).css({ "height": "0px", "width": "0px" })
}

//Combination of 3 and 4
async function decorationType4(id) {
    await $('#l-mark' + id + ', #r-mark').css({ "height": "40px", "width": "50px" })
    await $('#stomach-mark' + id).css({ "height": "8px", "width": "0px" })
}

//Tribal decoration
async function decorationType5(id) {
    await $('#l-mark' + id).css({ "height": "40px", "width": "50px" })
    await $('#r-mark' + id).css({ "height": "0px", "width": "50px" })
    await $('#stomach-mark' + id).css({ "height": "8px", "width": "37px" })
}
async function decorationType6(id) {
    await $('#l-mark' + id).css({ "height": "0px", "width": "50px" })
    await $('#r-mark' + id).css({ "height": "40px", "width": "50px" })
    await $('#stomach-mark' + id).css({ "height": "8px", "width": "37px" })
}

/** Animations **/

async function resetAnimation(id) {
    document.getElementById("head" + id).classList.remove("movingHead")
    document.getElementById("leftEar" + id).classList.remove("movingEarsLeft", "moving-Single-EarLeft", "attentionLeft")
    document.getElementById("rightEar" + id).classList.remove("movingEarsRight", "moving-Single-EarRight", "attentionRight")
    document.getElementById("tail" + id).classList.remove("movingTail")

}

async function animationType1(id) {
    await $('#head' + id).toggleClass('moveHead');
}

async function animationType2(id) {
    await $('#l-ear' + id).toggleClass('moveLeftEar');
}

//moving both ears
async function animationType3(id) {
    await $('#r-ear' + id).toggleClass('moveRightEar');
}

// Single Ears

async function animationType4(id) {
    await $('#l-ear' + id).toggleClass('moveLeftEar');
    await $('#r-ear' + id).toggleClass('moveRightEar');
}

async function animationType5(id) {
    await $('#head' + id).toggleClass('moveHead');
    await $('#l-ear' + id).toggleClass('moveLeftEar');
    await $('#r-ear' + id).toggleClass('moveRightEar');
}

// Attentive Cat Ears animation

async function animationType6(id) {
    await $('#l-paw' + id).toggleClass('tapLeftFeet');
    await $('#r-paw' + id).toggleClass('tapRightFeet');
}


// Eyes of the car followign the cursor
const closer = 4;
const further = -4;

document.addEventListener('mousemove', (e) => {
    let positionX = e.pageX;
    let positionY = e.pageY;

    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    let moveX = (positionX - width) / (width) * closer;
    let moveY = (positionY - height) / (height) * closer;

    $('.pupil-left').css('transform', 'translate(' + moveX + 'px,' + moveY + 'px)')
    $('.pupil-right').css('transform', 'translate(' + moveX + 'px,' + moveY + 'px)')

}, false);