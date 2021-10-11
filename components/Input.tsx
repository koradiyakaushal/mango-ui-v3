interface InputProps {
  type: string
  value: any
  onChange: (e) => void
  className?: string
  disabled?: boolean
  prefixClassname?: string
  error?: boolean
  [x: string]: any
}

const Group = ({ children, className = '' }) => {
  return <div className={`flex ${className}`}>{children}</div>
}

const Input = ({
  type,
  value,
  onChange,
  className,
  error,
  wrapperClassName = 'w-full',
  disabled,
  prefix,
  prefixClassName,
  suffix,
  ...props
}: InputProps) => {
  return (
    <div className={`flex relative ${wrapperClassName}`}>
      {prefix ? (
        <div
          className={`absolute left-2 top-1/2 transform -translate-y-1/2 ${prefixClassName}`}
        >
          {prefix}
        </div>
      ) : null}
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`${className} bg-th-bkg-1 pb-px px-2 flex-1 rounded-md h-10 text-th-fgd-1 w-full
          border ${
            error ? 'border-th-red' : 'border-th-fgd-4'
          } default-transition hover:border-th-primary 
          focus:border-th-primary focus:outline-none 
          ${
            disabled
              ? 'bg-th-bkg-3 cursor-not-allowed hover:border-th-fgd-4 text-th-fgd-3'
              : ''
          }
          ${prefix ? 'pl-7' : ''}`}
        disabled={disabled}
        {...props}
      />
      {suffix ? (
        <span className="absolute right-0 text-xs flex items-center pr-2 h-full bg-transparent text-th-fgd-4">
          {suffix}
        </span>
      ) : null}
    </div>
  )
}

Input.Group = Group

export default Input
