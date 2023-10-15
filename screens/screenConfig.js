import Identity from '../blocks/Identity';
import Visual from '../blocks/Visual';
import Nose from '../blocks/Nose';
import Palette from '../blocks/Palette';
import Conclusion from '../blocks/Conclusion';

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
