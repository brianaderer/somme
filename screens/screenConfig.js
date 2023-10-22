import Identity from '../pages/Identity';
import Visual from '../pages/Visual';
import Nose from '../pages/Nose';
import Palate from '../pages/Palette';
import Conclusion from '../pages/Conclusion';

const screenConfig = [
  {
    component: Identity,
    name: 'Identity',
    next: 'Visual',
    focusedIcon: 'barcode-scan',
    unfocusedIcon: 'barcode',
  },
  {
    component: Visual,
    name: 'Visual',
    next: 'Nose',
    focusedIcon: 'eye',
    unfocusedIcon: 'eye-outline',
  },
  {
    component: Nose,
    name: 'Nose',
    next: 'Palette',
    focusedIcon: 'pot-steam',
    unfocusedIcon: 'pot-outline',
  },
  {
    component: Palate,
    name: 'Palate',
    next: 'Conclusion',
    focusedIcon: 'bottle-wine',
    unfocusedIcon: 'bottle-wine-outline',
  },
  {
    component: Conclusion,
    name: 'Conclusion',
    next: null,
    focusedIcon: 'bullseye-arrow',
    unfocusedIcon: 'bullseye',
  },
];

export default screenConfig;
