// 1. Criar e injetar o Estilo (CSS)
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
    }
    .menu-item:hover { background: #1a1a1a; }
    .menu-item.active { background: #fff; color: #000; }
    .menu-bottom { margin-top: auto; color: #444; }

    @media (max-width: 900px) {
        .side-menu-icons { display: none; }
    }
`;
document.head.appendChild(style);

// 2. Criar e injetar o HTML do Menu
const menuContainer = document.createElement('div');
menuContainer.className = 'side-menu-icons';
menuContainer.innerHTML = `
    <div class="menu-item active" onclick="showView('feedView')">🏠</div>
    <div class="menu-item" onclick="showView('chatView')">💬</div>
    <div class="menu-item">🔔</div>
    <div class="menu-item">👤</div>
    <div class="menu-item menu-bottom">⚙️</div>
`;
document.body.prepend(menuContainer);
