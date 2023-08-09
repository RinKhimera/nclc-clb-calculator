const getLowestNCLCValue = (
  listeningNCLCValue: number | null,
  readingNCLCValue: number | null,
  speakingNCLCValue: number | null,
  writingNCLCValue: number | null
): number | null => {
  // Create an array to store the provided NCLC values that are not null
  const valuesArray = [
    listeningNCLCValue,
    readingNCLCValue,
    speakingNCLCValue,
    writingNCLCValue,
  ].filter((value) => value !== null) as number[]

  // If there are no valid values to compare, return null
  if (valuesArray.length === 0) {
    return null // No valid values
  }

  // Find and return the lowest value among the array elements
  return Math.min(...valuesArray)
}

export default getLowestNCLCValue
