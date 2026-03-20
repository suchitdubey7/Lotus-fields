interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  light?: boolean           // inverted colour on dark backgrounds
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}: SectionHeadingProps) {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align]

  const titleColor = light ? 'text-satva-cream' : 'text-satva-dark'
  const subtitleColor = light ? 'text-satva-fog' : 'text-satva-mid'

  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      {eyebrow && (
        <span className={`label ${light ? 'text-satva-gold' : 'text-satva-gold'} mb-3`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display text-display-md ${titleColor} text-balance`}>
        {title}
      </h2>
      {align === 'center' ? (
        <span className="block w-12 h-0.5 bg-satva-gold mt-4 mb-6 mx-auto" />
      ) : (
        <span className="gold-line" />
      )}
      {subtitle && (
        <p className={`text-base md:text-lg ${subtitleColor} max-w-2xl leading-relaxed`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
