import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'initCap',
    standalone: true
})

export class InitCapPipe implements PipeTransform{
    transform(value: string, ...arg: any[]) :string {
        return value[0].toUpperCase() + value.slice(1).toLowerCase()
    }
}