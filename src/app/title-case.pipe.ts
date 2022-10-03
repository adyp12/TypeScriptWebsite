import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(title: string) {
    if(!title){
      return null;
    }
    
    title = title.toLowerCase();
    let prepositions: string[] = ['the', 'of', 'in', 'to', 'for', 'with'];
    let words = title.split(" ");
    let isPreposition = false;

    for(let i = 0; i<words.length; i++){
      for(let j = 0;j<prepositions.length; j++){
        if(words[i] == prepositions[j] && i!=0){
          isPreposition = true;
        }
      }

      if(!isPreposition){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      }

      isPreposition = false;
    }

    let formatted;
    for (let i = 0; i < words.length; i++) {
      if (i==0) {
        formatted = words[i];
      }
      else {
        formatted = formatted + " " + words[i];
      }
    }

    return formatted
  }
}
