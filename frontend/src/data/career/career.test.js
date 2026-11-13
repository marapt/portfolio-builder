import fs from 'fs';
import path from 'path';
import { pillars, pillarMeta, railYears, futureYears, timelineItems } from './en';

describe('career timeline placeholder dataset', () => {
  test('railYears continuously covers every year from 2006 through 2026', () => {
    expect(railYears[0]).toBe(2006);
    expect(railYears[railYears.length - 1]).toBe(2026);
    expect(railYears).toHaveLength(21);

    for (let i = 1; i < railYears.length; i += 1) {
      expect(railYears[i]).toBe(railYears[i - 1] + 1);
    }
  });

  test('futureYears includes 2027, 2028, and 2029+', () => {
    expect(futureYears).toEqual(['2027', '2028', '2029+']);
  });

  test('every role, internship, and group item enforces the Rule of 3 metrics (scale, velocity, quality)', () => {
    const metricItems = timelineItems.filter(
      (item) => item.type === 'role' || item.type === 'internship' || item.type === 'group'
    );
    expect(metricItems.length).toBeGreaterThanOrEqual(10);

    metricItems.forEach((item) => {
      expect(Array.isArray(item.metrics)).toBe(true);
      expect(item.metrics).toHaveLength(3);
      expect(item.metrics.map((m) => m.kind)).toEqual(['scale', 'velocity', 'quality']);
    });
  });

  test('every item pillar tag references a valid pillarMeta key and defined filter pillar', () => {
    const validFilterIds = new Set(pillars.filter((p) => p.id !== 'all').map((p) => p.id));
    const metaKeys = new Set(Object.keys(pillarMeta));

    timelineItems.forEach((item) => {
      expect(Array.isArray(item.pillars)).toBe(true);
      expect(item.pillars.length).toBeGreaterThan(0);

      item.pillars.forEach((pillarId) => {
        expect(validFilterIds.has(pillarId)).toBe(true);
        expect(metaKeys.has(pillarId)).toBe(true);
      });
    });
  });

  test('timeline includes separate RTP & EU DGT internships, Sony PT, Sony UK, Hogarth UK, graduation, relocation, Apple 2026, and future placeholders', () => {
    const ids = new Set(timelineItems.map((item) => item.id));
    expect(ids.has('rtp')).toBe(true);
    expect(ids.has('eu-dgt')).toBe(true);
    expect(ids.has('sony-pt')).toBe(true);
    expect(ids.has('portugal-eu')).toBe(false);
    expect(ids.has('graduation')).toBe(true);
    expect(ids.has('relocation-pt-uk')).toBe(true);
    expect(ids.has('sony-uk')).toBe(true);
    expect(ids.has('hogarth-uk')).toBe(true);
    expect(ids.has('foundations')).toBe(false);
    expect(ids.has('relocation')).toBe(true);
    expect(ids.has('ai-rnd')).toBe(false);
    expect(ids.has('apple-2026')).toBe(true);
    expect(ids.has('future-2027')).toBe(true);
    expect(ids.has('future-2028')).toBe(true);
    expect(ids.has('future-2029')).toBe(true);

    const ptUk = timelineItems.find((item) => item.id === 'relocation-pt-uk');
    expect(ptUk.type).toBe('break');
    expect(ptUk.startYear).toBe(2007);
    expect(ptUk.countryFlag).toBe('🇵🇹→🇬🇧');
    expect(ptUk.chipLabel).toBe('PT - UK Relocation');

    const ukUsa = timelineItems.find((item) => item.id === 'relocation');
    expect(ukUsa.chipLabel).toBe('UK - USA Relocation');

    const rtp = timelineItems.find((item) => item.id === 'rtp');
    const euDgt = timelineItems.find((item) => item.id === 'eu-dgt');
    expect(rtp.type).toBe('internship');
    expect(euDgt.type).toBe('internship');
    expect(euDgt.company).toContain('EU Directorate-General for Translation');

    const graduation = timelineItems.find((item) => item.id === 'graduation');
    expect(timelineItems[0].id).toBe('graduation');
    expect(graduation.startYear).toBe(2001);
    expect(graduation.endYear).toBe(2007);
    expect(graduation.subLabel).toBe('2001–2007 · Degree');

    const apple2026 = timelineItems.find((item) => item.id === 'apple-2026');
    expect(apple2026.isToday).toBeFalsy();
    expect(apple2026.subLabel).toBe('May–Sep 2026 · Contract');
  });

  test('every item logo points to an existing asset inside frontend/public/company-logos', () => {
    const publicDir = path.resolve(__dirname, '../../../public');
    const withLogo = timelineItems.filter((item) => item.logo);
    expect(withLogo.length).toBeGreaterThanOrEqual(12);

    withLogo.forEach((item) => {
      expect(item.logo.startsWith('/company-logos/')).toBe(true);
      const assetPath = path.join(publicDir, item.logo);
      expect(fs.existsSync(assetPath)).toBe(true);
    });
  });

  test('every item defines a countryFlag and location, with Belgium flag for EU DGT', () => {
    timelineItems.forEach((item) => {
      expect(typeof item.countryFlag).toBe('string');
      expect(item.countryFlag.length).toBeGreaterThan(0);
      expect(typeof item.location).toBe('string');
      expect(item.location.length).toBeGreaterThan(0);
    });

    const euDgt = timelineItems.find((item) => item.id === 'eu-dgt');
    expect(euDgt.countryFlag).toBe('🇧🇪');
    expect(euDgt.location).toBe('Brussels, Belgium');
  });

  test('MIIS role preserves verified metrics, official live/institutional links, archive note, and snapshot paths', () => {
    const miis = timelineItems.find((item) => item.id === 'miis');
    expect(miis).toBeDefined();
    expect(miis.pillars).toEqual(['leadership', 'ai', 'education']);
    expect(miis.title).toBe(
      'Visiting Professor — Program Management (TLM)'
    );
    expect(miis.summaryHeading).toBe(
      'Driving Program Growth & Industry Readiness Through Cross-Departmental Initiatives'
    );
    expect(miis.summary).toBe(
      'Invited as Visiting Professor to modernize the flagship TLM/PGM curriculum, bridging academic training with enterprise program management standards. Spearheaded the first AI Series and forged institutional partnerships across faculty, admissions and careers with partners ranging from SMB to Fortune 500 tech leaders, accelerating cohort growth and professional readiness.'
    );
    expect(miis.executionSummary.heading).toBe('Execution & Delivery:');
    expect(miis.executionSummary.items.map((item) => item.label)).toEqual([
      'Strategy & Architecture:',
      'Cross-Functional Execution:',
      'Growth & Mentorship:',
    ]);
    expect(miis.metrics.map((m) => m.value)).toEqual([
      '90–120 PMs Upskilled',
      '+133% YoY Track Growth',
      '95%',
    ]);
    expect(miis.metrics[0].label).toBe('#1 Degree Program at MIIS · ~24% of MIIS Enrollment');
    expect(miis.metrics[1].label).toBe('120 Active Cohort / Online LPRM Track (15 → 35)');
    expect(miis.metrics[2].label).toBe('AI in Localization Series Attendance');
    expect(miis.metrics.every((m) => m.placeholder === false)).toBe(true);
    expect(miis.evidence).toBeDefined();
    expect(miis.evidence.note).toContain('Wayback Machine');
    expect(miis.evidence.snapshots.map((s) => s.src)).toEqual([
      '/evidence/miis-faculty-profile.png',
      '/evidence/miis-institutional-data.png',
    ]);
    const publicDir = path.resolve(__dirname, '../../../public');
    miis.evidence.snapshots.forEach((snap) => {
      const filePath = path.join(publicDir, snap.src.replace(/^\//, ''));
      expect(fs.existsSync(filePath)).toBe(true);
    });

    const urls = miis.evidence.links.map((l) => l.url || l.to);
    expect(urls).toContain('https://www.middlebury.edu/institute/people/mara-martins');
    expect(urls).toContain(
      'https://web.archive.org/web/20250211181739/https://www.middlebury.edu/institute/people/mara-martins'
    );
    expect(urls).toContain(
      'https://www.middlebury.edu/assessment-institutional-research/institutional-data/middlebury-institute-international-studies'
    );
    expect(
      urls.some((u) => u.includes('1qmiDN6Fvu-KuIWHfyv86-J6smzbcjCZvYjf1c4tKLUk'))
    ).toBe(false);
    expect(urls).toContain('/project/localization-training-program');

    const highlightTexts = miis.highlights.map((h) => (typeof h === 'string' ? h : h.text));
    expect(highlightTexts.some((t) => t.includes('Responsible AI & Quality Assessment Scorecard'))).toBe(
      false
    );
    expect(miis.highlights[0].url).toBe(
      'https://maramartins.com/project/localization-training-program'
    );
  });
});
