const homePage = () => {
  const container = document.getElementById('container');

  const header = document.createElement('header');
  header.classList.add('head');
  header.classList.add('content');

  const logoDiv = document.createElement('div');
  logoDiv.classList.add('item');

  const navBar = document.createElement('nav');
  navBar.classList.add('item');


  const infoDivPhone = document.createElement('div');
  infoDivPhone.classList.add('item');
  infoDivPhone.classList.add('info');
  infoDivPhone.id = 'phone';

  const phoneIcon = document.createElement('img');
  phoneIcon.id = 'phoneIcon';
  phoneIcon.src = '/dist/assets/images/phone.png';

  const infoDivPhoneText = document.createTextNode('01800-857865');
  infoDivPhone.appendChild(phoneIcon);
  infoDivPhone.appendChild(infoDivPhoneText);


  const logoImg = document.createElement('img');
  logoImg.src = '/dist/assets/images/logo.png';
  logoImg.alt = 'logo';
  logoImg.id = 'logo';


  const menuSpan = document.createElement('span');
  menuSpan.classList.add('menu');
  menuSpan.classList.add('hover');
  menuSpan.id = 'menu';

  const historySpan = document.createElement('span');
  historySpan.classList.add('menu');
  historySpan.id = 'history';

  const galerySpan = document.createElement('span');
  galerySpan.classList.add('menu');
  galerySpan.id = 'galery';

  const contactSpan = document.createElement('span');
  contactSpan.classList.add('menu');
  contactSpan.id = 'contact';


  const menuSpanText = document.createTextNode('Menu');
  menuSpan.appendChild(menuSpanText);

  const historySpanText = document.createTextNode('Our history');
  historySpan.appendChild(historySpanText);

  const galerySpanText = document.createTextNode('Galery');
  galerySpan.appendChild(galerySpanText);

  const contactSpanText = document.createTextNode('Contact');
  contactSpan.appendChild(contactSpanText);

  const sectionContent = document.createElement('section');
  sectionContent.classList.add('content');
  sectionContent.classList.add('contentInfo');
  sectionContent.id = 'section1';


  const h1 = document.createElement('h1');
  const textH1 = document.createTextNode('You are especial for us.');
  h1.appendChild(textH1);


  const TextPVar = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                  quis nostrud exercitation ullamco laboris nisi ut aliquip 
                  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                  cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                  mollit anim id est laborum.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                  quis nostrud exercitation ullamco laboris nisi ut aliquip 
                  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                  cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                  mollit anim id est laborum.`;

  const pSection = document.createElement('p');
  const pText = document.createTextNode(TextPVar);
  pSection.appendChild(pText);


  const divMore = document.createElement('div');
  const spanBotton = document.createElement('span');
  spanBotton.classList.add('info');
  const textBotton = document.createTextNode('Read more');
  spanBotton.appendChild(textBotton);
  divMore.appendChild(spanBotton);

  header.appendChild(logoDiv);
  header.appendChild(navBar);
  header.appendChild(infoDivPhone);


  logoDiv.appendChild(logoImg);

  navBar.appendChild(menuSpan);
  navBar.appendChild(historySpan);
  navBar.appendChild(galerySpan);
  navBar.appendChild(contactSpan);

  sectionContent.appendChild(h1);
  sectionContent.appendChild(pSection);
  sectionContent.appendChild(divMore);

  container.appendChild(header);
  container.appendChild(sectionContent);

  logoImg.onclick = () => {
    window.location.reload();
  };


  function outPut() {
    return container;
  }
  return {
    outPut,
  };
};

export default homePage;