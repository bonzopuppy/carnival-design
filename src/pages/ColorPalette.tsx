import PageLayout from '../components/PageLayout'
import ShowcaseSection from '../components/ShowcaseSection'

interface ColorSwatch {
  name: string
  value: string
  token: string
  textWhite?: boolean
}

const carnivalPrimary: ColorSwatch[] = [
  { name: 'Primary 800', value: '#051a2e', token: 'primary-800', textWhite: true },
  { name: 'Primary 700', value: '#09335c', token: 'primary-700', textWhite: true },
  { name: 'Primary 600', value: '#0c447b', token: 'primary-600', textWhite: true },
  { name: 'Primary 500', value: '#0f559a', token: 'primary-500', textWhite: true },
  { name: 'Primary 400', value: '#3773ad', token: 'primary-400', textWhite: true },
  { name: 'Primary 200', value: '#9abdde', token: 'primary-200' },
  { name: 'Primary 50', value: '#f3f6fa', token: 'primary-50' },
]

const carnivalSecondary: ColorSwatch[] = [
  { name: 'Secondary 700', value: '#840b16', token: 'secondary-700', textWhite: true },
  { name: 'Secondary 600', value: '#b00e1e', token: 'secondary-600', textWhite: true },
  { name: 'Secondary 500', value: '#dc1225', token: 'secondary-500', textWhite: true },
  { name: 'Secondary 200', value: '#f8d0d3', token: 'secondary-200' },
]

const blackScale: ColorSwatch[] = [
  { name: 'Black 100', value: '#000000', token: 'black-100', textWhite: true },
  { name: 'Black 70', value: '#000000b2', token: 'black-70', textWhite: true },
  { name: 'Black 50', value: '#00000080', token: 'black-50', textWhite: true },
  { name: 'Black 25', value: '#00000040', token: 'black-25' },
  { name: 'Black 10', value: '#0000001a', token: 'black-10' },
  { name: 'Black 5', value: '#0000000d', token: 'black-5' },
]

const whiteScale: ColorSwatch[] = [
  { name: 'White 100', value: '#ffffff', token: 'white-100' },
  { name: 'White 70', value: '#ffffffb2', token: 'white-70' },
  { name: 'White 50', value: '#ffffff80', token: 'white-50' },
  { name: 'White 25', value: '#ffffff40', token: 'white-25' },
]

const v7Palettes: { title: string; colors: ColorSwatch[] }[] = [
  {
    title: 'Forest (Shared V7)',
    colors: [
      { name: 'Forest 100', value: '#305b16', token: 'forest-100', textWhite: true },
      { name: 'Forest 75', value: '#8ab33f', token: 'forest-75', textWhite: true },
      { name: 'Forest 50', value: '#b9d57f', token: 'forest-50' },
      { name: 'Forest 30', value: '#e6f3cd', token: 'forest-30' },
      { name: 'Forest 10', value: '#f3f7ec', token: 'forest-10' },
    ],
  },
  {
    title: 'Sunflower (Shared V7)',
    colors: [
      { name: 'Sunflower 100', value: '#b39719', token: 'sunflower-100', textWhite: true },
      { name: 'Sunflower 60', value: '#ffc400', token: 'sunflower-60' },
      { name: 'Sunflower 30', value: '#ffe182', token: 'sunflower-30' },
      { name: 'Sunflower 10', value: '#fff7d7', token: 'sunflower-10' },
    ],
  },
  {
    title: 'Heart Balloon (Shared V7)',
    colors: [
      { name: 'Heart 100', value: '#b60016', token: 'heart-100', textWhite: true },
      { name: 'Heart 90', value: '#e02738', token: 'heart-90', textWhite: true },
      { name: 'Heart 75', value: '#f59ba1', token: 'heart-75' },
      { name: 'Heart 25', value: '#ffebf0', token: 'heart-25' },
    ],
  },
  {
    title: 'Blackboard (Shared V7)',
    colors: [
      { name: 'Blackboard', value: '#242627', token: 'blackboard', textWhite: true },
      { name: 'Blackboard 100', value: '#737373', token: 'blackboard-100', textWhite: true },
      { name: 'Blackboard 50', value: '#c3c3c3', token: 'blackboard-50' },
      { name: 'Blackboard 25', value: '#dcdcdc', token: 'blackboard-25' },
      { name: 'Blackboard 10', value: '#f1f1f1', token: 'blackboard-10' },
      { name: 'Chalk', value: '#ffffff', token: 'chalk' },
    ],
  },
]

const utilityColors: ColorSwatch[] = [
  { name: 'Snackbar', value: '#0f7dfe', token: 'snackbar', textWhite: true },
  { name: 'Photo Upload BG', value: '#c2daf140', token: 'photo-upload-bg' },
  { name: 'Photo Selected', value: '#4185ef', token: 'photo-selected', textWhite: true },
  { name: 'Error', value: '#dc1225', token: 'error', textWhite: true },
  { name: 'Marigold', value: '#f9de6d', token: 'marigold' },
  { name: 'Ocean', value: '#66bbf9', token: 'ocean' },
]

function Swatch({ color }: { color: ColorSwatch }) {
  return (
    <div className="text-center">
      <div
        className="h-16 rounded-lg mb-2 border border-border flex items-end p-2"
        style={{ backgroundColor: color.value }}
      >
        <span className={`text-[10px] font-mono ${color.textWhite ? 'text-white' : 'text-black'}`}>
          {color.value}
        </span>
      </div>
      <div className="text-xs font-semibold text-text">{color.name}</div>
      <div className="text-[10px] text-text-muted font-mono">--color-{color.token}</div>
    </div>
  )
}

export default function ColorPalette() {
  return (
    <PageLayout
      title="COLOR PALETTE"
      subtitle="Carnival brand colors from _carnival.scss plus shared V7 platform palettes from _variables.scss."
    >
      <ShowcaseSection title="Carnival Primary Blue">
        <div className="grid grid-cols-3 sm:grid-cols-7 gap-3">
          {carnivalPrimary.map((c) => (
            <Swatch key={c.token} color={c} />
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Carnival Secondary Red">
        <div className="grid grid-cols-4 gap-3">
          {carnivalSecondary.map((c) => (
            <Swatch key={c.token} color={c} />
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Black Opacity Scale">
        <div className="grid grid-cols-6 gap-3">
          {blackScale.map((c) => (
            <Swatch key={c.token} color={c} />
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="White Opacity Scale (shown on dark)">
        <div className="bg-primary-800 rounded-lg p-4">
          <div className="grid grid-cols-4 gap-3">
            {whiteScale.map((c) => (
              <div key={c.token} className="text-center">
                <div
                  className="h-16 rounded-lg mb-2 border border-white/20 flex items-end p-2"
                  style={{ backgroundColor: c.value }}
                >
                  <span className="text-[10px] font-mono text-primary-800">{c.value}</span>
                </div>
                <div className="text-xs font-semibold text-white">{c.name}</div>
                <div className="text-[10px] text-white/60 font-mono">--color-{c.token}</div>
              </div>
            ))}
          </div>
        </div>
      </ShowcaseSection>

      {v7Palettes.map((palette) => (
        <ShowcaseSection key={palette.title} title={palette.title}>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {palette.colors.map((c) => (
              <Swatch key={c.token} color={c} />
            ))}
          </div>
        </ShowcaseSection>
      ))}

      <ShowcaseSection title="Utility / Status Colors">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {utilityColors.map((c) => (
            <Swatch key={c.token} color={c} />
          ))}
        </div>
      </ShowcaseSection>
    </PageLayout>
  )
}
