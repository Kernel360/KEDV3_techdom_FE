import Image from 'next/image'
import Link from 'next/link'

import { RoundButton } from '@/components/common/Button/RoundButton'

import * as styles from './not-found.styles.css'

const NotFoundPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <section>
                    <Image src={'/white-logo.png'} width={120} height={80} alt='박스로고' priority />
                    <h1 className={styles.heading}>Page Not Found</h1>
                </section>

                <section className={styles.bottomSection}>
                    <h3 className={styles.title}>페이지를 찾을 수 없습니다.</h3>
                    <p className={styles.message}>{`올바른 주소인지 다시 한 번 확인해주세요.`}</p>

                    <Link href='/dashboard' role='navigation' aria-label='홈으로 이동'>
                        <RoundButton
                            size='large'
                            color='primary'
                            className={styles.button}
                            aria-label='홈으로 돌아가기 버튼'
                        >
                            홈으로 돌아가기
                        </RoundButton>
                    </Link>
                </section>
            </div>
        </div>
    )
}

export default NotFoundPage
