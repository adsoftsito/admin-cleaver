import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
import { map } from 'rxjs/operators';
import { Tutorial } from 'src/app/models/tutorial.model';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css']
})
export class TutorialsListComponent implements OnInit {
  tutorials?: Tutorial[];
  currentTutorial?: Tutorial;
  currentIndex = -1;
  title = '';
  programaInteres = '';
  periodo = '';
  facultad = '';
  n = 0;

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
    //this.retrieveTutorialsByProgram('gestion');
  }

  refreshList(): void {
    this.currentTutorial = undefined;
    this.currentIndex = -1;
    //this.retrieveTutorials();
  }

  retrieveTutorialsByProgram(): void {
    //lert(this.programaInteres)
    this.tutorialService.getByProgram(this.programaInteres, this.periodo, this.facultad).snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.tutorials = data;
      this.n = this.tutorials.length;
    });
  }


  retrieveTutorials(): void {
    this.tutorialService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.tutorials = data;
    });
  }

  setActiveTutorial(tutorial: Tutorial, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }
}