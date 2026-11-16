import { createCn } from 'cn/config'

// Ensina o cn que as typographies do Custom Editing Kit são tamanho de texto, não cor
export const cn = createCn({
  extend: {
    classGroups: {
      'font-size': [{ text: ['display', 'headline', 'body', 'caption', 'label'] }],
    },
  },
})