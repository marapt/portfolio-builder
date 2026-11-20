import * as aboutEN from './en';
import * as aboutPT from './pt';

describe('About Me dataset & structure', () => {
  test('en and pt exports match expected structure', () => {
    ['aboutHero', 'functionalPillars', 'personalSide', 'closingInvitation'].forEach((exportName) => {
      expect(aboutEN[exportName]).toBeDefined();
      expect(aboutPT[exportName]).toBeDefined();
    });
  });

  test('aboutHero contains exact title, eyebrow, origin story, and scale metrics', () => {
    expect(aboutEN.aboutHero.title).toBe(
      'Global PM Lead & Operations Manager at heart - Expanding Into Enterprise Program Management'
    );
    expect(aboutEN.aboutHero.eyebrow).toBe(
      'Enterprise Program Management & Systems Narrative'
    );
    expect(aboutEN.aboutHero.lead).toContain('broader enterprise PgM');
    expect(aboutPT.aboutHero.title).toBe(
      'Líder Global de PgM & Gestora de Operações de coração - Expansão para a Gestão de Programas Empresariais'
    );
    expect(aboutEN.aboutHero.originStory.title).toBe(
      'My Journey: Language + Tech = Access = User-First'
    );
    expect(aboutEN.aboutHero.originStory.quickGrasp).toContain(
      "clarity isn't cosmetic: it's access"
    );
    expect(aboutPT.aboutHero.originStory.title).toBe(
      'A Minha Jornada: Língua + Tecnologia = Acesso = Foco no Utilizador'
    );
    expect(aboutEN.aboutHero.personalityTraits).toBeDefined();
    expect(aboutEN.aboutHero.personalityTraits.eyebrow).toBe('MY PERSONALITY');
    expect(aboutEN.aboutHero.personalityTraits.title).toBe('How I Work, Lead & Collaborate');
    expect(aboutEN.aboutHero.personalityTraits.traits).toHaveLength(6);
    expect(aboutEN.aboutHero.personalityTraits.traits.map((t) => t.title)).toEqual([
      'Steady Under Pressure',
      'Candid & Accountable',
      'Curious & Adaptable',
      'Constructive in Conflict',
      'Clear Over Clever',
      'Generous Multiplier',
    ]);
    expect(aboutPT.aboutHero.personalityTraits.traits).toHaveLength(6);
    aboutEN.aboutHero.personalityTraits.traits.forEach((t) => {
      expect(t.l6Scope).toMatch(/^Goal:/);
    });
  });

  test('functionalPillars defines exactly 4 calibrated pillars with 3 items each', () => {
    expect(aboutEN.functionalPillars).toHaveLength(4);
    expect(aboutPT.functionalPillars).toHaveLength(4);

    const expectedPillarIds = [
      'why-work-with-me',
      'work-style-habits',
      'connections-presence',
      'value-and-leverage',
    ];

    expect(aboutEN.functionalPillars.map((p) => p.id)).toEqual(expectedPillarIds);
    expect(aboutPT.functionalPillars.map((p) => p.id)).toEqual(expectedPillarIds);

    [aboutEN.functionalPillars, aboutPT.functionalPillars].forEach((pillarList) => {
      pillarList.forEach((pillar) => {
        expect(pillar.title.length).toBeGreaterThan(5);
        expect(pillar.focus.length).toBeGreaterThan(15);
        expect(pillar.items).toHaveLength(3);
        pillar.items.forEach((item) => {
          expect(item.title.length).toBeGreaterThan(3);
          expect(item.description.length).toBeGreaterThan(20);
        });
      });
    });

    const enVal = aboutEN.functionalPillars.find((p) => p.id === 'value-and-leverage');
    const ptVal = aboutPT.functionalPillars.find((p) => p.id === 'value-and-leverage');

    expect(enVal.items.every((it) => Array.isArray(it.proofLinks) && it.proofLinks.length >= 2)).toBe(true);
    expect(ptVal.items.every((it) => Array.isArray(it.proofLinks) && it.proofLinks.length >= 2)).toBe(true);

    const enP2 = aboutEN.functionalPillars.find((p) => p.id === 'work-style-habits');
    const enP3 = aboutEN.functionalPillars.find((p) => p.id === 'connections-presence');
    const ptP2 = aboutPT.functionalPillars.find((p) => p.id === 'work-style-habits');
    const ptP3 = aboutPT.functionalPillars.find((p) => p.id === 'connections-presence');

    expect(enP2.items[2].growthEdge).toContain('over-engineer structure early on');
    expect(enP3.items[2].growthEdge).toContain('add the most leverage');
    expect(ptP2.items[2].growthEdge).toBeDefined();
    expect(ptP3.items[2].growthEdge).toBeDefined();

    expect(aboutEN.functionalPillars[0].focus).toContain('How I tackle');
    expect(aboutEN.functionalPillars[1].focus).toContain('My daily operating');
    expect(aboutEN.functionalPillars[2].focus).toContain('My human presence');
    expect(aboutEN.functionalPillars[3].focus).toContain('grounded in my track');
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

  test('closingInvitation contains 3 action buttons including Resume and zero dashes', () => {
    expect(aboutEN.closingInvitation.actions).toHaveLength(3);
    expect(aboutPT.closingInvitation.actions).toHaveLength(3);
    expect(aboutEN.closingInvitation.actions[1].label).toBe('View Resume');
    expect(aboutPT.closingInvitation.actions[1].label).toBe('Ver Currículo');
    expect(aboutEN.closingInvitation.actions[1].to).toBe('/resume');
    expect(aboutEN.closingInvitation.lead).not.toContain('—');
  });

  test('strictly zero clausal em-dashes (—) in both EN and PT about datasets', () => {
    const rawEn = JSON.stringify(aboutEN);
    const rawPt = JSON.stringify(aboutPT);
    expect(rawEn).not.toContain('—');
    expect(rawPt).not.toContain('—');
  });
});
