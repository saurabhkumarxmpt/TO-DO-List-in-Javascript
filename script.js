function myfun() {
    // Get the input and result elements from the DOM
    let input = document.getElementById('input');
    let result = document.getElementById('result');

    // Check if the input value is not empty
    if (input.value.trim() !== '') {
        // Create a new list element
        let new_element = document.createElement('li');
        new_element.innerText = input.value;
        
        // Append the new list element to the result element
        result.appendChild(new_element);
        
        // Clear the input value
        input.value = '';

        new_element.onclick=function(){
            new_element.remove()
        }
    } else {
        // Show an alert if the input is empty
        alert("Oops! Please enter a task before adding.");
    }
}
