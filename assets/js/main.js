includeLanguagePartHTML()

function init() {
    /*==================== SHOW MENU ====================*/
    const showMenu = (toggleId, navId) =>{
        const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
        
        // Validate that variables exist
        if(toggle && nav){
            toggle.addEventListener('click', ()=>{
                // We add the show-menu class to the div tag with the nav__menu class
                nav.classList.toggle('show-menu')
            })
        }
    }
    showMenu('nav-toggle','nav-menu')

    /*==================== REMOVE MENU MOBILE ====================*/
    const navLink = document.querySelectorAll('.nav__link')

    function linkAction(){
        const navMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
        navMenu.classList.remove('show-menu')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))


    /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
    const sections = document.querySelectorAll('section[id]')

    function scrollActive(){
        const scrollY = window.pageYOffset

        sections.forEach(current =>{
            const sectionHeight = current.offsetHeight
            const sectionTop = current.offsetTop - 50;
            sectionId = current.getAttribute('id')

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
            }else{
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
            }
        })
    }
    window.addEventListener('scroll', scrollActive)


    /*==================== SHOW SCROLL TOP ====================*/ 
    function scrollTop(){
        const scrollTop = document.getElementById('scroll-top');
        // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
        if(this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollTop)

    /*==================== DARK LIGHT THEME ====================*/ 
    const themeButton = document.getElementById('theme-button')
    const darkTheme = 'dark-theme'
    const iconTheme = 'bx-sun'

    // Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')

    // We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

    // We validate if the user previously chose a topic
    if (selectedTheme) {
      // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
      themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
    }

    // Activate / deactivate the theme manually with the button
    themeButton.addEventListener('click', () => {
        // Add or remove the dark / icon theme
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)
        // We save the theme and the current icon that the user chose
        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
    })

    /*==================== CHANGING LANGUAGE ====================*/ 
    const languageButton = document.getElementById('language-button')
    const ruLang = 'ru-lang'

    // Previously selected topic (if user selected)
    const selectedLang = localStorage.getItem('selected-lang')

    // We validate if the user previously chose a topic
    if (selectedLang) {
      // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated correct language
      document.body.classList[selectedLang === 'ru' ? 'add' : 'remove'](ruLang)
    }

    // We obtain the current theme that the interface has by validating the en-lang class
    const getCurrentLang = () => document.body.classList.contains(ruLang) ? 'ru' : 'en'

    languageButton.textContent = getCurrentLang().toUpperCase()

    // Activate / deactivate the changing language button manually
    languageButton.addEventListener('click', () => {
        // Add or remove the ru language
        document.body.classList.toggle(ruLang)
        languageButton.textContent = getCurrentLang().toUpperCase()
        // We save the language that the user choose
        localStorage.setItem('selected-lang', getCurrentLang())
        // Load correct language page
        location.reload()
    })

    document.getElementById('download-button').addEventListener('click', download)
}

function includeLanguagePartHTML() {
    let curLang = localStorage.getItem('selected-lang')
    if (!curLang) {
        curLang = 'en'
    }

    body = document.getElementById('body')
    langFile = curLang + '.html'

    xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
            body.innerHTML = this.responseText + body.innerHTML;
            init();
        }
        }
      }
      xmlHttp.open("GET", langFile, true);
      xmlHttp.send();
      return;
}

/*==================== FUNCTION FOR DOWNLOAD BUTTON ====================*/ 
function download(){
    let cv = document.getElementById('body');
    let opt = {
      margin:       1,
      filename:     'CV_Mikhail_Meshcheriakov.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      enableLinks:  true,
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    let worker = html2pdf().set(opt).from(cv).save();
}

/*==================== REDUCE THE SIZE AND PRINT ON AN A4 SHEET ====================*/ 


/*==================== REMOVE THE SIZE WHEN THE CV IS DOWNLOADED ====================*/ 


/*==================== GENERATE PDF ====================*/ 
// PDF generated area


// Html2pdf options


// Function to call areaCv and Html2Pdf options 


// When the button is clicked, it executes the three functions

    // 1. The class .scale-cv is added to the body, where it reduces the size of the elements


    // 2. The PDF is generated


    // 3. The .scale-cv class is removed from the body after 5 seconds to return to normal size.
