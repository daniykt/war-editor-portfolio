// Regras do cn para as typographies do Custom Editing Kit (issue #31).
// Lido pelo plugin cn/vite no build. Ver src/index.css (@utility text-*).
export default {
  extend: {
    classGroups: {
      typography: [{ text: ['display', 'headline', 'body', 'caption'] }],
      'typography-label': [{ text: ['label'] }],
    },
    conflictingClassGroups: {
      typography: ['typography-label', 'font-size', 'font-weight', 'leading', 'tracking', 'font-family'],
      'typography-label': ['typography', 'font-size', 'font-weight', 'leading', 'tracking', 'font-family', 'text-transform'],
      'font-size': ['typography', 'typography-label'],
    },
  },
}
