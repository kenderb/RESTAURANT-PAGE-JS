
const importAll = (r) => r.keys().map(r);

const images = importAll(require.context('./images/galery/', false, /\.(png|jpg|svg)$/));
const galeryContent = () => {
  const container = document.getElementById('container');
  const galeryDiv = document.createElement('div');
  galeryDiv.classList.add('contentInfo');
  galeryDiv.classList.add('galeryInfo');
  const addGaleryImage = (route) => {
    const image = document.createElement('img');
    image.src = route;
    image.classList.add('galeryImage');
    galeryDiv.appendChild(image);
  };

  images.forEach(element => {
    addGaleryImage(element.default);
  });
  container.appendChild(galeryDiv);

  const content = document.querySelectorAll('.contentInfo');
  content[3].style.display = 'none';
  return content[3];
};
export default galeryContent;