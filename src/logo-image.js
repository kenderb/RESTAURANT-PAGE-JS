import Logo from './images/logo.png';

const logoImage = () => {
  const logoImg = document.createElement('img');
  logoImg.src = Logo;
  logoImg.alt = 'logo';
  logoImg.id = 'logo';
  logoImg.onclick = () => {
    window.location.reload();
  };
  return logoImg;
};
export default logoImage;