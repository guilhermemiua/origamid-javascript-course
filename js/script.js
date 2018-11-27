// Navigation tab 
function initNavigationTab() {
  // Selecting tab menu
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  // Selecting tab content
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  // Verifies if does exist
  if (tabMenu.length && tabContent.length) {
    // Adding active to the first element 
    tabContent[0].classList.add('active');

    // Add active to element clicked
    function activeTab(index) {
      // Removing active from all elements
      tabContent.forEach((item) => {
        item.classList.remove('active');
      });
      // Adding active to element clicked
      tabContent[index].classList.add('active');
    }

    // Adding event listener to every tab menu
    tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => {
        activeTab(index)
      });
    });
  }
}

// Accordion list for the FAQ section
function initAccordionList() {
  // Selecting questions
  const questions = document.querySelectorAll('.accordion-list dt');
  // Selecting answers
  const answers = document.querySelectorAll('.accordion-list dd');

  // Add active to clicked question
  function activeQuestion() {
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
  }

  // Adding event listener to every question
  questions.forEach((item) => {
    item.addEventListener('click', activeQuestion);
  });
}

// Smooth scrolling
function initSmoothScrolling() {
  // Selecting links
  const links = document.querySelectorAll('.js-menu a[href^="#"]');

  // Scroll to section
  function scrollToSection(e) {
    e.preventDefault();
    // Selecting section equal to event
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    // form 1
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // form 2
    /*
    const top = section.offsetTop;
    window.scrollTo({
      top: top,
      behavior: 'smooth',
    });
    */
  }

  // Adding event listener to every link
  links.forEach((item) => {
    item.addEventListener('click', scrollToSection);
  });
}

// Scroll animation
function initScrollAnimation() {
  // Selecting sections
  const sections = document.querySelectorAll('.js-scroll');

  // Verifies if does exist
  if(sections.length) {
    // Calculates the middle of the window
    const middle = window.innerHeight * 0.6;

    // Function scroll
    function scroll() {
      sections.forEach((item) => {
        const sectionTop = item.getBoundingClientRect().top;
        // Visibility = (current section - middle of the window) < 0
        const isSectionVisible = (sectionTop - middle) < 0;
        
        // Verifies if is visible to the user, if yes add the class, else remove
        if (isSectionVisible) {
          item.classList.add('active');
        }
        else {
          item.classList.remove('active');
        }
      });
    }

    // When the screen is loaded, do the scroll animation once
    scroll();
    window.addEventListener('scroll', scroll);
  }
}

// Init functions
initNavigationTab();
initAccordionList();
initSmoothScrolling();
initScrollAnimation();