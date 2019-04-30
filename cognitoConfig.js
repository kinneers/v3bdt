const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
const AWS = require('aws-sdk');
const request = require('request');
const jwkToPem = require('jwk-to-pem');
const jwt = require('jsonwebtoken');
global.fetch = require('node-fetch');

const poolData = {
    UserPoolId: "us-east-1_RX3L5Cy35", // Your user pool id here. Should be added to keys.   
    ClientId: "v13f23lpjv5143ko1rcoifj57" // Your client id here. Should be added to keys.
};
const pool_region = 'us-east-1';

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

//Register User
function RegisterUser(req, res) {
    const { email, password, authLevel } = req.body;
    const level = parseInt(authLevel);
    if (level < 1 && level > 5) {
        res.status(403).send("authLevel must be 1,2,3,4,5")
    }
    const attributeList = [];
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({ Name: "custom:authLevel", Value: level.toString() }));
    userPool.signUp(email, password, attributeList, null, function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        cognitoUser = result.user;
        console.log('user name is ' + cognitoUser.getUsername());
        res.status(200).json(cognitoUser);
    });
}

//Login
function Login(req, res) {
    const { email, password } = req.body;
    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
        Username: email,
        Password: password,
    });

    var userData = {
        Username: email,
        Pool: userPool
    };
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            console.log('access token + ' + result.getAccessToken().getJwtToken());
            console.log('id token + ' + result.getIdToken().getJwtToken());
            console.log('refresh token + ' + result.getRefreshToken().getToken());
            res.status(200).json(result);
        },
        onFailure: function (err) {
            console.log(err);
            res.status(400).json(err);
        },
    });
}

function Logout(req, res) {
    var cognitoUser = userPool.getCurrentUser();
    cognitoUser.signOut();
    res.json("Logged Out");
}

function confirmUser(req, res) {
    const { email, code } = req.body;
    var userData = {
        Username: email,
        Pool: userPool
    };
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.confirmRegistration(code, true, function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        if (result === "SUCCESS" || (err && err.code === "NotAuthorizedException" && err.message === "User cannot be confirm. Current status is CONFIRMED")) {
        Login(req, res);
    }
    });
}

// //Validate/verify JWT token
// function ValidateToken(token) {
//     request({
//         url: `https://cognito-idp.${pool_region}.amazonaws.com/${poolData.UserPoolId}/.well-known/jwks.json`,
//         json: true
//     }, function (error, response, body) {
//         if (!error && response.statusCode === 200) {
//             pems = {};
//             var keys = body['keys'];
//             for (var i = 0; i < keys.length; i++) {
//                 //Convert each key to PEM
//                 var key_id = keys[i].kid;
//                 var modulus = keys[i].n;
//                 var exponent = keys[i].e;
//                 var key_type = keys[i].kty;
//                 var jwk = { kty: key_type, n: modulus, e: exponent };
//                 var pem = jwkToPem(jwk);
//                 pems[key_id] = pem;
//             }
//             //validate the token
//             var decodedJwt = jwt.decode(token, { complete: true });
//             if (!decodedJwt) {
//                 console.log("Not a valid JWT token");
//                 return;
//             }

//             var kid = decodedJwt.header.kid;
//             var pem = pems[kid];
//             if (!pem) {
//                 console.log('Invalid token');
//                 return;
//             }

//             jwt.verify(token, pem, function (err, payload) {
//                 if (err) {
//                     console.log("Invalid Token.");
//                 } else {
//                     console.log("Valid Token.");
//                     console.log(payload);
//                     return true;
//                 }
//             });
//         } else {
//             console.log("Error! Unable to download JWKs");
//         }
//     });
// }

//Renew JWT tokens via refresh token. Usually id tokens retire after 1 hour of time, which is a hard limit for cognito. Using the refresh you obtained earlier you can get a new id_token, access_token with this rather than logging in again.
function renew() {
    const RefreshToken = new AmazonCognitoIdentity.CognitoRefreshToken({ RefreshToken: "your_refresh_token_from_a_previous_login" });

    const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    const userData = {
        Username: "sample@gmail.com",
        Pool: userPool
    };

    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.refreshSession(RefreshToken, (err, session) => {
        if (err) {
            console.log(err);
        } else {
            let retObj = {
                "access_token": session.accessToken.jwtToken,
                "id_token": session.idToken.jwtToken,
                "refresh_token": session.refreshToken.token,
            }
            console.log(retObj);
        }
    })
}

module.exports = { Login, Logout, confirmUser, RegisterUser }