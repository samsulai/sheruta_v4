import React from 'react'
import EachRequest from './EachRequest'

type Props = {}

export default function FeedPage({ }: Props) {
    return (
        <>

            {
                new Array(40).fill(null).map(val => {
                    return <EachRequest />
                })
            }

        </>
    )
}