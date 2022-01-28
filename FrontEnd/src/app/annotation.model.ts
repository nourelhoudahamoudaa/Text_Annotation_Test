export interface ITblAnnotation {
    AnnotationId?: string;
    Document?: string;
    Annotation?: string
}
export class TblAnnotation implements ITblAnnotation {
    constructor(
        public AnnotationId: string,
        public Document: string,
        public Annotation: string
    ){}
}