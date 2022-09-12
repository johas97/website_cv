const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const navEmailText = document.querySelector('.footer-eMail')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
})

//Close nav-bar when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

//Copy E-mail to clipboard

setTimeout(async()=>console.log(
     await window.navigator.clipboard.readText()), 3000)

navigator.permissions.query({name: "clipboard-write"}).then((result) => {
    if (result.state === "granted" || result.state === "prompt") {
      /* write to the clipboard now */

      navEmailText.addEventListener('click', () => {
        navigator.clipboard.writeText(navEmailText.innerHTML);
        alert("Copied the e-mail " + navEmailText.innerHTML);
    
    })
    }
  });
//Video som allt baseras på  https://www.youtube.com/watch?v=_xkSvufmjEs&t=5459s
