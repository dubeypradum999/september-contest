// Get the DOM elements
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const counter = document.getElementById('counter');
const clearBtn = document.getElementById('clear');
const errorMsg = document.getElementById('error');

let count = 0;

// Increment the counter
incrementBtn.addEventListener('click', () => {
    count++;
    updateCounter();
    errorMsg.classList.add('hidden');  // Hide error when count is greater than 0
    clearBtn.classList.remove('hidden'); // Show clear button if count > 1
});

// Decrement the counter
decrementBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateCounter();
    } else {
        errorMsg.classList.remove('hidden');  // Show error if trying to decrement below 0
    }
    if (count === 0) {
        clearBtn.classList.add('hidden');  // Hide clear button when count is 0
    }
});

// Clear the counter
clearBtn.addEventListener('click', () => {
    count = 0;
    updateCounter();
    clearBtn.classList.add('hidden');  // Hide clear button when count is reset to 0
});

// Update the counter display
function updateCounter() {
    counter.innerHTML = count;
    if (count === 0) {
        clearBtn.style.display = 'none';
    } else {
        clearBtn.style.display = 'block';
    }
}
