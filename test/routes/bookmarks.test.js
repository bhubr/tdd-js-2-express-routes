const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../app');

const expect = chai.expect;
chai.use(chaiHttp);

describe('Bookmarks routes', () => {
  describe('Create a bookmark', () => {
    it('Succeeds (201) if url is present and valid', () => {
      return chai.request(app)
        .post('/api/bookmarks')
        .send({
          url: 'https://reactjs.org',
          label: 'React Homepage'
        })
        .then(res => {
          expect(res).to.have.status(201);
          expect(res).to.be.json;
          expect(res.body).to.be.a('object');
          expect(res.body).not.to.be.a('array');
          expect(res.body).to.deep.equal({
            id: 1,
            url: 'https://reactjs.org',
            label: 'React Homepage'
          });
        });
    });
    it('Fails (400) if url is missing', () => {
      return chai.request(app)
        .post('/api/bookmarks')
        .send({
          label: 'React Homepage'
        })
        .then(res => {
          expect(res).to.have.status(400);
          expect(res).to.be.json;
          expect(res.body).to.be.a('object');
          expect(res.body).not.to.be.a('array');
          expect(res.body).to.deep.equal({
            message: 'Required field "url" is missing'
          });
        });
    });
  });
  describe('Read all bookmarks', () => {
    it('Succeeds (200), receive an array of bookmarks', () => {
      return chai.request(app)
        .get('/api/bookmarks')
        .then(res => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.a('array');
          expect(res.body).to.deep.equal([]);
        });
    });
  });
  describe('Read one bookmark', () => {

  });
});