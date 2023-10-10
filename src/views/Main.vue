<template>
  <body>
    <section class="container">
  

      <header>Coming Soon Page</header>
      <p>
        Our website is under construction. We're working hard to improve our
        website and we'll ready to launch after.
      </p>
      <div class="time-content">
        <div class="time days">
          <span class="number"></span>
          <span class="text">days</span>
        </div>
        <div class="time hours">
          <span class="number"></span>
          <span class="text">hours</span>
        </div>
        <div class="time minutes">
          <span class="number"></span>
          <span class="text">minutes</span>
        </div>
        <div class="time seconds">
          <span class="number"></span>
          <span class="text">seconds</span>
        </div>
      </div>

      <div class="email-content">
        <p>Subscribe now to get the latest updates!</p>

        <div class="input-box">
          <input type="email" placeholder="Enter your email" />
       <button>Notify Me</button> 
        </div>
      </div>
    </section>

  
  </body>
      
        </template>
        <style>
        @import '../assets/css/style1.css';
  
        </style>
              <script> 
  
              export default {
      
              name: "main",
      
              mounted() {
      
              this.loadScripts();
      
              },
      
              methods: {
      
              loadScripts() {
      
              const scriptUrls = [
      
              '../js/script1.js',
      
              ];
      
              const head = document.getElementsByTagName('head')[0];
      
              scriptUrls.forEach((scriptUrl) => {
      
              const script = document.createElement('script');
      
              script.src = scriptUrl;
      
              script.async = true;
      
              head.appendChild(script);
      
              });
      
              },
      
              },
      
              };
      
              </script>
  
  
              