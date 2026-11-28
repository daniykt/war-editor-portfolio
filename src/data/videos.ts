import type { TranslationKey } from '@/i18n/types'

export type VideoFormat = 'landscape' | 'portrait'
export type VideoCategory = 'talking-head' | 'motion'

export type Video = {
  id: string // ID do YouTube (o trecho depois de v= ou de /shorts/)
  titleKey: TranslationKey
  category: VideoCategory
  format: VideoFormat
  thumbnail?: string // opcional: capa própria em vez da do YouTube
}

// TODO: títulos reais do Felipe (hoje provisórios no i18n)
export const videos: readonly Video[] = [
  { id: 'r_uNT8lOPr0', titleKey: 'videos.th1.title', category: 'talking-head', format: 'landscape' },
  { id: 'qqqibaB-rbk', titleKey: 'videos.th2.title', category: 'talking-head', format: 'landscape' },
  { id: 'uDB9e9qUeH4', titleKey: 'videos.th3.title', category: 'talking-head', format: 'landscape' },
  { id: 'ApgRVtDgl7M', titleKey: 'videos.th4.title', category: 'talking-head', format: 'landscape' },
  // TODO: confirmar a categoria dos reels
  { id: 'SmUtlii7iT8', titleKey: 'videos.th5.title', category: 'talking-head', format: 'portrait' },
  { id: 'g7SNBUlZRZQ', titleKey: 'videos.th6.title', category: 'talking-head', format: 'portrait' },
  { id: 'scu7YDEU5kc', titleKey: 'videos.mo1.title', category: 'motion', format: 'landscape' },
  { id: 'ZZe3TkmJmP8', titleKey: 'videos.mo2.title', category: 'motion', format: 'landscape' },
]

// Fica fora da lista: não pertence a nenhuma seção e é sempre o 00
export const SHOWREEL = {
  id: 'tfsiIacPvfI',
  titleKey: 'hero.videoTitle',
  format: 'landscape',
} satisfies Omit<Video, 'category'>

export function getThumbnail({ id, format, thumbnail }: Pick<Video, 'id' | 'format' | 'thumbnail'>) {
  if (thumbnail) return thumbnail
  const file = format === 'portrait' ? 'oardefault' : 'hqdefault'
  return `https://i.ytimg.com/vi/${id}/${file}.jpg`
}
