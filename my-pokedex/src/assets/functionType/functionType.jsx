//@ts-ignore
import bug from '../images/bug.png';
//@ts-ignore
import dark from '../images/dark.png';
//@ts-ignore
import dragon from '../images/dragon.png';
//@ts-ignore
import eletric from '../images/eletric.png';
//@ts-ignore
import fair from '../images/fair.png';
//@ts-ignore
import fight from '../images/fight.png';
//@ts-ignore
import fire from '../images/fire.png';
//@ts-ignore
import flying from '../images/flying.png';
//@ts-ignore
import ghost from '../images/ghost.png';
//@ts-ignore
import grass from '../images/grass.png';
//@ts-ignore
import ground from '../images/ground.png';
//@ts-ignore
import ice from '../images/ice.png';
//@ts-ignore
import normal from '../images/normal.png';
//@ts-ignore
import poison from '../images/poison.png';
//@ts-ignore
import physic from '../images/physic.png';
//@ts-ignore
import rock from '../images/rock.png';
//@ts-ignore
import steel from '../images/steel.png';
//@ts-ignore
import water from '../images/water.png';

const getTypeImage = (type) => {
  switch (type) {
    case "bug":
      return bug;
    case "dark":
      return dark;
    case "dragon":
      return dragon;
    case "electric":
      return eletric;
    case "fairy":
      return fair;
    case "fighting":
      return fight;
    case "fire":
      return fire;
    case "flying":
      return flying;
    case "ghost":
      return ghost;
    case "grass":
      return grass;
    case "ground":
      return ground;
    case "ice":
      return ice;
    case "normal":
      return normal;
    case "poison":
      return poison;
    case "psychic":
      return physic;
    case "rock":
      return rock;
    case "steel":
      return steel;
    case "water":
      return water;
    default:
      return null; 
  }
};

export const getTypeImageByType = (type) => {
  const typeImage = getTypeImage(type);
  return typeImage || 'default-image.png'; 
};