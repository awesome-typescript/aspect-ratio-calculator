import {
  isLandscape,
  isPortrait,
  isSquare,
  isRatio_16_9,
  isRatio_4_5,
  isRatio_9_16,
} from '.'

describe('calculate-aspect-ratio', () => {
  test('isLandscape', () => {
    expect(isLandscape(640, 360)).toBe(true)
  })

  test('isPortrait', () => {
    expect(isPortrait(1080, 1350)).toBe(true)
  })

  test('isSquare', () => {
    expect(isSquare(640, 640)).toBe(true)
  })

  test('isRatio_16_9', () => {
    expect(isRatio_16_9(640, 360)).toBe(true)
  })

  test('isRatio_4_5', () => {
    expect(isRatio_4_5(1080, 1350)).toBe(true)
  })

  test('isRatio_9_16', () => {
    expect(isRatio_9_16(1080, 1920)).toBe(true)
  })
})
