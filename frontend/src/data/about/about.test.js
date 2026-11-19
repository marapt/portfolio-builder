import * as aboutEN from './en';
import * as aboutPT from './pt';

describe('About Me dataset & structure', () => {
  test('en and pt exports match expected structure', () => {
    ['aboutHero', 'functionalPillars', 'personalSide'].forEach((exportName) => {
      expect(aboutEN[exportName]).toBeDefined();
      expect(aboutPT[exportName]).toBeDefined();
    });
  });

  test('aboutHero contains exact title, origin story, and scale metrics', () => {
    expect(aboutEN.aboutHero.title).toBe('Global Program & Operations Management');
    expect(aboutPT.aboutHero.title).toBe('Global Program & Operations Management');
    expect(aboutEN.aboutHero.originStory.title).toContain('Why Access');
    expect(aboutEN.aboutHero.originStory.quickGrasp).toContain('first computer');
    expect(aboutEN.aboutHero.stats).toHaveLength(4);
    expect(aboutEN.aboutHero.stats.map((s) => s.value)).toEqual([
      '200 Mkts · 100 Langs',
      '3x Team Scaling',
      '67% Cycle Cut',
      'DISC Planner Style',
    ]);
  });

  test('functionalPillars defines exactly 3 Google L6 calibrated pillars', () => {
    expect(aboutEN.functionalPillars).toHaveLength(3);
    expect(aboutPT.functionalPillars).toHaveLength(3);

    const pillarIds = aboutEN.functionalPillars.map((p) => p.id);
    expect(pillarIds).toEqual([
      'program-delivery',
      'product-ai-strategy',
      'operational-enablement',
    ]);

    const requiredSections = [
      'whyWorkWithMe',
      'workStyle',
      'partnerArchetypes',
      'strengthsAndGrowth',
    ];

    [aboutEN.functionalPillars, aboutPT.functionalPillars].forEach((pillarList) => {
      pillarList.forEach((pillar) => {
        expect(pillar.title.length).toBeGreaterThan(10);
        expect(pillar.quickGrasp.length).toBeGreaterThan(25);
        expect(pillar.proofLinks.length).toBeGreaterThanOrEqual(2);

        requiredSections.forEach((secKey) => {
          const sec = pillar.sections[secKey];
          expect(sec).toBeDefined();
          expect(sec.title.length).toBeGreaterThan(3);
          expect(sec.text.length).toBeGreaterThan(20);
          expect(Array.isArray(sec.highlights)).toBe(true);
          expect(sec.highlights.length).toBeGreaterThanOrEqual(2);
        });
      });
    });
  });

  test('personalSide covers 3 dimensions of personal background and community impact', () => {
    expect(aboutEN.personalSide.pillars).toHaveLength(3);
    expect(aboutPT.personalSide.pillars).toHaveLength(3);

    const pillarIds = aboutEN.personalSide.pillars.map((p) => p.id);
    expect(pillarIds).toEqual([
      'polyglot-cultural',
      'lifelong-learning',
      'mentorship-community',
    ]);

    aboutEN.personalSide.pillars.forEach((p) => {
      expect(p.quickGrasp.length).toBeGreaterThan(20);
      expect(p.details.length).toBeGreaterThan(20);
    });
  });

  test('strictly zero clausal em-dashes (—) in both EN and PT about datasets', () => {
    const rawEn = JSON.stringify(aboutEN);
    const rawPt = JSON.stringify(aboutPT);
    expect(rawEn).not.toContain('—');
    expect(rawPt).not.toContain('—');
  });
});
