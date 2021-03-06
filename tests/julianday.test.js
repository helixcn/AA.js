import julianday from '../src/julianday'

test('build julianday with date', () => {
  const UTCDate = new Date(Date.UTC(2016, 8, 17))
  expect(new julianday.JulianDay(UTCDate).value).toBe(2457648.5)
})

test('build julianday with nothing', () => {
  expect(new julianday.JulianDay().value).toBeGreaterThan(2457648.5)
})

test('build julianday with jd value', () => {
  expect(new julianday.JulianDay(2457648.5).value).toBe(2457648.5)
})

test('julianday provide correct sidereal time', () => {
  // See AA page 88, Example 12.1a. APRIL = Month 3, not 4!
  const UTCDate = new Date(Date.UTC(1987, 3, 10))
  expect(new julianday.JulianDay(UTCDate).getLocalSiderealTime(0)).toBeCloseTo(13.1795463333, 6)
})
