import { Result, UseCaseError } from 'shared/core';

export namespace RemoveCustomerErrors {
  export class CustomerNotFoundError extends Result<UseCaseError> {
    constructor() {
      super(false, {
        message: `customerDoesNotExist`,
      });
    }
  }
}
