export const languageCodeToName = (
  languageCode: string,
  displayLanguage?: string
) => {
  const defaultLanguages = navigator.languages
  const realDisplayLanguages = displayLanguage
    ? [displayLanguage]
    : defaultLanguages
  return new Intl.DisplayNames(realDisplayLanguages, {
    type: "language",
  }).of(languageCode)
}
