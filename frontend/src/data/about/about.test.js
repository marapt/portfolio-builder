import * as aboutEN from './en';
import * as aboutPT from './pt';

describe('About Me dataset & structure', () => {
  test('en and pt exports match expected structure', () => {
    ['aboutHero', 'whyHireMe', 'workStyle', 'partnerArchetypes', 'superpowersAndGrowth', 'personalSide'].forEach((exportName) => {
      expect(aboutEN[exportName]).toBeDefined();
      expect(aboutPT[exportName]).toBeDefined();
    });
  });

  test('aboutHero contains origin story, stats, and executive identity', () => {
    expect(aboutEN.aboutHero.title).toContain('Active Translator');
    expect(aboutEN.aboutHero.originStory.title).toContain('Why Access');
    expect(aboutEN.aboutHero.originStory.quickGrasp).toContain('first computer');
    expect(aboutEN.aboutHero.stats).toHaveLength(4);
    expect(aboutEN.aboutHero.stats.map((s) => s.value)).toEqual([
      '4 Working Langs',
      '20+ Years',
      '30+ Credentials',
      'DISC Planner',
    ]);
  });

  test('whyHireMe covers 4 core executive value pillars', () => {
    expect(aboutEN.whyHireMe.pillars).toHaveLength(4);
    const pillarIds = aboutEN.whyHireMe.pillars.map((p) => p.id);
    expect(pillarIds).toEqual([
      'extended-workforce',
      'scaling-orgs',
      'technical-modernization',
      'bridge-academia',
    ]);
    aboutEN.whyHireMe.pillars.forEach((p) => {
      expect(p.quickGrasp.length).toBeGreaterThan(20);
      expect(Array.isArray(p.deepDive)).toBe(true);
      expect(p.deepDive.length).toBeGreaterThanOrEqual(3);
    });
  });

  test('workStyle defines 3 principles including MVG and signal over noise', () => {
    expect(aboutEN.workStyle.principles).toHaveLength(3);
    const principleIds = aboutEN.workStyle.principles.map((p) => p.id);
    expect(principleIds).toEqual([
      'friction-removal',
      'signal-over-noise',
      'telemetry-judgment',
    ]);
    aboutEN.workStyle.principles.forEach((p) => {
      expect(p.quickGrasp.length).toBeGreaterThan(20);
      expect(p.deepDive.length).toBeGreaterThanOrEqual(3);
    });
  });

  test('partnerArchetypes covers 4 distinct stakeholder categories', () => {
    expect(aboutEN.partnerArchetypes.archetypes).toHaveLength(4);
    const archIds = aboutEN.partnerArchetypes.archetypes.map((a) => a.id);
    expect(archIds).toEqual([
      'engineering',
      'finance-legal',
      'product-growth',
      'vendors-extended',
    ]);
    aboutEN.partnerArchetypes.archetypes.forEach((a) => {
      expect(a.quickGrasp.length).toBeGreaterThan(20);
      expect(a.approach.length).toBeGreaterThan(10);
      expect(a.tactics.length).toBeGreaterThanOrEqual(3);
      expect(a.quote.length).toBeGreaterThan(10);
    });
  });

  test('superpowersAndGrowth defines 2 superpowers and 1 calibrated weakness (MVG)', () => {
    expect(aboutEN.superpowersAndGrowth.strengths).toHaveLength(2);
    expect(aboutEN.superpowersAndGrowth.weakness).toBeDefined();
    expect(aboutEN.superpowersAndGrowth.weakness.id).toBe('calibrated-weakness');
    expect(aboutEN.superpowersAndGrowth.weakness.badge).toBe('Minimum Viable Governance (MVG)');
    expect(aboutEN.superpowersAndGrowth.weakness.deepDive).toHaveLength(3);
  });

  test('personalSide covers 3 dimensions of the personal blend', () => {
    expect(aboutEN.personalSide.pillars).toHaveLength(3);
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
