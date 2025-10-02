document.addEventListener('DOMContentLoaded', () => {

    // ====================================
    // 1. VARIÁVEIS DO MODAL E TEMA
    // ====================================

    const modal = document.getElementById('modal-auth');
    const btnLogin = document.getElementById('btn-login');
    const btnCadastro = document.getElementById('btn-cadastro');
    const btnFechar = document.querySelector('.modal__fechar');
    const formLogin = document.getElementById('form-login');
    const formCadastro = document.getElementById('form-cadastro');
    const linkMudarLogin = document.getElementById('link-mudar-login');
    const linkMudarCadastro = document.getElementById('link-mudar-cadastro');
    const modalTitulo = document.getElementById('modal-titulo');

    const body = document.body;
    const btnDarkMode = document.querySelector('.utilitario__botao');
    const darkThemeClass = 'dark-mode';
    const logoTechfit = document.getElementById('logo-techfit'); 

    // ====================================
    // 2. FUNÇÕES DO DARK MODE E TROCA DE LOGO
    // ====================================

    const updateLogo = (isDark) => {
        // Usa a logo escura (original) no modo escuro
        if (isDark) {
            logoTechfit.src = 'logo-techfit-dark.png';
        } 
        // Usa a logo clara (robô) no modo claro
        else {
            logoTechfit.src = 'logo-techfit-light.png';
        }
    };

    const loadTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        const isDark = savedTheme === 'dark';
        
        if (isDark) {
            body.classList.add(darkThemeClass);
        } else {
            body.classList.remove(darkThemeClass);
        }

        updateLogo(isDark);
        btnDarkMode.innerHTML = isDark ? '☀️ Claro' : '🌙 Escuro';
    };

    const toggleTheme = () => {
        body.classList.toggle(darkThemeClass);
        
        const isDark = body.classList.contains(darkThemeClass);
        const currentTheme = isDark ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
        
        updateLogo(isDark);
        btnDarkMode.innerHTML = isDark ? '☀️ Claro' : '🌙 Escuro';
    };

    // ====================================
    // 3. FUNÇÕES E EVENTOS DO MODAL
    // ====================================

    const abrirModal = (tipo) => {
        if (tipo === 'login') {
            formLogin.style.display = 'flex';
            formCadastro.style.display = 'none';
            modalTitulo.textContent = 'Acesse sua Conta';
        } else {
            formLogin.style.display = 'none';
            formCadastro.style.display = 'flex';
            modalTitulo.textContent = 'Crie sua Conta';
        }
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    };

    const fecharModal = () => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    };

    // Eventos de clique para o modal
    btnLogin.addEventListener('click', (e) => {
        e.preventDefault();
        abrirModal('login');
    });

    btnCadastro.addEventListener('click', (e) => {
        e.preventDefault();
        abrirModal('cadastro');
    });

    btnFechar.addEventListener('click', fecharModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            fecharModal();
        }
    });

    linkMudarCadastro.addEventListener('click', (e) => {
        e.preventDefault();
        abrirModal('cadastro');
    });

    linkMudarLogin.addEventListener('click', (e) => {
        e.preventDefault();
        abrirModal('login');
    });
    
    btnDarkMode.addEventListener('click', toggleTheme);
    loadTheme();
});