import { Response } from 'express';
import { CommandBus } from '@nestjs/cqrs';
import { Controller, Delete, Logger, Param, Res } from '@nestjs/common';

import { BaseController } from 'shared/core';
import { RemoveCustomerCommand } from './RemoveCustomer.command';
import { RemoveCustomerErrors } from './RemoveCustomer.errors';

@Controller()
export class RemoveCustomerController extends BaseController {
  constructor(private readonly commandBus: CommandBus) {
    super();
  }

  logger = new Logger('DeleteCustomerController');

  @Delete('facilities/:facilityId/customers/:customerId')
  async deleteCustomer(
    @Param('customerId') customerId: string,
    @Res() res: Response,
  ) {
    try {
      const result = await this.commandBus.execute(
        new RemoveCustomerCommand(customerId),
      );

      if (result.isLeft()) {
        const error = result.value;
        this.logger.error(error.errorValue());

        switch (error.constructor) {
          case RemoveCustomerErrors.CustomerNotFoundError:
            return this.notFound(res, error.errorValue());
          default:
            return this.fail(res, error.errorValue());
        }
      }

      this.logger.verbose('Customer successfully removed');
      return this.ok(res);
    } catch (err) {
      this.logger.error('Unexpected server error', err);
      return this.fail(res, err);
    }
  }
}
