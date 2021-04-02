import { Injectable } from '@nestjs/common';
import firebaseAdmin from 'firebase-admin';
import serviceAccount from '../../../.cert/certification.json';

@Injectable()
export class FirebaseService {
  constructor() {
    firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert(
        serviceAccount as firebaseAdmin.ServiceAccount,
      ),
    });
  }

  getCollection = (path: string) => {
    return firebaseAdmin.firestore().collection(path);
  };

  test() {
    return 'firebase on!';
  }

  createUser = (email: string, password: string) => {
    return firebaseAdmin.auth().createUser({ email, password });
  };

  verifyToken = (token: string) => {
    return firebaseAdmin.auth().verifyIdToken(token);
  };
}
