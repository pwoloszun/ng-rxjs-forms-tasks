import { OperatorFunction, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, startWith } from 'rxjs/operators';

// TODO
export function searchQuery(time: number, initialValue: string): OperatorFunction<string, string> {
  return (input$) => {
    return of('TODO');
  };
}
