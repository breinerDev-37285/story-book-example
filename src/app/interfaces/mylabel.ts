export interface IMyLabel {
    /**
     * Este es el mensaje principal que se muestra en la etiqueta
     */
    label: string 
    /**
     * Este el tamaño que define el mensaje
     */
    size: tSize,
    /**
     * Capitaliza el texto
     */
    allCaps?: boolean,
    /**
     * Define el color del texto
     */
    color?: tColor,
    /**
     * Define un color personalizado
     */
    fontColor?: string
}

type tSize = 'normal' | 'small' | 'medium' | 'large'
type tColor = 'primary' | 'secondary'