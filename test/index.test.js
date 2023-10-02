const chai=require('chai');
const chaiHttp=require('chai-http');

const expect=chai.expect
const baseUrl='http://localhost:3000';
chai.use(chaiHttp);

describe('Rate Limit', ()=> {

    describe('Token buckets',()=>{
        const requests = new Array(6).fill().map(() => chai.request(baseUrl).get('/tokenbuckets/limited'));
        it('Should rate limit', (done) =>{
            // Make 6 requests all at once
            Promise.all(requests)
            .then(responses => {
                    // Expect 5 of the responses to be 200 OK
                    expect(responses.filter(res => res.status === 200).length).to.equal(5);
                    // Expect 1 of the responses to be 429 Too Many Requests
                    expect(responses.filter(res => res.status === 429).length).to.equal(1);
                    done();
                }).catch(err => done(err));
        });
    })


    
    
    describe('Sliding Window Log',()=>{
        const requests = new Array(6).fill().map(() => chai.request(baseUrl).get('/slidingwindowlog'));
        it('Should rate limit', (done) =>{
            // Make 6 requests all at once
            Promise.all(requests)
            .then(responses => {
                // Expect 5 of the responses to be 200 OK
                expect(responses.filter(res => res.status === 200).length).to.equal(5);
                // Expect 1 of the responses to be 429 Too Many Requests
                expect(responses.filter(res => res.status === 429).length).to.equal(1);
                done();
            }).catch(err => done(err));
        });
    })
    
    describe('Window Counter',()=>{
        const requests = new Array(6).fill().map(() => chai.request(baseUrl).get('/windowCounter/limited'));
        it('Should rate limit', (done) =>{
            // Make 6 requests all at once
            Promise.all(requests)
            .then(responses => {
                    // Expect 5 of the responses to be 200 OK
                    expect(responses.filter(res => res.status === 200).length).to.equal(5);
                    // Expect 1 of the responses to be 429 Too Many Requests
                    expect(responses.filter(res => res.status === 429).length).to.equal(1);
                    done();
                }).catch(err => done(err));
        });
    })

    describe('Sliding Window Counter',()=>{
        const requests = new Array(6).fill().map(() => chai.request(baseUrl).get('/slidingWindowCounter'));
        it('Should rate limit', (done) =>{
            // Make 6 requests all at once
            Promise.all(requests)
            .then(responses => {
                    // Expect 5 of the responses to be 200 OK
                    expect(responses.filter(res => res.status === 200).length).to.equal(5);
                    // Expect 1 of the responses to be 429 Too Many Requests
                    expect(responses.filter(res => res.status === 429).length).to.equal(1);
                    done();
                }).catch(err => done(err));
        });
    })


    describe('Sliding Window Counter Redis',()=>{
        const requests = new Array(6).fill().map(() => chai.request(baseUrl).get('/slidingWinCounterRedis'));
        it('Should rate limit', (done) =>{
            // Make 6 requests all at once
            Promise.all(requests)
            .then(responses => {
                    // Expect 5 of the responses to be 200 OK
                    expect(responses.filter(res => res.status === 200).length).to.equal(5);
                    // Expect 1 of the responses to be 429 Too Many Requests
                    expect(responses.filter(res => res.status === 429).length).to.equal(1);
                    done();
                }).catch(err => done(err));
        });
    })

    describe('Rate Limiter Package',()=>{
        const requests = new Array(6).fill().map(() => chai.request(baseUrl).get('/rateLimiterPackage'));
        it('Should rate limit', (done) =>{
            // Make 6 requests all at once
            Promise.all(requests)
            .then(responses => {
                    // Expect 5 of the responses to be 200 OK
                    expect(responses.filter(res => res.status === 200).length).to.equal(5);
                    // Expect 1 of the responses to be 429 Too Many Requests
                    expect(responses.filter(res => res.status === 429).length).to.equal(1);
                    done();
                }).catch(err => done(err));
        });
    })
});