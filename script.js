// script.js - simple interactive features
document.addEventListener('DOMContentLoaded', function(){
  // dynamic greeting
  const greetingEl = document.getElementById('greeting');
  const now = new Date();
  const hour = now.getHours();
  let greeting = 'Have a great day!';
  if(hour < 12) greeting = 'Good morning — grab a coffee!';
  else if(hour < 18) greeting = 'Good afternoon — need a pick-me-up?';
  else greeting = 'Good evening — unwind with a latte.';
  if(greetingEl) greetingEl.textContent = greeting;

  // last updated date
  const lastUpdated = document.getElementById('lastUpdated');
  if(lastUpdated) lastUpdated.textContent = now.toLocaleString();

  // nav toggle (for small screens)
  const toggleButtons = [document.getElementById('navToggle'), document.getElementById('navToggle2'), document.getElementById('navToggle3')];
  const navs = [document.getElementById('mainNav'), document.getElementById('mainNav2'), document.getElementById('mainNav3')];
  toggleButtons.forEach((btn, idx)=>{
    if(!btn) return;
    btn.addEventListener('click', ()=>{
      const nav = navs[idx];
      if(!nav) return;
      nav.classList.toggle('hidden');
    });
  });

  // form validation
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      const feedback = document.getElementById('formFeedback');
      feedback.textContent = '';
      if(name.value.trim().length < 3){ feedback.textContent = 'Please enter your full name (at least 3 characters).'; name.focus(); return; }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!emailPattern.test(email.value)){ feedback.textContent = 'Please provide a valid email address.'; email.focus(); return; }
      if(message.value.trim().length < 10){ feedback.textContent = 'Please enter a short message (at least 10 characters).'; message.focus(); return; }
      feedback.textContent = 'Thank you! Your message has been sent (demo).';
      form.reset();
    });
  }
});
