const { buildIcons } = require('rivet-icons')

async function build () {
  await buildIcons({
    icons: ['heart*'],
    include: ['src/assets/*'],
    out: 'build'
  })
}

build()
