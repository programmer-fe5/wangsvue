import { useI18n as vueUseI18n, TranslateOptions } from 'vue-i18n';

export interface TSI18n {
  t: <T = string>(
    /**
     * @param text Text to find the variable name
     */
    text: string,
    plural?: number,
    options?: TranslateOptions<string>,
  ) => T;
}

export const getTranslationKey = (text: string): string => {
  return (
    text
      .trim()
      // Replace spaces with underscores
      .replace(/\s+/g, '_')
  );
};

/**
 *
 * @param text Text from Figma to be translated.
 */
const useI18n = (): TSI18n => {
  const { t: translate } = vueUseI18n();

  const t = <T = string>(
    text: string,
    plural?: number,
    options?: TranslateOptions<string> | undefined,
  ): T => {
    const key = getTranslationKey(text);
    if (plural) {
      return translate(key, plural, options) as T;
    }

    return translate(key, options as Record<string, unknown>).replaceAll(
      '_',
      ' ',
    ) as T;
  };

  return { t };
};

export default useI18n;
