export const listeningNCLC = (score: number): number => {
  if (score >= 331 && score <= 368) {
    return 4
  } else if (score >= 369 && score <= 397) {
    return 5
  } else if (score >= 398 && score <= 457) {
    return 6
  } else if (score >= 458 && score <= 502) {
    return 7
  } else if (score >= 503 && score <= 522) {
    return 8
  } else if (score >= 523 && score <= 548) {
    return 9
  } else {
    return 10
  }
}

export const readingNCLC = (score: number): number => {
  if (score >= 342 && score <= 374) {
    return 4
  } else if (score >= 375 && score <= 405) {
    return 5
  } else if (score >= 406 && score <= 452) {
    return 6
  } else if (score >= 453 && score <= 498) {
    return 7
  } else if (score >= 499 && score <= 523) {
    return 8
  } else if (score >= 524 && score <= 548) {
    return 9
  } else {
    return 10
  }
}

export const speakingWritingNCLC = (score: number): number => {
  if (score >= 4 && score <= 5) {
    return 4
  } else if (score === 6) {
    return 5
  } else if (score >= 7 && score <= 9) {
    return 6
  } else if (score >= 10 && score <= 11) {
    return 7
  } else if (score >= 12 && score <= 13) {
    return 8
  } else if (score >= 14 && score <= 15) {
    return 9
  } else {
    return 10
  }
}
