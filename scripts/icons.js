const { buildIcons } = require('rivet-icons')

async function build () {
  await buildIcons({
    icons: ['heart*'],
    out: 'build'
  })
}

build()
