import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const HamburgerIcon = props => (
  <Svg width={19} height={18} viewBox="0 0 19 18" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.912109 3C0.912109 2.44772 1.35982 2 1.91211 2H12.9121C13.4644 2 13.9121 2.44772 13.9121 3C13.9121 3.55228 13.4644 4 12.9121 4H1.91211C1.35982 4 0.912109 3.55228 0.912109 3Z"
      fill="#40484E"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.03711 9C1.03711 8.44772 1.48482 8 2.03711 8H17.7871C18.3394 8 18.7871 8.44772 18.7871 9C18.7871 9.55228 18.3394 10 17.7871 10H2.03711C1.48482 10 1.03711 9.55228 1.03711 9Z"
      fill="#40484E"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.912109 15C0.912109 14.4477 1.35982 14 1.91211 14H12.9121C13.4644 14 13.9121 14.4477 13.9121 15C13.9121 15.5523 13.4644 16 12.9121 16H1.91211C1.35982 16 0.912109 15.5523 0.912109 15Z"
      fill="#40484E"
    />
  </Svg>
);
export default HamburgerIcon;
