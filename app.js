const banner=document.getElementById('cookieBanner');const accept=document.getElementById('accept');const reject=document.getElementById('reject');const settings=document.getElementById('cookieSettings');
function setConsent(v){localStorage.setItem('baba_cookie_consent',v);if(banner)banner.style.display='none'}
if(localStorage.getItem('baba_cookie_consent')) banner.style.display='none';
accept?.addEventListener('click',()=>setConsent('accepted'));
reject?.addEventListener('click',()=>setConsent('rejected'));
settings?.addEventListener('click',()=>{if(banner)banner.style.display='flex'});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const el=document.querySelector(a.getAttribute('href'));if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'})}}));
