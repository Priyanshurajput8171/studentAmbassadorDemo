import ApplicationProcess from '@/features/studentAmabassador/components/application'
import CTASection from '@/features/studentAmabassador/components/CtaButton'
import FaqSection from '@/features/studentAmabassador/components/faq'
import Hero from '@/features/studentAmabassador/components/hero'
import MeetTheBuilders from '@/features/studentAmabassador/components/meetBuilder'
import OSCodeInAction from '@/features/studentAmabassador/components/oscodeAction'
import Perks from '@/features/studentAmabassador/components/perks'
import ProgramSneakPeek from '@/features/studentAmabassador/components/programPeekSneak'

import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <Perks/>
      <ApplicationProcess/>
      <ProgramSneakPeek/>
      <MeetTheBuilders/>
      <OSCodeInAction/>
      <CTASection/>
      <FaqSection/>
    </div>
  )
}

export default page
