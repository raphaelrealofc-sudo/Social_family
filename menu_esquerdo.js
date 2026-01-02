// 1. Injetar o Estilo (CSS)
const style = document.createElement('style');
style.textContent = `
    .side-menu-icons {
        position: fixed;
        left: 0;
        top: 100px;
        bottom: 0;
        width: 65px; /* Ajustado para bater com o padding do body */
        background: #050505;
        border-right: 1px solid #111;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 0;
        z-index: 9999 !important; /* RFL: Garante que fique na frente de tudo */
    }
    .menu-item {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 15px;
        cursor: pointer;
        font-size: 18px;
        transition: 0.3s;
        border-radius: 10px;
        color: #666; 
    }
    .menu-item:hover { background: #1a1a1a; color: #fff; }
    .menu-item.active { background: #fff; color: #000; }
    .menu-bottom { margin-top: auto; color: #444; }

    /* RFL: REMOVIDO O 'DISPLAY: NONE' QUE ESCONDIA O MENU NO CELULAR */
    @media (max-width: 900px) {
        .side-menu-icons { 
            display: flex; /* Agora ele continua aparecendo */
            top: 60px; /* Mantém abaixo do seu header */
            width: 60px;
        }
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
    if(viewId && typeof showView === 'function') {
        showView(viewId);
    }
    
    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active'));
    element.classList.add('active');
};

document.body.prepend(menuContainer);
