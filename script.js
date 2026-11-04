tailwind.config = {
    theme: {
        extend: {
            colors: {
                'cream': '#FDFCF8',
                'sand': '#F5F2EB',
                'potager-green': '#5C7C45',
                'potager-green-hover': '#4a6337',
                'pumpkin': '#E89A4B',
                'pumpkin-hover': '#d1873e',
                'roselle-red': '#C55A67',
                'dark-brown': '#4A3B32',
                'footer-brown': '#362b24',
            }
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        once: true,
        offset: 100,
        duration: 1000,
        easing: 'ease-out-cubic',
    });
});
