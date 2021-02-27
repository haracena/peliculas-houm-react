import React from 'react';
import { smallBackdropImageUrl } from '../../api/movieApi';

const CompanyLogo = ({ logoUrl }) => {
  return (
    <img src={`${smallBackdropImageUrl}${logoUrl}`} className='company-logo' />
  );
};

export default CompanyLogo;
