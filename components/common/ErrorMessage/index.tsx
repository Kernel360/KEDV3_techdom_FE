import { RoundButton } from '../Button/RoundButton'

import * as styles from './styles.css'

const ErrorMessage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.emoji}> 👾 </h1>
            <h3 className={styles.text}>
                데이터를 불러오지 못했습니다. <br /> 다시 시도해 주세요.
            </h3>

            <RoundButton
                size={'small'}
                color={'secondary'}
                className={styles.button}
                onClick={() => window.location.reload()}
            >
                새로고침
            </RoundButton>
        </div>
    )
}

export default ErrorMessage
