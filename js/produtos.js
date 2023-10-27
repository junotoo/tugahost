
        const ramSelect = document.getElementById('ram');
        const vcpuSelect = document.getElementById('vcpu');
        const priceResult = document.getElementById('price-result');
        const calculatedPrice = document.getElementById('calculated-price');
        calculatedPrice.textContent = '2.5 - 100'; // Replace with your price range
        ramSelect.addEventListener('change', updatePrice);
        vcpuSelect.addEventListener('change', updatePrice);

        // Function to update the displayed price
        function updatePrice() {
            const selectedRam = parseFloat(ramSelect.value);
            const selectedVcpu = parseFloat(vcpuSelect.value);

            if (!isNaN(selectedRam) && !isNaN(selectedVcpu)) {
                const price = calculatePrice(selectedRam, selectedVcpu);
                calculatedPrice.textContent = price;
            }
        }

        function calculatePrice(ram, vcpu) {
            const ramPrice = ram * 2; // Replace with your RAM price per GB
            const vcpuPrice = vcpu * 2; // Replace with your vCPU price
            return `${ramPrice + vcpuPrice}`; // Adjust the formatting as needed
        }
