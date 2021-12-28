//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors() {
    var colors = []
    for (var i = 10; i < 99; i++) {
        var color = getColor()
        colors[i] = color
    }
    return colors
}

//This function code needs to modified so that it works with Your cat code.
function headColor(color, code) {
    $('.top-bar, .face-top, .face-bottom, .upper').css('background', '#' + color) //This changes the color of the cat
    $('#headcode').html('code: ' + code) //This updates text of the badge next to the slider
    $('#dnabody').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function mouthColor(color, code) {
    $('.mouth-surrounding, .lower').css('background', '#' + color) //This changes the color of the cat
    $('.tail').css('border-color', '#' + color) //This changes the color of the cat
    $('#mouthcode').html('code: ' + code) //This updates text of the badge next to the slider
    $('#dnamouth').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function eyesColor(color, code) {
    $('.l-pupil, .r-pupil').css('background', '#' + color) //This changes the color of the cat
    $('#eyescode').html('code: ' + code) //This updates text of the badge next to the slider
    $('#dnaeyes').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function earsColor(color, code) {
    $('.l-limb').css('border-right-color', '#' + color) //This changes the color of the cat
    $('.r-limb').css('border-left-color', '#' + color) //This changes the color of the cat
    $('.r-limb, .l-limb').css('border-top-color', '#' + color) //This changes the color of the cat
    $('.l-paw, .r-paw').css('background', '#' + color) //This changes the color of the cat
    $('.l-ear').css('box-shadow', '10px 10px 0 10px #' + color) //This changes the color of the cat
    $('.r-ear').css('box-shadow', '-10px 10px 0 10px #' + color) //This changes the color of the cat
    $('#earscode').html('code: ' + code) //This updates text of the badge next to the slider
    $('#dnaears').html(code) //This updates the body color part of the DNA that is displayed below the cat
}


//###################################################
//Functions below will be used later on in the project
//###################################################
async function eyeVariation(num) {

    $('#dnashape').html(num)
    switch (num) {
        case 1:
            await normalEyes()
            $('#eyeName').html('Basic')
            break
        case 2:
            await normalEyes()
            $('#eyeName').html('High')
            await eyesType1()
            break
        case 3:
            await normalEyes()
            $('#eyeName').html('Bigger')
            await eyesType2()
            break
        case 4:
            await normalEyes()
            $('#eyeName').html('Flat')
            await eyesType3()
            break
        case 5:
            await normalEyes()
            $('#eyeName').html('Funky')
            await eyesType4()
            break
        case 6:
            await normalEyes()
            $('#eyeName').html('Fallen eyes')
            await eyesType5()
            break
        case 7:
            await normalEyes()
            $('#eyeName').html('Diagonal eyes')
            await eyesType6()
            break
        default:
            console.log("Not 1 or 2")
    }
}

async function decorationVariation(num) {
    $('#dnadecoration').html(num)
    switch (num) {
        case 1:
            normaldecoration()
            $('#decorationName').html('Basic')
            break
        case 2:
            await normaldecoration()
            $('#decorationName').html('Left Face Mark')
            await decorationType1()
            break
        case 3:
            await normaldecoration()
            $('#decorationName').html('Right Face Mark')
            await decorationType2()
            break
        case 4:
            await normaldecoration()
            $('#decorationName').html('Stomach Mark')
            await decorationType3()
            break
        case 5:
            await normaldecoration()
            $('#decorationName').html('Face Mark')
            await decorationType4()
            break
        case 6:
            await normaldecoration()
            $('#decorationName').html('Stomach & Left Face Mark')
            await decorationType5()
            break
        case 7:
            await normaldecoration()
            $('#decorationName').html('Stomach & Right Face Mark')
            await decorationType6()
            break
        default:
            console.log("Not 1 or 2")
    }
}

async function normalEyes() {
    await $('.l-eye').css('border-top', '2px solid')
    await $('.r-eye').css('border-top', '2px solid')
    await $('.l-eye').css('width', '15px')
    await $('.r-eye').css('width', '15px')
    await $('.l-eye').css('height', '20px')
    await $('.r-eye').css('height', '20px')
    await $('.r-pupil').css('left', '1px')
    await $('.l-pupil').css('width', '13px')
    await $('.r-pupil').css('width', '13px')
    await $('.l-pupil').css('height', '12px')
    await $('.r-pupil').css('height', '12px')
    await $('.l-pupil').css('bottom', '0px')
    await $('.r-pupil').css('bottom', '0px')
    await $('.l-pupil').css('transform', 'rotate(0deg)')
    await $('.r-pupil').css('transform', 'rotate(0deg)')

    if (document.getElementById('lpupil').classList.contains("changed")) {
        await $('.l-pupil').toggleClass('changed');
    }
    if (document.getElementById('rpupil').classList.contains("changed")) {
        await $('.r-pupil').toggleClass('changed');
    }
}

async function eyesType1() {
    await $('.l-eye').css('border-top', '6px solid')
    await $('.r-eye').css('border-top', '6px solid')
}

async function eyesType2() {
    await $('.l-eye').css('border-top', '2px solid')
    await $('.r-eye').css('border-top', '2px solid')
    await $('.l-eye').css('width', '20px')
    await $('.r-eye').css('width', '20px')
}

async function eyesType3() {
    await $('.l-eye').css('border-top', '2px solid')
    await $('.r-eye').css('border-top', '2px solid')
    await $('.l-eye').css('width', '20px')
    await $('.r-eye').css('width', '20px')
    await $('.l-eye').css('height', '15px')
    await $('.r-eye').css('height', '15px')
}

async function eyesType4() {
    await $('.l-pupil').toggleClass('changed');
    await $('.r-pupil').toggleClass('changed');
    await $('.l-eye').css('border-top', '2px solid')
    await $('.r-eye').css('border-top', '2px solid')
    await $('.l-eye').css('width', '20px')
    await $('.r-eye').css('width', '20px')
    await $('.l-pupil').css('width', '5px')
    await $('.r-pupil').css('width', '5px')
}

async function eyesType5() {
    await $('.l-pupil').toggleClass('changed');
    await $('.r-pupil').toggleClass('changed');
    await $('.l-eye').css('border-top', '2px solid')
    await $('.r-eye').css('border-top', '2px solid')
    await $('.l-eye').css('width', '20px')
    await $('.r-eye').css('width', '20px')
    await $('.l-pupil').css('height', '5px')
    await $('.r-pupil').css('height', '5px')
}

async function eyesType6() {
    await $('.l-pupil').toggleClass('changed');
    await $('.r-pupil').toggleClass('changed');
    await $('.l-eye').css('border-top', '2px solid')
    await $('.r-eye').css('border-top', '2px solid')
    await $('.l-eye').css('width', '20px')
    await $('.r-eye').css('width', '20px')
    await $('.l-pupil').css('height', '5px')
    await $('.r-pupil').css('height', '5px')
    await $('.l-pupil').css('bottom', '5px')
    await $('.r-pupil').css('bottom', '5px')
    await $('.l-pupil').css('transform', 'rotate(45deg)')
    await $('.r-pupil').css('transform', 'rotate(135deg)')
}

async function normaldecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    await $('.l-mark').css({ "height": "40px", "width": "50px" })
    await $('.r-mark').css({ "height": "40px", "width": "50px" })
    await $('.stomach-mark').css({ "height": "8px", "width": "41px" })
}
async function decorationType1() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    await $('.l-mark').css({ "height": "40px", "width": "50px" })
    await $('.r-mark').css({ "height": "0px", "width": "50px" })
    await $('.stomach-mark').css({ "height": "11px", "width": "0px" })
}
async function decorationType2() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    await $('.l-mark').css({ "height": "0px", "width": "50px" })
    await $('.r-mark').css({ "height": "40px", "width": "50px" })
    await $('.stomach-mark').css({ "height": "11px", "width": "0px" })
}
async function decorationType3() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    await $('.l-mark').css({ "height": "0px", "width": "50px" })
    await $('.r-mark').css({ "height": "0px", "width": "50px" })
    await $('.stomach-mark').css({ "height": "8px", "width": "41px" })
}
async function decorationType4() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    await $('.l-mark').css({ "height": "40px", "width": "50px" })
    await $('.r-mark').css({ "height": "40px", "width": "50px" })
    await $('.stomach-mark').css({ "height": "11px", "width": "0px" })
}
async function decorationType5() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    await $('.l-mark').css({ "height": "40px", "width": "50px" })
    await $('.r-mark').css({ "height": "0px", "width": "50px" })
    await $('.stomach-mark').css({ "height": "8px", "width": "41px" })
}
async function decorationType6() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    await $('.l-mark').css({ "height": "0px", "width": "50px" })
    await $('.r-mark').css({ "height": "40px", "width": "50px" })
    await $('.stomach-mark').css({ "height": "8px", "width": "41px" })
}

function pattern1Color(color, code) {
    $('.l-mark').css('background', '#' + color)
    $('.r-mark').css('background', '#' + color)

    $('#decoration1Color').html('code: ' + code) //This updates text of the badge next to the slider
    $('#dnadecorationSides').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function pattern2Color(color, code) {
    $('.stomach-mark').css('background', '#' + color)

    $('#decoration2Color').html('code: ' + code) //This updates text of the badge next to the slider
    $('#dnadecorationMid').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

async function animationVariation(num) {
    $('#dnaanimation').html(num)
    switch (num) {
        case 1:
            await normalanimation()
            $('#animationName').html('Head Moving')
            await animationType1()
            break
        case 2:
            await normalanimation()
            $('#animationName').html('Left Ear Moving')
            await animationType2()
            break
        case 3:
            await normalanimation()
            $('#animationName').html('Right Ear Moving')
            await animationType3()
            break
        case 4:
            await normalanimation()
            $('#animationName').html('Ears Moving')
            await animationType4()
            break
        case 5:
            await normalanimation()
            $('#animationName').html('Head & Ears Moving')
            await animationType5()
            break
        case 6:
            await normalanimation()
            $('#animationName').html('Rear Paws Taping')
            await animationType6()
            break
        default:
            console.log("Not 1 or 2")
    }
}

async function normalanimation() {
    if (document.getElementById('head').classList.contains("moveHead")) {
        await $('.head').toggleClass('moveHead');
    }
    if (document.getElementById('l-ear').classList.contains("moveLeftEar")) {
        await $('.l-ear').toggleClass('moveLeftEar');
    }
    if (document.getElementById('r-ear').classList.contains("moveRightEar")) {
        await $('.r-ear').toggleClass('moveRightEar');
    }
    if (document.getElementById('l-paw').classList.contains("tapLeftFeet")) {
        await $('.l-paw').toggleClass('tapLeftFeet');
    }
    if (document.getElementById('r-paw').classList.contains("tapRightFeet")) {
        await $('.r-paw').toggleClass('tapRightFeet');
    }
}

async function animationType1() {
    await $('.head').toggleClass('moveHead');
}

async function animationType2() {
    await $('.l-ear').toggleClass('moveLeftEar');
}

async function animationType3() {
    await $('.r-ear').toggleClass('moveRightEar');
}

async function animationType4() {
    await $('.l-ear').toggleClass('moveLeftEar');
    await $('.r-ear').toggleClass('moveRightEar');
}

async function animationType5() {
    await $('.head').toggleClass('moveHead');
    await $('.l-ear').toggleClass('moveLeftEar');
    await $('.r-ear').toggleClass('moveRightEar');
}

async function animationType6() {
    await $('.l-paw').toggleClass('tapLeftFeet');
    await $('.r-paw').toggleClass('tapRightFeet');
}