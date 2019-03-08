import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Typography from '../../components/Typography';
import Button from '../../components/Button';
import CenterView from './CenterView';
import Welcome from './Welcome';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Typography', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('all', () => (
    <Fragment>
      <Typography.Heading>Heading</Typography.Heading>
      <Typography.Body>Body</Typography.Body>
    </Fragment>
  ));

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Fragment>
      <Button onPress={action('clicked-text')} type="Primary" title="Primary" />
      <Button
        onPress={action('clicked-text')}
        type="Secondary"
        title="Secondary"
      />
    </Fragment>
  ))
