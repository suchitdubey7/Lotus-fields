'use client'

import Link from 'next/link'
import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from 'react'

type Variant = 'primary' | 'primary-light' | 'outline' | 'outline-light' | 'gold' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: Variant
  size?: Size
  className?: string
  children: React.ReactNode
}

interface ButtonProps extends BaseProps, ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined
}

interface LinkProps extends BaseProps {
  href: string
  external?: boolean
}

type Props = ButtonProps | LinkProps

const variantClass: Record<Variant, string> = {
  primary:       'btn-primary',
  'primary-light': 'btn-primary-light',
  outline:       'btn-outline',
  'outline-light': 'btn-outline-light',
  gold:          'btn-gold',
  ghost:         'btn-ghost',
}

const sizeClass: Record<Size, string> = {
  sm: 'text-xs px-5 py-2.5',
  md: '',   // default — handled by global CSS
  lg: 'text-base px-10 py-4',
}

function buildClassName(variant: Variant = 'primary', size: Size = 'md', extra = '') {
  return [variantClass[variant], sizeClass[size], extra].filter(Boolean).join(' ')
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>((props, _ref) => {
  const { variant = 'primary', size = 'md', className = '', children, ...rest } = props

  const cls = buildClassName(variant, size, className)

  if ('href' in props && props.href !== undefined) {
    const { href, external, ...anchorRest } = props as LinkProps & { href: string }
    if (external) {
      return (
        <a
          href={href}
          className={cls}
          target="_blank"
          rel="noopener noreferrer"
          {...(anchorRest as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={cls} {...(anchorRest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    )
  }

  return (
    <button
      className={cls}
      ref={_ref as React.Ref<HTMLButtonElement>}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'
export default Button
