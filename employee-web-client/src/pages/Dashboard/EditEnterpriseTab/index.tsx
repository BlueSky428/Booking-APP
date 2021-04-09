import React from 'react';

import { EditEnterpriseForm } from 'modules/enterprise/presentation';

import { DashboardTabs } from '../DashboardTabs';

const EditEnterpriseTab = () => {
  return (
    <DashboardTabs>
      <EditEnterpriseForm />
    </DashboardTabs>
  );
};

export default EditEnterpriseTab;
