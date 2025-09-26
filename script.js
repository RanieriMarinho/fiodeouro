document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const bookingForm = document.getElementById('booking-form');
    const paymentStatus = document.getElementById('payment-status');
    const paymentDetails = document.getElementById('payment-details');

    // 1. Funcionalidade do Menu Hamburger (Mobile)
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // 2. Funcionalidade de Agendamento (Simulação)
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o envio real do formulário

            // Captura os valores do agendamento
            const barbeiro = document.getElementById('barbeiro').options[document.getElementById('barbeiro').selectedIndex].text;
            const servico = document.getElementById('servico').options[document.getElementById('servico').selectedIndex].text;
            const data = document.getElementById('data').value;
            const horario = document.getElementById('horario').value;

            // Simulação de preço baseado no valor entre parênteses do serviço
            const precoMatch = servico.match(/\(R\$\s*(\d+)\)/);
            const preco = precoMatch ? precoMatch[1] : 'Indefinido';

            // Oculta o formulário de agendamento
            bookingForm.style.display = 'none';

            // Atualiza os detalhes e exibe a seção de pagamento
            paymentDetails.innerHTML = `
                <p>Barbeiro: <strong>${barbeiro}</strong></p>
                <p>Serviço: <strong>${servico.split('(')[0].trim()}</strong></p>
                <p>Data: <strong>${data}</strong> às <strong>${horario}</strong></p>
                <p>Valor Total: <strong>R$ ${preco},00</strong></p>
                <p>Prossiga para o pagamento:</p>
            `;
            paymentStatus.style.display = 'block';

            // Rolagem suave para a seção de pagamento
            paymentStatus.scrollIntoView({ behavior: 'smooth' });
        });
    }
});