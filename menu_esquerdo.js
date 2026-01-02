// menu_esquerdo.js

// 1. Injetar o Estilo (CSS)
const style = document.createElement('style');
style.textContent = `
    .side-menu-icons {
        position: fixed;
        left: 0;
        top: 100px;
        bottom: 0;
        width: 70px;
        background: #050505;
        border-right: 1px solid #111;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 0;
        z-index: 999;
    }
    .menu-item {
        width: 45px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 15px;
        cursor: pointer;
        font-size: 20px;
        transition: 0.3s;
        border-radius: 12px;
        color: #666; /* Cor padrão dos ícones */
    }
    .menu-item:hover { background: #1a1a1a; color: #fff; }
    .menu-item.active { background: #fff; color: #000; }
    .menu-bottom { margin-top: auto; color: #444; }

    @media (max-width: 900px) {
        .side-menu-icons { display: none; }
    }
`;
document.head.appendChild(style);

// 2. Criar o HTML e a Lógica de Clique
const menuContainer = document.createElement('div');
menuContainer.className = 'side-menu-icons';
menuContainer.innerHTML = `
    <div class="menu-item active" onclick="menuNav('feedView', this)">🏠</div>
    <div class="menu-item" onclick="menuNav('chatView', this)">💬</div>
    <div class="menu-item" onclick="menuNav('', this)">🔔</div>
    <div class="menu-item" onclick="menuNav('', this)">👤</div>
    <div class="menu-item menu-bottom" onclick="menuNav('', this)">⚙️</div>
`;

// Função para mudar a aba e destacar o ícone
window.menuNav = function(viewId, element) {
    // Se houver uma viewId (feedView ou chatView), chama a função original do seu HTML
    if(viewId && typeof showView === 'function') {
        showView(viewId);
    }
    
    // Remove 'active' de todos e coloca no clicado
    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active'));
    element.classList.add('active');
};

document.body.prepend(menuContainer);
