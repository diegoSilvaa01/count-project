const minusbutton = document.getElementById('minus');
const resetbutton = document.getElementById('reset');
const plusbutton = document.getElementById('plus');
const value = document.getElementById ('value');

const updateresult = () => {
    value.innerHTML = count;
};

let count = 0;

plusbutton.addEventListener ( 'click', () => {
    count += 1;
    updateresult();
});


minusbutton.addEventListener ( 'click', () => {
    if(count > 0) {
        count -= 1;
    };
    updateresult();
});


resetbutton.addEventListener ( 'click', () => {
    count = 0;
    updateresult();
    
});