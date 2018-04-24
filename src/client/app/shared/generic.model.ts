export interface Generic {
 title: string;
 desc: string;
 img: string;
 images: [Image];
 days:[Day]
}
interface Image{
    title: string;
    desc: string;
    filename: string;
}
interface Day{
    title: string;
    desc: string;
}
