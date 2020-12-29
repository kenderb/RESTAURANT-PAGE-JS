import foot1 from './images/food_01.jpg';
import foot2 from './images/food_02.jpg';
import foot3 from './images/food_04.jpg';

const menuContent = () => {
  const container = document.getElementById('container');
  const menuContent = document.createElement('div');
  menuContent.classList.add('contentInfo');
  menuContent.classList.add('foodMenu');
  const createImage = (rute) => {
    const image = document.createElement('img');
    image.src = rute;
    image.classList.add('menuImage');
    menuContent.appendChild(image);
  };
  createImage(foot1);
  createImage(foot2);
  createImage(foot3);
  container.appendChild(menuContent);
  const content = document.querySelectorAll('.contentInfo');
  content[1].style.display = 'none';
  return content[1];
};
export default menuContent;