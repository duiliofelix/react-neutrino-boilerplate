/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

addDecorator(withKnobs);
storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>{text('label', 'Hello Button')}</Button>
  ))
  .add('with emoji', () => (
    <Button onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));
