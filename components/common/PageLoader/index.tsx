import { Loader } from '@mantine/core'

import * as styles from './styles.css'

const PageLoader = () => {
    return (
        <div className={styles.loader}>
            <Loader color='pink' />
        </div>
    )
}

export default PageLoader
