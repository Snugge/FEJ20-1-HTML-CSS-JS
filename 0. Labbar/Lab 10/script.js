

// Beräkna volym. Tänker mig att input är i cm
const calcVol = (w, l, h) => {
    let vol = w * l * h;
    console.log(`Volymen är: ${vol}cm3`);
}
calcVol(10, 10, 10);


// Beräkna area på en cirkel
const circleArea = d => {
    let radius = d / 2;
    // avrundar för att inte få ett så långt tal
    let area =  Math.round(Math.PI * radius * radius);
    console.log(`Cirkelns area är: ${area}cm3`);
}
circleArea(10);



// Med Formulär som input och GUI
// ### Volym
const formVolCalculate = document.querySelector('#volCalculator');
const formulaOutputVol = document.querySelector('#outputVol');

const calculateVol = (b, l, h) => {
    let vol = b * l * h;
    return vol;
}


formVolCalculate.addEventListener('submit', (e) => {
    e.preventDefault();
    let inB = document.getElementById('bredd').value;
    let inL = document.getElementById('langd').value;
    let inH = document.getElementById('hojd').value;
    let sum = calculateVol(inB, inL, inH);

    //console.log(sum);
    //console.log(inB, inL, inH);

    if(inB != '' && inL != '' && inH != ''){
        formulaOutputVol.innerHTML = `Volymen är: <b>${sum}cm<sup>3</sup></b>`;
    } else {
        formulaOutputVol.innerHTML = `Du måste fylla i <b>alla fält</b> innan det går att beräkna!`;
    }

})

// ### Area på en cirkel
const formAreaCalculate = document.querySelector('#areaCalculator');
const formulaOutputArea = document.querySelector('#outputArea');

const calculateArea = (d) => {
    let radius = d / 2;
    let area =  Math.round(Math.PI * radius * radius);
    return area;
}

formAreaCalculate.addEventListener('submit', (e) => {
    e.preventDefault();
    let inD = document.getElementById('diameter').value
    let sum = calculateArea(inD);

    if(inD != ''){
        formulaOutputArea.innerHTML = `Arean är: <b>${sum}cm<sup>2</sup></b>`;
    } else {
        formulaOutputArea.innerHTML = `Du måste fylla i <b>alla fält</b> innan det går att beräkna!`;
    }
})