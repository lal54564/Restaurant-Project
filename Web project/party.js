document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const type = document.getElementById('party-type').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    
    if (!date || !time) {
        showToast('Please fill all fields', 'red-600');
        return;
    }

    const typeNames = {
        'birthday': 'Birthday Party',
        'dj-night': 'DJ Night',
        'pool': 'Pool Party',
        'theme': 'Theme Party'
    };
    
    showToast(`Booking confirmed! ${typeNames[type]} on ${date} at ${time}`);
});

function showToast(message, bgColor = 'green-600') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `fixed bottom-5 right-5 bg-${bgColor} text-white px-6 py-3 rounded-lg shadow-lg`;
    toast.classList.remove('hidden');
    
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

// Add input validation styling
document.querySelectorAll('input, select').forEach(input => {
    input.addEventListener('invalid', () => {
        input.classList.add('border-red-500');
    });
    input.addEventListener('input', () => {
        if (input.checkValidity()) {
            input.classList.remove('border-red-500');
        }
    });
});