import * as CONFIGS from '~/config';
import { authorize } from '@/providers/spotify';

import sinon from 'sinon';
import * as mockBtoa from 'btoa';
import mockRequest from 'request';


describe("When GET /authorize is provoked", () => {
  const takeStatus = sinon.stub();
  const sendResponse = sinon.spy();
  takeStatus.returns({ send: sendResponse });
  const res = {
    status: takeStatus
  };
  describe("If there is no spotify client keypair", () => {
    it("should return correct error to client", () => {
      sinon.stub(CONFIGS, 'SPOTIFY_CLIENT_ID').value('');
      sinon.stub(CONFIGS, 'SPOTIFY_CLIENT_SECRET').value('');
      authorize(res);
      sinon.assert.calledWith(takeStatus, 503);
      sinon.assert.calledWith(sendResponse, {
        error: 'Spotify client keypair not detected. Are environment variables configured correctly?'
      });
    });
  });
  it("should return an access key to the user", () => {
    sinon.stub(CONFIGS, 'SPOTIFY_CLIENT_ID').value('fakeid');
    sinon.stub(CONFIGS, 'SPOTIFY_CLIENT_SECRET').value('fakesecret');
    sinon.stub(mockBtoa, 'default');
    sinon.stub(mockRequest, 'post').callsArgWith(1, undefined, {
      statusCode: 200,
      body: JSON.stringify({ access_token: "BQDcMrNi057GCTmlzi4STnWHq7rHjJDCOnUM5plxBnEUXnVJsIVXBoaIb-AR7ZCX1JOReq6_0FLII3DnyJY" })
    });
    authorize(res);
    sinon.assert.calledWith(takeStatus, 200);
    sinon.assert.calledWith(sendResponse, {
      access_token: "BQDcMrNi057GCTmlzi4STnWHq7rHjJDCOnUM5plxBnEUXnVJsIVXBoaIb-AR7ZCX1JOReq6_0FLII3DnyJY"
    });
  });
});
