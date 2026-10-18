// Mobile Menu Toggle
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

mobileBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('fa-bars', isHidden);
    menuIcon.classList.toggle('fa-xmark', !isHidden);
    mobileBtn.setAttribute('aria-expanded', String(!isHidden));
});

// Navbar blur enhancement on scroll
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        header.classList.add('bg-brand-dark/90', 'shadow-xl', 'shadow-black/50');
        header.classList.remove('bg-brand-dark/70');
    } else {
        header.classList.add('bg-brand-dark/70');
        header.classList.remove('bg-brand-dark/90', 'shadow-xl', 'shadow-black/50');
    }
});

// Copy Discord Invite with Toast Notification
function copyDiscordInvite() {
    const discordLink = "https://discord.com/invite/6eb7ABY";
    navigator.clipboard.writeText(discordLink).then(() => {
        showToast("Lien copié !", "L'invitation Discord a été copiée dans votre presse-papier.");
    }).catch(() => {
        showToast("Discord GETI", "Rejoignez-nous directement sur discord.com/invite/6eb7ABY");
    });
}

// Show Toast function
function showToast(title, message) {
    const toast = document.getElementById('toast');
    const titleElem = document.getElementById('toast-title');
    const msgElem = document.getElementById('toast-message');

    titleElem.textContent = title;
    msgElem.textContent = message;

    toast.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('translate-y-24', 'opacity-0', 'pointer-events-none');
    }, 3500);
}
