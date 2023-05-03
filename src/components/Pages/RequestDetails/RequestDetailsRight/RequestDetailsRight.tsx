import React, { useState } from 'react'
import _Tab, { TabUIBaseProps } from '@/packages/ui/_Tab'
import SummaryTab from './Tabs/SummaryTab'
import DiscussionTab from './Tabs/DiscussionTab'

type Props = {}

export default function RequestDetailsRight({ }: Props) {
    const tabs: TabUIBaseProps[] = [
        {
            id: 'summary',
            name: 'Summary',
        },
        {
            id: 'discussion',
            name: 'Discussion',
        },
        {
            id: 'payment',
            name: 'Breakdown',
        }
    ];
    const [activeTab, setActiveTab] = useState<number>(0)
    return (
        <>
            <div className="bg-white w-screen lg:w-1/3 lg:max-h-screen lg:overflow-auto">
                <div className="bg-background shadow-sm h-12 border-b  sticky top-0">
                    <_Tab tabs={tabs} activeTab={tabs[activeTab].id} onTabChange={tab => setActiveTab(tab)} />
                </div>
                <div className="flex-1 px-5 pt-5  h-full- pb-20">
                    {[
                        <SummaryTab />,
                        <DiscussionTab />
                    ][activeTab]}
                </div>
                <div className="bg-white px-2 h-16 shadow-lg border-1 border-t lg:sticky fixed w-screen lg:w-full bottom-0 flex justify-between items-center">
                    <div className="flex flex-col">
                        <small className='text-dark_lighter'>Rent per room</small>
                        <figure className='font-bold text-lg'>N45,000,000</figure>
                    </div>
                    <button className='bg-dark text-white px-6 py-3 rounded-md' onClick={() => setActiveTab(tabs.length - 1)}>Reserve Room</button>
                </div>
            </div>
        </>
    )
}