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
  'block-microsoft': {
    name: 'Block & Microsoft',
    logo: '/company-logos/block.svg',
    logos: ['/company-logos/block.svg', '/company-logos/microsoft.svg'],
  },
};

export const getCompanyBrand = (anchor) => {
  if (!anchor) return null;
  return companyBrandMap[anchor] || null;
};

/**
 * Returns an array of brand objects for single or multi-company cards.
 * Accepts a card object (with proofAnchors or proofAnchor) or a string anchor.
 */
export const getCompanyBrands = (cardOrAnchor) => {
  if (!cardOrAnchor) return [];

  if (typeof cardOrAnchor === 'object') {
    if (Array.isArray(cardOrAnchor.proofAnchors) && cardOrAnchor.proofAnchors.length > 0) {
      return cardOrAnchor.proofAnchors
        .map((a) => companyBrandMap[a])
        .filter(Boolean);
    }
    if (cardOrAnchor.proofAnchor) {
      return getCompanyBrands(cardOrAnchor.proofAnchor);
    }
    return [];
  }

  const anchor = String(cardOrAnchor);

  // If specific compound anchor exists, check if it maps to individual brands
  if (anchor === 'block-microsoft' || anchor === 'block+microsoft') {
    return [companyBrandMap.block, companyBrandMap.microsoft].filter(Boolean);
  }

  if (companyBrandMap[anchor]) {
    return [companyBrandMap[anchor]];
  }

  return [];
};
