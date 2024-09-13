/**
 * TAG interface
 * @interface TAG
 */
export interface Tag<type> {
    /**
     * Type of the tag. 
     */
    type : string,
    /**
     * Name of the tag.
     */
    name : string,
    /**
     * Length of the entire tag, including all bytes.
     */
    byteLength : number,
    /**
     * Value or children of the tag.
     */
    value : type
}
