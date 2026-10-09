/**
 * RESTAURANT AL KOUFIA - SCRIPT D'INTERACTION & MENU COMPLET
 */

// Données exhaustives du menu transmises par le restaurant
const menuData = {
  'entrees-froides': {
    heading: 'Entrées froides',
    items: [
      { fr: "Sauce à l'ail", ar: "ثومية", price: "4.000 DT" },
      { fr: "Houmous", ar: "حمص", price: "5.000 DT" },
      { fr: "Salade Fatouch", ar: "سلطة فتوش", price: "5.000 DT" },
      { fr: "Salade Kol slou", ar: "سلطة كول سلو", price: "5.000 DT" },
      { fr: "Moutabal d'aubergine", ar: "متبل باذنجان", price: "6.000 DT" },
      { fr: "Baba Ghanouj", ar: "بابا غنوج", price: "6.000 DT" }
    ],
    image: 'assets/dish-entrees-froides.webp',
    imageHd: 'assets/dish-entrees-froides.webp'
  },
  'entrees-chaudes': {
    heading: 'Entrées chaudes',
    items: [
      { fr: "Falafel", ar: "فلافل", price: "1.500 DT" },
      { fr: "Sambousek au fromage", ar: "سمبوسك جبنة", price: "2.000 DT" },
      { fr: "Sambousek au bœuf", ar: "سمبوسك لحمة", price: "3.000 DT" },
      { fr: "Soupe de lentilles", ar: "شوربة عدس", price: "4.000 DT" },
      { fr: "Kebbe", ar: "كبة", price: "4.000 DT" },
      { fr: "Arayes au fromage", ar: "عرايس جبنة", price: "8.000 DT" },
      { fr: "Arayes au bœuf", ar: "عرايس لحمة", price: "10.000 DT" }
    ],
    image: 'assets/dish-entrees-chaudes.webp',
    imageHd: 'assets/dish-entrees-chaudes.webp'
  },
  'sandwich': {
    heading: 'Sandwich',
    items: [
      { fr: "Omlette", ar: "أملات", price: "4.500 DT" },
      { fr: "Falafel", ar: "فلافل", price: "5.000 DT" },
      { fr: "Omlette peperoni", ar: "أملات باباروني", price: "5.500 DT" },
      { fr: "Omlette jambon", ar: "أملات جمبون", price: "6.000 DT" },
      { fr: "Omlette Thon", ar: "أملات تن", price: "6.500 DT" },
      { fr: "Merguez", ar: "مرقاز", price: "7.000 DT" },
      { fr: "Chawarma", ar: "شاورما", price: "9.000 DT" },
      { fr: "Kabeb poulet", ar: "كباب دجاج", price: "9.000 DT" },
      { fr: "Crespy", ar: "كرسبي", price: "9.000 DT" },
      { fr: "Chich Taouk", ar: "شيش طاووق", price: "9.000 DT" },
      { fr: "Viande hachée", ar: "كباب لحم", price: "11.000 DT" }
    ],
    image: 'assets/dish-sandwiches.webp',
    imageHd: 'assets/dish-sandwiches.webp'
  },
  'makloub': {
    heading: 'Makloub',
    items: [
      { fr: "Thon", ar: "تن", price: "10.000 DT" },
      { fr: "Poulet grillé", ar: "دجاج مشوي", price: "12.000 DT" },
      { fr: "Poulet pané", ar: "دجاج مبطن", price: "12.000 DT" },
      { fr: "Crespy", ar: "كرسبي", price: "12.000 DT" },
      { fr: "Viande hachée", ar: "لحم مفروم", price: "13.000 DT" },
      { fr: "Kebda", ar: "كبدة", price: "15.000 DT" }
    ],
    image: 'assets/dish-makloub.webp',
    imageHd: 'assets/dish-makloub.webp'
  },
  'baguette-farcie': {
    heading: 'Baguette farcie',
    items: [
      { fr: "Thon", ar: "تن", price: "10.000 DT" },
      { fr: "Poulet grillé", ar: "دجاج مشوي", price: "12.000 DT" },
      { fr: "Poulet pané", ar: "دجاج مبطن", price: "12.000 DT" },
      { fr: "Viande hachée", ar: "لحم مفروم", price: "13.000 DT" },
      { fr: "Kebda", ar: "كبدة", price: "15.000 DT" }
    ],
    image: 'assets/dish-baguette-farcie.webp',
    imageHd: 'assets/dish-baguette-farcie.webp'
  },
  'tacos': {
    heading: 'Tacos',
    items: [
      { fr: "Thon", ar: "تن", price: "8.000 DT" },
      { fr: "Poulet grillé", ar: "دجاج مشوي", price: "9.000 DT" },
      { fr: "Poulet pané", ar: "دجاج مبطن", price: "9.000 DT" },
      { fr: "Crespy", ar: "كرسبي", price: "10.000 DT" },
      { fr: "Viande hachée", ar: "لحم مفروم", price: "10.000 DT" }
    ],
    image: 'assets/dish-tacos.webp',
    imageHd: 'assets/dish-tacos.webp'
  },
  'burger': {
    heading: 'Burger',
    items: [
      { fr: "Crespy", ar: "كرسبي", price: "10.000 DT" },
      { fr: "Double Crespy", ar: "دوبل كرسبي", price: "12.000 DT" },
      { fr: "Classique Bœuf", ar: "لحم مفروم", price: "14.000 DT" },
      { fr: "Double bœuf", ar: "دوبل لحم", price: "16.000 DT" }
    ],
    image: 'assets/dish-burger.webp',
    imageHd: 'assets/dish-burger.webp'
  },
  'karmacha': {
    heading: 'Karmacha Al Koufia',
    items: [
      { fr: "Crispy 8 pièces", ar: "كرسبي 8 قطع", price: "16.000 DT" },
      { fr: "Crispy 13 pièces", ar: "كرسبي 13 قطعة", price: "25.000 DT" },
      { fr: "Crispy 20 pièces", ar: "كرسبي 20 قطعة", price: "35.000 DT" },
      { fr: "Mixte Karmacha Al Koufia", ar: "تشكيلة المقرمشات الكوفية", price: "45.000 DT" }
    ],
    image: 'assets/dish-karmacha.webp',
    imageHd: 'assets/dish-karmacha.webp'
  },
  'plats': {
    heading: 'Nos plats',
    items: [
      { fr: "Falafel", ar: "فلافل", price: "14.000 DT" },
      { fr: "Fahita", ar: "فاهيتا", price: "17.000 DT" },
      { fr: "Kebda", ar: "كبدة", price: "17.000 DT" },
      { fr: "Cordon Bleu", ar: "كوردون بلو", price: "18.000 DT" },
      { fr: "Poulet grillé", ar: "دجاج مشوي", price: "18.000 DT" },
      { fr: "Poulet pané", ar: "دجاج مبطن", price: "18.000 DT" },
      { fr: "Chawarma", ar: "شاورما", price: "20.000 DT" },
      { fr: "Crespy", ar: "كرسبي", price: "20.000 DT" },
      { fr: "Chich Taouk", ar: "شيش طاووق", price: "20.000 DT" },
      { fr: "Msahab", ar: "مسحب", price: "22.000 DT" },
      { fr: "Kabeb poulet", ar: "كباب دجاج", price: "23.000 DT" },
      { fr: "Kabeb Boeuf", ar: "كباب لحم", price: "28.000 DT" },
      { fr: "Maajoukat poulet", ar: "معجوقة دجاج", price: "26.000 DT" },
      { fr: "Maajoukat boeuf", ar: "معجوقة لحم", price: "30.000 DT" },
      { fr: "Demi poulet", ar: "نصف دجاجة", price: "23.000 DT" },
      { fr: "Poulet complet", ar: "دجاجة كاملة", price: "35.000 DT" },
      { fr: "Miscle", ar: "مشكل", price: "40.000 DT" }
    ],
    image: 'assets/dish-plats.webp',
    imageHd: 'assets/dish-plats.webp'
  },
  'foukharet': {
    heading: 'Foukharet Al Koufiya',
    items: [
      { fr: "Poulet", ar: "دجاج", price: "20.000 DT" },
      { fr: "Chawarma", ar: "شاورما", price: "20.000 DT" },
      { fr: "Boeuf", ar: "لحم", price: "25.000 DT" }
    ],
    image: 'assets/dish-foukharet.webp',
    imageHd: 'assets/dish-foukharet.webp'
  }
};

// Préchargement en mémoire de toutes les photos du menu pour zéro délai
function preloadMenuImages() {
  Object.values(menuData).forEach(cat => {
    if (cat.image) {
      const img = new Image();
      img.src = cat.image;
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  preloadMenuImages();
  initTabs();
  initNav();
  initMobileMenu();
});

// Initialisation des onglets du menu
function initTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  const categoryHeading = document.querySelector('.category-heading');
  const menuTable = document.querySelector('.menu-items-table');
  const dishImages = document.querySelectorAll('.featured-dish-img');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      // Centrage fluide de l'onglet actif sur mobile
      if (tab.scrollIntoView) {
        tab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }

      const catKey = tab.dataset.category;
      const data = menuData[catKey] || menuData['entrees-froides'];

      // Mise à jour immédiate du titre
      if (categoryHeading) categoryHeading.textContent = data.heading;
      
      // Mise à jour immédiate de la liste des plats (sans latence ni clignotement)
      if (menuTable) {
        menuTable.innerHTML = data.items.map(item => `
          <div class="menu-row">
            <div class="dish-fr">${item.fr}</div>
            <div class="dish-ar" dir="rtl">${item.ar}</div>
            <div class="dish-price">${item.price}</div>
          </div>
        `).join('');
      }

      // Changement d'image instantané : masquage immédiat de toutes les autres photos et affichage direct de la photo sélectionnée
      let matched = false;
      dishImages.forEach(img => {
        if (img.dataset.category === catKey) {
          img.style.setProperty('display', 'block', 'important');
          img.classList.add('active');
          matched = true;
        } else {
          img.style.setProperty('display', 'none', 'important');
          img.classList.remove('active');
        }
      });

      // Secours si une seule balise img est présente
      if (!matched && dishImages.length === 1 && data.image) {
        dishImages[0].src = data.image;
        if (data.imageHd) {
          dishImages[0].srcset = `${data.imageHd} 2x`;
        }
      }
    });
  });
}

// Menu mobile interactif
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileDrawer');
  if (!toggleBtn || !drawer) return;

  const toggle = () => {
    const isOpen = drawer.classList.toggle('open');
    toggleBtn.classList.toggle('open', isOpen);
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
    drawer.setAttribute('aria-hidden', String(!isOpen));
    if (isOpen) {
      document.body.classList.add('mobile-menu-locked');
    } else {
      document.body.classList.remove('mobile-menu-locked');
    }
  };

  toggleBtn.addEventListener('click', toggle);

  // Fermeture automatique lors du clic sur un lien du drawer
  drawer.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      toggleBtn.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('mobile-menu-locked');
    });
  });

  // Fermeture si clic à l'extérieur
  document.addEventListener('click', (e) => {
    if (drawer.classList.contains('open') && !drawer.contains(e.target) && !toggleBtn.contains(e.target)) {
      drawer.classList.remove('open');
      toggleBtn.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('mobile-menu-locked');
    }
  });
}

// Navigation active sur scroll
function initNav() {
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const sections = document.querySelectorAll('section[id], header[id]');

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        let current = '';
        sections.forEach(section => {
          const sectionTop = section.offsetTop - 120;
          if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
          }
        });

        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${current}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}
