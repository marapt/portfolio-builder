import fs from 'fs';
import path from 'path';
import { bentoHero as bentoHeroEN, topPillars as topPillarsEN, operationalDomains as operationalDomainsEN } from './en';
import { bentoHero as bentoHeroPT, topPillars as topPillarsPT, operationalDomains as operationalDomainsPT } from './pt';
import { companyBrandMap, getCompanyBrand } from './brandMap';

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

    expect(spPillarEN.extendedSubsections).toBeDefined();
    expect(spPillarPT.extendedSubsections).toBeDefined();
    expect(spPillarEN.extendedSubsections[0].id).toBe('supplier-partner');
    expect(spPillarPT.extendedSubsections[0].id).toBe('supplier-partner');

    expect(spPillarEN.extendedSubsections[0].subCards.length).toBeGreaterThan(0);
    expect(spPillarPT.extendedSubsections[0].subCards.length).toBe(
      spPillarEN.extendedSubsections[0].subCards.length
    );

    spPillarEN.extendedSubsections[0].subCards.forEach((card) => {
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

  test('Pillar 04 (Executive Health) has extended subsections for Domain 09 and 10 in EN and PT', () => {
    const ehPillarEN = topPillarsEN.find((p) => p.id === 'executive-health');
    const ehPillarPT = topPillarsPT.find((p) => p.id === 'executive-health');

    expect(ehPillarEN.extendedSubsections).toBeDefined();
    expect(ehPillarPT.extendedSubsections).toBeDefined();
    expect(ehPillarEN.extendedSubsections).toHaveLength(2);
    expect(ehPillarPT.extendedSubsections).toHaveLength(2);

    expect(ehPillarEN.extendedSubsections.map((s) => s.id)).toEqual([
      'finance-opex',
      'bi-telemetry',
    ]);
    expect(ehPillarPT.extendedSubsections.map((s) => s.id)).toEqual([
      'finance-opex',
      'bi-telemetry',
    ]);

    ehPillarEN.extendedSubsections.forEach((subSec, sIdx) => {
      expect(subSec.subCards.length).toBeGreaterThan(0);
      expect(ehPillarPT.extendedSubsections[sIdx].subCards.length).toBe(
        subSec.subCards.length
      );

      subSec.subCards.forEach((card) => {
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
  });

  test('Pillar 03 (Operations & Change) has an extended subsection for Domain 08 in EN and PT', () => {
    const ocPillarEN = topPillarsEN.find((p) => p.id === 'operations-change');
    const ocPillarPT = topPillarsPT.find((p) => p.id === 'operations-change');

    expect(ocPillarEN.extendedSubsections).toBeDefined();
    expect(ocPillarPT.extendedSubsections).toBeDefined();
    expect(ocPillarEN.extendedSubsections[0].id).toBe('operational-controls');
    expect(ocPillarPT.extendedSubsections[0].id).toBe('operational-controls');

    expect(ocPillarEN.extendedSubsections[0].subCards.length).toBeGreaterThan(0);
    expect(ocPillarPT.extendedSubsections[0].subCards.length).toBe(
      ocPillarEN.extendedSubsections[0].subCards.length
    );

    ocPillarEN.extendedSubsections[0].subCards.forEach((card) => {
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

  test('Tier 2 has exactly 6 Specialized Operational Domains in EN and PT', () => {
    expect(operationalDomainsEN).toHaveLength(6);
    expect(operationalDomainsPT).toHaveLength(6);

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

  test('All proofAnchors map to valid company brands with existing vector SVG logos', () => {
    const allCards = [];

    // Collect pillar core and extended cards
    topPillarsEN.forEach((p) => {
      allCards.push(...p.subCards);
      (p.extendedSubsections || []).forEach((sub) => {
        allCards.push(...sub.subCards);
      });
    });

    // Collect domain cards
    operationalDomainsEN.forEach((d) => {
      allCards.push(...d.subCards);
    });

    const publicDir = path.resolve(__dirname, '../../../public');

    allCards.forEach((card) => {
      if (card.proofAnchor) {
        const brand = getCompanyBrand(card.proofAnchor);
        expect(brand).toBeDefined();
        expect(brand.name).toBeTruthy();
        expect(brand.logo).toBeTruthy();

        const logoFilePath = path.join(publicDir, brand.logo);
        expect(fs.existsSync(logoFilePath)).toBe(true);
      }
    });
  });
});
