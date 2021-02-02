import React from 'react';
import { Divider } from 'cloudhub-components/dist/mui/core';
import { Section } from 'components/organisms';
import { Form, Contact } from './components';

import { mapData } from './data';

const ContactPageSidebarMap = () => (
  <div>
    <Form data={mapData} />
    <Section>
      <Contact />
    </Section>
    <Divider />
  </div>
);

export default ContactPageSidebarMap;
