const links = [
    { 
        title: 'Tiktok', 
        subtitle: 'Tiktok gw nih', 
        icon: 'fa-brands fa-tiktok', 
        url: 'https://tiktok.com/@depstore_11' 
    },
    { 
        title: 'Telegram', 
        subtitle: 'Telegram Channel', 
        icon: 'fa-brands fa-telegram', 
        url: 'https://t.me/depstore11' 
    },
    { 
        title: 'Whatsapp utama', 
        subtitle: 'Jan chat no ini', 
        icon: 'fa-brands fa-whatsapp', 
        url: 'https://wa.me/628113095566' 
    },
    { 
        title: 'Whatsapp', 
        subtitle: 'WhatsApp Personal', 
        icon: 'fa-brands fa-whatsapp', 
        url: 'https://wa.me/6288242449961' 
    }
];

const container = document.getElementById('links-list');

links.forEach((link, index) => {
    const item = document.createElement('a');
    item.href = link.url;
    item.className = 'social-link';
    item.target = '_blank';
    
    // Staggered animation delay
    item.style.animation = `fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards`;
    item.style.animationDelay = `${0.2 + (index * 0.1)}s`;
    
    item.innerHTML = `
        <div class="icon-box">
            <i class="${link.icon}"></i>
        </div>
        <div class="link-info">
            <span class="title">${link.title}</span>
            <span class="subtitle">${link.subtitle}</span>
        </div>
        <svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
    `;
    container.appendChild(item);
});
