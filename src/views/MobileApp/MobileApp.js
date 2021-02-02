import React from 'react';
import { Divider } from 'cloudhub-components/dist/mui/core';
import { Section, SectionAlternate } from 'components/organisms';

import { About, Features, Community, Pricings, Download } from './components';

import { community, features, pricings } from './data';

const MobileApp = () => (
  <div>
    <About />
    <Divider />
    <Section>
      <Community data={community} />
    </Section>
    <SectionAlternate>
      <Features data={features} />
    </SectionAlternate>
    <Section>
      <Pricings data={pricings} />
    </Section>
    <Divider />
    <Section>
      <Download />
    </Section>
    <Divider />
  </div>
);

export default MobileApp;
