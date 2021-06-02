import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCasePipe'
})
export class TitleCasePipePipe implements PipeTransform {
  transform(value: string, args?: any): any {
    if (!value) return null;
    else {
      return value
        .split(' ')
        .map((w, index) => (this.isPreposition(w) && index != 0) ? w.toLowerCase() : this.toTitleCase(w))
        .join(' ');
    }
  }

  private isPreposition(word: string): boolean {
    let prepositions = ["the", "a", "and", "with", "an", "of", "in"]
    return prepositions.includes(word.toLowerCase()) ? true : false
  }

  private toTitleCase(word: string): string {
    return word.substr(0,1).toUpperCase() + word.toLowerCase().substr(1)
  }
}
