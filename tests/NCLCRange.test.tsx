import {
  listeningNCLCL,
  readingNCLCL,
  speakingWritingNCLC,
} from "@/constants/NCLCRange"
import getLowestNCLCValue from "@/hooks/NCLCValue"

describe("getLowestNCLCValue function", () => {
  it("returns correct lowest value for valid input", () => {
    expect(getLowestNCLCValue(4, 5, 6, 7)).toBe(4)
    expect(getLowestNCLCValue(8, 5, 6, 7)).toBe(5)
    expect(getLowestNCLCValue(9, 8, 6, 7)).toBe(6)
    expect(getLowestNCLCValue(10, 10, 10, 7)).toBe(7)
    expect(getLowestNCLCValue(4, 6, 6, 8)).toBe(4)
    expect(getLowestNCLCValue(9, 9, 9, 9)).toBe(9)
    expect(getLowestNCLCValue(4, 5, null, 7)).toBe(4)
    expect(getLowestNCLCValue(8, null, 6, null)).toBe(6)
    expect(getLowestNCLCValue(10, null, null, 7)).toBe(7)
    expect(getLowestNCLCValue(null, null, null, 7)).toBe(7)
  })

  it("returns null for no valid values", () => {
    expect(getLowestNCLCValue(null, null, null, null)).toBeNull()
    expect(getLowestNCLCValue(null, 4, 9, 7)).toBe(4)
    expect(getLowestNCLCValue(null, 5, null, null)).toBe(5)
    expect(getLowestNCLCValue(1, null, 6, null)).toBe(1)
  })
})

describe("listeningNCLCL", () => {
  it("should return null when score is null", () => {
    const result = listeningNCLCL(null)
    expect(result).toBe(null)
  })

  it("should return the correct NCLC level for valid scores", () => {
    expect(listeningNCLCL(340)).toBe(4)
    expect(listeningNCLCL(385)).toBe(5)
    expect(listeningNCLCL(430)).toBe(6)
    expect(listeningNCLCL(480)).toBe(7)
    expect(listeningNCLCL(513)).toBe(8)
    expect(listeningNCLCL(523)).toBe(9)
    expect(listeningNCLCL(650)).toBe(10)
  })

  it("should return null for scores outside the valid range", () => {
    expect(listeningNCLCL(300)).toBe(null)
    expect(listeningNCLCL(700)).toBe(null)
  })
})

describe("readingNCLCL function", () => {
  it("returns correct score for valid input", () => {
    expect(readingNCLCL(360)).toBe(4)
    expect(readingNCLCL(400)).toBe(5)
    expect(readingNCLCL(430)).toBe(6)
    expect(readingNCLCL(480)).toBe(7)
    expect(readingNCLCL(523)).toBe(8)
    expect(readingNCLCL(524)).toBe(9)
    // ... Add more test cases for other ranges
    expect(readingNCLCL(600)).toBe(10)
  })

  it("returns null for invalid input", () => {
    expect(readingNCLCL(null)).toBeNull()
    expect(readingNCLCL(300)).toBeNull()
    expect(readingNCLCL(750)).toBeNull()
    // ... Add more test cases for other invalid scores
  })
})

describe("speakingWritingNCLC function", () => {
  it("returns correct score for valid input", () => {
    expect(speakingWritingNCLC(4)).toBe(4)
    expect(speakingWritingNCLC(6)).toBe(5)
    expect(speakingWritingNCLC(9)).toBe(6)
    expect(speakingWritingNCLC(10)).toBe(7)
    // ... Add more test cases for other ranges
    expect(speakingWritingNCLC(18)).toBe(10)
  })

  it("returns null for invalid input", () => {
    expect(speakingWritingNCLC(null)).toBeNull()
    expect(speakingWritingNCLC(3)).toBeNull()
    expect(speakingWritingNCLC(21)).toBeNull()
    // ... Add more test cases for other invalid scores
  })
})
