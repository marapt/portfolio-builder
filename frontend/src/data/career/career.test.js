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

  test('education, program, and leadership pillars map correctly to milestone and role items', () => {
    const eduIds = timelineItems.filter((i) => i.pillars.includes('education')).map((i) => i.id);
    expect(eduIds).toEqual(['graduation', 'rtp', 'eu-dgt', 'miis', 'postgrad-education']);

    const vendorIds = timelineItems.filter((i) => i.pillars.includes('vendor')).map((i) => i.id);
    expect(vendorIds).toEqual(['apple-2014', 'microsoft', 'linkedin', 'block', 'apple-2026']);

    const msft = timelineItems.find((i) => i.id === 'microsoft');
    expect(msft.pillars).toContain('program');

    const linkedin = timelineItems.find((i) => i.id === 'linkedin');
    expect(linkedin.pillars).toContain('leadership');

    const block = timelineItems.find((i) => i.id === 'block');
    expect(block.pillars).toContain('leadership');
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
      'Visiting Professor, Program Management (TLM)'
    );
    expect(miis.summaryHeading).toBe(
      'Driving Program Growth & Industry Readiness Through Cross-Departmental Initiatives'
    );
    expect(miis.summary).toBe(
      'Invited as Visiting Professor to modernize the flagship TLM/PGM curriculum, bridging academic training with enterprise program management standards. Created and launched the institute\'s first AI Series and forged institutional partnerships across faculty, admissions, and careers with partners ranging from SMB to Fortune 500 tech leaders, accelerating cohort growth and professional readiness.'
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
    expect(miis.metrics[1].label).toBe('120 Active Cohort / Online LPRM Track (15 to 35 Students)');
    expect(miis.metrics[2].label).toBe('AI in Localization Series Attendance');
    expect(miis.metrics.every((m) => m.placeholder === false)).toBe(true);
    expect(miis.evidence).toBeDefined();
    expect(miis.evidence.note).toContain('Wayback Machine');
    expect(miis.evidence.sections.map((s) => s.id)).toEqual([
      'institutional-profile',
      'professional-development',
    ]);
    expect(miis.evidence.snapshots.map((s) => s.src)).toEqual([
      '/evidence/miis-faculty-profile.png',
      '/evidence/miis-institutional-data.png',
      '/evidence/miis-wlpt-2025-event.png',
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

  test('Block role preserves verified Investor Day, 3Q22 Shareholder Letter, rebrand metrics, proof links, and archive files', () => {
    const block = timelineItems.find((item) => item.id === 'block');
    expect(block).toBeDefined();
    expect(block.company).toBe('Block (formerly Square, Inc.)');
    expect(block.title).toBe('Program Management Lead');
    expect(block.placeholder).toBe(false);
    expect(block.metrics.map((m) => m.value)).toEqual([
      '5 to 15 PMs (3×)',
      '+55% YoY CC GPV*',
      '9% to 15% Share**',
    ]);
    expect(block.metrics.map((m) => m.focus)).toEqual([
      'Team Scale',
      'Payment Velocity',
      'Profit Share',
    ]);
    expect(block.metrics.every((m) => m.placeholder === false)).toBe(true);
    expect(block.metricsFootnote).toContain('Investor Day');
    expect(block.metricsFootnote).toContain('Q3 2022 Shareholder Letter');
    expect(block.metricsFootnoteItems).toHaveLength(3);
    expect(block.metricsFootnoteItems.map((i) => i.marker)).toEqual(['*', '**', '•']);
    expect(block.metricsFootnoteItems.some((i) => i.title.includes('FY22 9M YTD'))).toBe(true);
    expect(Array.isArray(block.glossary)).toBe(true);
    expect(block.glossary.map((g) => g.id)).toEqual(
      expect.arrayContaining(['gaap', 'ex-bnpl', 'gpv', 'constant-currency', 'periods'])
    );
    expect(block.evidence).toBeDefined();
    expect(block.evidence.sections.map((s) => s.id)).toEqual([
      'expansion',
      'rebrand',
      'markets',
      'roi',
      'professional-development',
    ]);
    expect(block.evidence.note).toContain('Wayback Machine');
    expect(block.evidence.note).toContain('PDF archive');
    expect(block.evidence.snapshots.map((s) => s.src)).toEqual([
      '/evidence/block-investor-day-slide26.png',
      '/evidence/block-investor-day-slide31.png',
      '/evidence/block-q3-2022-expanding-globally.png',
      '/evidence/block-rebrand-announcement.png',
      '/evidence/block-square-about-2022.png',
      '/evidence/block-square-france.png',
      '/evidence/block-square-spain.png',
      '/evidence/block-square-canada.png',
      '/evidence/block-investor-day-slide27.png',
      '/evidence/block-q3-2022-intl-reconciliation.png',
      '/evidence/block-q3-2022-intl-gpv.png',
      '/evidence/block-icem-2022-conference.png',
    ]);
    const publicDir = path.resolve(__dirname, '../../../public');
    block.evidence.snapshots.forEach((snap) => {
      const filePath = path.join(publicDir, snap.src.replace(/^\//, ''));
      expect(fs.existsSync(filePath)).toBe(true);
      (snap.extraSlides || []).forEach((extra) => {
        const extraPath = path.join(publicDir, extra.src.replace(/^\//, ''));
        expect(fs.existsSync(extraPath)).toBe(true);
      });
    });
    const aboutSnap = block.evidence.snapshots.find(
      (s) => s.src === '/evidence/block-square-about-2022.png'
    );
    expect(aboutSnap.extraSlides.map((e) => e.src)).toEqual([
      '/evidence/block-square-about-2021.png',
    ]);
    expect(fs.existsSync(path.join(publicDir, 'evidence/block-square-about-archive.pdf'))).toBe(
      true
    );
    const slide31Snap = block.evidence.snapshots.find(
      (s) => s.src === '/evidence/block-investor-day-slide31.png'
    );
    expect(slide31Snap.extraSlides.map((e) => e.src)).toEqual([
      '/evidence/block-investor-day-slide32.png',
    ]);
    const roiSection = block.evidence.sections.find((s) => s.id === 'roi');
    expect(roiSection.reconciliation).toHaveLength(4);
    const urls = block.evidence.links.map((l) => l.url);
    expect(urls).toContain('https://squareup.com/us/en/about');
    expect(urls).toContain(
      'https://web.archive.org/web/20261108180332/https://squareup.com/us/en/about'
    );
    expect(urls).toContain('/evidence/block-square-about-archive.pdf');
    expect(urls).toContain('https://block.xyz/inside/press-release-block');
    expect(urls).toContain('https://developer.squareup.com/blog/square-launches-in-france/');
    expect(urls).toContain(
      'https://squareup.com/us/es/press/square-announces-official-launch-in-spain-after-successful-early-access-programme'
    );
    expect(urls).toContain(
      'https://www.businesswire.com/news/home/20220428005090/en/Launch-of-Square-Loans-Offers-Quick-Simple-Access-to-Funds-for-Canadian-Businesses'
    );
    expect(urls).toContain(
      'https://s29.q4cdn.com/628966176/files/doc_presentations/2022/05/Square-Block-Investor-Day-2022.pdf'
    );
    expect(urls).toContain(
      'https://s29.q4cdn.com/628966176/files/doc_financials/2022/q3/Block_Shareholder-Letter-3Q22.pdf'
    );
  });

  test('ESTG milestone preserves redacted BA/Licentiate certificate assets, institutional links, and archive record without exposing Drive URL', () => {
    const estg = timelineItems.find((item) => item.id === 'graduation');
    expect(estg).toBeDefined();
    expect(estg.placeholder).toBe(false);
    expect(estg.summary).toContain('organizational psychology, law, economics, and computer science');
    expect(estg.highlights).toHaveLength(3);
    expect(estg.highlights[0]).toContain('two-stage 5-year degree program');
    expect(estg.highlights[0]).not.toMatch(/biet[aá]pico/i);
    expect(estg.highlights[1]).toContain('Work and Organizational Psychology');
    expect(estg.highlights[1]).toContain('Introduction to Law');
    expect(estg.highlights[1]).toContain('Introduction to Economics');
    expect(estg.highlights[1]).toContain('Computer Science (I–II)');
    expect(estg.evidence).toBeDefined();
    expect(estg.evidence.note).toContain('0–20 grading scale');
    expect(estg.evidence.note).toContain('Wayback Machine');
    expect(estg.evidence.snapshots.map((s) => s.src)).toEqual([
      '/evidence/estg-bachelor-certificate-redacted.png',
      '/evidence/estg-ipleiria-en.png',
    ]);
    const publicDir = path.resolve(__dirname, '../../../public');
    estg.evidence.snapshots.forEach((snap) => {
      expect(fs.existsSync(path.join(publicDir, snap.src.replace(/^\//, '')))).toBe(true);
      (snap.extraSlides || []).forEach((extra) => {
        expect(fs.existsSync(path.join(publicDir, extra.src.replace(/^\//, '')))).toBe(true);
      });
    });
    expect(estg.evidence.snapshots[0].extraSlides.map((e) => e.src)).toEqual([
      '/evidence/estg-licentiate-certificate-redacted.png',
    ]);
    expect(fs.existsSync(path.join(publicDir, 'evidence/estg-course-certificates-redacted.pdf'))).toBe(
      true
    );

    const urls = estg.evidence.links.map((l) => l.url);
    expect(urls).toContain('https://www.ipleiria.pt/en/');
    expect(urls).toContain('https://www.ipleiria.pt/en/about-us/schools/estg/');
    expect(urls).toContain('https://web.archive.org/web/20261030153521/https://www.ipleiria.pt/en/');
    expect(urls).toContain('/evidence/estg-course-certificates-redacted.pdf');
    expect(urls.some((u) => u.includes('1UVqB7epqcwLu_4TjSobLelVLWLj0LcTt'))).toBe(false);
  });

  test('linkedin item captures verified Stories rollout waves, MSP operating model, Creator pivot, and MSFT IR earnings assets', () => {
    const linkedin = timelineItems.find((i) => i.id === 'linkedin');
    expect(linkedin).toBeDefined();
    expect(linkedin.placeholder).toBe(false);
    expect(linkedin.title).toBe('Senior Localization Marketing Manager');
    expect(linkedin.period).toBe('Mar 2020 – Oct 2021');
    expect(linkedin.metrics.map((m) => m.value)).toEqual([
      '26 Langs · 17 Mkts',
      '-30% Turnaround',
      '+97% Mktg Solns*',
    ]);
    expect(linkedin.metricsFootnote).toContain('Commercial Context (MSFT IR FY21 Q4)');
    expect(linkedin.metricsFootnote).toContain('Microsoft Investor Relations FY21 Q4 results');
    expect(linkedin.metricsFootnoteItems).toBeUndefined();

    expect(linkedin.executionSummary.items).toHaveLength(3);
    expect(linkedin.glossary.length).toBeGreaterThanOrEqual(5);
    expect(linkedin.glossary.every((g) => Boolean(g.definition && g.shortLabel))).toBe(true);
    expect(linkedin.evidence).toBeDefined();
    expect(linkedin.evidence.sections.map((s) => s.id)).toEqual([
      'rollouts',
      'operating-model',
      'creator-pivot',
      'roi',
      'professional-development',
    ]);

    const operatingSection = linkedin.evidence.sections.find((s) => s.id === 'operating-model');
    expect(operatingSection.reconciliation).toHaveLength(3);

    const roiSection = linkedin.evidence.sections.find((s) => s.id === 'roi');
    expect(roiSection.glossaryId).toBe('mktg-solutions');
    expect(roiSection.reconciliation).toHaveLength(6);

    const publicDir = path.resolve(__dirname, '../../../public');
    const allSnapshots = linkedin.evidence.sections.flatMap((s) => s.snapshots || []);
    expect(allSnapshots).toHaveLength(14);
    allSnapshots.forEach((snap) => {
      expect(fs.existsSync(path.join(publicDir, snap.src.replace(/^\//, '')))).toBe(true);
      (snap.extraSlides || []).forEach((extra) => {
        expect(fs.existsSync(path.join(publicDir, extra.src.replace(/^\//, '')))).toBe(true);
      });
    });

    const serialized = JSON.stringify(linkedin);
    ['Mariana B.', 'John R.', 'Samantha L.', 'Tom W.', 'Sarah M.', 'David H.'].forEach(
      (excludedName) => {
        expect(serialized).not.toContain(excludedName);
      }
    );
  });

  test('eu-dgt preserves local permanent Brussels throwback and LinkedIn comment screenshots', () => {
    const euDgt = timelineItems.find((item) => item.id === 'eu-dgt');
    expect(euDgt).toBeDefined();
    expect(euDgt.evidence?.links).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          url: 'https://www.linkedin.com/feed/update/urn:li:share:6783835458033061888/',
        }),
      ])
    );

    const snapshot = euDgt.evidence?.snapshots?.[0];
    expect(snapshot?.src).toBe('/evidence/eu-dgt-brussels-visitor-photo.png');
    expect(snapshot?.extraSlides?.[0]?.src).toBe(
      '/evidence/eu-dgt-carla-linkedin-comment.png'
    );

    const publicDir = path.join(__dirname, '..', '..', '..', 'public');
    expect(
      fs.existsSync(path.join(publicDir, snapshot.src.replace(/^\//, '')))
    ).toBe(true);
    expect(
      fs.existsSync(
        path.join(publicDir, snapshot.extraSlides[0].src.replace(/^\//, ''))
      )
    ).toBe(true);
  });

  test('postgrad-education milestone and consistent Professional Development & Community Contributions sections verify all credential and conference assets', () => {
    const publicDir = path.resolve(__dirname, '../../../public');

    const postgrad = timelineItems.find((item) => item.id === 'postgrad-education');
    expect(postgrad).toBeDefined();
    expect(postgrad.type).toBe('milestone');
    expect(postgrad.placeholder).toBe(false);
    expect(postgrad.evidence.sections.map((s) => s.id)).toEqual([
      'ai-stanford-credentials',
      'linkedin-learning-certificates',
      'superlearning-library',
    ]);

    const postgradSnaps = postgrad.evidence.sections.flatMap((s) => s.snapshots || []);
    expect(postgradSnaps).toHaveLength(11);
    postgradSnaps.forEach((snap) => {
      expect(fs.existsSync(path.join(publicDir, snap.src.replace(/^\//, '')))).toBe(true);
      (snap.extraSlides || []).forEach((extra) => {
        expect(fs.existsSync(path.join(publicDir, extra.src.replace(/^\//, '')))).toBe(true);
      });
    });
    expect(fs.existsSync(path.join(publicDir, 'evidence/stanford-wsp116-certificate.pdf'))).toBe(
      true
    );
    expect(
      fs.existsSync(
        path.join(publicDir, 'evidence/cert-google-project-management-foundations.png')
      )
    ).toBe(true);

    const msft = timelineItems.find((item) => item.id === 'microsoft');
    expect(msft.evidence.sections[0].title).toContain(
      'Professional Development & Community Contributions'
    );
    msft.evidence.sections[0].snapshots.forEach((snap) => {
      expect(fs.existsSync(path.join(publicDir, snap.src.replace(/^\//, '')))).toBe(true);
    });
    expect(msft.evidence.sections).toHaveLength(2);
    expect(msft.evidence.sections[1].id).toBe('careers-site-revamp');
    expect(msft.evidence.sections[1].links.some((l) => l.url.includes('phenom.com'))).toBe(true);
    expect(msft.evidence.sections[1].links.some((l) => l.url.includes('globenewswire.com'))).toBe(true);
    expect(msft.evidence.sections[1].links.some((l) => l.url.includes('contractor-roles.html'))).toBe(true);
    expect(msft.evidence.sections[1].links.some((l) => l.url.includes('talentnet.community'))).toBe(true);
  });

  test('Hogarth UK role contains verified metrics, client account highlights, and HTC Change brand evidence', () => {
    const publicDir = path.resolve(__dirname, '../../../public');
    const hogarth = timelineItems.find((item) => item.id === 'hogarth-uk');
    expect(hogarth).toBeDefined();
    expect(hogarth.placeholder).toBe(false);
    expect(hogarth.title).toBe('Transcreation Program Manager');
    expect(hogarth.company).toBe('Hogarth Worldwide (London, United Kingdom)');
    expect(hogarth.metrics.map((m) => m.value)).toEqual([
      '30+ mkts',
      '10+ team',
      'Digital, Print, ATL',
    ]);
    expect(hogarth.evidence).toBeDefined();
    expect(hogarth.evidence.sections).toHaveLength(1);
    expect(hogarth.evidence.sections[0].id).toBe('htc-global-brand');
    expect(hogarth.evidence.sections[0].snapshots).toHaveLength(6);

    hogarth.evidence.sections[0].snapshots.forEach((snap) => {
      const assetPath = path.join(publicDir, (snap.image || snap.src).replace(/^\//, ''));
      expect(fs.existsSync(assetPath)).toBe(true);
      if (Array.isArray(snap.extraSlides)) {
        snap.extraSlides.forEach((extra) => {
          expect(fs.existsSync(path.join(publicDir, extra.src.replace(/^\//, '')))).toBe(true);
        });
      }
    });
  });

  test('RTP internship contains verified metrics, subtitling highlights, and Google Doc internship report evidence', () => {
    const publicDir = path.resolve(__dirname, '../../../public');
    const rtp = timelineItems.find((item) => item.id === 'rtp');
    expect(rtp).toBeDefined();
    expect(rtp.placeholder).toBe(false);
    expect(rtp.company).toBe('RTP (Rádio e Televisão de Portugal)');
    expect(rtp.metrics.map((m) => m.value)).toEqual([
      '1,100+ hrs/yr',
      '6 genres',
      '100% ITC/BBC',
    ]);
    expect(rtp.evidence).toBeDefined();
    expect(rtp.evidence.sections).toHaveLength(2);
    expect(rtp.evidence.sections[0].id).toBe('rtp-internship-report');
    expect(rtp.evidence.sections[0].snapshots).toHaveLength(1);

    const assetPath = path.join(
      publicDir,
      rtp.evidence.sections[0].snapshots[0].src.replace(/^\//, '')
    );
    expect(fs.existsSync(assetPath)).toBe(true);
  });

  test('Sony Portugal role contains verified metrics, change management highlights, and Google Doc report evidence', () => {
    const publicDir = path.resolve(__dirname, '../../../public');
    const sonyPt = timelineItems.find((item) => item.id === 'sony-pt');
    expect(sonyPt).toBeDefined();
    expect(sonyPt.placeholder).toBe(false);
    expect(sonyPt.company).toBe('Sony Portugal (Lisbon, Portugal)');
    expect(sonyPt.metrics.map((m) => m.value)).toEqual([
      '39 events',
      '3 systems',
      '12,000 hrs*',
    ]);
    expect(sonyPt.evidence).toBeDefined();
    expect(sonyPt.evidence.sections).toHaveLength(3);
    expect(sonyPt.evidence.sections[0].id).toBe('spt-rtp-change-management');
    expect(sonyPt.evidence.sections[2].id).toBe('spt-market-scale-benchmark');
    expect(sonyPt.evidence.sections[0].snapshots).toHaveLength(2);

    sonyPt.evidence.sections[0].snapshots.forEach((snap) => {
      const assetPath = path.join(publicDir, (snap.image || snap.src).replace(/^\//, ''));
      expect(fs.existsSync(assetPath)).toBe(true);
    });
  });
});
