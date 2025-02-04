import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import PageLoader from '@/components/common/PageLoader'
import { noticeService } from '@/lib/apis/notice'
import { NoticeModel } from '@/types/notice'

import * as styles from './styles.css'

const NoticeListBoard = () => {
    const [noticeList, setNoticeList] = useState<NoticeModel[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getNoticeListData = async () => {
            try {
                setIsLoading(true)

                const noticeList = await noticeService.getNoticeList()

                setNoticeList(noticeList)
            } catch (error) {
                console.error(error)
            } finally {
                setIsLoading(false)
            }
        }

        getNoticeListData()
    }, [])

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>공지사항</h2>

            {isLoading ? (
                <PageLoader />
            ) : (
                <div className={styles.noticeList}>
                    {noticeList.map((notice) => (
                        <Link key={notice.id} href={`/dashboard/notice/${notice.id}`} className={styles.noticeItem}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={notice.imageUrl || '/images/notice-1.jpg'}
                                    alt={notice.title}
                                    width={280}
                                    height={240}
                                    className={styles.image}
                                />
                            </div>

                            <div className={styles.contentsWrapper}>
                                <h3 className={styles.title}>{notice.title}</h3>
                                <p className={styles.description}>{notice.content}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default NoticeListBoard
