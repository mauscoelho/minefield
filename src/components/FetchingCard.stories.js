/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import FetchingCard from './FetchingCard';

storiesOf(`FetchingCard`, module).add(`fetching`, () => <FetchingCard />);
