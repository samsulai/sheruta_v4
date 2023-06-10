import MainLayout from '@/components/Layouts/MainLayout/MainLayout'
import React from 'react'
import InspectionsPage from './inspections-page'

export default function page() {
  return (
    <MainLayout centerComponent={<InspectionsPage />}></MainLayout>
  )
}
