import PhoneImag from './images/phone.png';

function phoneImage() {
  const phoneIcon = document.createElement('img');
  phoneIcon.id = 'phoneIcon';
  phoneIcon.alt = 'phoneIcon';
  phoneIcon.src = PhoneImag;
  return phoneIcon;
}
export default phoneImage;