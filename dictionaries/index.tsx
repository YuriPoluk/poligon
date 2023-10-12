// import 'server-only'
import en from './en'
import ua from './ua'
 
const dictionaries = {
  en,
  ua
}
 
export const getDictionary = (locale: 'en' | 'ua') => dictionaries[locale]