import admin from "firebase-admin";

const serviceAccount: any = {
  "type": "service_account",
  "project_id": "trip-tac-tone",
  "private_key_id": "00c296f85a21993fa335c06352e29f144b0fc888",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCpHYuQvS61yHjB\nZJY9eDPqmmS1bzJl230IvhIlC5SMKyknucUyBCMquTctjAyt7tluot5PB0CI3cUT\nH6Pmiy8KDVUIgHYWQJXEfXpRfO3NXW77Yubdl2O27VnZqmCfbmFZaabMaOEJLtiq\nR+9AQgnodYpwMeFBBDApz7b++J7dJFqmxZJun+Z4FhwjN2TGZJqcOi9A90obLsCV\njs6mpp4ngTTminOul3WnWBUOZNqb3Czl6z65wg02tQLasBb/mNDGPSjXJVRRgps7\nCgjiPYlNkKnH76uJGPups21KwoWfMHWY0DOIFb3ybBBFOsmB1GXNcCEonOh1k9WJ\nLFo0JCxnAgMBAAECggEAKq+YcLovthaZ1EatXWqfwBGkZd9hWzBhiPlg3xTjM9YZ\nFzveuFcvATOq58Y31Rc6rqBReKUd9u3zNnaACksLXoAq/HBgXhGDPAtn+nWMGJAC\n2VUHbNsvgha63SQSK2vTCpyOS34Vfxnh+mkZzKBem9w/Sz5r2ttRxNv3FrhucOa5\nCkCXMpaeWUhNBBJyYt5u6fh5vxD1HCnqZwyxLKI7baChZScjjbjrsDecIciVVgrJ\ncAKWzNTN1yMm6D0oXClYUK4P6YSeRet4+mDHKbxmZBvWkaoG64iBHrvEzZIB4QWO\nlko2dYhX6CV9d6yZ3di3COYA4ziZiBn1dIEI1mr7oQKBgQDaQsLbW9Q3N6I+jmJM\nOF+B4xCFH3VYe45SCVIbnngxoFqhT/xAdny8XKEoAHgfU9rexIKIg81Bv4QynD1w\nzzUP6354QnTW6zmQ87NyUVfAtOvFMS5Slucia5TRoIit9epDmMqz9ko1CqzVdo3F\nxiVUyxhXlkVqQ3asMtsUiCTsjwKBgQDGW2F/R9GFGOremNVeDS/f+6AHDe9ylMcc\nyjdPcL6oNGKrJUPAMKNCkz6sh6Ve+WLnRCrL0urhQaES7EVD1exF6ickWJLHlP6+\nG/qberZNTvnYJ3HDFevzMRst+6WX2q56HpbVxf9y++fgAi2YI4Rm0A/EOqITD8vr\nrLIRV2DeqQKBgQDJs8rJ14o94S8R6pmS4MH6kfHRZKoYNE7pJ2320jM3gX5f90Ah\n/p31oRDZm91m7iKlnisXp95HNYshDlyFZSgfZz1APAIoH8faWizqp5uWHlyIppOt\nhYFiwNMOCvJk+Y8eGxSwzRn0/MGOn/oS3LPhMbN0Ng4+TsxcBL+LsOmWpwKBgQCB\n0+fRliE1u2RnA6OL5peyQ5CvbViPJ3/XgSeIkGPJ1lfKax6YGX2SIqv/4tzDd/lb\nI0vbkpZ3jywtJYYEa201KZgq+uo/RW8i4U87GqtdmFaBOvgD10JTL435n973sINI\nnOLe0rRq/yP6g5JyJLURUhcvuazBSzKOc78tCIL32QKBgQDYCdTzgaDUucEIMmnR\nmq9V0atADSJZPeVh9e0rWo2AmTEkud2bSm72Hpz4+sbZ1O6Z3f9BmIka8raFYUMD\nIOdSq6hRKwdzJDyz8CAYkS2kvlRAFQj4l3cq5VU7CCObwpPbChHvgdrGIAk7Bp0j\nUWmEgBgXCLjhN9V2rzfJTiysFg==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-4wmcy@trip-tac-tone.iam.gserviceaccount.com",
  "client_id": "105929221246829363001",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-4wmcy%40trip-tac-tone.iam.gserviceaccount.com"
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://trip-tac-tone-default-rtdb.asia-southeast1.firebasedatabase.app"
});

const db = admin.firestore();
const cafesCollection = db.collection('Cafes');
const myplansCollection = db.collection('CreatePlan');

export { db, cafesCollection,myplansCollection }