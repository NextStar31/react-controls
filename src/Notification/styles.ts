import styled, {css} from 'styled-components';
import Box from '../Box';
import { Status } from './types';
import { Props } from './';
import colorMap from '../theming/colorMap';

const backgroundColor = (status: Status) => css`
  background-color: ${colorMap[status] || colorMap.offwhite};
`;

export default styled(Box)`
  ${(props:Props) => backgroundColor(props.status)}
`;