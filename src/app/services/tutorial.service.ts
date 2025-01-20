import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
 

import { Tutorial } from '../models/tutorial.model';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  private dbPath = '/tutorials';

  tutorialsRef: AngularFirestoreCollection<Tutorial>;

  constructor(private db: AngularFirestore) {
    this.tutorialsRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Tutorial> {
    return this.tutorialsRef;
  }

  getByProgram(programaInteres : string): AngularFirestoreCollection<Tutorial> {
    //return this.db.collection(this.dbPath, ref => ref.where('programaInteres','==', programaInteres )).valueChanges()
    //return this.tutorialsRef.('programaInteres','==', programaInteres)
    return this.db.collection(this.dbPath, ref => ref.where('programaInteres', '==', programaInteres));
  }

  create(tutorial: Tutorial): any {
    return this.tutorialsRef.add({ ...tutorial });
  }

  update(id: string, data: any): Promise<void> {
    return this.tutorialsRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.tutorialsRef.doc(id).delete();
  }
}