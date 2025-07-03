
export abstract class AbstractBook {
    protected title: string;
    protected year: number;

    constructor(title: string, year: number) {
        this.title = title;
        this.year = year;
    }

    abstract getDescription(): string;
}
