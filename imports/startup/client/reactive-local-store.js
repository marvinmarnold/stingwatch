import { RLS } from 'meteor/reactive-local-store';
import { SETTINGS } from '../../globals.js';

export function configRLS() {
  RLS.setRegisteredKeys([
    SETTINGS.TERMS_ACCEPTED
  ]);

  RLS.init();
}
