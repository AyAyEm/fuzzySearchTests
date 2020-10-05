import * as cliProgress from 'cli-progress';

export class ProgressBar extends cliProgress.SingleBar {
  constructor(barName: string) {
    super({
      format: ` {bar} {percentage}% | ETA: {eta}s | {value}/{total} | ${barName}`,
      barCompleteChar: '\u2588',
      barIncompleteChar: '\u2591',
    });
  }
}
