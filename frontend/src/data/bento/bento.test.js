import { bentoHero as bentoHeroEN, topPillars as topPillarsEN, operationalDomains as operationalDomainsEN } from './en';
import { bentoHero as bentoHeroPT, topPillars as topPillarsPT, operationalDomains as operationalDomainsPT } from './pt';

describe('Multimodal Bento Box Datasets (en.js and pt.js)', () => {
  const expectedPillarIds = [
    'portfolio-governance',
    'supplier-performance',
    'operations-change',
    'executive-health',
  ];

  const expectedDomainIds = [
    'content-operations',
    'eval-feedback',
    'ai-data-training',
    'testing-response',
    'global-language',
    'strategy-enablement',
    'operational-controls',
    'finance-opex',
    'bi-telemetry',
  ];

  test('Tier 1 has exactly 4 Top Strategic Pillars in EN and PT', () => {
    expect(topPillarsEN).toHaveLength(4);
    expect(topPillarsPT).toHaveLength(4);

    expect(topPillarsEN.map((p) => p.id)).toEqual(expectedPillarIds);
    expect(topPillarsPT.map((p) => p.id)).toEqual(expectedPillarIds);
  });

  test('Each Top Pillar has up to 3 subcards with complete STAR data', () => {
    topPillarsEN.forEach((pillar, pIdx) => {
      expect(pillar.subCards.length).toBeGreaterThan(0);
      expect(pillar.subCards.length).toBeLessThanOrEqual(3);

      pillar.subCards.forEach((card) => {
        expect(card.id).toBeTruthy();
        expect(card.title).toBeTruthy();
        expect(card.subtitle).toBeTruthy();
        expect(card.metrics).toBeTruthy();
        expect(card.star).toBeDefined();
        expect(card.star.situation).toBeTruthy();
        expect(card.star.task).toBeTruthy();
        expect(card.star.action).toBeTruthy();
        expect(card.star.result).toBeTruthy();
        expect(card.l6Principle).toBeTruthy();
      });

      // PT parity
      const ptPillar = topPillarsPT[pIdx];
      expect(ptPillar.subCards).toHaveLength(pillar.subCards.length);
      ptPillar.subCards.forEach((card) => {
        expect(card.id).toBeTruthy();
        expect(card.title).toBeTruthy();
        expect(card.star.situation).toBeTruthy();
        expect(card.star.task).toBeTruthy();
        expect(card.star.action).toBeTruthy();
        expect(card.star.result).toBeTruthy();
        expect(card.l6Principle).toBeTruthy();
      });
    });
  });

  test('Pillar 02 (Supplier Performance) has an extended subsection for Domain 07 in EN and PT', () => {
    const spPillarEN = topPillarsEN.find((p) => p.id === 'supplier-performance');
    const spPillarPT = topPillarsPT.find((p) => p.id === 'supplier-performance');

    expect(spPillarEN.extendedSubsection).toBeDefined();
    expect(spPillarPT.extendedSubsection).toBeDefined();
    expect(spPillarEN.extendedSubsection.id).toBe('supplier-partner');
    expect(spPillarPT.extendedSubsection.id).toBe('supplier-partner');

    expect(spPillarEN.extendedSubsection.subCards.length).toBeGreaterThan(0);
    expect(spPillarPT.extendedSubsection.subCards.length).toBe(
      spPillarEN.extendedSubsection.subCards.length
    );

    spPillarEN.extendedSubsection.subCards.forEach((card) => {
      expect(card.id).toBeTruthy();
      expect(card.title).toBeTruthy();
      expect(card.star).toBeDefined();
      expect(card.star.situation).toBeTruthy();
      expect(card.star.task).toBeTruthy();
      expect(card.star.action).toBeTruthy();
      expect(card.star.result).toBeTruthy();
      expect(card.l6Principle).toBeTruthy();
    });
  });

  test('Tier 2 has exactly 9 Specialized Operational Domains in EN and PT', () => {
    expect(operationalDomainsEN).toHaveLength(9);
    expect(operationalDomainsPT).toHaveLength(9);

    expect(operationalDomainsEN.map((d) => d.id)).toEqual(expectedDomainIds);
    expect(operationalDomainsPT.map((d) => d.id)).toEqual(expectedDomainIds);
  });

  test('Each Operational Domain has up to 10 subcards with valid STAR schema', () => {
    operationalDomainsEN.forEach((domain, dIdx) => {
      expect(domain.subCards.length).toBeGreaterThan(0);
      expect(domain.subCards.length).toBeLessThanOrEqual(10);

      domain.subCards.forEach((card) => {
        expect(card.id).toBeTruthy();
        expect(card.title).toBeTruthy();
        expect(card.star.situation).toBeTruthy();
        expect(card.star.task).toBeTruthy();
        expect(card.star.action).toBeTruthy();
        expect(card.star.result).toBeTruthy();
        expect(card.l6Principle).toBeTruthy();
      });

      // PT parity
      const ptDomain = operationalDomainsPT[dIdx];
      expect(ptDomain.subCards.length).toBe(domain.subCards.length);
    });
  });

  test('Strictly zero em-dashes in EN and PT bento datasets per GEMINI.md', () => {
    const enJson = JSON.stringify({ bentoHeroEN, topPillarsEN, operationalDomainsEN });
    const ptJson = JSON.stringify({ bentoHeroPT, topPillarsPT, operationalDomainsPT });

    expect(enJson).not.toContain('\u2014');
    expect(ptJson).not.toContain('\u2014');
  });
});
