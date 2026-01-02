// menu_esquerdo.js
const menuContainer = document.createElement('div');
menuContainer.className = 'side-menu-icons';

const menuItems = [
    { icon: '🏠', label: 'Feed', view: 'feedView', active: true },
    { icon: '💬', label: 'Chat', view: 'chatView', active: false },
    { icon: '🔔', label: 'Notificações', view: '', active: false },
    { icon: '👤', label: 'Perfil', view: '', active: false },
    { icon: '⚙️', label: 'Config', view: '', active: false, bottom: true }
];

menuContainer.innerHTML = menuItems.map(item => `
    <div class="menu-item ${item.active ? 'active' : ''} ${item.bottom ? 'menu-bottom' : ''}" 
         onclick="navegarSocial('${item.view}', this)" 
         title="${item.label}">
        ${item.icon}
    </div>
`).join('');

// Inserir no corpo da página
document.body.prepend(menuContainer);

// Função de navegação interna do menu
window.navegarSocial = function(viewId, element) {
    if(!viewId) return;
    
    // Chama a função showView que já existe no seu index.html
    if(typeof showView === 'function') {
        showView(viewId);
    }

    // Atualiza visual do ícone ativo
    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active'));
    element.classList.add('active');
};
