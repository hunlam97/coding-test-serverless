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

  test() {
    return 'firebase on!';
  }

  verifyToken = (token: string) => {
    return firebaseAdmin.auth().verifyIdToken(token);
  };
}
