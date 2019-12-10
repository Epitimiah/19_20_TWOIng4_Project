/*import React from 'react';
import  {storiesOf} from "@storybook/react"; 
import BarreChart from '../Components/BarreChart/BarreChart'; 
//import { action } from '@storybook/addon-actions';
//import { Button } from '@storybook/react/demo';


storiesOf ('BarreChart', module)
  .add('default', () => <BarreChart /> ); 
*/

import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Button',
};

export const text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
