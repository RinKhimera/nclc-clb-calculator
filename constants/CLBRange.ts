export const listeningCLB = (score: number | null): number | null => {
  if (score === null) {
    return null
  }

  if (score === 4.5) {
    return 4
  } else if (score === 5) {
    return 5
  } else if (score === 5.5) {
    return 6
  } else if (score >= 6 && score < 7.5) {
    return 7
  } else if (score === 7.5) {
    return 8
  } else if (score === 8) {
    return 9
  } else if (score >= 8.5 && score <= 10) {
    return 10
  } else {
    return null
  }
}

export const readingCLB = (score: number | null): number | null => {
  if (score === null) {
    return null
  }

  if (score === 3.5) {
    return 4
  } else if (score >= 4 && score < 5) {
    return 5
  } else if (score >= 5 && score < 6) {
    return 6
  } else if (score === 6) {
    return 7
  } else if (score === 6.5) {
    return 8
  } else if (score === 7) {
    return 9
  } else if (score >= 8 && score <= 10) {
    return 10
  } else {
    return null
  }
}

export const speakingWritinCLB = (score: number | null): number | null => {
  if (score === null) {
    return null
  }

  if (score >= 4 && score < 5) {
    return 4
  } else if (score === 5) {
    return 5
  } else if (score === 5.5) {
    return 6
  } else if (score === 6) {
    return 7
  } else if (score === 6.5) {
    return 8
  } else if (score === 7) {
    return 9
  } else if (score >= 7.5 && score <= 10) {
    return 10
  } else {
    return null
  }
}
