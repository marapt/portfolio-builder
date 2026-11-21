/**
 * Canonical mapping between proofAnchor IDs and enterprise company brand assets.
 * Points to public vector SVG logos in /company-logos/.
 */
export const companyBrandMap = {
  microsoft: {
    name: 'Microsoft',
    logo: '/company-logos/microsoft.svg',
  },
  'apple-2014': {
    name: 'Apple',
    logo: '/company-logos/apple.svg',
  },
  'apple-2026': {
    name: 'Apple',
    logo: '/company-logos/apple.svg',
  },
  block: {
    name: 'Block',
    logo: '/company-logos/block.svg',
  },
  linkedin: {
    name: 'LinkedIn',
    logo: '/company-logos/linkedin.svg',
  },
  miis: {
    name: 'MIIS',
    logo: '/company-logos/miis.svg',
  },
  infoblox: {
    name: 'Infoblox',
    logo: '/company-logos/infoblox.svg',
  },
  sony: {
    name: 'Sony',
    logo: '/company-logos/sony.svg',
  },
  hogarth: {
    name: 'Hogarth',
    logo: '/company-logos/hogarth.svg',
  },
  'eu-dgt': {
    name: 'EU DGT',
    logo: '/company-logos/eu-dgt.svg',
  },
  rtp: {
    name: 'RTP',
    logo: '/company-logos/rtp.svg',
  },
  estg: {
    name: 'ESTG',
    logo: '/company-logos/estg.svg',
  },
};

export const getCompanyBrand = (anchor) => {
  if (!anchor) return null;
  return companyBrandMap[anchor] || null;
};
