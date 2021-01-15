console.log('Connected');
/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/
//creating div
let divElem = document.createElement('div');
//grab the container
let container = document.querySelector('.container');
//set class & id to div
divElem.setAttribute('class','editDiv');
divElem.setAttribute('id', 'editDiv');
//set text to div
let val = localStorage.getItem('text');
let text;
if (val == null) {
   text = document.createTextNode('This is a editable content, click to edit it');
}
else {
    text = document.createTextNode(val);
}
divElem.appendChild(text);

container.appendChild(divElem);

//create a function for div on click
divElem.addEventListener('click', function() {
    let noTextarea = document.getElementsByClassName('textarea').length;
    if (noTextarea ==  0) {
        let html = editDiv.innerHTML;
    divElem.innerHTML = `<textarea class="textarea form-control" id="textarea" rows="3">${html}</textarea>`;
    }
    let textarea = document.getElementById('textarea');
    //for textarea
    textarea.addEventListener('blur', function () {
        editDiv.innerHTML = textarea.value;
        localStorage.setItem('text', editDiv.innerHTML);
    })
})

