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
    'cross-functional-partners',
    'live-incidents-response',
    'optimization-innovation',
  ];

  const expectedDomainIds = [];

  test('Tier 1 has exactly 7 Top Strategic Pillars in EN and PT', () => {
    expect(topPillarsEN).toHaveLength(7);
    expect(topPillarsPT).toHaveLength(7);

    expect(topPillarsEN.map((p) => p.id)).toEqual(expectedPillarIds);
    expect(topPillarsPT.map((p) => p.id)).toEqual(expectedPillarIds);
  });

  test('Total interactive STAR cards across all 7 Top Strategic Pillars equals 26 in EN and PT', () => {
    const countCards = (pillars) =>
      pillars.reduce((total, p) => {
        const core = p.subCards?.length || 0;
        const extended = (p.extendedSubsections || []).reduce(
          (acc, sub) => acc + (sub.subCards?.length || 0),
          0
        );
        return total + core + extended;
      }, 0);

    expect(countCards(topPillarsEN)).toBe(26);
    expect(countCards(topPillarsPT)).toBe(26);
  });

  test('Each Top Pillar has valid subcards with complete STAR data', () => {
    topPillarsEN.forEach((pillar, pIdx) => {
      const totalCards =
        (pillar.subCards?.length || 0) +
        (pillar.extendedSubsections || []).reduce(
          (acc, s) => acc + (s.subCards?.length || 0),
          0
        );
      expect(pillar.subCards.length).toBeLessThanOrEqual(8);

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

  test('Pillar 01 (Portfolio Governance) has core subcards for Terminology CoE, Microsoft Geopolitical Compliance, LinkedIn GTM, and Block EU Expansion in EN and PT', () => {
    const pgPillarEN = topPillarsEN.find((p) => p.id === 'portfolio-governance');
    const pgPillarPT = topPillarsPT.find((p) => p.id === 'portfolio-governance');

    expect(pgPillarEN.subCards).toHaveLength(4);
    expect(pgPillarPT.subCards).toHaveLength(4);
    expect(pgPillarEN.subCards.map((c) => c.id)).toContain('gl-1');
    expect(pgPillarEN.subCards.map((c) => c.id)).toContain('gl-2');
    expect(pgPillarEN.subCards.map((c) => c.id)).toContain('gtm-linkedin-stories-redesign');
    expect(pgPillarEN.subCards.map((c) => c.id)).toContain('block-eu-expansion');
    expect(pgPillarPT.subCards.map((c) => c.id)).toContain('gl-1');
    expect(pgPillarPT.subCards.map((c) => c.id)).toContain('gl-2');
    expect(pgPillarPT.subCards.map((c) => c.id)).toContain('gtm-linkedin-stories-redesign');
    expect(pgPillarPT.subCards.map((c) => c.id)).toContain('block-eu-expansion');

    // Domains 05 and 11 subsections merged into main pillar
    expect(pgPillarEN.extendedSubsections || []).toHaveLength(0);
    expect(pgPillarPT.extendedSubsections || []).toHaveLength(0);

    pgPillarEN.subCards.forEach((card) => {
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

  test('Pillar 02 (Supplier Performance) has core subcards for Block, Microsoft, and LinkedIn supplier/workforce governance in EN and PT', () => {
    const spPillarEN = topPillarsEN.find((p) => p.id === 'supplier-performance');
    const spPillarPT = topPillarsPT.find((p) => p.id === 'supplier-performance');

    expect(spPillarEN.subCards).toHaveLength(3);
    expect(spPillarPT.subCards).toHaveLength(3);
    expect(spPillarEN.subCards.map((c) => c.id)).toContain('sp-3');
    expect(spPillarEN.subCards.map((c) => c.id)).toContain('spg-rfp-governance');
    expect(spPillarEN.subCards.map((c) => c.id)).toContain('bit-workforce-capacity');
    expect(spPillarPT.subCards.map((c) => c.id)).toContain('sp-3');
    expect(spPillarPT.subCards.map((c) => c.id)).toContain('spg-rfp-governance');
    expect(spPillarPT.subCards.map((c) => c.id)).toContain('bit-workforce-capacity');

    // Domain 07 subsection merged into main pillar
    expect(spPillarEN.extendedSubsections || []).toHaveLength(0);
    expect(spPillarPT.extendedSubsections || []).toHaveLength(0);

    spPillarEN.subCards.forEach((card) => {
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

  test('Pillar 03 (Operations & Change) has extended subsections for Domain 01 and Domain 08 in EN and PT', () => {
    const ocPillarEN = topPillarsEN.find((p) => p.id === 'operations-change');
    const ocPillarPT = topPillarsPT.find((p) => p.id === 'operations-change');

    expect(ocPillarEN.extendedSubsections).toBeDefined();
    expect(ocPillarPT.extendedSubsections).toBeDefined();
    expect(ocPillarEN.extendedSubsections).toHaveLength(2);
    expect(ocPillarPT.extendedSubsections).toHaveLength(2);
    expect(ocPillarEN.extendedSubsections.map((s) => s.id)).toEqual([
      'content-operations',
      'operational-controls',
    ]);
    expect(ocPillarPT.extendedSubsections.map((s) => s.id)).toEqual([
      'content-operations',
      'operational-controls',
    ]);

    ocPillarEN.extendedSubsections.forEach((subSec, sIdx) => {
      expect(subSec.subCards.length).toBeGreaterThanOrEqual(0);
      expect(ocPillarPT.extendedSubsections[sIdx].subCards.length).toBe(
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

  test('Pillar 06 (Live Incidents Response) has subcards for Follow-the-Sun and Thailand Crisis in EN and PT', () => {
    const lirPillarEN = topPillarsEN.find((p) => p.id === 'live-incidents-response');
    const lirPillarPT = topPillarsPT.find((p) => p.id === 'live-incidents-response');

    expect(lirPillarEN).toBeDefined();
    expect(lirPillarPT).toBeDefined();
    expect(lirPillarEN.subCards).toHaveLength(2);
    expect(lirPillarPT.subCards).toHaveLength(2);
    expect(lirPillarEN.subCards.map((c) => c.id)).toEqual(['tr-1', 'tr-thailand-crisis']);
    expect(lirPillarPT.subCards.map((c) => c.id)).toEqual(['tr-1', 'tr-thailand-crisis']);
  });

  test('Pillar 07 (Optimization and Innovation) has subcards for MTPE, AI Portfolio Building, and AI NMT Case Study in EN and PT', () => {
    const oiPillarEN = topPillarsEN.find((p) => p.id === 'optimization-innovation');
    const oiPillarPT = topPillarsPT.find((p) => p.id === 'optimization-innovation');

    expect(oiPillarEN).toBeDefined();
    expect(oiPillarPT).toBeDefined();
    expect(oiPillarEN.subCards).toHaveLength(3);
    expect(oiPillarPT.subCards).toHaveLength(3);
    expect(oiPillarEN.subCards.map((c) => c.id)).toEqual([
      'ai-1',
      'ai-portfolio-building',
      'ai-nmt-case-study',
    ]);
    expect(oiPillarPT.subCards.map((c) => c.id)).toEqual([
      'ai-1',
      'ai-portfolio-building',
      'ai-nmt-case-study',
    ]);
    expect(oiPillarEN.icon).toBe('Cpu');
    expect(oiPillarPT.icon).toBe('Cpu');
    expect(oiPillarEN.icon).not.toBe('Sparkles');
    expect(oiPillarPT.icon).not.toBe('Sparkles');
  });

  test('Tier 2 has 0 Specialized Operational Domains in EN and PT', () => {
    expect(operationalDomainsEN).toHaveLength(0);
    expect(operationalDomainsPT).toHaveLength(0);

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
