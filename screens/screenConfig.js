import Identity from '../components/Identity';
import Visual from '../components/Visual';
import Nose from '../components/Nose';
import Palette from '../components/Palette';
import Conclusion from '../components/Conclusion';

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
    component: Palette,
    name: 'Palette',
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
