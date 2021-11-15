const bill = document.getElementById('bill');
const tipBtn = document.querySelectorAll('.tip');
const tipCustom = document.getElementById('tip');
const people = document.getElementById('people');


bill.addEventListener('input', setBillValue);
tipBtn.forEach(btn => {
    btn.addEventListener('click', handleClick);
});
tipCustom.addEventListener('input', setTipCustomValue);
people.addEventListener('input', setPeopleValue);

let billValue = 0.0;
let tipValue = 0.15;

function validateFloat(s) {
    var rgx = /^[0-9]*\.?[0-9]*$/;
    return s.match(rgx);
}

function validateInt(s) {
    var rgx = /^[0-9]*$/;
    return s.match(rgx);
}

function setBillValue() {
    if (bill.value.includes(',')) {
        bill.value = bill.value.replace(',', '.');
    }

    if (!validateFloat(bill.value)) {
        bill.value = bill.value.substring(0, bill.value.length - 1);
    }

    billValue = parseFloat(bill.value);
    console.log(billValue);

}

function handleClick(event) {
    tipBtn.forEach(btn => {
        btn.classList.remove('btn-active');

        if (event.target.innerHTML == btn.innerHTML) {
            btn.classList.add('btn-active');
            tipValue = parseFloat(btn.innerHTML) / 100;
        }
    });

    tipCustom.value = '';
}

function setTipCustomValue() {
    if (validateInt(tipCustom.value)) {
        tipCustom.value = tipCustom.value.substring(0, tipCustom.value.length - 1);
    }

    tipValue = parseFloat(tipCustom.value / 100);

    tipBtn.forEach(btn => {
        btn.classList.remove('btn-active');
    });
}

// console.log(tipBtn);