export const gcd = (a: number, b: number): number => {
  return b ? gcd(b, a % b) : a
}

export const aspectRatio = (
  width: number,
  height: number,
): [number, number] => {
  const divisor = gcd(width, height)

  return [width / divisor, height / divisor]
}

export const isLandscape = (width: number, height: number): boolean => {
  const [x, y] = aspectRatio(width, height)

  return x === 16 && y === 9
}

export const isStory = (width: number, height: number): boolean => {
  const [x, y] = aspectRatio(width, height)

  return x === 9 && y === 16
}

export const isPortrait = (width: number, height: number): boolean => {
  const [x, y] = aspectRatio(width, height)

  return x === 4 && y === 5
}

export const isSquare = (width: number, height: number): boolean => {
  const [x, y] = aspectRatio(width, height)

  return x === 1 && y === 1
}
