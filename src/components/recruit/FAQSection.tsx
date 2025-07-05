import { css } from '@styled-stytem/css'

import ChannelTalk from '@/assets/ChannelTalk.svg'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import SponsorChip from '@/components/ui/sponsor-chip'

const FAQSection = () => {
  return (
    <section
      className={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '78px',
        w: 'full',
        maxWidth: 'calc(1240px + 64px)',
        justifyContent: 'center',
        h: '100vh',
        px: '2rem',
        pos: 'relative'
      })}
    >
      <div
        className={css({
          display: 'flex',
          maxW: '37.5rem',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '40px'
        })}
      >
        <h1
          className={css({
            fontSize: { M: '2.25rem', XS: '1.125rem', XSDown: '1.125rem' },
            fontStyle: 'normal',
            fontWeight: '700',
            color: 'label.70'
          })}
        >
          FAQ
        </h1>
        <Accordion type="single" collapsible className={css({ gap: 5 })}>
          <AccordionItem value="item-1">
            <AccordionTrigger className={css({ fontSize: { S: '1.125rem', XS: '0.875rem', XSDown: '0.875rem' } })}>
              정기적으로 진행되는 일정이 있나요?
            </AccordionTrigger>
            <AccordionContent className={css({ fontSize: { S: '1rem', XS: '0.75rem', XSDown: '0.75rem' } })}>
              정기 세션은 매주 월요일 오후 7시부터 9시까지 진행됩니다.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className={css({ fontSize: { S: '1.125rem', XS: '0.875rem', XSDown: '0.875rem' } })}>
              정기 세션에서는 어떤 활동들을 진행하나요?
            </AccordionTrigger>
            <AccordionContent className={css({ fontSize: { S: '1rem', XS: '0.75rem', XSDown: '0.75rem' } })}>
              세션에서는 프로젝트 팀별 회의 및 스크럼, 스터디 등이 진행됩니다.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className={css({ fontSize: { S: '1.125rem', XS: '0.875rem', XSDown: '0.875rem' } })}>
              프로젝트 비용은 개인이 부담해야 하나요?
            </AccordionTrigger>
            <AccordionContent className={css({ fontSize: { S: '1rem', XS: '0.75rem', XSDown: '0.75rem' } })}>
              첫 학기 동안은 AWS의 프리티어를 사용하여 비용을 부담하지 않아도 됩니다. 두 번째 학기 부터는 프로젝트의
              성과도 및 참여도에 따라 서버비 지원 여부가 결정 됩니다.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className={css({ fontSize: { S: '1.125rem', XS: '0.875rem', XSDown: '0.875rem' } })}>
              활동 기간이 어떻게 되나요?
            </AccordionTrigger>
            <AccordionContent className={css({ fontSize: { S: '1rem', XS: '0.75rem', XSDown: '0.75rem' } })}>
              방학 포함 필수 활동 기간 1년입니다. 이후에는 자유롭게 활동할 수 있습니다.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className={css({ fontSize: { S: '1.125rem', XS: '0.875rem', XSDown: '0.875rem' } })}>
              DevKor에서 참여할 수 있는 대외 활동이 있나요?
            </AccordionTrigger>
            <AccordionContent className={css({ fontSize: { S: '1rem', XS: '0.75rem', XSDown: '0.75rem' } })}>
              채널톡 기업에서 후원을 받고 있어, 채널톡에서 개최하는 해커톤, 오피스 투어 등의 교류행사에 참여 가능합니다.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className={css({ fontSize: { S: '1.125rem', XS: '0.875rem', XSDown: '0.875rem' } })}>
              협업을 처음해보는 사람도 지원이 가능한가요?
            </AccordionTrigger>
            <AccordionContent className={css({ fontSize: { S: '1rem', XS: '0.75rem', XSDown: '0.75rem' } })}>
              협업을 처음해보는 사람도 지원이 가능합니다. 협업을 처음해보는 사람이라도 활동 중 익숙해질 수 있도록
              도와드리겠습니다.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className={css({ fontSize: { S: '1.125rem', XS: '0.875rem', XSDown: '0.875rem' } })}>
              다른 학회 또는 동아리와 병행이 가능하나요?
            </AccordionTrigger>
            <AccordionContent className={css({ fontSize: { S: '1rem', XS: '0.75rem', XSDown: '0.75rem' } })}>
              1년간의 밀도 높은 프로젝트 진행과 학업의 병행만으로 일의 양이 충분히 많아 권장이 되지는 않지만, 개인의
              능력과 선택에 달려 있다 생각합니다.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <footer
        className={css({
          display: 'flex',
          gap: 2,
          pos: 'absolute',
          bottom: 0,
          pb: { M: '4.375rem', XS: 7, XSDown: 7 }
        })}
      >
        <SponsorChip onClick={() => window.open('https://channel.io/ko/')}>
          Sponsored by <img src={ChannelTalk} alt="채널톡" />
        </SponsorChip>
      </footer>
    </section>
  )
}

export default FAQSection
