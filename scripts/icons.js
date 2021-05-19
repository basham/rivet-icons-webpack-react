const { buildIcons } = require('rivet-icons')

async function build () {
  await buildIcons({
    icons: ['arrow*'],
    out: 'build'
  })
}

build()
