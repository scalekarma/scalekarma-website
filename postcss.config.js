import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';
import atImport from 'postcss-import';

export default {
  map: 'inline',
  plugins: [atImport, autoprefixer, cssnano],
};
