import supertest from 'supertest';
import { expect } from 'chai';
import Status from 'http-status-codes';
import server from '../../src';
import settings from '../../src/settings';

const request = supertest.agent(server.listen());
const baseUrl = `${settings.urls.prefix}/users/`;

describe('Users', () => {
  beforeEach((done) => {
    done();
  });

  describe(`GET ${baseUrl}`, () => {
    it('should get list of users', async () => {
      const response = await request.get(baseUrl);
      expect(response.status).to.equal(Status.OK);
      expect(response.body).to.have.lengthOf.above(2);
    });
  });

  describe(`GET ${baseUrl}:id`, () => {
    it('should user with specific id', async () => {
      const key = 2;
      const response = await request.get(`${baseUrl}${key}`);
      const user = response.body;
      expect(response.status).to.equal(Status.OK);
      expect(user).to.have.property('id');
      expect(user.id).to.equal(key);
    });
  });
});
