import { QueryParams } from 'shared/core';

import { OfferStatus, PriceModel } from '../../domain/types';

export enum OfferCollectionOrder {
  Status = 'status',
  PriceType = 'priceType',
}

export interface OfferCollectionQueryParams extends QueryParams {
  name?: string;
  priceType?: PriceModel;
  status?: OfferStatus;
}
