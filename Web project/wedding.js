

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const errorElement = document.getElementById('error-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const service = document.getElementById('wedding-type').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        // Validation
        if (!service || service === "") {
            showError("Please select a service type");
            return;
        }

        if (!date) {
            showError("Please select a date");
            return;
        }

        if (!time) {
            showError("Please select a time");
            return;
        }

        // If validation passes
        hideError();
        showSuccessModal(service, date, time);
        form.reset();
    });

    function showError(message) {
        errorElement.textContent = message;
        errorElement.classList.remove('hidden');
        errorElement.classList.add('block');
    }

    function hideError() {
        errorElement.classList.remove('block');
        errorElement.classList.add('hidden');
    }

    function showSuccessModal(service, date, time) {
        const formattedDate = new Date(date).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        const modalHTML = `
            <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div class="bg-white p-8 rounded-xl max-w-md w-full mx-4">
                    <div class="text-center mb-6">
                        <i class="fas fa-check-circle text-5xl text-green-500 mb-4"></i>
                        <h3 class="text-2xl font-bold text-gray-800 mb-2">Booking Confirmed!</h3>
                        <p class="text-gray-600">We're excited to be part of your special day!</p>
                    </div>
                    <div class="bg-gray-50 p-4 rounded-lg mb-6">
                        <p class="font-semibold"><i class="fas fa-glass-cheers text-red-500 mr-2"></i> ${formatServiceName(service)}</p>
                        <p class="mt-2"><i class="far fa-calendar-alt text-red-500 mr-2"></i> ${formattedDate}</p>
                        <p class="mt-2"><i class="far fa-clock text-red-500 mr-2"></i> ${formatTime(time)}</p>
                    </div>
                    <button onclick="closeModal()" class="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition duration-300">
                        Close <i class="fas fa-times ml-2"></i>
                    </button>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    function formatServiceName(service) {
        const serviceNames = {
            'reception': 'Wedding Reception',
            'ceremony': 'Marriage Ceremony',
            'photo': 'Photo Session'
        };
        return serviceNames[service] || service;
    }

    function formatTime(time) {
        const [hours, minutes] = time.split(':');
        const period = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;
        return `${formattedHours}:${minutes} ${period}`;
    }
});

function closeModal() {
    const modal = document.querySelector('.fixed.inset-0');
    if (modal) {
        modal.remove();
    }
}