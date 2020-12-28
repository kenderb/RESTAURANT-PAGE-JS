
const contactContent = () => {
  const container = document.getElementById('container');
  const div = document.createElement('div');
  const section = document.createElement('section');
  section.id = 'contact';
  div.classList.add('contentInfo');
  div.id = 'contactFrame';
  const textArt = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                    cillum dolore eu fugiat nulla pariatur. 
                    `;

  const Text = document.createTextNode(textArt);
  const h1 = document.createElement('h1');
  const h1Text = document.createTextNode('Call us');
  const p = document.createElement('p');
  const map = document.createElement('iframe');
  map.id = 'map';
  map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.102462114365!2d-75.52513428466692!3d10.413436468634924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef625868dfd3993%3A0x9b029afef4c9190a!2sBazurto!5e0!3m2!1sen!2sco!4v1598354210839!5m2!1sen!2sco';

  p.appendChild(Text);
  h1.appendChild(h1Text);
  section.appendChild(h1);
  section.appendChild(p);
  div.appendChild(section);
  div.appendChild(map);
  container.appendChild(div);

  const content = document.querySelectorAll('.contentInfo');
  content[4].style.display = 'none';
  return div;
};
export default contactContent;