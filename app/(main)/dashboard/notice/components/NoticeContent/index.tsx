import Image from 'next/image'

import { noticeService } from '@/lib/apis/notice'
import { formatISODateToKorean } from '@/lib/utils/date'
import { NoticeModel } from '@/types/notice'

import * as styles from './styles.css'

const NoticeContent = async ({ noticeId }: { noticeId: string }) => {
    const noticeItem: NoticeModel = await noticeService.getNoticeItem(noticeId)
    const createdDate = noticeItem?.createdAt ? formatISODateToKorean(noticeItem.createdAt, false) : ''

    if (!noticeItem) return

    return (
        <>
            <div className={styles.header}>
                <h1 className={styles.title}>{noticeItem.title}</h1>
                <p className={styles.createdAt}>{createdDate}</p>
            </div>

            {noticeItem.imageUrl && (
                <div className={styles.imageWrapper}>
                    <Image
                        src={noticeItem.imageUrl || '/images/notice-1.jpg'}
                        alt={noticeItem.title}
                        width={300}
                        height={300}
                    />
                </div>
            )}

            <div className={styles.content}>{noticeItem.content}</div>
        </>
    )
}

export default NoticeContent
