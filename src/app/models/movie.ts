export class movie
{
    title: string;
    director: string;
    cast: string;
    releasedate: string;

    constructor(title: string="",director:string="",cast:string="",releasedate:string="")
    {
        this.title=title;
        this.director=director;
        this.cast=cast;
        this.releasedate=releasedate;
    }
}