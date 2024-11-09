// Script para animações de progresso (exemplo básico)
window.onload = function() {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        let width = bar.style.width;
        bar.style.transition = 'width 2s ease';
    });
};
