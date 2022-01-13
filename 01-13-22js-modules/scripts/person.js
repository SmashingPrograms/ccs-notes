// sayHi(name);

import dog from './name.js';
import {name as firstName} from './name.js';
import {sayHi} from './utilities.js';
import * as everything from './name.js';

console.log(dog);
console.log(name);

sayHi('Sally');
sayHi('Paul');

console.log(everything.lastName);