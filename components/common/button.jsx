

const Button = ({name, style, ...rest}) => {
  return (
       <button type="button" className={`px-6 py-2 rounded-md ${style}`} {...rest}>
        {name}
       </button>
  )
}

export default Button
