import './myLabel.css'

export interface MyLabelProps {
  /**
  * Tamaño del mensaje que se va a mostrar
  */
  size: 'normal' | 'h1' | 'h2' | 'h3';
  /**
  * El mensaje que se mostrará en la etiqueta
  */
  label: string;
  /**
  * El mensaje estará todo en mayusculas
  */
  allCaps?: boolean;
  /**
  * Colores del texto
  */
  color?: 'primary' | 'secondary' | 'tertiary';
  /**
  * Colores del texto personalizado
  */
  fontColor?: string;
}

export const MyLabel = ({
  size = 'normal',
  label = 'No Label',
  allCaps = false,
  color = 'primary',
  fontColor
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  )
}
