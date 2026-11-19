import { useTranslation } from 'react-i18next';
import * as careerEn from './en';

/**
 * Returns localized career timeline data.
 * Phase 1 ships English first; adding ./pt.js in P2 requires only switching here.
 */
export function useCareerData() {
  const { i18n } = useTranslation();
  const isPt = i18n.language && i18n.language.startsWith('pt');

  return {
    ...careerEn,
    isFallbackLanguage: isPt,
  };
}
