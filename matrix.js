console.log('test log');

// note 
// Co - Coefficient


//********************************Clear Function****************************
function clearme() {
    document.getElementById('A11').value = "";
    document.getElementById('A12').value = "";
    document.getElementById('A13').value = "";
    document.getElementById('A21').value = "";
    document.getElementById('A22').value = "";
    document.getElementById('A23').value = "";
    document.getElementById('A31').value = "";
    document.getElementById('A32').value = "";
    document.getElementById('A33').value = "";

    location.reload()
}

//***************************Determinant Function*********************
function det() {
    document.getElementById('btnD').style.display = 'inline-block';
    document.getElementById('clr').style.display = 'inline-block';
    document.getElementById('onStart').style.display = 'none';

    document.getElementById('L01').style.background = 'black'
    document.getElementById('L01').style.borderRadius = '25px';
    document.body.style.background = 'linear-gradient(to right, #74bece, #e1dada)';
    document.getElementById('name').innerHTML = `[Determinant]`

    document.getElementById('btnC').style.display = 'none';
    document.getElementById('btnA').style.display = 'none';
    document.getElementById('btnI').style.display = 'none';

    document.getElementById('L02').style.background = 'initial'
    document.getElementById('L03').style.background = 'initial'
    document.getElementById('L04').style.background = 'initial'




}

function resD() {
    // get the user input


    let A11 = document.getElementById('A11').value;
    let A12 = document.getElementById('A12').value;
    let A13 = document.getElementById('A13').value;
    let A21 = document.getElementById('A21').value;
    let A22 = document.getElementById('A22').value;
    let A23 = document.getElementById('A23').value;
    let A31 = document.getElementById('A31').value;
    let A32 = document.getElementById('A32').value;
    let A33 = document.getElementById('A33').value;

    //get the determinant 
    Adet = (A11 * ((A22 * A33) - (A32 * A23))) - (A12 * ((A21 * A33) - (A31 * A23))) + (A13 * ((A21 * A32) - (A31 * A22)));

    document.getElementById('Res').innerHTML = `Determinant is ${Adet}`



}


//************************Cofactor Function***********************************
function CoMat() {
    document.getElementById('btnC').style.display = 'inline-block';
    document.getElementById('clr').style.display = 'inline-block';
    document.getElementById('onStart').style.display = 'none';

    document.getElementById('L02').style.background = 'black'
    document.getElementById('L02').style.borderRadius = '25px';
    document.body.style.background = 'linear-gradient(to right, #d3e0e3, #6c8eeb)'
    document.getElementById('name').innerHTML = `[Co-factor]`

    document.getElementById('btnD').style.display = 'none';
    document.getElementById('btnA').style.display = 'none';
    document.getElementById('btnI').style.display = 'none';

    document.getElementById('L01').style.background = 'initial'
    document.getElementById('L03').style.background = 'initial'
    document.getElementById('L04').style.background = 'initial'

}

function resC() {
    document.getElementById('output').style.border = "2px solid red"
        // get the user input


    let A11 = document.getElementById('A11').value;
    let A12 = document.getElementById('A12').value;
    let A13 = document.getElementById('A13').value;
    let A21 = document.getElementById('A21').value;
    let A22 = document.getElementById('A22').value;
    let A23 = document.getElementById('A23').value;
    let A31 = document.getElementById('A31').value;
    let A32 = document.getElementById('A32').value;
    let A33 = document.getElementById('A33').value;

    // console.log(Math.sign(A11));

    // Coefficient value calculate

    let A11Co = ((A22 * A33) - (A32 * A23));
    let A12Co = -((A21 * A33) - (A31 * A23));
    let A13Co = ((A21 * A32) - (A31 * A22));

    let A21Co = -((A12 * A33) - (A32 * A13));
    let A22Co = ((A11 * A33) - (A31 * A13));
    let A23Co = -((A11 * A32) - (A31 * A12));

    let A31Co = ((A12 * A23) - (A22 * A13));
    let A32Co = -((A11 * A23) - (A21 * A13));
    let A33Co = ((A11 * A22) - (A21 * A12));

    // Output of the coefficient

    document.getElementById('A11R').innerHTML = `${A11Co}`
    document.getElementById('A12R').innerHTML = `${A12Co}`
    document.getElementById('A13R').innerHTML = `${A13Co}`

    document.getElementById('A21R').innerHTML = `${A21Co}`
    document.getElementById('A22R').innerHTML = `${A22Co}`
    document.getElementById('A23R').innerHTML = `${A23Co}`

    document.getElementById('A31R').innerHTML = `${A31Co}`
    document.getElementById('A32R').innerHTML = `${A32Co}`
    document.getElementById('A33R').innerHTML = `${A33Co}`



}
//*****************Adjugate Funtion *****************
function AdMat() {
    document.getElementById('btnA').style.display = 'inline-block';
    document.getElementById('clr').style.display = 'inline-block';
    document.getElementById('onStart').style.display = 'none';

    document.getElementById('L03').style.background = 'black'
    document.getElementById('L03').style.borderRadius = '25px';
    document.body.style.background = 'linear-gradient(to right,rgb(127 196 148), rgb(230, 239, 241))';
    document.getElementById('name').innerHTML = `[Adjugate]`

    document.getElementById('btnD').style.display = 'none';
    document.getElementById('btnC').style.display = 'none';
    document.getElementById('btnI').style.display = 'none';

    document.getElementById('L01').style.background = 'initial'
    document.getElementById('L02').style.background = 'initial'
    document.getElementById('L04').style.background = 'initial'
}

function resA() {

    document.getElementById('output').style.border = "2px solid red"


    // get the user input
    let A11 = document.getElementById('A11').value;
    let A12 = document.getElementById('A12').value;
    let A13 = document.getElementById('A13').value;
    let A21 = document.getElementById('A21').value;
    let A22 = document.getElementById('A22').value;
    let A23 = document.getElementById('A23').value;
    let A31 = document.getElementById('A31').value;
    let A32 = document.getElementById('A32').value;
    let A33 = document.getElementById('A33').value;



    // Coefficient value calculate
    let A11Co = ((A22 * A33) - (A32 * A23));
    let A12Co = -((A21 * A33) - (A31 * A23));
    let A13Co = ((A21 * A32) - (A31 * A22));

    let A21Co = -((A12 * A33) - (A32 * A13));
    let A22Co = ((A11 * A33) - (A31 * A13));
    let A23Co = -((A11 * A32) - (A31 * A12));

    let A31Co = ((A12 * A23) - (A22 * A13));
    let A32Co = -((A11 * A23) - (A21 * A13));
    let A33Co = ((A11 * A22) - (A21 * A12));


    // Output of the Adjugate
    document.getElementById('A11R').innerHTML = `${A11Co}`
    document.getElementById('A12R').innerHTML = `${A21Co}`
    document.getElementById('A13R').innerHTML = `${A31Co}`

    document.getElementById('A21R').innerHTML = `${A12Co}`
    document.getElementById('A22R').innerHTML = `${A22Co}`
    document.getElementById('A23R').innerHTML = `${A32Co}`

    document.getElementById('A31R').innerHTML = `${A13Co}`
    document.getElementById('A32R').innerHTML = `${A23Co}`
    document.getElementById('A33R').innerHTML = `${A33Co}`

}
//*****************Inverse Function *****************
function InMat() {
    document.getElementById('btnI').style.display = 'inline-block';
    document.getElementById('clr').style.display = 'inline-block';
    document.getElementById('onStart').style.display = 'none';

    document.getElementById('L04').style.background = 'black'
    document.getElementById('L04').style.borderRadius = '25px';
    document.body.style.background = 'linear-gradient(to right, #e1dada, #74bece)'
    document.getElementById('name').innerHTML = `[Inverse]`

    document.getElementById('btnD').style.display = 'none';
    document.getElementById('btnC').style.display = 'none';
    document.getElementById('btnA').style.display = 'none';

    document.getElementById('L01').style.background = 'initial'
    document.getElementById('L02').style.background = 'initial'
    document.getElementById('L03').style.background = 'initial'

}

function resI() {

    document.getElementById('output').style.border = "2px solid red"


    // get the user input
    let A11 = document.getElementById('A11').value;
    let A12 = document.getElementById('A12').value;
    let A13 = document.getElementById('A13').value;
    let A21 = document.getElementById('A21').value;
    let A22 = document.getElementById('A22').value;
    let A23 = document.getElementById('A23').value;
    let A31 = document.getElementById('A31').value;
    let A32 = document.getElementById('A32').value;
    let A33 = document.getElementById('A33').value;



    // Coefficient value calculate
    let A11Co = ((A22 * A33) - (A32 * A23));
    let A12Co = -((A21 * A33) - (A31 * A23));
    let A13Co = ((A21 * A32) - (A31 * A22));

    let A21Co = -((A12 * A33) - (A32 * A13));
    let A22Co = ((A11 * A33) - (A31 * A13));
    let A23Co = -((A11 * A32) - (A31 * A12));

    let A31Co = ((A12 * A23) - (A22 * A13));
    let A32Co = -((A11 * A23) - (A21 * A13));
    let A33Co = ((A11 * A22) - (A21 * A12));


    // Output of the Adjugate
    document.getElementById('A11R').innerHTML = `${A11Co}`
    document.getElementById('A12R').innerHTML = `${A21Co}`
    document.getElementById('A13R').innerHTML = `${A31Co}`

    document.getElementById('A21R').innerHTML = `${A12Co}`
    document.getElementById('A22R').innerHTML = `${A22Co}`
    document.getElementById('A23R').innerHTML = `${A32Co}`

    document.getElementById('A31R').innerHTML = `${A13Co}`
    document.getElementById('A32R').innerHTML = `${A23Co}`
    document.getElementById('A33R').innerHTML = `${A33Co}`

    //get the determinant 
    Adet = (A11 * ((A22 * A33) - (A32 * A23))) - (A12 * ((A21 * A33) - (A31 * A23))) + (A13 * ((A21 * A32) - (A31 * A22)));

    document.getElementById('outSpan').style.display = 'Block'
    document.getElementById('outSpan').innerHTML = `1/${Adet}`


}



// For pin system
function promptMe() {
    let code = prompt("Please Enter Your Pin");

    const pin = 54672;
    if (code == pin) {
        document.body.oncontextmenu = "return true";


    } else {
        // location.reload();
        alert('Your pin is incorrect')

    }
}


//locking the keys
document.onkeydown = function(e) {
    if (event.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}