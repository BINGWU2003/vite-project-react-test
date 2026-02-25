import Button from './button'
interface HelloProps {
  name: string
}

const Hello = (props: HelloProps) => {
  return (
    <div>
      Hello {props.name}
      <Button isPrimary={true} isDisabled={false} />
    </div>
  )
}

export default Hello
