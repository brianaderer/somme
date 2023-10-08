import Identity from '../components/Identity';
import Visual from '../components/Visual';
import Nose from '../components/Nose';
import Palette from '../components/Palette';
import Conclusion from '../components/Conclusion';

const screenConfig = [
  {component: Identity, name: 'Identity', next: 'Visual'},
  {component: Visual, name: 'Visual', next: 'Nose'},
  {component: Nose, name: 'Nose', next: 'Palette'},
  {component: Palette, name: 'Palette', next: 'Conclusion'},
  {component: Conclusion, name: 'Conclusion', next: null},
];

export default screenConfig;
