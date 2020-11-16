import { Signale } from 'signale';

export default class Logger {
  constructor($scope = '') {
    this.logger = new Signale({
      config: {
        displayFilename: true,
        displayTimestamp: true,
        displayDate: true,

      },
      scope: $scope,
    });
  }

  get success() {
    return this.logger.success;
  }

  get info() {
    return this.logger.info;
  }

  get warn() {
    return this.logger.warn;
  }

  get error() {
    return this.logger.error;
  }
}
