let textarea = document.getElementById('text-area');
let buttonleet = document.getElementsByClassName('simple');
let textArea = document.getElementById('text-area-salida'); 
let buttonLeet = document.getElementsByClassName('normal'); 
let buttonLeetSimple = document.getElementsByClassName('advanced');
let result = document.getElementById('result');
let reset = document.getElementById('buttonReset');
let result1 = document.getElementById('result'); 
let reset1 = document.getElementsByClassName('Reset'); 

let text_area_multiple = document.getElementById('leetTextMultiple');
// Funcion para pasar a leet simple

function leetConverterSimple(text) {

    let finalResult = [];

    text.split('').map((letter) => {
       const leetTableLetter = {
           a: "4",
           b: "8",
           e: "3",
           g: "6",
           l: "1",
           o: "0",
           s: "5",
           t: "7",
           z: "2",
       };

       if(leetTableLetter.hasOwnProperty(letter.toLowerCase())) {
           finalResult.push(leetTableLetter[letter.toLowerCase()]);
       } else {
           finalResult.push(letter.toLowerCase())
       }

   })
       return finalResult.join('');;
}

let convert = document.getElementById('button-conversion-multiple');

// Funcion para pasar a leet complejo

@@ -55,22 +81,36 @@ function leetConverter(text) {
        return finalResult.join('');
}

// Funcion para pasar a leet simple

function leetConverterSimple(text) {

     let finalResult = [];

     text.split('').map((letter) => {
function leet_advance(text) {
    let finalResult = [];

    text.split('').map((letter) => {
        const leetTableLetter = {
            a: "4",
            a: "@",
            b: "8",
            c: "<",
            d: "|>",
            e: "3",
            f: "I=",
            g: "6",
            l: "1",
            o: "0",
            h: "]-[",
            i: "1",
            j: "¿",
            k: "|<",
            l: "1_",
            m: "|V|",
            n: "[\]",
            o: "()",
            p: "|°",
            q: "9",
            r: 'I2',
            s: "5",
            t: "7",
            t: "+",
            u: '|_|',
            v: '\\/',
            w: '\\/\\/',
            x: '><',
            y: 'j',
            z: "2",
        };

@@ -81,8 +121,8 @@ function leetConverterSimple(text) {
        }

    })
        return finalResult.join('');;
}
        return finalResult.join('');
});

buttonLeet.addEventListener('click', () => {
    result.value = leetConverter(textArea.value);
@@ -97,20 +137,18 @@ reset.addEventListener('click', () => {
    textArea.value = '';
})

/* segundo sistema de conversion */

let text_area_multiple = document.getElementById('leetTextMultiple'); // 
let multiple_advance = document.getElementById('leet-multiple-advance');
let multiple_simple = document.getElementById('leet-multiple-simple');

convert.addEventListener('click', () => {
    multiple_simple.value = leetConverterSimple(text_area_multiple.value);
    multiple_advance.value = leetConverter(text_area_multiple.value)
})

let reset_all = document.getElementById('button-reset-multiple');
let reset_all = document.getElementById('reset_all');

reset_all.addEventListener('click', () => {
    multiple_simple.value = '';
    multiple_advance.value = '';
    text_area_multiple.value = '';
    multiple_advance.value = '';
    multiple_simple.value = '';
})

let select_options = document.getElementById('select_options');
@@ -131,7 +169,18 @@ button_select.addEventListener('click', () => {
        case 'medium':
            return text_area_select_result.value = leetConverter(text_area_select.value);
            break;
        case 'advance':
            return text_area_select_result.value = leet_advance(text_area_select.value);
            break;
        default:
            alert('selecciona una opcion valida');
            break;

    }
   
})
})

text_area_multiple.addEventListener('keyup', () => {
    multiple_simple.value = leetConverterSimple(text_area_multiple.value);
    multiple_advance.value = leetConverter(text_area_multiple.value)
})