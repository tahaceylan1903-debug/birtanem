// Arka Planda Kalp ve Kurukafa Yağdırma
function createFloatingElement() {
    const container = document.getElementById('hearts-container');
    if (!container) return;
    
    const el = document.createElement('div');
    el.classList.add('heart');
    
    const icons = ['💖', '💜', '🖤', '💀', '✨', '🌙'];
    el.innerText = icons[Math.floor(Math.random() * icons.length)];
    
    el.style.position = 'fixed';
    el.style.bottom = '-50px';
    el.style.left = Math.random() * 100 + 'vw';
    el.style.animation = 'floatUp ' + (Math.random() * 3 + 5) + 's linear forwards';
    el.style.fontSize = Math.random() * 16 + 14 + 'px';
    el.style.pointerEvents = 'none';
    el.style.zIndex = '1';
    
    container.appendChild(el);
    
    setTimeout(() => {
        el.remove();
    }, 8000);
}

setInterval(createFloatingElement, 300);

// Sayfa Açıldığında Daktilo ile "bebeğim hoşş geldin" Yazısı
document.addEventListener("DOMContentLoaded", function () {
    startWelcomeTypewriter();
    setInterval(createSlowHeart, 400);
});

const welcomeMessage = "bebeğim hoşş geldin 💖✨";
let welcomeIndex = 0;

function startWelcomeTypewriter() {
    const textElement = document.getElementById("typewriter-text");
    if (textElement && welcomeIndex < welcomeMessage.length) {
        textElement.innerHTML += welcomeMessage.charAt(welcomeIndex);
        welcomeIndex++;
        setTimeout(startWelcomeTypewriter, 70); // Yazı hızı
    }
}

// "Kalp Yağdır" Butonu ve Senin Özel Mesajın
function sendLove() {
    // 1. Kalp yağmuru efekti
    for(let i = 0; i < 15; i++) {
        setTimeout(createFloatingElement, i * 40);
    }

    // 2. Tuşa basınca ekranda belirecek olan özel mesajın
    const seninMesajin = "aşkım iyiki seninle tanışmısım o kadar rastgele bir şekilde tanıstık sunucuya geldin konuştuk sonra sen uyuyakalmışsın ben sana yazmıştı dm den uyuyamı kaldın diye uyuya kaldım mıymıyımy yazmıssın tekrar okudukça seviniyorum iyiki senin gibi birini bulmuşum birtanemm 💖✨";
    
    showNotification(seninMesajin);
}

function createSlowHeart() {
    const container = document.getElementById('hearts-container');
    if (!container) return;
    
    const el = document.createElement('div');
    el.classList.add('heart');
    const icons = ['💖', '💜', '✨'];
    el.innerText = icons[Math.floor(Math.random() * icons.length)];
    
    el.style.position = 'fixed';
    el.style.bottom = '-50px';
    el.style.left = Math.random() * 100 + 'vw';
    el.style.animation = 'floatUp ' + (Math.random() * 3 + 5) + 's linear forwards';
    el.style.fontSize = Math.random() * 16 + 14 + 'px';
    el.style.pointerEvents = 'none';
    el.style.zIndex = '1';
    
    container.appendChild(el);
    setTimeout(() => { el.remove(); }, 8000);
}

// Ekranın Üstünde Çıkacak Pop-up Mesaj Kutusu
function showNotification(msg) {
    const oldNotif = document.querySelector('.custom-popup');
    if (oldNotif) oldNotif.remove();

    const notif = document.createElement('div');
    notif.className = 'custom-popup';
    notif.innerText = msg;
    
    notif.style.position = 'fixed';
    notif.style.top = '20px';
    notif.style.left = '50%';
    notif.style.transform = 'translateX(-50%)';
    notif.style.width = '85%';
    notif.style.maxWidth = '380px';
    notif.style.background = 'linear-gradient(135deg, #7c3aed, #db2777)';
    notif.style.color = '#ffffff';
    notif.style.padding = '15px 20px';
    notif.style.borderRadius = '16px';
    notif.style.fontSize = '0.9rem';
    notif.style.lineHeight = '1.4';
    notif.style.textAlign = 'center';
    notif.style.boxShadow = '0 10px 25px rgba(219, 39, 119, 0.6)';
    notif.style.zIndex = '10000';
    notif.style.transition = 'all 0.5s ease';
    
    document.body.appendChild(notif);
    
    setTimeout(() => {
        notif.style.opacity = '0';
        notif.style.top = '-20px';
        setTimeout(() => notif.remove(), 500);
    }, 7000);
}

// 5 Farklı Renk Teması
const themes = [
    { bg: 'linear-gradient(135deg, #18002e, #2a0845, #6b001a, #4a000b)', name: 'Rock-Goth 5/5' },
    { bg: 'linear-gradient(135deg, #0f051d, #291147, #4a1c6d, #12002b)', name: 'Violet Dream 1/5' },
    { bg: 'linear-gradient(135deg, #1a0000, #4d0000, #800000, #1a0000)', name: 'Vicious Red 2/5' },
    { bg: 'linear-gradient(135deg, #03001e, #7303c0, #ec38bc, #7303c0)', name: 'Cyberpunk 3/5' },
    { bg: 'linear-gradient(135deg, #001111, #003322, #005533, #001111)', name: 'Deep Goth 4/5' }
];

let currentTheme = 0;

function changeTheme() {
    currentTheme = (currentTheme + 1) % themes.length;
    document.body.style.background = themes[currentTheme].bg;
    document.body.style.backgroundSize = '200% 200%';
    
    const badge = document.querySelector('#theme-badge span');
    if(badge) {
        badge.innerText = 'Tema: ' + themes[currentTheme].name;
    }
}