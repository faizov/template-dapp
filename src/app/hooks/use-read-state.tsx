import meta from '@/assets/meta/contract.meta.txt';

import { useReadState } from '.';
import { ENV } from '../сonsts';
import { useProgramMetadata } from './api';
import { useSendMessage } from '@gear-js/react-hooks';

export const programIdState = ENV.CONTRACT;

export function useState() {
  const { state } = useReadState<any>({
    programId: programIdState,
    meta,
    payload: '0x',
  });

  return { state };
}

export function useStateMessage() {
  const metadata = useProgramMetadata(meta);
  return useSendMessage(programIdState, metadata, {
    disableAlerts: false,
  });
}
