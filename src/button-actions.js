
import BackgorundImage from './images/Backgorund4.jpg';

const navButton = () => {
  const menu = document.querySelectorAll('.menu');
  const onclickAction = (item, position, bg) => {
    item.onclick = () => {
      const content = document.querySelectorAll('.contentInfo');
      content[position].style.display = 'grid';
      const body = document.querySelector('body');
      body.style.backgroundImage = `url(${bg})`;

      item.style.backgroundColor = '#ff9035';
      item.style.color = 'rgb(53, 7, 1)';
      for (let index = 0; index < content.length; index += 1) {
        if (index !== position) {
          content[index].style.display = 'none';
        }
        if (index !== position - 1) {
          menu[index].style.color = '#ff9035';
          menu[index].style.backgroundColor = '';
        }
      }
    };
  };

  onclickAction(menu[0], 1, BackgorundImage);
  onclickAction(menu[1], 2, BackgorundImage);
  onclickAction(menu[2], 3, BackgorundImage);
  onclickAction(menu[3], 4, BackgorundImage);

  return menu;
};

export default navButton;