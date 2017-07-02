import logger from 'winston'; // eslint-disable-line
import supertest from 'supertest';
import { expect } from 'chai';
import Status from 'http-status-codes';
import settings from 'settings';
import server from '../../src';

const request = supertest.agent(server.listen());
const baseUrl = `${settings.urls.prefix}/login/`;
const SECRET='$2a$08$sXELJh7YvBL4ek47b6GlR.nNbohSrpmICunQgvArd.Ag.PIM/rZh.';  // eslint-disable-line


describe('[apps][auth]', () => {
  beforeEach((done) => {
    settings.secret = SECRET;
    done();
  });

  describe('POST /login', () => {
    it('should fail with invalid parameters', async () => {
      const response = await request.post(baseUrl);
      expect(response.status).to.equal(Status.UNPROCESSABLE_ENTITY);
    });

    it('should not login with a invalid user account (jsonplaceholder)', async () => {
      const username = 'notfound@jasper.info';
      const password = 'Leopoldo_Corkery';
      const response = await request.post(baseUrl).send({ username, password });
      expect(response.status).to.equal(Status.UNAUTHORIZED);
    });

    it('should log into with a user account (jsonplaceholder)', async () => {
      const username = 'Karley_Dach@jasper.info';
      const password = 'Leopoldo_Corkery';
      const response = await request.post(baseUrl).send({ username, password });
      expect(response.status).to.equal(Status.OK);
      expect(response.header.authorization).to.match(/Bearer\s(.*)/);
    });
  });
});
