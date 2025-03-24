import React from 'react'
import { DonutChartProps } from 'types'

interface DataItem {
  start_degree: number
  end_degree: number
  color: string
}

const colors = {
  '1c-enterprise': '#814CCC',
  '2-dimensional-array': '#38761D',
  '4d': '#004289',
  abap: '#E8274B',
  'abap-cds': '#555e25',
  actionscript: '#882B0F',
  ada: '#02f88c',
  'adblock-filter-list': '#800000',
  'adobe-font-metrics': '#fa0f00',
  agda: '#315665',
  'ags-script': '#B9D9FF',
  aidl: '#34EB6B',
  al: '#3AA2B5',
  alloy: '#64C800',
  'alpine-abuild': '#0D597F',
  'altium-designer': '#A89663',
  ampl: '#E6EFBB',
  angelscript: '#C7D7DC',
  'ant-build-system': '#A9157E',
  antlers: '#ff269e',
  antlr: '#9DC3FF',
  apacheconf: '#d12127',
  apex: '#1797c0',
  'api-blueprint': '#2ACCA8',
  apl: '#5A8164',
  'apollo-guidance-computer': '#0B3D91',
  applescript: '#101F1F',
  arc: '#aa2afe',
  asciidoc: '#73a0c5',
  asl: null,
  'asp.net': '#9400ff',
  aspectj: '#a957b0',
  assembly: '#6E4C13',
  astro: '#ff5a03',
  asymptote: '#ff0000',
  ats: '#1ac620',
  augeas: '#9CC134',
  autohotkey: '#6594b9',
  autoit: '#1C3552',
  'avro-idl': '#0040FF',
  awk: '#c30e9b',
  ballerina: '#FF5000',
  basic: '#ff0000',
  batchfile: '#C1F12E',
  beef: '#a52f4e',
  befunge: null,
  berry: '#15A13C',
  bibtex: '#778899',
  bicep: '#519aba',
  bikeshed: '#5562ac',
  bison: '#6A463F',
  bitbake: '#00bce4',
  blade: '#f7523f',
  blitzbasic: '#00FFAE',
  blitzmax: '#cd6400',
  bluespec: '#12223c',
  'bluespec-bh': '#12223c',
  boo: '#d4bec1',
  boogie: '#c80fa0',
  brainfuck: '#2F2530',
  brighterscript: '#66AABB',
  brightscript: '#662D91',
  browserslist: '#ffd539',
  c: '#555555',
  'c#': '#178600',
  'c++': '#f34b7d',
  'c2hs-haskell': null,
  'cabal-config': '#483465',
  cadence: '#00ef8b',
  cairo: '#ff4a48',
  cameligo: '#3be133',
  'cap-cds': '#0092d1',
  "cap'n-proto": '#c42727',
  cartocss: null,
  ceylon: '#dfa535',
  chapel: '#8dc63f',
  charity: null,
  chuck: '#3f8000',
  circom: '#707575',
  cirru: '#ccccff',
  clarion: '#db901e',
  clarity: '#5546ff',
  'classic-asp': '#6a40fd',
  clean: '#3F85AF',
  click: '#E4E6F3',
  clips: '#00A300',
  clojure: '#db5855',
  'closure-templates': '#0d948f',
  'cloud-firestore-security-rules': '#FFA000',
  cmake: '#DA3434',
  cobol: null,
  codeql: '#140f46',
  coffeescript: '#244776',
  coldfusion: '#ed2cd6',
  'coldfusion-cfc': '#ed2cd6',
  collada: '#F1A42B',
  'common-lisp': '#3fb68b',
  'common-workflow-language': '#B5314C',
  'component-pascal': '#B0CE4E',
  cool: null,
  coq: '#d0b68c',
  crystal: '#000100',
  cson: '#244776',
  csound: '#1a1a1a',
  'csound-document': '#1a1a1a',
  'csound-score': '#1a1a1a',
  css: '#563d7c',
  csv: '#237346',
  cuda: '#3A4E3A',
  cue: '#5886E1',
  curry: '#531242',
  cweb: '#00007a',
  cycript: null,
  cypher: '#34c0eb',
  cython: '#fedf5b',
  d: '#ba595e',
  d2: '#526ee8',
  dafny: '#FFEC25',
  'darcs-patch': '#8eff23',
  dart: '#00B4AB',
  dataweave: '#003a52',
  'debian-package-control-file': '#D70751',
  denizenscript: '#FBEE96',
  dhall: '#dfafff',
  'digital-command-language': null,
  'directx-3d-file': '#aace60',
  dm: '#447265',
  dockerfile: '#384d54',
  dogescript: '#cca760',
  dotenv: '#e5d559',
  dtrace: null,
  dylan: '#6c616e',
  e: '#ccce35',
  earthly: '#2af0ff',
  easybuild: '#069406',
  ec: '#913960',
  'ecere-projects': '#913960',
  ecl: '#8a1267',
  eclipse: '#001d9d',
  ecmarkup: '#eb8131',
  edgeql: '#31A7FF',
  editorconfig: '#fff1f2',
  eiffel: '#4d6977',
  ejs: '#a91e50',
  elixir: '#6e4a7e',
  elm: '#60B5CC',
  elvish: '#55BB55',
  'elvish-transcript': '#55BB55',
  'emacs-lisp': '#c065db',
  emberscript: '#FFF4F3',
  eq: '#a78649',
  erlang: '#B83998',
  euphoria: '#FF790B',
  'f#': '#b845fc',
  'f*': '#572e30',
  factor: '#636746',
  fancy: '#7b9db4',
  fantom: '#14253c',
  faust: '#c37240',
  fennel: '#fff3d7',
  'figlet-font': '#FFDDBB',
  'filebench-wml': '#F6B900',
  filterscript: null,
  fish: '#4aae47',
  fluent: '#ffcc33',
  flux: '#88ccff',
  forth: '#341708',
  fortran: '#4d41b1',
  'fortran-free-form': '#4d41b1',
  freebasic: '#141AC9',
  freemarker: '#0050b2',
  frege: '#00cafe',
  futhark: '#5f021f',
  'g-code': '#D08CF2',
  'game-maker-language': '#71b417',
  gaml: '#FFC766',
  gams: '#f49a22',
  gap: '#0000cc',
  'gcc-machine-description': '#FFCFAB',
  gdb: null,
  gdscript: '#355570',
  gedcom: '#003058',
  'gemfile.lock': '#701516',
  gemini: '#ff6900',
  'genero-4gl': '#63408e',
  'genero-per': '#d8df39',
  genie: '#fb855d',
  genshi: '#951531',
  'gentoo-ebuild': '#9400ff',
  'gentoo-eclass': '#9400ff',
  'gerber-image': '#d20b00',
  gherkin: '#5B2063',
  'git-attributes': '#F44D27',
  'git-config': '#F44D27',
  'git-revision-list': '#F44D27',
  gleam: '#ffaff3',
  'glimmer-js': '#F5835F',
  glsl: '#5686a5',
  glyph: '#c1ac7f',
  gnuplot: '#f0a9f0',
  go: '#00ADD8',
  'go-checksums': '#00ADD8',
  'go-module': '#00ADD8',
  'go-workspace': '#00ADD8',
  'godot-resource': '#355570',
  golo: '#88562A',
  gosu: '#82937f',
  grace: '#615f8b',
  gradle: '#02303a',
  'gradle-kotlin-dsl': '#02303a',
  'grammatical-framework': '#ff0000',
  graphql: '#e10098',
  'graphviz-(dot)': '#2596be',
  groovy: '#4298b8',
  'groovy-server-pages': '#4298b8',
  gsc: '#FF6800',
  hack: '#878787',
  haml: '#ece2a9',
  handlebars: '#f7931e',
  haproxy: '#106da9',
  harbour: '#0e60e3',
  haskell: '#5e5086',
  haxe: '#df7900',
  hcl: '#844FBA',
  hiveql: '#dce200',
  hlsl: '#aace60',
  hocon: '#9ff8ee',
  holyc: '#ffefaf',
  hoon: '#00b171',
  'hosts-file': '#308888',
  html: '#e34c26',
  'html+ecr': '#2e1052',
  'html+eex': '#6e4a7e',
  'html+erb': '#701516',
  'html+php': '#4f5d95',
  'html+razor': '#512be4',
  http: '#005C9C',
  hxml: '#f68712',
  hy: '#7790B2',
  hyphy: null,
  idl: '#a3522f',
  idris: '#b30000',
  'ignore-list': '#000000',
  'igor-pro': '#0000cc',
  'imagej-macro': '#99AAFF',
  imba: '#16cec6',
  'inform-7': null,
  ini: '#d1dbe0',
  ink: null,
  'inno-setup': '#264b99',
  io: '#a9188d',
  ioke: '#078193',
  isabelle: '#FEFE00',
  'isabelle-root': '#FEFE00',
  j: '#9EEDFF',
  janet: '#0886a5',
  'jar-manifest': '#b07219',
  jasmin: '#d03600',
  java: '#b07219',
  'java-properties': '#2A6277',
  'java-server-pages': '#2A6277',
  javascript: '#f1e05a',
  'javascript+erb': '#f1e05a',
  jcl: '#d90e09',
  'jest-snapshot': '#15c213',
  'jetbrains-mps': '#21D789',
  jflex: '#DBCA00',
  jinja: '#a52a22',
  jison: '#56b3cb',
  'jison-lex': '#56b3cb',
  jolie: '#843179',
  jq: '#c7254e',
  json: '#292929',
  'json-with-comments': '#292929',
  json5: '#267CB9',
  jsoniq: '#40d47e',
  jsonld: '#0c479c',
  jsonnet: '#0064bd',
  julia: '#a270ba',
  'jupyter-notebook': '#DA5B0B',
  just: '#384d54',
  'kaitai-struct': '#773b37',
  kakounescript: '#6f8042',
  kerboscript: '#41adf0',
  'kicad-layout': '#2f4aab',
  'kicad-legacy-layout': '#2f4aab',
  'kicad-schematic': '#2f4aab',
  kotlin: '#A97BFF',
  krl: '#28430A',
  kvlang: '#1da6e0',
  labview: '#fede06',
  lark: '#2980B9',
  lasso: '#999999',
  latte: '#f2a542',
  lean: null,
  'lean-4': null,
  less: '#1d365d',
  lex: '#DBCA00',
  lfe: '#4C3023',
  ligolang: '#0e74ff',
  lilypond: '#9ccc7c',
  limbo: null,
  liquid: '#67b8de',
  'literate-agda': '#315665',
  'literate-coffeescript': '#244776',
  'literate-haskell': '#5e5086',
  livescript: '#499886',
  llvm: '#185619',
  logos: null,
  logtalk: '#295b9a',
  lolcode: '#cc9900',
  lookml: '#652B81',
  loomscript: null,
  lsl: '#3d9970',
  lua: '#000080',
  m: null,
  m4: null,
  m4sugar: null,
  macaulay2: '#d8ffff',
  makefile: '#427819',
  mako: '#7e858d',
  markdown: '#083fa1',
  marko: '#42bff2',
  mask: '#f97732',
  mathematica: '#dd1100',
  matlab: '#e16737',
  max: '#c4a79c',
  maxscript: '#00a6a6',
  mcfunction: '#E22837',
  mdx: '#fcb32c',
  mercury: '#ff2b2b',
  mermaid: '#ff3670',
  meson: '#007800',
  metal: '#8f14e9',
  minid: null,
  miniyaml: '#ff1111',
  mint: '#02b046',
  mirah: '#c7a938',
  'mirc-script': '#3d57c3',
  mlir: '#5EC8DB',
  modelica: '#de1d31',
  'modula-2': '#10253f',
  'modula-3': '#223388',
  'module-management-system': null,
  monkey: null,
  'monkey-c': '#8D6747',
  moocode: null,
  moonscript: '#ff4585',
  motoko: '#fbb03b',
  'motorola-68k-assembly': '#005daa',
  move: '#4a137a',
  mql4: '#62A8D6',
  mql5: '#4A76B8',
  mtml: '#b7e1f4',
  muf: null,
  mupad: '#244963',
  mustache: '#724b3b',
  myghty: null,
  nanorc: '#2d004d',
  nasal: '#1d2c4e',
  nasl: null,
  ncl: '#28431f',
  nearley: '#990000',
  nemerle: '#3d3c6e',
  nesc: '#94B0C7',
  netlinx: '#0aa0ff',
  'netlinx+erb': '#747faa',
  netlogo: '#ff6375',
  newlisp: '#87AED7',
  nextflow: '#3ac486',
  nginx: '#009639',
  nim: '#ffc200',
  nit: '#009917',
  nix: '#7e7eff',
  'npm-config': '#cb3837',
  nsis: null,
  nu: '#c9df40',
  numpy: '#9C8AF9',
  nunjucks: '#3d8137',
  nushell: '#4E9906',
  nwscript: '#111522',
  'oasv2-json': '#85ea2d',
  'oasv2-yaml': '#85ea2d',
  'oasv3-json': '#85ea2d',
  'oasv3-yaml': '#85ea2d',
  'objective-c': '#438eff',
  'objective-c++': '#6866fb',
  'objective-j': '#ff0c5a',
  objectscript: '#424893',
  ocaml: '#ef7a08',
  odin: '#60AFFE',
  omgrofl: '#cabbff',
  ooc: '#b0b77e',
  opa: null,
  opal: '#f7ede0',
  'open-policy-agent': '#7d9199',
  'openapi-specification-v2': '#85ea2d',
  'openapi-specification-v3': '#85ea2d',
  opencl: '#ed2e2d',
  'openedge-abl': '#5ce600',
  openqasm: '#AA70FF',
  'openrc-runscript': null,
  openscad: '#e5cd45',
  'option-list': '#476732',
  org: '#77aa99',
  ox: null,
  oxygene: '#cdd0e3',
  oz: '#fab738',
  p4: '#7055b5',
  pact: '#F7A8B8',
  pan: '#cc0000',
  papyrus: '#6600cc',
  parrot: '#f3ca0a',
  'parrot-assembly': null,
  'parrot-internal-representation': null,
  pascal: '#E3F171',
  pawn: '#dbb284',
  pddl: '#0d00ff',
  'peg.js': '#234d6b',
  pep8: '#C76F5B',
  perl: '#0298c3',
  php: '#4F5D95',
  picolisp: '#6067af',
  piglatin: '#fcd7de',
  pike: '#005390',
  plantuml: '#fbbd16',
  plpgsql: '#336790',
  plsql: '#dad8d8',
  pogoscript: '#d80074',
  polar: '#ae81ff',
  pony: null,
  portugol: '#f8bd00',
  postcss: '#dc3a0c',
  postscript: '#da291c',
  'pov-ray-sdl': '#6bac65',
  powerbuilder: '#8f0f8d',
  powershell: '#012456',
  praat: '#c8506d',
  prisma: '#0c344b',
  processing: '#0096D8',
  procfile: '#3B2F63',
  prolog: '#74283c',
  promela: '#de0000',
  'propeller-spin': '#7fa2a7',
  pug: '#a86454',
  puppet: '#302B6D',
  purebasic: '#5a6986',
  purescript: '#1D222D',
  pyret: '#ee1e10',
  python: '#3572A5',
  'python-console': '#3572A5',
  'python-traceback': '#3572A5',
  q: '#0040cd',
  'q#': '#fed659',
  qmake: null,
  qml: '#44a51c',
  'qt-script': '#00b841',
  quake: '#882233',
  r: '#198CE7',
  racket: '#3c5caa',
  ragel: '#9d5200',
  raku: '#0000fb',
  raml: '#77d9fb',
  rascal: '#fffaa0',
  rbs: '#701516',
  rdoc: '#701516',
  realbasic: null,
  reason: '#ff5847',
  reasonligo: '#ff5847',
  rebol: '#358a5b',
  'record-jar': '#0673ba',
  red: '#f50000',
  redcode: null,
  'regular-expression': '#009a00',
  "ren'py": '#ff7f7f',
  renderscript: null,
  rescript: '#ed5051',
  restructuredtext: '#141414',
  rexx: '#d90e09',
  rez: '#FFDAB3',
  ring: '#2D54CB',
  riot: '#A71E49',
  rmarkdown: '#198ce7',
  robotframework: '#00c0b5',
  roff: '#ecdebe',
  'roff-manpage': '#ecdebe',
  rouge: '#cc0088',
  'routeros-script': '#DE3941',
  rpc: null,
  rpgle: '#2BDE21',
  ruby: '#701516',
  runoff: '#665a4e',
  rust: '#dea584',
  sage: null,
  saltstack: '#646464',
  sas: '#B34936',
  sass: '#a53b70',
  scala: '#c22d40',
  scaml: '#bd181a',
  scenic: '#fdc700',
  scheme: '#1e4aec',
  scilab: '#ca0f21',
  scss: '#c6538c',
  sed: '#64b970',
  self: '#0579aa',
  shaderlab: '#222c37',
  shell: '#89e051',
  'shellcheck-config': '#cecfcb',
  shellsession: null,
  shen: '#120F14',
  sieve: null,
  'simple-file-verification': '#C9BFED',
  singularity: '#64E6AD',
  slash: '#007eff',
  slice: '#003fa2',
  slim: '#2b2b2b',
  smali: null,
  smalltalk: '#596706',
  smarty: '#f0c040',
  smithy: '#c44536',
  smpl: '#c94949',
  smt: null,
  snakemake: '#419179',
  solidity: '#AA6746',
  sourcepawn: '#f69e1d',
  sparql: '#0C4597',
  sqf: '#3F3F3F',
  sql: '#e38c00',
  sqlpl: '#e38c00',
  squirrel: '#800000',
  'srecode-template': '#348a34',
  stan: '#b2011d',
  'standard-ml': '#dc566d',
  starlark: '#76d275',
  stata: '#1a5f91',
  stl: '#373b5e',
  stringtemplate: '#3fb34f',
  stylus: '#ff6347',
  'subrip-text': '#9e0101',
  sugarss: '#2fcc9f',
  supercollider: '#46390b',
  svelte: '#ff3e00',
  svg: '#ff9900',
  sway: '#00F58C',
  sweave: '#198ce7',
  swift: '#F05138',
  swig: null,
  systemverilog: '#DAE1C2',
  talon: '#333333',
  tcl: '#e4cc98',
  tcsh: null,
  terra: '#00004c',
  'terraform-template': '#7b42bb',
  tex: '#3D6117',
  textile: '#ffe7ac',
  'textmate-properties': '#df66e4',
  thrift: '#D12127',
  'ti-program': '#A0AA87',
  'tl-verilog': '#C40023',
  tla: '#4b0079',
  toit: '#c2c9fb',
  toml: '#9c4221',
  tsql: '#e38c00',
  tsv: '#237346',
  tsx: '#3178c6',
  turing: '#cf142b',
  twig: '#c1d026',
  txl: '#0178b8',
  typescript: '#3178c6',
  typst: '#239dad',
  'unified-parallel-c': '#4e3617',
  'unity3d-asset': '#222c37',
  'unix-assembly': null,
  uno: '#9933cc',
  unrealscript: '#a54c4d',
  urweb: '#ccccee',
  v: '#4f87c4',
  vala: '#a56de2',
  'valve-data-format': '#f26025',
  vba: '#867db1',
  vbscript: '#15dcdc',
  vcl: '#148AA8',
  'velocity-template-language': '#507cff',
  verilog: '#b2b7f8',
  vhdl: '#adb2cb',
  'vim-help-file': '#199f4b',
  'vim-script': '#199f4b',
  'vim-snippet': '#199f4b',
  'visual-basic-.net': '#945db7',
  'visual-basic-6.0': '#2c6353',
  volt: '#1F1F1F',
  vue: '#41b883',
  vyper: '#2980b9',
  wdl: '#42f1f4',
  'web-ontology-language': '#5b70bd',
  webassembly: '#04133b',
  'webassembly-interface-type': '#6250e7',
  webidl: null,
  wgsl: '#1a5e9a',
  whiley: '#d5c397',
  wikitext: '#fc5757',
  'windows-registry-entries': '#52d5ff',
  wisp: '#7582D1',
  'witcher-script': '#ff0000',
  wollok: '#a23738',
  'world-of-warcraft-addon-data': '#f7e43f',
  wren: '#383838',
  x10: '#4B6BEF',
  xbase: '#403a40',
  xc: '#99DA07',
  xml: '#0060ac',
  'xml-property-list': '#0060ac',
  xojo: '#81bd41',
  xonsh: '#285EEF',
  xproc: null,
  xquery: '#5232e7',
  xs: null,
  xslt: '#EB8CEB',
  xtend: '#24255d',
  yacc: '#4B6C4B',
  yaml: '#cb171e',
  yara: '#220000',
  yasnippet: '#32AB90',
  yul: '#794932',
  zap: '#0d665e',
  zeek: null,
  zenscript: '#00BCD1',
  zephir: '#118f9e',
  zig: '#ec915c',
  zil: '#dc75e5',
  zimpl: '#d67711',
}

const convertToPercent = (num: number, total_value: number) => Math.round((num / total_value) * 100)

const convertToDegrees = (num: number) => Math.round((num / 100) * 360)

const DonutChart = ({ data }: { data: DonutChartProps }) => {
  const sortedData = data.sort((a, b) => a.value - b.value)
  const total_value = data.reduce((a, b) => a + b.value, 0)

  const chart_style_string = sortedData
    .reduce((acc, item, index, data) => {
      const percentage = convertToPercent(data[index].value, total_value)
      const degrees = convertToDegrees(percentage)
      let start_degree = 0
      let end_degree = 0
      if (index === 0) {
        start_degree = 0
        end_degree = degrees
      } else {
        start_degree = acc[index - 1].end_degree
        end_degree = start_degree + degrees
      }

      const color = colors[sortedData[index].key.toLocaleLowerCase()]

      acc.push({ start_degree, end_degree, color })
      return acc
    }, [] as DataItem[])
    .map((chart) => {
      const { color, start_degree, end_degree } = chart
      return ` ${color} ${start_degree}deg ${end_degree}deg`
    })
    .join()

  return (
    <div className="flex flex-row items-center w-full gap-4">
      <div className="relative rounded shadow-full">
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          style={{ borderRadius: '100%' }}
          className="w-40 aspect-square"
        >
          <clipPath id="hole">
            <path d="M 50 0 a 50 50 0 0 1 0 100 50 50 0 0 1 0 -100 v 18 a 2 2 0 0 0 0 64 2 2 0 0 0 0 -64" />
          </clipPath>
          <foreignObject x="0" y="0" width="100" height="100" clipPath="url(#hole)">
            <div
              className="conic-gradient-animation"
              style={{
                width: '100%',
                height: '100%',
                background: `conic-gradient(${chart_style_string})`,
              }}
            />
          </foreignObject>
          {/* <circle cx="50" cy="50" r="32" fill="white" /> */}
        </svg>
        <span className="absolute text-xs -translate-x-1/2 -translate-y-1/2 select-none left-1/2 top-1/2">
          Languages
        </span>
      </div>
      <div className="flex-1 text-xs">
        <ul>
          {sortedData.map((d) => (
            <li key={d.key} className="flex flex-row items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: colors[d.key.toLocaleLowerCase().replaceAll(' ', '-')] }}
              ></span>
              <span className="flex-1 inline-block">{d.key}</span>
              <span>{convertToPercent(d.value, total_value)}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DonutChart
