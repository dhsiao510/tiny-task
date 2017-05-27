/* You'll need to have MySQL running and your Node server running
 * for these tests to pass. */

const mysql = require('mysql');
const request = require('request');
const expect = require('chai').expect;

describe('User Table', () => {
  let dbConnection;

  beforeEach((done) => {
    dbConnection = mysql.createConnection({
      user: 'root',
      password: '',
      database: 'tiny_task'
    });
    dbConnection.connect();

    let tablename = 'users';

    //empty database before inserting
    dbConnection.query('truncate ' + tablename, done);
  });

  afterEach(() => {
    dbConnection.end();
  });

  it('Should insert new users to the DB', (done) => {
    request({
      method: 'POST',
      uri: 'http://127.0.0.1:8080/api/users',
      json: {
        auth_token: 'temp'      }
    }, () => {
      let queryString = 'SELECT * FROM users';
      let queryArgs = [];
      dbConnection.query(queryString, queryArgs, (err, results) => {
        if(err) { throw err; }
        expect(results.length).to.equal(1);
        done();
      });
    });
  });
});
//----------------------------------------------------------------------------------------------------------
// describe('User Profile Table', () => {
//   let dbConnection;

//   beforeEach((done) => {
//     dbConnection = mysql.createConnection({
//       user: 'root',
//       password: '',
//       database: 'tiny_task'
//     });
//     dbConnection.connect();

//     let tablename = 'user_profile';

//     //empty database before inserting
//     dbConnection.query('truncate ' + tablename, done);
//   });

//   afterEach(() => {
//     dbConnection.end();
//   });

//   it('Should insert new users to the DB', (done) => {
//     request({
//       method: 'POST',
//       uri: 'http://127.0.0.1:8080/api/users',
//       json: {
//         full_name: 'John Smith',
//         email: 'johnsmith@gmail.com',
//         user_status: 'working',
//         user_availability: true
//       }
//     }, () => {
//       let queryString = 'SELECT * FROM user_profile';
//       let queryArgs = [];
//       dbConnection.query(queryString, queryArgs, (err, results) => {
//         if (err) { throw err; }
//         expect(results.length).to.equal(1);
//         expect(results[0].full_name).to.equal('John Smith');

//         done();
//       });
//     });
//   });

//   it('Should output all users from the DB', (done) => {
//     request({
//       method: 'GET',
//       uri: 'http://127.0.0.1:8080/api/users',
//     }, () => {
//       let queryString = "INSERT INTO user_profile (id, full_name, email, user_status, user_availability) VALUES ('John Smith', 'johnsmith@gmail.com', 'working', true)";
//       let queryArgs = [];
//       dbConnection.query(queryString, queryArgs, (err, results) => {
//         if (err) { throw err; }
//         request('http://127.0.0.1:8080/api/users', (error, response, body) => {
//           let userInfo = JSON.parse(body);
//           expect(userInfo[0].full_name).to.equal('John Smith');
//           expect(userInfo[0].email).to.equal('johnsmith@gmail.com');
//           done();
//         });
//       });
//     });
//   });

//   it('Should update user profile on DB', (done) => {
//     request({
//       method: 'PUT',
//       uri: 'http://127.0.0.1:8080/users',
//       json: { user_availability: false }
//     }, () => {
//       let queryString = 'SELECT * FROM user_profile';
//       let queryArgs = [];
//       dbConnection.query(queryString, queryArgs, (err, response, body) => {
//         if (err) { throw err; };
//         let userInfo = JSON.parse(body);
//         expect(userInfo[0].user_availability).to.equal(false);
//         done();
//       });
//     });
//   });

//   it('Should delet user profile on DB', (done) => {
//     request({
//       method: 'DELETE',
//       uri: 'htp://127.0.0.1:8080/users',
//     }, () => {
//       let queryString = 'DELETE FROM user_profile WHERE full_name = John Smith and email = johnsmith@gmail.com';
//       let queryArgs = [];
//       dbConnection.query(queryString, queryArgs, (err, results) => {
//         if (err) { throw err; };
//         expect(results.length).to.equal(0);
//       });
//     });
//   });


// });
//----------------------------------------------------------------------------------------------------------
//describe('Teams Table', () => {
//   let dbConnection;
//  beforeEach(function(done) {
//   dbConnection = mysql.createConnection({
//       user: 'root',
//       password: '',
//       database: 'tiny_task'
//   });
//   dbConnection.connect();
//   let tablename = "teams";
//   dbConnection.query('truncate ' + tablename, done);
// });
// afterEach(function() {
//   dbConnection.end();
// });
//create new team
//retrieve all team
//update team
//delete team
//});
//----------------------------------------------------------------------------------------------------------
// describe('Projects Table', () => {
//   let dbConnection;
// beforeEach(function(done) {
//   dbConnection = mysql.createConnection({
//       user: 'root',
//       password: '',
//       database: 'tiny_task'
//   });
//   dbConnection.connect();
//   let tablename = "projects";
//   dbConnection.query('truncate ' + tablename, done);
// });
// afterEach(function() {
//   dbConnection.end();
// });
//create new project
//retrieve all project
//update project
//delete project
//});
//----------------------------------------------------------------------------------------------------------
// describe('Team Colors Table', () => {
//   let dbConnection;
// beforeEach(function(done) {
//   dbConnection = mysql.createConnection({
//       user: 'root',
//       password: '',
//       database: 'tiny_task'
//   });
//   dbConnection.connect();
//   let tablename = "team_colors";
//   dbConnection.query('truncate ' + tablename, done);
// });
// afterEach(function() {
//   dbConnection.end();
// });
//create new team_color
//retrieve all team_color
//update team_color
//delete team_color
//});
//----------------------------------------------------------------------------------------------------------
// describe('Announcements Table', () => {
//   let dbConnection;
// beforeEach(function(done) {
//   dbConnection = mysql.createConnection({
//       user: 'root',
//       password: '',
//       database: 'tiny_task'
//   });
//   dbConnection.connect();
//   let tablename = "announcements";
//   dbConnection.query('truncate ' + tablename, done);
// });
// afterEach(function() {
//   dbConnection.end();
// });
//create new announcement
//retrieve all announcement
//update announcement
//delete announcement
//});
//----------------------------------------------------------------------------------------------------------
// describe('Messages Table', () => {
//   let dbConnection;
// beforeEach(function(done) {
//   dbConnection = mysql.createConnection({
//       user: 'root',
//       password: '',
//       database: 'tiny_task'
//   });
//   dbConnection.connect();
//   let tablename = "messages";
//   dbConnection.query('truncate ' + tablename, done);
// });
// afterEach(function() {
//   dbConnection.end();
// });
//create new message
//retrieve all message
//update message
//delete message
//});
//----------------------------------------------------------------------------------------------------------
// describe('Phases Table', () => {
//   let dbConnection;
// beforeEach(function(done) {
//   dbConnection = mysql.createConnection({
//       user: 'root',
//       password: '',
//       database: 'tiny_task'
//   });
//   dbConnection.connect();
//   let tablename = "phases";
//   dbConnection.query('truncate ' + tablename, done);
// });
// afterEach(function() {
//   dbConnection.end();
// });
//create new phase
//retrieve all phase
//update phase
//delete phase
//});
//----------------------------------------------------------------------------------------------------------
// describe('Tasks Table', () => {
//   let dbConnection;
// beforeEach(function(done) {
//   dbConnection = mysql.createConnection({
//       user: 'root',
//       password: '',
//       database: 'tiny_task'
//   });
//   dbConnection.connect();
//   let tablename = "tasks";
//   dbConnection.query('truncate ' + tablename, done);
// });
// afterEach(function() {
//   dbConnection.end();
// });
//create new task
//retrieve all task
//update task
//delete task
//});
//----------------------------------------------------------------------------------------------------------
// describe('User Task Table', () => {
//   let dbConnection;
// beforeEach(function(done) {
//   dbConnection = mysql.createConnection({
//       user: 'root',
//       password: '',
//       database: 'tiny_task'
//   });
//   dbConnection.connect();
//   let tablename = "users_tasks";
//   dbConnection.query('truncate ' + tablename, done);
// });
// afterEach(function() {
//   dbConnection.end();
// });
//create new user_task
//retrieve all user_task
//update user_task
//delete user_task
//});
//----------------------------------------------------------------------------------------------------------
// describe('Shared Resource Table', () => {
//   let dbConnection;
// beforeEach(function(done) {
//   dbConnection = mysql.createConnection({
//       user: 'root',
//       password: '',
//       database: 'tiny_task'
//   });
//   dbConnection.connect();
//   let tablename = "shared_resource";
//   dbConnection.query('truncate ' + tablename, done);
// });
// afterEach(function() {
//   dbConnection.end();
// });
//create new shared_resource
//retrieve all shared_resource
//update shared_resource
//delete shared_resource
//});

