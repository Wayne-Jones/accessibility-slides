import './styles/style.css'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/white.css'
import 'reveal.js/plugin/highlight/monokai.css'

import './styles/nt.css'
import Reveal from 'reveal.js'
import Highlight from 'reveal.js/plugin/highlight/highlight'
import MarkDown from 'reveal.js/plugin/markdown/markdown'
import Notes from 'reveal.js/plugin/notes/notes'
import Zoom from 'reveal.js/plugin/zoom/zoom'

const deck = new Reveal()
deck.initialize({ hash: true, plugins: [ MarkDown, Highlight, Notes, Zoom ], width: 1920, height: 1080 })
