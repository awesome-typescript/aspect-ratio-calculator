import { isLandscape, isPortrait, isStory, isSquare } from '.'

describe('calculate-aspect-ratio', () => {
  test('isLandscape', () => {
    expect(isLandscape(640, 360)).toBe(true)
  })

  test('isPortrait', () => {
    expect(isPortrait(1080, 1350)).toBe(true)
  })

  test('isStory', () => {
    expect(isStory(720, 1280)).toBe(true)
  })

  test('isSquare', () => {
    expect(isSquare(640, 640)).toBe(true)
  })
})
