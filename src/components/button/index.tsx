import { createCx } from '../../utils/typedCx'
import rawStyles from './button.module.scss'
import type ButtonClassNames from './button.module.d.scss.ts'
interface ButtonProps {
  isPrimary: boolean
  isDisabled: boolean
}
const styles = rawStyles as unknown as typeof ButtonClassNames

const cx = createCx(styles)

const Button = ({ isPrimary, isDisabled }: ButtonProps) => {
  return (
    <div className={styles.container}>
      <button
        className={cx('btn-primary', {
          'btn-disabled': isDisabled,
          'btn-primary': isPrimary,
        })}
      >
        提交
      </button>
    </div>
  )
}

export default Button
