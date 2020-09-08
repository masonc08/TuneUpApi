import * as CONFIGS from '~/config';
import { authorize } from '@/providers/spotify';

import sinon from 'sinon';


describe("When GET /authorize is provoked", () => {
  describe("If there is no spotify client keypair", () => {
    it("should return error to client", () => {
      sinon.stub(CONFIGS, 'SPOTIFY_CLIENT_ID').value('');
      sinon.stub(CONFIGS, 'SPOTIFY_CLIENT_SECRET').value('');
      const takeStatus = sinon.stub();
      const sendResponse = sinon.spy();
      takeStatus.returns({ send: sendResponse });
      const res = {
        status: takeStatus
      }
      authorize(res);
      sinon.assert.calledWith(takeStatus, 503);
      sinon.assert.calledWith(sendResponse, {
        error: 'Spotify client keypair not detected. Are environment variables configured correctly?'
      });
    });
  });
});