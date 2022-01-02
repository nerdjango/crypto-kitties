var colors = Object.values(allColors())

var defaultDNA = {
    "headcolor": 10,
    "mouthColor": 29,
    "eyesColor": 96,
    "earsColor": 10,
    //Cattributes
    "eyesShape": 1,
    "decorationPattern": 1,
    "decorationMidcolor": 50,
    "decorationSidescolor": 51,
    "animation": 1,
    "lastNum": 1
}

// when page load
$(document).ready(function() {
    $('#dnabody').html(defaultDNA.headColor);
    $('#dnamouth').html(defaultDNA.mouthColor);
    $('#dnaeyes').html(defaultDNA.eyesColor);
    $('#dnaears').html(defaultDNA.earsColor);

    $('#dnashape').html(defaultDNA.eyesShape)
    $('#dnadecoration').html(defaultDNA.decorationPattern)
    $('#dnadecorationMid').html(defaultDNA.decorationMidcolor)
    $('#dnadecorationSides').html(defaultDNA.decorationSidescolor)
    $('#dnaanimation').html(defaultDNA.animation)
    $('#dnaspecial').html(defaultDNA.lastNum)

    renderCat(defaultDNA)
});

function getDna() {
    var dna = ''
    dna += $('#dnabody').html()
    dna += $('#dnamouth').html()
    dna += $('#dnaeyes').html()
    dna += $('#dnaears').html()
    dna += $('#dnashape').html()
    dna += $('#dnadecoration').html()
    dna += $('#dnadecorationMid').html()
    dna += $('#dnadecorationSides').html()
    dna += $('#dnaanimation').html()
    dna += $('#dnaspecial').html()

    return parseInt(dna)
}

function renderCat(dna) {
    headColor(colors[dna.headcolor], dna.headcolor)
    $('#bodycolor').val(dna.headcolor)
    mouthColor(colors[dna.mouthColor], dna.mouthColor)
    $('#mouthcolor').val(dna.mouthColor)
    eyesColor(colors[dna.eyesColor], dna.eyesColor)
    $('#eyescolor').val(dna.eyesColor)
    earsColor(colors[dna.earsColor], dna.earsColor)
    $('#earscolor').val(dna.earsColor)
    eyeVariation(dna.eyesShape)
    $('#eyeshape').val(dna.eyesShape)
    decorationVariation(dna.decorationPattern)
    $('#bodyPattern').val(dna.decorationPattern)
    pattern1Color(colors[dna.decorationSidescolor], dna.decorationSidescolor)
    $('#facePattern').val(dna.decorationSidescolor)
    pattern2Color(colors[dna.decorationMidcolor], dna.decorationMidcolor)
    $('#stomachPattern').val(dna.decorationMidcolor)
    animationVariation(dna.animation)
    $('#animation').val(dna.animation)
}

// Changing cat colors
$('#bodycolor').change(() => {
    var colorVal = $('#bodycolor').val()
    headColor(colors[colorVal], colorVal)
})
$('#mouthcolor').change(() => {
    var colorVal = $('#mouthcolor').val()
    mouthColor(colors[colorVal], colorVal)
})
$('#eyescolor').change(() => {
    var colorVal = $('#eyescolor').val()
    eyesColor(colors[colorVal], colorVal)
})
$('#earscolor').change(() => {
    var colorVal = $('#earscolor').val()
    earsColor(colors[colorVal], colorVal)
})
$('#eyeshape').change(() => {
    var shape = parseInt($('#eyeshape').val())
    eyeVariation(shape)
})
$('#bodyPattern').change(() => {
    var pattern = parseInt($('#bodyPattern').val())
    decorationVariation(pattern)
})
$('#stomachPattern').change(() => {
    var colorVal = $('#stomachPattern').val()
    pattern2Color(colors[colorVal], colorVal)
})
$('#facePattern').change(() => {
    var colorVal = $('#facePattern').val()
    pattern1Color(colors[colorVal], colorVal)
})
$('#animation').change(() => {
    var animationVal = parseInt($('#animation').val())
    animationVariation(animationVal)
})

function randomNumber(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

$('#random-kitty').click(() => {
    var randomDNA = {
        "headcolor": randomNumber(10, 98),
        "mouthColor": randomNumber(10, 98),
        "eyesColor": randomNumber(10, 98),
        "earsColor": randomNumber(10, 98),
        //Cattributes
        "eyesShape": randomNumber(1, 7),
        "decorationPattern": randomNumber(1, 7),
        "decorationMidcolor": randomNumber(10, 98),
        "decorationSidescolor": randomNumber(10, 98),
        "animation": randomNumber(1, 6),
        "lastNum": 1
    }
    renderCat(randomDNA)
})

$('#default-kitty').click(() => {
    renderCat(defaultDNA)
})