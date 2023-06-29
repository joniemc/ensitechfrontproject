import { Component, OnInit, ElementRef } from '@angular/core';
import { CharacterService } from '../../../services/characters/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit{

  characters: any[] = [];
  character: any= {};
  displayStyle = "none";
  temporaryPath = '';

  loading = false;

  constructor(private characterService: CharacterService,private elementRef: ElementRef){
    this.loading = true;
    this.characterService.getAllCharacters().subscribe((data:any)=>{
      this.characters = data;
      this.loading = false;
    });

  }

  openPopup(characterId:any) {
    this.loading = true;
    this.characterService.getCharacterById(characterId).subscribe((data:any)=>{
      this.character = data;
      this.temporaryPath = this.character.thumbnail.path +'.'+ this.character.thumbnail.extension;
      this.loading = false;
    });
    
    this.displayStyle = "block";
  }

  closePopup() {
    this.clean();
    this.displayStyle = "none";
  }

  clean(){
    this.loading = false;
    this.character = {};
    this.displayStyle = "none";
  }

  ngOnInit(): void {}
}
