import { listeningNCLCL } from "@/constants/NCLCRange"

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
    expect(listeningNCLCL(535)).toBe(9)
    expect(listeningNCLCL(650)).toBe(10)
  })

  it("should return null for scores outside the valid range", () => {
    expect(listeningNCLCL(300)).toBe(null)
    expect(listeningNCLCL(700)).toBe(null)
  })
})
