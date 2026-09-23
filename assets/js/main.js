const toggle=document.querySelector('.nav-toggle');
const links=document.querySelector('.nav-links');
toggle?.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
links?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');toggle?.setAttribute('aria-expanded','false');}));

const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target);}
}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduceMotion){
  const videoObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
    const video=entry.target;
    if(entry.isIntersecting){video.play().catch(()=>{});}else{video.pause();}
  }),{threshold:.35});
  document.querySelectorAll('.autoplay-video').forEach(video=>videoObserver.observe(video));
}
