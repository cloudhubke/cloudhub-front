import { library } from '@fortawesome/fontawesome-svg-core';
import * as FreeBrands from '@fortawesome/free-brands-svg-icons';
import * as FreeRegular from '@fortawesome/free-regular-svg-icons';
import * as FreeSolid from '@fortawesome/free-solid-svg-icons';

const fbList = Object.keys(FreeBrands)
  .filter(key => key !== 'fas' && key !== 'prefix')
  .map(icon => FreeBrands[icon]);
const frList = Object.keys(FreeRegular)
  .filter(key => key !== 'fas' && key !== 'prefix')
  .map(icon => FreeRegular[icon]);

const fsList = Object.keys(FreeSolid)
  .filter(key => key !== 'fas' && key !== 'prefix')
  .map(icon => FreeSolid[icon]);

library.add(...fbList);
library.add(...frList);

library.add(...fsList);
