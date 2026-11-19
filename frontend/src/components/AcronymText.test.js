import { resolveAcronymDefinition } from './AcronymText';

describe('AcronymText definitions', () => {
  test('expands financial, fiscal, and operational acronyms consistently', () => {
    expect(resolveAcronymDefinition('GAAP')).toEqual({
      term: 'GAAP',
      expansion: 'Generally Accepted Accounting Principles',
      glossaryId: 'gaap',
    });
    expect(resolveAcronymDefinition('Ex-BNPL')?.expansion).toMatch(/Buy Now, Pay Later/i);
    expect(resolveAcronymDefinition('BNPL')?.expansion).toMatch(/Buy Now, Pay Later/i);
    expect(resolveAcronymDefinition('GPV')?.expansion).toBe('Gross Payment Volume');
    expect(resolveAcronymDefinition('CC')?.expansion).toMatch(/Constant Currency/i);
    expect(resolveAcronymDefinition('YoY')?.expansion).toBe('Year-over-Year');
    expect(resolveAcronymDefinition('YTD')?.expansion).toBe('Year-to-Date');
    expect(resolveAcronymDefinition('CAGR')?.expansion).toBe('Compound Annual Growth Rate');
    expect(resolveAcronymDefinition('9M')?.expansion).toMatch(/Nine Months Ended/i);
    expect(resolveAcronymDefinition('Q3')?.expansion).toMatch(/Third Quarter/i);
    expect(resolveAcronymDefinition('FY21')?.expansion).toBe('Fiscal Year 2021');
    expect(resolveAcronymDefinition('FY22')?.expansion).toBe('Fiscal Year 2022');
    expect(resolveAcronymDefinition('GTM')?.expansion).toBe('Go-To-Market');
    expect(resolveAcronymDefinition('ROI')?.expansion).toBe('Return on Investment');
    expect(resolveAcronymDefinition('SLA')?.expansion).toBe('Service-Level Agreement');
    expect(resolveAcronymDefinition('NDA')?.expansion).toBe('Non-Disclosure Agreement');
    expect(resolveAcronymDefinition('HITL')?.expansion).toBe('Human-in-the-Loop');
    expect(resolveAcronymDefinition('MARCOM')).toEqual({
      term: 'MARCOM',
      expansion: 'Marketing Communications',
      glossaryId: 'marcom',
    });
    expect(resolveAcronymDefinition('MSP')).toEqual({
      term: 'MSP',
      expansion: 'Managed Service Provider (outsourced vendor model)',
      glossaryId: 'msp',
    });
    expect(resolveAcronymDefinition('i18n')?.expansion).toMatch(/Internationalization/i);
  });
});
